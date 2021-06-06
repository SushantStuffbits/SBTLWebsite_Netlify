---
layout: page-fullwidth
title: "We've featured some of our best work here..."
subheadline: "Portfolio"
#teaser: "With <em>Feeling Responsive</em> you don't need a special portfolio template. Just check out the great possibilities of the <a href='http://foundation.zurb.com/docs/components/grid.html'>foundation grid</a> and experiment with it."
header:
    title: Take a look at our work
    image_fullwidth: "header_portfolio.jpg"
permalink: "/portfolio/"
---
<!--more-->
<!-- FEELING RESPONSIVE TEMPLATE
<div class="row t60">
    <div class="medium-4 columns">
        <a href="{{ site.url }}{{ site.baseurl }}/portfolio-manometer/">
        <img src="{{ site.urlimg }}portfolio_big_manometer.jpg" alt="">
        </a>
        <p>
        <a class="radius button large" href="{{ site.url }}{{ site.baseurl }}/portfolio-manometer/">            Electronic Manometers                   
        </a>
        </p>
    </div>

    <div class="medium-4 columns b30">
        <a href="{{ site.url }}{{ site.baseurl }}/portfolio-dpt-manometer/">
            <img src="{{ site.urlimg }}portfolio_dpt_manometer.jpg" alt="">
        </a>
        <p>
        <a class="radius button large" href="{{ site.url }}{{ site.baseurl }}/portfolio-dpt-manometer/">            Degital Pressure Transmeter                   
        </a>
        </p>
    </div>

    <div class="medium-4 columns b30">
        <a href="{{ site.url }}{{ site.baseurl }}/portfolio-gas-analyzer/">
            <img src="{{ site.urlimg }}portfolio_gasanalyzer.jpg" alt="">
        </a>
        <p>
          <a href="{{ site.url }}{{ site.baseurl }}/portfolio-gas-analyzer/">     Electronic Gas Analyzer
          </a>
        </p>
    </div>
</div> 

<div class="row t30">
    <div class="medium-4 columns">
        <a href="{{ site.url }}{{ site.baseurl }}/portfolio-fuel-diespense/">
            <img src="{{ site.urlimg }}portfolio_mpd.jpg" alt="">
        </a>
        <p>
          <a href="{{ site.url }}{{ site.baseurl }}/portfolio-fuel-diespense/">     Multi-Product Fuel Dispenser
          </a>
        </p>
    </div>

    <div class="medium-4 columns">
        <img src="{{ site.urlimg }}webdesign_screenshot_schriefer.jpg" alt="">
        <p>Website: <a href="http://www.psychotherapie-schriefer.de/">Praxis für psychologische Psychotherapie Simone Schriefer</a></p>
    </div>
</div> -->

<!-- SBTL Template -->
<div class="portfolio-area pt-112">
    <div class="container">
		<div class="row" style="display: none;"> 
			<div class="col-sm-12">
				<div class="section-title text-center">
					<span>We've featured some of our best work here...</span>
					<!-- <h2>Doing The Right Thing,<br>At The Right Time</h2> -->
				</div>
			</div>
		</div>
        <div class="portfolio">
            <div class="row">
                <div class="col-sm-12">
                    <!-- Porducts Category -->
                    <div class="filtering-button">
                        <a class="active" data-filter="*">ALL</a>
                        <!-- <a data-filter=".web-design">Embedded Design</a>
                        <a data-filter=".logo">Product Engineering</a>
                        <a data-filter=".graphics">Firmware Design</a> -->
                        {% for product in site.data.products %}
                            <a data-filter=".{{product.filter}}">{{product.name}}</a>
                        {% endfor %}
                    </div>
                </div>
            </div>
			<div class="grid row" style="position: relative; height: 620px;">
				{% for project in site.pages %}
                    {% if project.path contains "project" %}
						<h6 style="display: none;">{% increment project_item %}</h6>
						{% if project_item == 1 %}
							<div class="grid-item col-md-6 col-lg-4 col-sm-12 web-design logo graphics business" style="position: absolute; left: 0%; top: 0px;">
						{% elsif project_item == 2 %}
							<div class="grid-item col-md-6 col-lg-4 col-sm-12 web-design logo graphics business" style="position: absolute; left: 33.3333%; top: 0px;">
						{% elsif project_item == 3 %}
							<div class="grid-item col-md-6 col-lg-4 col-sm-12 web-design graphics business" style="position: absolute; left: 66.6667%; top: 0px;">
						{% elsif project_item == 4 %}
							<div class="grid-item col-md-6 col-lg-4 col-sm-12 web-design logo" style="position: absolute; left: 0%; top: 310px;">
						{% elsif project_item == 5 %}
							<div class="grid-item col-md-6 col-lg-4 col-sm-12 websites graphic-design" style="position: absolute; left: 33.3333%; top: 310px;">
						{% elsif project_item == 6 %}
							<div class="grid-item col-md-6 col-lg-4 col-sm-12 web-design business" style="position: absolute; left: 66.6667%; top: 310px;">
						{% else %}
							<!-- Show only 6 recent projects -->
							{% break %}
						{% endif %}
						<div class="single-portfolio">
							<div class="images">
								<a href="{{ site.url }}{{ site.baseurl }}{{ project.permalink }}">
									<img src="{{ site.urlimg }}{{project.image.title}}" alt="{{project.title}}">
								</a>
								<div class="overlay">
									<div class="overlay-content">
										<div class="portfolio-sub-title">
											<a href="{{ site.url }}{{ site.baseurl }}{{ project.permalink }}" rel="tag">{{project.tag}}</a>
										</div>
										<div class="portfolio-title">
											<h3><a href="{{ site.url }}{{ site.baseurl }}{{ project.permalink }}" rel="tag">{{project.title}}</a></h3>
										</div>
										<div class="meta-box" style="display: none;">
											<ul>
												<li>
													<a href="{{ site.urlimg }}{{project.image.title}}" data-lightbox="example-set" data-title="{{project.title}}">
														<i class="fa fa-search"></i>
													</a>
												</li>
												<li>
													<a href="{{ site.url }}{{ site.baseurl }}{{ project.permalink }}"><i class="fa fa-link"></i></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    {% else %}
                    {% endif %}
				{% endfor %}
		    </div>
		</div>
	</div>
</div>