#!/bin/bash
# PostToolUse hook: Validates HTML templates after Write/Edit
# Runs automatically when HTML files are modified

FILE_PATH="$CLAUDE_TOOL_INPUT_FILE_PATH"

# Only process HTML files
if [[ ! "$FILE_PATH" == *.html ]]; then
    exit 0
fi

# Skip archived files
if [[ "$FILE_PATH" == *"_archive"* ]]; then
    exit 0
fi

ERRORS=()
WARNINGS=()

# Check 1: Extract and validate GHL variables
VARIABLES=$(grep -oE '\{\{[^}]+\}\}' "$FILE_PATH" 2>/dev/null | sort -u)

if [[ -n "$VARIABLES" ]]; then
    while IFS= read -r var; do
        # Valid patterns
        if [[ "$var" =~ ^\{\{contact\. ]] || \
           [[ "$var" =~ ^\{\{custom_values\. ]] || \
           [[ "$var" =~ ^\{\{trigger_link\. ]] || \
           [[ "$var" =~ ^\{\{location\. ]]; then
            continue
        else
            WARNINGS+=("Unknown variable: $var")
        fi
    done <<< "$VARIABLES"
fi

# Check 2: Verify no URL shorteners
if grep -qiE '(bit\.ly|tinyurl|t\.co|goo\.gl|ow\.ly)' "$FILE_PATH" 2>/dev/null; then
    ERRORS+=("URL shortener detected - use full URLs only")
fi

# Check 3: Check for broken/placeholder URLs
if grep -qE 'https?://example\.com|https?://placeholder|REPLACE_ME|TODO' "$FILE_PATH" 2>/dev/null; then
    WARNINGS+=("Placeholder URL or TODO found")
fi

# Check 4: Verify preheader exists for emails
if [[ "$FILE_PATH" == *"html-emails"* ]]; then
    if ! grep -q 'preheader\|preview-text' "$FILE_PATH" 2>/dev/null; then
        WARNINGS+=("No preheader/preview-text found in email")
    fi
fi

# Output results
if [[ ${#ERRORS[@]} -gt 0 ]] || [[ ${#WARNINGS[@]} -gt 0 ]]; then
    echo "───────────────────────────────────────"
    echo "TEMPLATE VALIDATION: $(basename "$FILE_PATH")"
    echo "───────────────────────────────────────"

    for err in "${ERRORS[@]}"; do
        echo "✗ ERROR: $err"
    done

    for warn in "${WARNINGS[@]}"; do
        echo "⚠ WARNING: $warn"
    done

    # Show detected variables
    if [[ -n "$VARIABLES" ]]; then
        echo ""
        echo "GHL Variables detected:"
        echo "$VARIABLES" | sed 's/^/  /'
    fi
fi
