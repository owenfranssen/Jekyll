---
layout: default
---
<section class="container event" markdown="1">
  <h1>{{ page.title }}</h1>

  <div class="row">
    <div class="col-12">
      <div class="dates {{ page.event.category | join: ' ' }}">
        <dates>
          <date class="start">
            <day>{{ page.event.start_date | date: "%d" }}</day>
            <month>{{ page.event.start_date | date: "%b" }}</month>
          </date>
          {% if page.event.end_date %}
            {% assign startmonth = page.event.start_date | date: "%b" %}
            {% assign endmonth = page.event.end_date | date: "%b" %}
            <date class="end">
              <day>{{ page.event.end_date | date: "%d" }}</day>
              {% if startmonth != endmonth %}
                <month>{{ endmonth }}</month>
              {% endif %}
            </date>
          {% endif %}
        </dates>
        <header>
          <h2>{{ page.title }}</h2>
          <p>{{ page.event.venue.name }}, {{ page.event.venue.address }}</p>
        </header>
        <share>
          <!-- GCal end date must be +1 lat event day -->
          {% assign end = page.event.end_date | date: "%s" | plus: 86400 | date: "%Y%m%d" %}
          <a href="https://calendar.google.com/calendar/r/eventedit?text={{ page.title }}&dates={{ page.event.start_date | date: "%Y%m%d" }}/{{ end }}&details={{ page.event.venue.name }}&location={{ page.event.venue.address }}&trp=false&sprop=website:https://emerald-mtb.com/w&ctz=Atlantic/Azores&sf=true" target="_blank" title="Add this event to your Google Calendar"><i class="fab fa-google"></i></a>
          <!-- <i class="fab fa-apple"></i> -->
        </share>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-4 order-md-2">
      {% if page.image %}
      <img src="/images/{{ page.image }}" alt="{{ page.title }}" class="w-100 mb-4" />
      {% endif %}

      {% if page.event.category %}
        <div class="card">
          <h5>Event Type</h5>
          <p>
          {%- for category in page.event.category -%}
            {{ category | capitalize }}
            {%- unless forloop.last -%},&nbsp;{%- endunless -%}
          {% endfor %}
          </p>
        </div>
      {% endif %}

      {% if page.event.venue %}
        <div class="card">
          <h5>Venue</h5>
          <p>{{ page.event.venue.name }}</p>
          <p><i>{{ page.event.venue.address }}</i></p>
          {% if page.event.venue.website %}
            <h6>Website</h6>
            <p><a href="{{ page.event.venue.website }}" target="_blank">{{ page.event.venue.website }}</a></p>
          {% endif %}
        </div>
      {% endif %}
      
      {% if page.event.series %}
        <div class="card">
          <h5>Series</h5>
          <p><a href="{{ page.event.series.website }}" target="_blank">{{ page.event.series.name }}</a></p>
        </div>
      {% endif %}
      
      {% if page.event.organiser %}
        <div class="card">
          <h5>Organiser</h5>
          <p><a href="{{ page.event.organiser.website }}" target="_blank">{{ page.event.organiser.name }}</a></p>
        </div>
      {% endif %}
    </div>
    
    <div class="col-12 col-md-8 event-content">
      {{ content }}
      
      {% if page.event.venue.location %}
        <div id="map"></div>
        <script>
        mapboxgl.accessToken = 'pk.eyJ1Ijoib3dlbmZyYW5zc2VuIiwiYSI6ImNpbDg0MThiYjAwMW52eWtxNHgxYjJmNjUifQ.3vJMwWdZxu5LYgJKGtXqjQ';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v9',
        center: [ {{ page.event.venue.location.longitude }}, {{ page.event.venue.location.latitude }} ],
        zoom: {% if page.event.venue.location.map_zoom %} {{ page.event.venue.location.map_zoom }} {% else %} 13 {% endif %},
        });
        map.addControl(new mapboxgl.NavigationControl(), "bottom-left");
        var marker = new mapboxgl.Marker()
          .setLngLat([ {{ page.event.venue.location.longitude }}, {{ page.event.venue.location.latitude }} ])
          .addTo(map);
        </script>
      {% endif %}
    </div>
  </div>
  
  {%- unless page.noads == true -%}
    <section class="container-fluid my-4 p-0 advert banner bg-light">
      {% ads {"adslot": "4141441050"} %}
    </section>
  {%- endunless -%}
  
  {%- if page.comments -%}
    {%- include comments.html -%}
  {%- endif -%}  
  
  <!-- use post tags for better relations -->
  <relatedposts class="row my-4">
    <div class="col-12"><h4>Other Events You May Enjoy</h4></div>
      
    {% assign maxRelated = 3 %}
    {% assign minCommonTags = 2 %}
    {% capture now %}{{ 'now' | date: "%s" }}{% endcapture %}
    
    {% assign matchedVenues = '' | split: '' %}
    {% assign matchedSeries = '' | split: '' %}
    {% assign matchedOrganiser = '' | split: '' %}
    {% assign matchedCounty = '' | split: '' %}
    {% assign matchedCountry = '' | split: '' %}
    {% assign matchedCategories = '' | split: '' %}

    {% for post in site.events %}
      {% assign sameTagCount = 0 %}
      {% assign commonTags = '' %}
      {% assign end = post.event.end_date | date: "%s" %}
      {% unless end %}
        {% assign end = post.event.start_date | date: "%s" %}
      {% endunless %}

      {% if end >= now and post.url != page.url %}
        {% if post.event.venue.name == page.event.venue.name %}
          {% assign sameTagCount = sameTagCount | plus: 1 %}
          {% capture tagmarkup %} <span class="label label-default">{{ post.event.venue.name }}</span> {% endcapture %}
          {% assign commonTags = commonTags | append: tagmarkup %}
          {% assign matchedVenues = matchedVenues | push: post %}
          {% continue %}
        {% endif %}
            
        {% if page.event.venue.county %}
          {% if post.event.venue.county == page.event.venue.county %}
            {% assign sameTagCount = sameTagCount | plus: 1 %}
            {% assign matchedCounty = matchedCounty | push: post %}
            {% continue %}
          {% endif %}
        {% endif %}

        {% if page.event.series.name %}
          {% if post.event.series.name == page.event.series.name %}
            {% assign sameTagCount = sameTagCount | plus: 1 %}
            {% assign matchedSeries = matchedSeries | push: post %}
            {% continue %}
          {% endif %}
        {% endif %}
        
        {% if page.event.organiser.name %}
          {% if post.event.organiser.name == page.event.organiser.name %}
            {% assign sameTagCount = sameTagCount | plus: 1 %}
            {% assign matchedOrganiser = matchedOrganiser | push: post %}
            {% continue %}
          {% endif %}
        {% endif %}
          
        {% if post.event.venue.country == page.event.venue.country %}
          {% assign sameTagCount = sameTagCount | plus: 1 %}
          {% assign matchedCountry = matchedCountry | push: post %}
          {% continue %}
        {% endif %}

        {% if post.event.venue.country == page.event.venue.country %}
          {% for category in page.event.category %}
            {% if post.event.category contains category %}
              {% assign sameTagCount = sameTagCount | plus: 1 %}
              {% assign matchedCategories = matchedCategories | push: post %}
            {% endif %}
          {% endfor %}
        {% endif %}
      {% endif %}
    {% endfor %}
    
    {% assign related = matchedVenues | concat: matchedCounty | concat: matchedSeries | concat: matchedOrganiser | concat: matchedCountry | concat: matchedCategories %}

    {% assign maxRelatedCounter = 0 %}
    {% for post in related %}
      <div class="col-12 col-md-4 feature related-event" data-match="{{ sameTagCount }} {{ maxRelatedCounter }}">
        <a href="{{ post.url | prepend: site.baseurl }}">
          <span class="post-content {{ post.event.category | join: ' ' }}">
            <small class="post-meta">
              {{ post.event.category | join: ', ' }} |
              {% if post.event.venue.county %}{{ post.event.venue.county }}
              {% elsif post.event.venue.country %}{{ post.event.venue.country }}
              {% endif %}
            </small>
            <h4 class="post-title">{{ post.title }}</h4>
            <span class="post-meta">
              {{ post.event.start_date | date: "%d %B, %Y" }} |              
              {{ post.event.venue.name }}
            </span>
          </span> 
        </a>
      </div>
      
      {% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
      {% if maxRelatedCounter >= maxRelated %}
        {% break %}
      {% endif %}
    {% endfor %}

  </relatedposts>
  
</section>
