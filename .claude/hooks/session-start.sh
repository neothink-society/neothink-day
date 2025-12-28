#!/bin/bash
# SessionStart hook: Preloads event context at session start
# Provides instant awareness of dates, offsets, and project state

echo "═══════════════════════════════════════════════════"
echo "NEOTHINK DAY PROJECT - SESSION CONTEXT"
echo "═══════════════════════════════════════════════════"
echo ""

# Current date
TODAY=$(date +%Y-%m-%d)
echo "Today: $TODAY"
echo ""

# Event dates and calculations
echo "───────────────────────────────────────────────────"
echo "UPCOMING EVENTS"
echo "───────────────────────────────────────────────────"

# December 2025 Event
DEC_EVENT="2025-12-06"
DEC_EVENT_END="2025-12-07"
if [[ "$(date -j -f %Y-%m-%d $DEC_EVENT +%s 2>/dev/null || date -d $DEC_EVENT +%s)" -ge "$(date +%s)" ]]; then
    DAYS_TO_DEC=$(( ( $(date -j -f %Y-%m-%d $DEC_EVENT +%s 2>/dev/null || date -d $DEC_EVENT +%s) - $(date +%s) ) / 86400 ))
    echo "Dec 2025: December 6-7, 2025 ($DAYS_TO_DEC days away)"
else
    echo "Dec 2025: December 6-7, 2025 (COMPLETED)"
fi

# January 2026 Event
JAN_EVENT="2026-01-24"
JAN_EVENT_END="2026-01-25"
DAYS_TO_JAN=$(( ( $(date -j -f %Y-%m-%d $JAN_EVENT +%s 2>/dev/null || date -d $JAN_EVENT +%s) - $(date +%s) ) / 86400 ))
echo "Jan 2026: January 24-25, 2026 ($DAYS_TO_JAN days away)"

# Key dates for Jan 2026 sequence
echo ""
echo "───────────────────────────────────────────────────"
echo "JAN 2026 - KEY SEQUENCE DATES"
echo "───────────────────────────────────────────────────"
echo "29-day email:  Dec 26, 2025 (9am Eastern) → Offset: -29d 2h"
echo "14-day email:  Jan 10, 2026 (9am Eastern) → Offset: -14d 2h"
echo "7-day email:   Jan 17, 2026 (9am Eastern) → Offset: -7d 2h"
echo "3-day email:   Jan 21, 2026 (9am Eastern) → Offset: -3d 2h"
echo "1-day email:   Jan 23, 2026 (9am Eastern) → Offset: -1d 2h"
echo "Day-of:        Jan 24, 2026 (8am Pacific / 11am Eastern) → T=0"
echo ""

# Project structure summary
echo "───────────────────────────────────────────────────"
echo "PROJECT STRUCTURE"
echo "───────────────────────────────────────────────────"
cd /Users/avolve/dev/active/neothink-day

# Count files per event
DEC_COUNT=$(find html-emails/templates/dec2025 -name "*.html" 2>/dev/null | wc -l | tr -d ' ')
JAN_COUNT=$(find html-emails/templates/jan2026 -name "*.html" 2>/dev/null | wc -l | tr -d ' ')

echo "Dec 2025 templates: $DEC_COUNT HTML files"
echo "Jan 2026 templates: $JAN_COUNT HTML files"
echo ""

# GHL domains
echo "───────────────────────────────────────────────────"
echo "GHL CONFIGURATION"
echo "───────────────────────────────────────────────────"
echo "Dec 2025 URL: neothinkevent.com"
echo "Jan 2026 URL: neothinkday.com"
echo "Event start:  8:00 AM Pacific / 11:00 AM Eastern"
echo ""

# Quick commands reminder
echo "───────────────────────────────────────────────────"
echo "AVAILABLE COMMANDS"
echo "───────────────────────────────────────────────────"
echo "/validate [path]  - Check HTML for GHL compatibility"
echo "/ghl-prep [file]  - Prepare HTML for GHL copy-paste"
echo "/sms-check [path] - Check SMS for carrier compliance"
echo "═══════════════════════════════════════════════════"
