<picture class="mb-4">
  <source srcset="/images/{{ include.image }}.webp" type="image/webp">
  <source srcset="/images/{{ include.image }}.jpg" type="image/jpeg"> 
  <img src="/images/{{ include.image }}.jpg" alt="{{ include.alt }}">
</picture>