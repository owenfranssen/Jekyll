---
layout: default
class: home
title: Emerald MTB Mountain biking in Ireland
schema:
  organization: true
seo: 
  description: Riding mountain bikes, exploring mountain trails, meeting people in Ireland!
regenerate: true
---
<section class="container home px-0" markdown="0">
  <div class="row">
    {% assign counter = 0 %}
    {% assign displayed = 0 %}
    {%- for post in site.posts -%}
      {% unless post.categories contains 'Twelveweeks' or displayed >= 4 %}
        {% if displayed < 1 %}
          <div class="col-12 mb-2 mb-lg-4 text-center feature main">
            <a href="{{ post.url | prepend: site.baseurl }}" style="background-image: url(/images/posts/1080x450/{{ post.image }})">
              <span class="post-content text-left">
                <small class="post-meta">{{ post.categories | join: ', ' }}</small>
                <h4 class="post-title">{{ post.title }} <small>{{ post.subheading }}</small></h4>
              </span>
            </a>
          </div>
        {% else %}
          <div class="col-12 col-lg-4 mb-2 mb-lg-0 feature secondary">
            <a href="{{ post.url | prepend: site.baseurl }}" style="background-image: url(/images/posts/360x250/{{ post.image }})">
              <span class="post-content">
                <small class="post-meta">{{ post.categories | join: ', ' }}</small>
                <h4 class="post-title">{{ post.title }} <small>{{ post.subheading }}</small></h4>
              </span>
            </a>
          </div>
        {% endif %}
        {% assign displayed = displayed | plus: 1 %}
      {% endunless %}
      {% assign counter = counter | plus: 1 %}
    {%- endfor -%}
  </div> <!-- /.row -->
</section>

<section class="container-fluid py-0 bg-dark videos">
  <div class="row py-5">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="text-white"><a href="{{ site.youtubeurl }}"><i class="fab fa-youtube"></i> Latest Videos</a></h3></div>
        {%- assign videoposts = site.posts | where_exp: "post", "post.categories contains 'Videos'" -%}
        {%- for video in videoposts limit:4 -%}
          <div class="col-12 col-lg-3">
            <a href="{{ video.url | prepend: site.baseurl }}">
              <img src="/images/posts/270x145/{{ video.image }}" alt="{{ video.title }}" />
              <h6 class="mt-2 text-center text-white">{{ video.title }}</h6>
            </a>
          </div>
        {%- endfor -%}
      </div> <!-- /.row -->
    </div>
  </div> <!-- /.row -->

  <div class="row bg-mid">
    <div class="container">
      <div class="row">
        <div class="col-12 py-3 text-center">
          <a class="heading text-white" href="{{ site.youtubeurl }}">Watch more videos on the Emerald MTB YouTube Channel <i class="fas fa-arrow-right text-small"></i></a>
        </div>
      </div> <!-- /.row -->
    </div>
  </div> <!-- /.row -->
</section>

<section class="container-fluid events calendar featuredcategory" markdown="0">
  <div class="row">
    <div class="container">
      <div class="row px-3">
        <div class="col-12 mt-4 mt-lg-0">
          <h3>Upcoming Events</h3>
        </div>
        {% capture now-unix-seconds %}{{ 'now' | date: '%s' }}{% endcapture %}
        {% assign today = "now" | date: "%s" %}
        {% assign eventcount = 0 %}
        {% assign events = site.events | sort: 'event.start_date' %}
        {% for post in events %}
          {% assign startdate = post.event.start_date | date: "%s" %}
          {% assign startmonth = post.event.start_date | date: "%b" %}
          {% if today <= startdate and post.event.cancelled != 1 %}
            <div class="col-12 col-md-4">
              <div class="event-item {{ post.event.category | join: ' ' }} {% if post.event.cancelled == 1 %}cancelled{% endif %}">
                <a href="{{ post.url | prepend: site.baseurl }}">
                  <dates>
                    <date class="start">
                      <day>{{ post.event.start_date | date: "%d" }}</day>
                      <month>{{ post.event.start_date | date: "%b" }}</month>
                    </date>
                    {% if post.event.end_date %}
                      {% assign endmonth = post.event.end_date | date: "%b" %}
                      <date class="end">
                        <day>{{ post.event.end_date | date: "%d" }}</day>
                        {% if startmonth != endmonth %}
                          <month>{{ endmonth }}</month>
                        {% endif %}
                      </date>
                    {% endif %}
                  </dates>
                  <header>
                    <h2>{{ post.title }}</h2>
                    <p>
                      {%- for category in post.event.category -%}
                        <b><i>{{ category | capitalize }}</i></b>
                        {%- unless forloop.last -%},&nbsp;{%- endunless -%}
                      {% endfor %}
                      | {{ post.event.venue.name }}, {{ post.event.venue.address }}
                    </p>
                  </header>
                </a>
              </div>
            </div>
            {% assign eventcount = eventcount | plus: 1 %}
            {% if eventcount >= 3 %}
            {% break %}
            {% endif %}
          {% endif %}
        {% endfor %}
        <div class="col-12 mt-4 py-3 bg-mid text-center">
          <a class="heading text-white" href="/calendar/">All MTB Events <i class="fas fa-arrow-right text-small"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- 
