<!-- use post tags for better relations -->
<relatedposts class="row my-4">
  <div class="col-12"><h4>Other Articles You May Enjoy</h4></div>
  {%- assign categoryCount = page.categories | size -%}
  {%- assign maxRelated = 3 -%}
  {%- assign maxRelatedCounter = 0 -%}
  {%- assign relatedPosts = "" -%}
  {%- if categoryCount < 2 -%}
    {%- assign minCommonTags = 1 -%}
  {%- else -%}
    {%- assign minCommonTags =  2 -%}
  {%- endif -%}
  {%- for post in site.posts -%}
    {%- assign sameTagCount = 0 -%}
    {%- assign commonTags = '' -%}
    {%- for category in post.categories -%}
      {%- if post.url != page.url -%}
        {%- if page.categories contains category -%}
          {%- assign sameTagCount = sameTagCount | plus: 1 -%}
          {%- capture tagmarkup -%} <span class="label label-default">{{ category }}</span> {%- endcapture -%}
          {%- assign commonTags = commonTags | append: tagmarkup -%}
        {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
    {%- if sameTagCount >= minCommonTags -%}      
      {%- if page.ingredients -%}
        <div class="col-12 feature secondary relatedpost">
      {%- else -%}
        <div class="col-12 col-md-4 feature secondary relatedpost">
      {%- endif -%}
      <a href="{{ post.url | prepend: site.baseurl }}" style="background-image: url(/images/posts/360x250/{{ post.image }})">
        <span class="post-content">
          <small class="post-meta">{{ post.categories | join: ', ' }}</small>
          <h4 class="post-title">{{ post.title }} <small>{{ post.subheading }}</small></h4>
        </span>
      </a>
    </div>
    {%- assign maxRelatedCounter = maxRelatedCounter | plus: 1 -%}
      {%- if maxRelatedCounter >= maxRelated -%}
        {%- break -%}
      {%- endif -%}
    {%- endif -%}
  {%- endfor -%}
</relatedposts>
