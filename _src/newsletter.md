---
layout: none
---

<!-- site logo -->
<a href="https://emerald-mtb.com"><img src="https://emerald-mtb.com/images/emerald-mtb-logo.svg" width="150"></a>

[MailChimp Mailing List](https://us14.admin.mailchimp.com/templates/)

{% for post in site.posts limit:4 %}
<h2>{{ post.title }}</h2>
<p>{{ post.content | strip_html | truncatewords: 100 }} <a href="{% if post.short_url %}{{ post.short_url }}{%- else -%}{{ post.url | prepend: "https://emerald-mtb.com" }}{% endif %}">Read more &raquo;</a></p>

<img src="https://emerald-mtb.com/images/posts/250x150/{{ post.image }}" alt="{{ post.title }}" />

<img src="https://emerald-mtb.com/images/posts/360x250/{{ post.image }}" alt="{{ post.title }}" />

<img src="https://emerald-mtb.com/images/posts/1080x450/{{ post.image }}" alt="{{ post.title }}" />
{% endfor %}

<!-- advertising -->
<!-- <p><a href="http://idratherbewriting.com/images/ads/adobefm.jpg"><img src="http://idratherbewriting.com/images/ads/adobefm.jpg"></p></a> -->
