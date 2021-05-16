---
layout: page
subheadline: "SERVICES"
title: "Embedded Software"
teaser: "We have great  experience in industry  level embedded software development. Our team is in continuous process to develop technology stacks that can be used for our own products or can be integrated into your product development solutions."
header:
    title: 
    image_fullwidth: "header_emb_sw.jpg"
permalink: "/emb-sw/"
---
<ul>
    {% for post in site.tags.header %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>