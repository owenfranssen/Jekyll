---
# .ics calendar event template
---

BEGIN:VCALENDAR
VERSION:2.0
METHOD:PUBLISH
PRODID:-//Microsoft Corporation//Outlook 11.0 MIMEDIR//EN
BEGIN:VEVENT
UID:{{ post.date | date: "%Y%m%d" }}@emerald-mtb.com
DTSTAMP:{{ post.date | date: "%Y%m%d" }}T170000Z
DTSTART:{{ post.date | date: "%Y%m%d" }}T170000Z
DTEND:{{ post.date | date: "%Y%m%d" }}T190000Z
SUMMARY:{{ post.title }}
LOCATION:{{ post.venue.name }}
DESCRIPTION:{{ post.excerpt }}
END:VEVENT
END:VCALENDAR
