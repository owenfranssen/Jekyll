---
layout: default-nc
title: Calendar of MTB Events in Ireland
custom-js: true
seo: 
  title: Mountain Bike Events Calendar by Emerald MTB
  description: A calendar of mountain biking events in Ireland and internationally
image: Calendar-2020-Mockup.jpg
short_url: bit.ly/mtb-calendar
regenerate: true
---


<section class="container page calendar" markdown="0">
  
  {% capture now-unix-seconds %}{{ 'now' | date: '%s' }}{% endcapture %}
  {% assign year = "now" | date: "%Y" %}

  <h1 markdown="1">Calendar of Mountain Biking Events in Ireland</h1>
  
  <!-- event type colour legend -->

  <div class="row my-5 filters">
    <div class="col-12">
      <h2>Filter Events:</h2>
    </div>
    <div class="col-12">
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary cross-country selected" data-select="cross-country"><i class="fas fa-check"></i> XC</button>
        <button type="button" class="btn btn-outline-secondary enduro selected" data-select="enduro"><i class="fas fa-check"></i>Enduro</button>
        <button type="button" class="btn btn-outline-secondary downhill selected" data-select="downhill"><i class="fas fa-check"></i>Downhill</button>
        <button type="button" class="btn btn-outline-secondary charity selected" data-select="charity"><i class="fas fa-check"></i>Charity Events</button>
        <button type="button" class="btn btn-outline-secondary demo-day selected" data-select="demo-day"><i class="fas fa-check"></i>Demo Days</button>

        <button type="button" class="btn btn-outline-secondary international selected"><i class="fas fa-check"></i>International Events</button>
      </div>
    </div>
  </div>

  <div class="row my-5 events">
    <ul class="col-12">
    {% assign events = site.events | sort: 'event.start_date' %}
    {% assign month = "now" | date: "%b" %}
    {% assign monthformat = "now" | date: "%B, %Y" %}
    <li class="event-month"><h2 class="col-12">{{ monthformat }}</h2></li>
    
    {% for event-item in events %}
      {% assign eventyear = event-item.event.start_date | date: "%Y" %}
      {% if eventyear < year %}
        {% continue %}
      {% endif %}
      {% assign startmonth = event-item.event.start_date | date: "%b" %}
      {% unless month == startmonth %}
        {% assign month = event-item.event.start_date | date: "%b" %}
        {% assign monthformat = event-item.event.start_date | date: "%B, %Y" %}
        <li class="event-month"><h2 class="col-12">{{ monthformat }}</h2></li>
      {% endunless %}
      <li class="event-item {{ event-item.event.category | join: ' ' }} {% if event-item.event.cancelled == 1 %}cancelled{% endif %} hidden" 
            data-event-start="{{ event-item.event.start_date }}" 
            data-event-end="{{ event-item.event.end_date }}">
        <a href="{{ event-item.url | prepend: site.baseurl }}">
          <dates>
            <date class="start">
              <day>{{ event-item.event.start_date | date: "%d" }}</day>
              <month>{{ startmonth }}</month>
            </date>
            {% if event-item.event.end_date %}
              {% assign endmonth = event-item.event.end_date | date: "%b" %}
              <date class="end">
                <day>{{ event-item.event.end_date | date: "%d" }}</day>
                {% if startmonth != endmonth %}
                  <month>{{ endmonth }}</month>
                {% endif %}
              </date>
            {% endif %}
          </dates>
          <header>
            <h2>{{ event-item.title }}</h2>
            <p>{{ event-item.event.venue.name }}, {{ event-item.event.venue.address }}</p>
          </header>
        </a>
      </li>
    {% endfor %}
    </ul>
  </div>
  
  <p><a href="/contact/">If you are organising a mountain biking event in Ireland, north or south, please let us know the details and we will be happy to add it to this calendar. Contact us here.</a></p>

</section>

{% include foot.md %}
{% include global-js.md %}

<script>
const today = moment().startOf("day");
$(() => {
  $('.event-item').each( (i, elem) => {
    let eventStart = moment($(elem).data('event-start'));
    let eventEnd = $(elem).data('event-end').length > 0 ? moment($(elem).data('event-end')) : false;
    if(!(eventEnd ? eventEnd.isBefore(today) : eventStart.isBefore(today))) {
      $(elem).removeClass("hidden");
    } else {
      $(elem).remove();
    }
  });
  
  $('.event-month').each( (i, elem) => {
    if($(elem).next().hasClass("event-month")) $(elem).remove();
  });

  $('.filters [data-select]').on('click', (e) => {
    console.log(e.currentTarget);

    $(e.currentTarget).toggleClass('selected')
      .find('.fas').toggleClass('fa-check', $(e.currentTarget).hasClass('selected'))
        .toggleClass('fa-times', !$(e.currentTarget).hasClass('selected'));
    
    toggleEvents();
  });

  $('.filters .international').on('click', (e) => {
    $(e.currentTarget).toggleClass('selected')
      .find('.fas').toggleClass('fa-check', $(e.currentTarget).hasClass('selected'))
        .toggleClass('fa-times', !$(e.currentTarget).hasClass('selected'));

    toggleEvents();
  });
});

function toggleEvents() {
  const international = $('.filters .international').hasClass('selected');
  let selection = [];
  $('.filters .selected[data-select]').each( (i, btn) => {
    selection.push('.'+$(btn).data('select'));
  });

  selection = selection.join(', ');

  if(international) {
    $('.events .event-item:hidden').filter(selection).show();
    $('.events .event-item:not(:hidden)').not(selection).hide();
  } else {
    $('.events .event-item.international').hide();
    $('.events .event-item:hidden').not('.international').filter(selection).show();
    $('.events .event-item:not(:hidden)').not('.international').not(selection).hide();
  }
}
</script>