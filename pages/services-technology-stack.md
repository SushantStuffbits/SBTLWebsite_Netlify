---
layout: page
subheadline: "SERVICES"
title: "Technology Stack"
teaser: "At StuffBits we provide complete design solution for Embedded System projects. We have expertise in different fields of Embedded Systems working to create quality products for our customers."
header:
    title: "Our Software Solutions"
    image_fullwidth: "header_unsplash_8.jpg"
permalink: "/tech-stack/"
---
<ul>
    {% for post in site.tags.header %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>