<section class="container-fluid events calendar" markdown="0">
  <div class="row">
    <div class="container">
      <div class="row px-3">
        <div class="col-12 mt-4 mt-lg-0">
          <h3>Upcoming Events</h3>
        </div>
        {% capture now-unix-seconds %}{{ 'now' | date: '%s' }}{% endcapture %}
        {% assign today = "now" | date: "%s" %}
        {% assign eventcount = 0 %}
        {% assign events = site.events | sort: 'event.start_date' %}
        {% for post in events %}
          {% assign startdate = post.event.start_date | date: "%s" %}
          {% assign startmonth = post.event.start_date | date: "%b" %}
          {% if today <= startdate %}
            <div class="col-12 event-item {{ post.event.category | join: ' ' }}">
              <a href="{{ post.url | prepend: site.baseurl }}">
                <dates>
                  <date class="start">
                    <day>{{ post.event.start_date | date: "%d" }}</day>
                    <month>{{ post.event.start_date | date: "%b" }}</month>
                  </date>
                  {% if post.event.end_date %}
                    {% assign endmonth = post.event.end_date | date: "%b" %}
                    <date class="end">
                      <day>{{ post.event.end_date | date: "%d" }}</day>
                      {% if startmonth != endmonth %}
                        <month>{{ endmonth }}</month>
                      {% endif %}
                    </date>
                  {% endif %}
                </dates>
                <header>
                  <h2>{{ post.title }}</h2>
                  <p>
                    {%- for category in post.event.category -%}
                      <b><i>{{ category | capitalize }}</i></b>
                      {%- unless forloop.last -%},&nbsp;{%- endunless -%}
                    {% endfor %}
                    | {{ post.event.venue.name }}, {{ post.event.venue.address }}
                  </p>
                </header>
              </a>
            </div>
            {% assign eventcount = eventcount | plus: 1 %}
            {% if eventcount >= 3 %}
            {% break %}
            {% endif %}
          {% endif %}
        {% endfor %}
        <div class="col-12 mt-4 py-3 bg-mid text-center">
          <a class="heading text-white" href="/calendar/">All MTB Events <i class="fas fa-arrow-right text-small"></i></a>
        </div>
      </div>
    </div>
  </div>
</section> -->

<!-- <section class="container-fluid py-0 bg-dark featuredcategory">
  <div class="row py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="text-white">Twelve Week MTB Fitness Training Programme</h3>
        </div>
        {%- assign featuredcat = site.posts | where_exp: "post", "post.categories contains 'Twelveweeks'" -%}
        {%- for post in featuredcat limit:4 -%}
          <div class="col-12 col-lg-3">
            <a href="{{ post.url | prepend: site.baseurl }}">
              <img src="/images/posts/270x145/{{ post.image }}" alt="{{ post.title }}" />
              <h6 class="mt-2 text-center text-white">{{ post.title }}</h6>
            </a>
          </div>
        {%- endfor -%}
      </div>
    </div>
  </div>
</section> -->

