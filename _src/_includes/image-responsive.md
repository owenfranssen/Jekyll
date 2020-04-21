<picture class="mb-4">
  <source media="(max-width: 540px)" srcset="/images/{{ include.image }}-half.jpg 540w" sizes="100vw">
  <source media="(min-width: 541px)" srcset="/images/{{ include.image}}.jpg 1080w" sizes="100w">
  <img alt="{{ include.alt }}" src="/images/{{ include.image }}.jpg">
</picture>
