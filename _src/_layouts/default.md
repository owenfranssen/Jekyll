---
layout: compress
---
{%- include head.md -%}
  <body class="{{ page.layout | handleize }} {{ page.class | handleize }} text-dark">
    {%- include facebook-viewcontent.md -%}
    {%- include branding.md -%}
    {%- include navbar.md -%}
    <!-- Page Content -->
    {{ content | replace: '<a href="http', '<a rel="nofollow" target="_blank" href="http' }}
    {%- unless page.custom-js -%}
      {%- include foot.md -%}
      {%- include global-js.md -%}
    {%- endunless -%}
    {%- if page.schema.organization -%}
      {%- include schema-organization.md -%}
    {%- endif -%}
    {%- if page.id -%}
      {%- include schema-post.md -%}
    {%- endif -%}
    
    {% include mailchimp-tracking.html %}
    
  </body>
</html>