<section class="container-fluid mb-5 py-0 bg-dark instagram">
  <div class="row pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="text-white"><a href="https://instagram.com/{{ site.instagram_user }}"><i class="fab fa-instagram"></i> @emerald_mtb</a></h3></div>
      </div>
      <div class="row" id="instagram"></div>
      <div class="row">
        <div class="col-12">
          <p class="my-3 text-white text-center">Use <a href="https://www.instagram.com/explore/tags/flatisboring/" target="_blank">#flatisboring</a> to share your riding photos and videos</p>
        </div>
      </div>
    </div>
  </div> <!-- /.row -->
  <div class="row bg-mid">
    <div class="container">
      <div class="row">
        <div class="col-12 py-3 text-center">
          <a class="heading text-white" href="https://instagram.com/{{ site.instagram_user }}">Follow Emerald MTB on Instagram <i class="fas fa-arrow-right text-small"></i></a>
        </div>
      </div> <!-- /.row -->
    </div>
  </div> <!-- /.row -->
</section>

<section class="container bestofrest">
  <div class="row">
    <div class="col-12 mt-4 mt-lg-0">
      <h3>Best of the Rest</h3>
    </div>

    {%- assign postcount = 0 -%}
    {%- for post in site.posts offset:4 -%}
      {%- unless post.categories contains "Videos" or post.categories contains 'Twelveweeks' -%}
        <div class="col-12 col-lg-6 post">
          <div class="row">
            <div class="col-12 col-md-6">
              <a href="{{ post.url | prepend: post.baseurl }}"><img class="w-100" src="/images/posts/250x150/{{ post.image }}" alt="{{ post.title }}" /></a>
            </div>
            <div class="col-12 col-md-6 post-content">
              <a href="{{ post.url | prepend: post.baseurl }}">
                <small class="post-meta">{{ post.categories | join: ', ' }}</small>
                <h4 class="post-title">{{ post.title }}</h4>
                <p class="post-excerpt">{{ post.excerpt | strip_html }}</p>
              </a>
            </div>
          </div>
        </div>
        {%- assign postcount = postcount | plus: 1 -%}
        {%- if postcount == 6 -%}
          {%- break -%}
        {%- endif -%}
      {%- endunless -%}
    {%- endfor -%}
  </div> <!-- /.row -->
</section>

<section class="container-fluid mb-5 py-0 bg-mid shop">
  <div class="row pt-5 pb-4">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="text-white"><a href="/shop/"><i class="fas fa-cart"></i> Emerald MTB Merchandise</a></h3></div>
        <div class="col-12 col-md-4">
          <a href="https://shop.spreadshirt.ie/emerald-mtb/accessories+caps+%26+hats?q=P46"><img src="/images/hat-logo.jpg" alt="Emerald MTB snapback cap" class="w-100"></a>
        </div>
        <div class="col-12 col-md-4">
          <a href="https://shop.spreadshirt.ie/emerald-mtb/men+t-shirts?q=P24"><img src="/images/tshirt-diamond-design.jpg" alt="Emerald MTB t-shirt" class="w-100"></a>
        </div>
        <div class="col-12 col-md-4">
          <a href="https://shop.spreadshirt.ie/emerald-mtb/men+hoodies+%26+sweatshirts?q=P27"><img src="/images/logo-hoodie-men.jpg" alt="Emerald MTB hoodie sweatshirt" class="w-100"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="row bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-12 py-3 text-center">
          <a class="heading text-white" href="/shop/">Shop All Emerald MTB Merchandise <i class="fas fa-arrow-right text-small"></i></a>
        </div>
      </div> <!-- /.row -->
    </div>
  </div> <!-- /.row -->
</section>

<section class="container py-0">
  <div class="row pt-0 pb-5">
    <div class="container">
      <div class="col-12">
        <h1 class="h3">Emerald MTB is all about Mountain Biking in Ireland</h1>
        <p markdown="1">Here you will find us riding mountain bikes with friends and having fun. We tell you about the Ireland MTB scene, [cycling events and MTB races in Ireland](/category/events), [interview Irish mountain bikers](/category/interviews) and [tell all you about the mountain bike gear we've used and what we think of it](/category/reviews). We are here to while away the time until your next bike ride, inspire you to ride more MTB, explore new locations and just get you out on your bike with friends. [Find out more about Emerald MTB](/welcome-to-emerald-mtb/) <i class="fas fa-arrow-right text-small"></i></p>
      </div>
    </div>
  </div> <!-- /.row -->
</section>

<!-- <section class="container">
  <div class="row">
    <div class="col-12"><h3>In the shop</h3></div>
  </div>
</section> -->
