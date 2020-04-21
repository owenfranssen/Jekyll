{%- if page.nutrition -%}
  
  <nutrition>
    <table class="mx-0 mb-3">
      <thead>
        <tr><th>Nutrition Information</th></tr>
      </thead>
      <tbody>
      {% for nutrition in page.nutrition %}
      <tr><td>{{ nutrition }}</td></tr>
      {% endfor %}
      </tbody>
    </table>
  </nutrition>

{%-endif -%}
