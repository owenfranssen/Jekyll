---
layout: default
---
<section class="container post recipe">  
  {%- unless page.no_title -%}
    {%- if page.image_behind_title -%}
      <div class="post-feature" style="background-image: url(/images/posts/1080x450/{{ page.image }})">
        <div class="post-header">
    {% else %}
      <img class="post-feature" src="/images/posts/1080x450/{{ page.image }}" alt="{{ page.title }}" />
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
  
  <div class="row">
    <div class="col-12 col-lg-8 post-content">
      {{ content }}
    </div>
    <div class="col-12 col-lg-4 sidebar">
      {%- include ingredients.md -%}
      {%- include nutritionalvalue.md -%}
      {%- include related-posts-by-category.md -%}
  
      <div class="post-navigation mb-3">
        <div class="pagination mb-3 pl-0">
        {%- if page.previous.url -%}
          <a class="prev page-link" href="{{page.previous.url}}"><i class="fas fa-arrow-left"></i><span><small>Previous Article:</small><br>{{page.previous.title}}</span></a>
        {%- endif -%}
        </div>
        <div class="pagination pl-0 justify-content-right text-right" style="justify-content:flex-end">
        {%- if page.next.url -%}
          <a class="next page-link" href="{{page.next.url}}"><span><small>Next Article:</small><br>{{page.next.title}}</span><i class="fas fa-arrow-right"></i></a>
        {%- endif -%}
        </div>
      </div>
      
      {%- include share-this.md -%}
    </div>
  </div>  
  
  {%- include author-box.md -%}  
  
  {%- if page.comments -%}
    {%- include comments.html -%}
  {%- endif -%}
</section>