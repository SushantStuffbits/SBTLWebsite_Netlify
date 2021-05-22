---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: header_unsplash_12.jpg
widget1:
  title: "Our Services"
  url: '/services/'
  image: widget-1-302x182.jpg
  text: 'At StuffBits we provide complete design solution for Embedded System projects. We have experts in different fields of Embedded System working to create quality products for our customers.'
widget2:
  title: "Our Work"
  url: '/portfolio/'
  image: widget_portfolio.jpg
  text: 'Take a look at our previous work; which includes Embedded Software Developement and End-To-End Produt Development as per our clients needs. At StuffBits we strive to understand clients Wants and Needs to provide a best soultion for their requirements.'
  #video: '<a href="#" data-reveal-id="videoModal"><img src="http://StuffbitsTechnologies.github.io/SBTLWebsite/images/start-video-feeling-responsive-302x182.jpg" width="302" height="182" alt=""/></a>'
widget3:
  title: "Blogs"
  url: '/blog/'
  image: widget-github-303x182.jpg
  text: 'StuffBits publishes various technical articles about software development, various standards and know-how whitepapers, which can be found in our open source repository, here...'
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
  url: '/contact-us/'
  text: Contact Us ›
  style: alert
permalink: /index.html

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
