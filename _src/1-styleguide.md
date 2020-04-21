---
layout: post
title: H1 - Style Guide
---

# H1
## H2 - Secondary Heading
### H3 - Section Heading
#### H4 - Subheading
##### H5 - Sub-sub Heading (ctrl+h 4)
###### H6 - Small Caps (ctrl+h 5)
#### Paragraph Styles (ctrl+h 6)
<p>First paragraph: Sed tincidunt neque vel mi tincidunt euismod. Phasellus viverra enim nec massa scelerisque, non maximus nunc malesuada. Morbi vel arcu at lacus ornare feugiat sed at dui. Nulla id varius massa.</p>
<p class="lead">P.lead : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nibh blandit, cursus elit nec, iaculis dui. Donec semper elit in dui blandit, sit amet vulputate nunc vulputate. </p>
<p class="heading">P.Heading : Sed tincidunt neque vel mi tincidunt euismod</p>

Regular paragraph : Quisque vel lobortis nisi. Cras ipsum eros, pulvinar vitae erat ut, consectetur vestibulum metus. Fusce faucibus nisi turpis, sit amet laoreet arcu placerat at. Fusce quis ullamcorper ipsum. Praesent nec ligula vitae tortor porttitor venenatis.

[Internal link](/index.html)
[External link (nofollow)](https://emerald-mtb.com)
[Description for link at bottom of page][link]
...
[link]: http://website.url

#### Image Gallery
{: .class-name}

###### Masonry
<gallery>
<figure class="col-8">
  <img src="/images/posts/camping-at-bike-park-ireland.jpg" />
</figure>
<figure>
  <img src="/images/posts/camping-at-bike-park-ireland.jpg" />
  <img src="/images/posts/camping-at-bike-park-ireland.jpg" />
</figure>
</gallery>

###### Equal width
<gallery>
<figure><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></figure>
<figure><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></figure>
<figure><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></figure>
</gallery>

###### Specified width
<gallery>
<figure><img src="/images/camping-at-bike-park-ireland.jpg" alt="Campers at Bike Park Ireland" /></figure>
<figure style="max-width:433px"><img src="/images/bike-park-ireland-tent.jpg" alt="putting up tents at BPI" /></figure>
</gallery>

###### Responsive image collage - load vertical on phones, horizontal for larger screens
<picture class="mb-4">
  <source media="(max-width: 540px)" srcset="/images/weride-mtb-portugal-v.jpg">
  <source media="(min-width: 541px)" srcset="/images/weride-mtb-portugal-h.jpg">
  <img alt="Mountainbiking in Portugal" src="/images/weride-mtb-portugal-v.jpg">
</picture>

###### Responsive image include (ctrl+shift+i)
{% include image-responsive.md 
  image="switchbacks-evening"
  alt="ALT text"
%}

###### WebP image include (ctrl+alt+i)
{% include image-webp.md 
  image="switchbacks-evening"
  alt="ALT text"
%}

###### Image with caption include (ctrl+i)
{% include image-caption.md 
  image="switchbacks-evening.jpg"
  alt="Post mountain bike ride relax at Switchbacks MTB"
  caption="Beer and mountain bike videos for pre-dinner chill in the outdoor seating at Switchbacks"
%}

###### Embed local video (ctrl+v)
<video preload="none" src="video-url.mp4"></video>

#### Columns
{% col {"md": "4"} %}<img src="/images/posts/camping-at-bike-park-ireland.jpg" />
{% bs_end %}
{% col %}
Nunc interdum enim quis dui consectetur, non finibus quam malesuada. Morbi mattis orci purus. Aenean vitae dictum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sodales ligula scelerisque vestibulum posuere. Phasellus vehicula enim vitae ultrices scelerisque. Phasellus pulvinar dictum tortor, vel dignissim est auctor eget.
{% bs_end %}
<div class="w-100 my-2"></div>
<div class="col"><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></div>
<div class="col-6" markdown=\"1\"><p>Nunc interdum enim quis dui consectetur, non finibus quam malesuada. Morbi mattis orci purus. Aenean vitae dictum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sodales ligula scelerisque vestibulum posuere. Phasellus vehicula enim vitae ultrices scelerisque. Phasellus pulvinar dictum tortor, vel dignissim est auctor eget.</p></div>
<div class="col"><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></div>
{% col_break my-2|p-0 %}

#### Parralax Effects

<div class="col-12 parallax h-200x mb-4">
  <img src="/images/posts/camping-at-bike-park-ireland.jpg" />
  <p class="heading text-center">parallax image caption</p>
</div>

<div class="col-4 parallax h-400x"><img src="/images/posts/camping-at-bike-park-ireland.jpg" data-speed="-1" /></div>
<div class="col-8 parallax h-400x">
  <img src="/images/posts/camping-at-bike-park-ireland.jpg" data-speed="2" />
  <p>Nunc interdum enim quis dui consectetur, non finibus quam malesuada. Morbi mattis orci purus. Aenean vitae dictum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
</div>

#### Animations (ctrl+z to restart)
###### Moves (ctrl+a)
<div class="col-3">
<img class="animatable moveLeft" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>
<div class="col-3">
<img class="animatable moveUp" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>
<div class="col-3">
<img class="animatable moveDown" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>
<div class="col-3">
<img class="animatable moveRight" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>

###### Fades (ctrl+f)
<div class="col">
<img class="animatable fadeIn" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>
<div class="col">
<img class="animatable fadeInLeft" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>
<div class="col">
<img class="animatable fadeInUp" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>
<div class="col">
<img class="animatable fadeInDown" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>
<div class="col">
<img class="animatable fadeInRight" src="/images/posts/camping-at-bike-park-ireland.jpg" />
</div>


#### Hovers & Lightbox 
<div class="col">
  <div class="hover"><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></div>
</div>
<div class="col">
  <div class="hover link"><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></div>
</div>
<div class="col">
  <a data-lightbox="image-1" href="/images/posts/camping-at-bike-park-ireland.jpg"><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></a>
</div>
<div class="col">
  <a data-lightbox="image-1" data-title="The second image" href="/images/posts/camping-at-bike-park-ireland.jpg"><img src="/images/posts/camping-at-bike-park-ireland.jpg" /></a>
</div>

#### Captions (ctrl+i)
<div class="col">
  <img class="caption" src="/images/posts/camping-at-bike-park-ireland.jpg" />
  <figcaption>This is an image caption</figcaption>
</div>
<div class="col">
  <img class="caption hover" src="/images/posts/camping-at-bike-park-ireland.jpg" />
  <figcaption>This is an image caption</figcaption>
</div>
