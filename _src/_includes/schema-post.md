<script type="application/ld+json">
{
	"@context": "http://schema.org",
	"@type": "BlogPosting",
	"headline": "{{ page.title }}",
	"image": "{{ site.url }}{% if page.image %}/images/posts/1080x450/{{ page.image }}{% else %}/images/emerald-mtb-logo.svg{% endif %}",
	"editor": "{{ site.author.name }}",
	"genre": "{{ site.tagline }}",
	"keywords": "{{ page.categories | join: ' ' | downcase }}",
	"publisher": "{{ site.title }}",
	"url": "{{ site.url }}/{{ page.url | replace:'index.html',''}}",
	"datePublished": "{{ page.date | date: "%Y-%m-%d" }}",
	"description": "{% if post.excerpt %}{{ post.excerpt }}{% else %}{{ page.content | strip_html | truncatewords: 50 }}{% endif %}",
	"articleBody": "{{ page.content | strip_html }}",
	"author": {
	  "@type": "Person",
	  "name": "{% if page.author %}{{ page.author.name }}{% else %}{{ site.author.name }}{% endif %}"
	}
}
</script>
