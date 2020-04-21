---
layout: default
---
<section class="container post">  
  {%- unless page.no_title -%}
    {%- if page.image_behind_title -%}
      <div class="post-feature" style="background-image: url(/images/posts/1080x450/{{ page.image }})">
        <div class="post-header">
    {%- endif -%}
    <h1>{{ page.title }}</h1>
    <p class="post-meta">  
      {{ page.date | date_to_long_string }} |&nbsp;
      {%- for category in page.categories -%}
        <a href="/category/{{ category | slugize | downcase | replace: ' ', '-' }}/">{{ category | capitalize }}</a>
        {%- unless forloop.last -%}, {%- endunless -%}
      {%- endfor -%}
    </p>
    {%- if page.image_behind_title -%}
        </div>
      </div>
    {%- endif -%}
  {%- endunless -%}
  
  <div class="post-content">
    {{ content }}
  </div>  
  
  <div class="row">
    {% if page.categories contains "Fitness" %}
      <div class="col-12 col-lg-6">
        {% include fitness-advert.html %}
      </div>
      <div class="col-12 col-lg-6">
    {% else %}
      <div class="col-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
    {% endif %}
      {%- include share-this.md -%}  
    </div>
  </div>
  
  {%- include author-box.md -%}  
  
  {%- if page.comments -%}
    {%- include comments.html -%}
  {%- endif -%}  
  {%- include related-posts-by-category.md -%}
  
  <div class="row post-navigation">
    <div class="col-6 pagination">
    {%- if page.previous.url -%}
      <a class="prev page-link" href="{{page.previous.url}}"><i class="fas fa-arrow-left"></i><span><small>Previous Article:</small><br>{{page.previous.title}}</span></a>
    {%- endif -%}
    </div>
    <div class="col-6 pagination justify-content-right text-right" style="justify-content:flex-end">
    {%- if page.next.url -%}
      <a class="next page-link" href="{{page.next.url}}"><span><small>Next Article:</small><br>{{page.next.title}}</span><i class="fas fa-arrow-right"></i></a>
    {%- endif -%}
    </div>
  </div>

</section>