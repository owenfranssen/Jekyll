---
layout: default
---
<section class="container post">
  {% unless page.no_title %}
    {% if page.image_behind_title %}
      <div class="post-feature" style="background-image: url(/images/posts/1080x450/{{ page.image }})">
        <div class="post-header">
    {% endif %}
    <h1>{{ page.title }}</h1>
    <p class="post-meta">  
      {{ page.date | date_to_long_string }} | <!-- {{ page.categories | join: ', ' | capitalize }} | {{ page.tags | join: ', ' | capitalize }}-->
      {% for category in page.categories %}
        <a href="/category/{{ category | slugize | downcase | replace: ' ', '-' }}/">{{ category | capitalize }}</a>
        {% unless forloop.last %}, {% endunless %}
      {% endfor %}
      <!-- {% for tag in page.tags %}
        {% if forloop.first %} | {% endif %}
        <a href="/tag/{{ tag | slugize | downcase | replace: ' ', '-' }}/">{{ tag | capitalize }}</a>
        {% unless forloop.last %}, {% endunless %}
      {% endfor %} -->
    </p>
    {% if page.image_behind_title %}
        </div>
      </div>
    {% endif %}
  {% endunless %}
  
  <div class="post-content">
    {{ content }}
  </div>  
  
  {% include share-this.md %}  
  {% include author-box.md %}
  {% if page.comments %}
    {% include comments.html %}
  {% endif %}  
  {% include related-posts-by-category.md %}
  
  <div class="row post-navigation">
    <div class="col-6">
    {% if page.previous.url %}
      <a class="prev" href="{{page.previous.url}}"><i class="fas fa-arrow-left"></i> <small>Previous:</small> {{page.previous.title}}</a>
    {% endif %}
    </div>
    <div class="col-6 text-right">
    {% if page.next.url %}
      <a class="next" href="{{page.next.url}}"><small>Next:</small> {{page.next.title}} <i class="fas fa-arrow-right"></i></a>
    {% endif %}
    </div>
  </div>

</section>
