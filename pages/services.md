---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: header_portfolio.jpg
  title: What we do...
widget1:
  title: "Product Engineering"
  url: 'https://stuffbitstechnologies.github.io/SBTLWebsite/prod-design/'
  image: widget_product_design.jpg
  text: 'We have great  experience in industry  level embedded software development. Our team is in continuous process to develop technology stacks that can be used for our own products or can be integrated into your product development solutions.'
widget2:
  title: "Embedded Software Solution"
  url: 'https://stuffbitstechnologies.github.io/SBTLWebsite/emb-sw/'
  image: widget_emb_sw.jpg
  text: 'We have great  experience in industry  level embedded software development. Our team is in continuous process to develop technology stacks that can be used for our own products or can be integrated into your product development solutions.'
widget3:
  title: "Technology Stack"
  url: 'https://stuffbitstechnologies.github.io/SBTLWebsite/tech-stack/'
  image: widget_tech_stack.jpg
  text: 'At StuffBits we provide complete design solution for Embedded System projects. We have expertise in different fields of Embedded Systems working to create quality products for our customers.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#

callforaction:
  url: http://StuffbitsTechnologies.github.io/SBTLWebsite/contact-us/
  text: Contact Us ›
  style: alert
permalink: "/services/"

#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
