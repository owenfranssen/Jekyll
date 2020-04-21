{%- if page.ingredients -%}
  
  <ingredients>
    <table class="mx-0 mb-3">
      <thead>
        <th>Ingredients</th>
      </thead>
      <tbody>
      {% for ingredient in page.ingredients %}
      <tr><td>{{ ingredient | markdownify }}</td></tr>
      {% endfor %}
      </tbody>
    </table>
  </ingredients>

{%-endif -%}
