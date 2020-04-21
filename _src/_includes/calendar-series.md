{% assign event_series = "" | split: ',' %}
{% assign events = site.events | sort: 'event.start_date' %}

{% capture now-unix-seconds %}{{ 'now' | date: '%s' }}{% endcapture %}
{% assign year = "now" | date: "%Y" %}
{% assign month = "now" | date: "%b" %}
{% assign date = "now" | date: "%Y%m" %}

{% for event_item in events %}
  {% assign eventdate = event_item.event.start_date | date: "%Y%m" %}

  {% unless eventdate < date %}
    {% unless event_series contains event_item.event.series.name %}
      {{ event_series | push: event_item.event.series.name | strip }}
    {% endunless %}
  {% endunless %}

{% endfor %}

{{ event_series | uniq | join: ',' }}