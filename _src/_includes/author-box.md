{%- if page.author -%}
  {%- assign author = page.author -%}
{%- else -%}
  {%- assign author = site.author -%}
{%-endif -%}
<author class="row my-4 py-4 px-5 border-top border-bottom">
  <div class="col-12 col-md-3 text-center">
    <img src="/images/{{ author.image }}" alt="{{ author.name }}" style="max-width:200px" />
    <h5 class="mt-3 mb-0">{{ author.name }}</h5>
    <div class="text-secondary social-links">
      {%- if author.twitter -%}<a href="https://twitter.com{{ author.twitter }}"><i class="fab fa-twitter-square"></i></a>{%- endif -%}
      {%- if author.facebook -%}<a href="https://facebook.com/{{ author.facebook }}"><i class="fab fa-facebook-square"></i></a>{%- endif -%}
      {%- if author.instagram -%}<a href="https://instagram.com/{{ author.instagram }}"><i class="fab fa-instagram"></i></a>{%- endif -%}
      {%- if author.youtube -%}<a href="{{ author.youtube }}"><i class="fab fa-youtube-square"></i></a>{%- endif -%}
      {%- if author.website -%}<a href="{{ author.website }}"><i class="fas fa-globe"></i></a>{%- endif -%}
    </div>
  </div>
  <div class="col-12 col-md-9 text-center text-md-left">
    <p class="mt-3 mb-0 mx-md-5 text-justify">{{ author.bio }}</p>
  </div>
</author>
