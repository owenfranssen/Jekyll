<!DOCTYPE html>
<html lang="en">
  <head>
    {%- include google-analytics.html -%}
    <meta charset="utf-8" />
    <meta name='viewport' content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>{% if page.seo.title %}{{ page.seo.title }}{%- elsif page.title -%}{{ page.title }} | {{ site.title }}{%- else -%}{{ site.title }} {{ site.tagline }}{%- endif -%}</title>
    <meta name='description' content="{% if page.seo.description %}{{ page.seo.description }}{%- elsif post.excerpt -%}{{ post.excerpt }}{%- elsif page.description -%}{{ page.description }}{%- elsif page.content -%}{{ page.content | strip_html | truncate:150 }}{%- else -%}{{ site.description }}{%- endif -%}" />
    <link rel='canonical' href="{% if page.seo.canonical %}{{ page.seo.canonical }}{%- else -%}{{ site.baseurl }}{{ page.url | replace:'index.html',''}}{%- endif -%}" />
    <link href='{{ site.url }}/feed.xml' rel='alternate' type='application/atom+xml'>
    {% if page.pagination_info %}
      {% if page.pagination_info.curr_page > 1 %}
        <link rel="prev" href="{{ paginator.previous_page_path }}">
      {% endif %}
      {% if page.pagination_info.total_pages > 1 and page.pagination_info.curr_page < page.pagination_info.total_pages %}
        <link rel="next" href="{{ paginator.next_page_path }}">
      {% endif %} 
    {% endif %}
    {%- if page.noindex -%}<meta name="robots" content="noindex">{%- endif -%}
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://api.mapbox.com https://www.youtube.com https://player.vimeo.com/ data:; connect-src http://localhost:3000 ws://localhost:3000 http://localhost:3002 ws://localhost:3002 http://localhost:3004 ws://localhost:3004 https://emerald-mtb.com/ http://emerald-mtb.com https://api.mapbox.com https://a.tiles.mapbox.com https://b.tiles.mapbox.com https://www.google-analytics.com https://stats.g.doubleclick.net https://links.services.disqus.com https://www.facebook.com/tr/ https://csi.gstatic.com http://api.viglink.com/api/ https://shop.spreadshirt.ie https://dpm.demdex.net/ https://sanalytics.spreadshirt.net; frame-src https://connect.facebook.net https://www.youtube.com/ https://player.vimeo.com/ https://disqus.com http://staticxx.facebook.com/ https://www.facebook.com/ https://influence.co https://www.strava.com https://youtu.be https://googleads.g.doubleclick.net https://ws-eu.amazon-adsystem.com/ https://shop.spreadshirt.ie/ https://spreadshirt.demdex.net/; img-src 'self' *.jpg blob: data: https://www.google.com/ https://www.google.ie/ https://scontent.cdninstagram.com https://www.google-analytics.com https://www.facebook.com https://stats.g.doubleclick.net https://referrer.disqus.com https://c.disquscdn.com https://influence.co https://www.google.com https://www.google.ie/ads https://gallery.mailchimp.com https://widget.websitevoice.com http://cdn.viglink.com/images/ http://api.viglink.com/api/ https://www.awin1.com/ https://ui2.awin.com/ https://a1.awin1.com/ https://pagead2.googlesyndication.com https://shop.spreadshirt.ie https://sanalytics.spreadshirt.net https://cm.everesttech.net https://image.spreadshirtmedia.net https://shop.spreadshirt.net https://dpm.demdex.net; script-src 'self' data: https://api.mapbox.com https://api.instagram.com https://connect.facebook.net https://www.google-analytics.com https://emerald-mtb.disqus.com/embed.js https://disqus.com https://c.disquscdn.com https://chimpstatic.com https://influence.co/ https://marmont-web-production.s3.amazonaws.com https://www.instagram.com http://pagead2.googlesyndication.com https://adservice.google.ie https://adservice.google.com http://www.googletagservices.com https://securepubads.g.doubleclick.net https://creators.ie http://downloads.mailchimp.com http://mc.us14.list-manage.com https://widget.websitevoice.com http://cdn.viglink.com/ https://shop.spreadshirt.ie https://adtm.spreadshirts.net 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://api.mapbox.com https://c.disquscdn.com http://downloads.mailchimp.com https://widget.websitevoice.com https://shop.spreadshirt.ie; worker-src blob:" />
    {%- include favicon.html -%}
    {%- include social-meta.md -%}
    {% unless page.nocriticalcss %}
      <style>
      {% if page.url == "/" %}
        {% include _css/index.css %}
      {%- elsif page.url contains "category" -%}
        {% include _css/category.css %}
      {%- elsif page.url contains "calendar" -%}
        {% include _css/calendar.css %}
      {%- elsif page.url contains "event" -%}
        {% include _css/event.css %}
      {%- elsif page.id  -%}
        {% include _css/post.css %}
      {%- endif -%}
      </style>
      <link href="/assets/css/site.css" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">
      <noscript><link href="/assets/css/site.css?20200110" rel="stylesheet"></noscript>
      {%- include _js/loadcss.js -%}
    {%- endunless -%}
    {%- if page.nocriticalcss -%}
      <link href="/assets/css/site.css" rel="stylesheet">
    {%- endif -%}
    {%- if page.map == true -%}
      <script src="https://api.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.js"></script>
      <link href="https://api.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css" rel='stylesheet' />
    {%- endif -%}
    {%- include facebook-pixel.md -%}
  </head>
