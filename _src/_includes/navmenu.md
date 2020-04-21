{% for category in page.categories %}
  {% assign mainCategory = category %}
  {% break %}
{% endfor %}
<div class="navbar-nav ml-auto">
  <!-- <li class="nav-item {% if page.url == "/" %}active{% endif %}">
    <a class="nav-link" href="/">Home</a>
  </li> -->
 
  <li class="nav-item dropdown megamenu-fw {% if page.url contains "/features/" or mainCategory contains "Features" %}active{% endif %}">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#">Features</a>
    <div class="dropdown-menu megamenu-content" role="menu">
      <h5><a href="/features/">Show All Features</a></h5>
      <div class="megamenu-columns">
        {%- assign categoryposts = site.posts | where_exp: "post", "post.categories contains 'Events'" -%}
        {%- for latestpost in categoryposts limit:1 -%}
          <div class="megamenu-column">
            <a href="/events/">
              <img src="/images/posts/250x150/{{ latestpost.image }}" alt="{{ latestpost.title }}" />
              <h6 class="mt-2 mb-0 text-center">Events &amp; Races</h6>
            </a>
          </div>
        {%- endfor -%}

        {%- assign categoryposts = site.posts | where_exp: "post", "post.categories contains 'Interviews'" -%}
        {%- for latestpost in categoryposts limit:1 -%}
          <div class="megamenu-column">
            <a href="/interviews/">
              <img src="/images/posts/250x150/{{ latestpost.image }}" alt="{{ latestpost.title }}" />
              <h6 class="mt-2 mb-0 text-center">Interviews</h6>
            </a>
          </div>
        {%- endfor -%}

        {%- assign categoryposts = site.posts | where_exp: "post", "post.categories contains 'Lifestyle'" -%}
        {%- for latestpost in categoryposts limit:1 -%}
          <div class="megamenu-column">
            <a href="/lifestyle/">
              <img src="/images/posts/250x150/{{ latestpost.image }}" alt="{{ latestpost.title }}" />
              <h6 class="mt-2 mb-0 text-center">Lifestyle</h6>
            </a>
          </div>
        {%- endfor -%}

        {%- assign categoryposts = site.posts | where_exp: "post", "post.categories contains 'Trails'" -%}
        {%- for latestpost in categoryposts limit:1 -%}
          <div class="megamenu-column">
            <a href="/trails/">
              <img src="/images/posts/250x150/{{ latestpost.image }}" alt="{{ latestpost.title }}" />
              <h6 class="mt-2 mb-0 text-center">Trails</h6>
            </a>
          </div>
        {%- endfor -%}

        {%- assign categoryposts = site.posts | where_exp: "post", "post.categories contains 'Videos'" -%}
        {%- for latestpost in categoryposts limit:1 -%}
          <div class="megamenu-column">
            <a href="/videos/">
              <img src="/images/posts/250x150/{{ latestpost.image }}" alt="{{ latestpost.title }}" />
              <h6 class="mt-2 mb-0 text-center">Videos</h6>
            </a>
          </div>
        {%- endfor -%}
      </div>
    </div> <!-- .megamenu-content -->
  </li>

  <li class="nav-item {% if page.url contains "/fitness/" or mainCategory contains "Fitness" %}active{% endif %}">
    <a class="nav-link" href="/fitness/">Fitness &amp; Nutrition</a>
  </li>

  <li class="nav-item {% if page.url contains "/reviews/" or mainCategory contains "Reviews" %}active{% endif %}">
    <a class="nav-link" href="/reviews/">Gear Reviews</a>
  </li>
  <li class="nav-item {% if page.url contains "/calendar/" or page.url contains "/event" %}active{% endif %}">
    <a class="nav-link" href="/calendar/">Events Calendar</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://shop.spreadshirt.ie/emerald-mtb/" target="_blank">Shop</a>
  </li>
  <!-- <li class="nav-item">
    <a class="nav-link" href="/shop/">Shop</a>
  </li> -->
</ul>
