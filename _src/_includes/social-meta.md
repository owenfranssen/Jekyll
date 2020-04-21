<meta name="twitter:card" value="summary" />
<meta name="twitter:site" content="@{{ site.twitter_user }}">
<meta name="twitter:title" content="{%- if page.title -%}{{ page.title }}{%- else -%}{{ site.title }} {{ site.tagline }} {%- endif -%}">
<meta name="twitter:description" content="{% if page.seo.description %}{{ page.seo.description }}{%- elsif post.excerpt -%}{{ post.excerpt }}{%- elsif page.description -%}{{ page.description }}{%- elsif page.content -%}{{ page.content | strip_html | truncate:150 }}{%- else -%}{{ site.description }}{%- endif -%}">
<meta name="twitter:creator" content="@{%- if post.author.twitter -%}{{ post.author.twitter }}{%- else -%}{{ site.author.twitter }}{%- endif -%}">
<meta name="twitter:image" content="https://emerald-mtb.com{%- if page.image -%}/images/posts/360x250/{{ page.image }}{%- else -%}/images/emerald-mtb-logo.svg{%- endif -%}">
<meta name="twitter:image:src" content="https://emerald-mtb.com{%- if page.image -%}/images/posts/360x250/{{ page.image }}{%- else -%}/images/emerald-mtb-logo.png{%- endif -%}">

<meta property="og:title" content="{%- if page.title -%}{{ page.title }}{%- else -%}{{ site.title }} {{ site.tagline }}{%- endif -%}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://emerald-mtb.com{{ page.url | replace:'index.html',''}}" />
<meta property="og:image" content="https://emerald-mtb.com{%- if page.image -%}/images/posts/1080x450/{{ page.image }}{%- else -%}/images/emerald-mtb-logo.png{%- endif -%}" />
<meta property="og:description" content="{% if page.seo.description %}{{ page.seo.description }}{%- elsif post.excerpt -%}{{ post.excerpt }}{%- elsif page.description -%}{{ page.description }}{%- elsif page.content -%}{{ page.content | strip_html | truncate:150 }}{%- else -%}{{ site.description }}{%- endif -%}" />
<meta property="og:site_name" content="{{ site.title }}" />
<meta property="fb:admins" content="{{ site.facebook_appid }}" />
<meta property="fb:app_id" content="1495402360767008" />
<meta property="fb:pages" content="{{ site.facebook_appid }}" />
