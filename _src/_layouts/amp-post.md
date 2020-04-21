<!doctype html>
<html amp lang="en">
<head>
  <meta charset="utf-8">
  <title>{{ page.title }}</title>
  <link rel="canonical" href="{{ page.canonical_url | prepend: site.url }}" />
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Khula" rel="stylesheet">
  <style amp-custom>
    {% include syntax.css %}
    {% capture include_to_scssify %}
      {% include main.scss %}
    {% endcapture %}
    {{ include_to_scssify | scssify }}
  </style>
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

  {% if page.body contains "tweet-wrapper" %}
    <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"></script>
  {% endif %}

  <script async custom-element="amp-analytics"
  src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
  <script async src="https://cdn.ampproject.org/v0.js"></script>

  <link rel="shortcut icon" href="/favicon.ico" />

  {% include openGraph.html %}
</head>
<body>

<amp-analytics type="googleanalytics" id="amp-analytics-pageview">
  <script type="application/json">
  {
    "vars": {
      "account": "{{site.amp_googleanalytics_id}}"
    },
    "triggers": {
      "trackPageview": {
        "on": "visible",
        "request": "pageview"
      }
    }
  }
  </script>
</amp-analytics>

<amp-analytics type="googleanalytics" id="amp-analytics-tweet-share">
<script type="application/json">
{
  "vars": {
    "account": "{{site.amp_googleanalytics_id}}"
  },
  "triggers": {
    "trackClickOnTwitterLink" : {
      "on": "click",
      "selector": "#twitter-share-link",
      "request": "social",
      "vars": {
          "socialNetwork": "twitter",
          "socialAction": "tweet",
          "socialTarget": "{{site.url}}{{page.url}}"
      }
    }
  }
}
</script>
</amp-analytics>

<amp-analytics type="googleanalytics" id="amp-analytics-facebook-share">
<script type="application/json">
{
  "vars": {
    "account": "{{site.amp_googleanalytics_id}}"
  },
  "triggers": {
    "trackClickOnFacebookLink" : {
      "on": "click",
      "selector": "#facebook-share-link",
      "request": "social",
      "vars": {
          "socialNetwork": "facebook",
          "socialAction": "share",
          "socialTarget": "{{site.url}}{{page.url}}"
      }
    }
  }
}
</script>
</amp-analytics>

  {% capture header %}{% include header.html %}{% endcapture %}
  {{ header | amp_images: false, 32, 32 }}
<div class="main">

{% 
    include structuredData.html 
    headline=page.title
    genre=page.category
    keywords=page.keywords
    content=page.body
    link=page.permalink
    date=page.date
  %}
   
  <article>
  {% capture post_header %}{% include post_header.html %}{% endcapture %}
  {{ post_header | amp_images }}
      <div class="post">
      {{ page.body | markdownify | amp_images }} 
    </div>
  </article> 

  </div>

  {% capture footer %}{% include footer.html %}{% endcapture %}
{{ footer | amp_images: false, 25, 25 }}
</body>
</html>
