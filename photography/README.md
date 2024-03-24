---
layout: plain
title: Be a Worldwatcher
description: >
  A picture is worth a thousand words
# content_width_5: 124 #rem <--> 
# if want to expand the contents, u need to change the 'content-width-5' in /_data/variables.yml file
---

<!-------------------------------------- THE HEAD -------------------------------------->
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.19/js/lightgallery-all.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.19/css/lightgallery.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.0/isotope.pkgd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.0/imagesloaded.pkgd.min.js"></script>
</head>

<!-------------------------------------- THE HTML -------------------------------------->

<div id="interact-area" class="display: flex;">

<div class="display: flex;">
<button class="button-top" id="search-choose">Choose</button>
<button class="button-top" id="search-world">Explore</button>
</div>

<div id ="filter-button-group" class="button-group" stle="display:none;">
  <button class="choose-btn" data-filter="*">All</button>
  <button class="choose-btn" data-filter="Asian">Asian</button>
  <button class="choose-btn" data-filter="Europe">Europe</button>
  <button class="choose-btn" data-filter="America">America</button>
  <button class="choose-btn" data-filter="Uncategorized">Uncategorized</button>
</div>

</div>

<p>
</p>

{% include gallery-layout.html gallery=site.data.galleries.ghent-light-festival %}

<!-------------------------------------- THE SCRIPT -------------------------------------->
<script>
    $(document).ready(function() {

      $("#image-gallery").lightGallery({
        selector: '.item'
      });
      
      var $grid = $('#image-gallery').isotope({
        percentPosition: true,
        columnWidth: '#gallery-sizer',
        itemSelector: '.image-wrapper',
        layoutMode: 'masonry',
      });
      $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
      });

      $("#filter-button-group").on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        if (filterValue != '*') { 
          filterValue = '[data-category="'+ filterValue +'"]';
        }
        $grid.isotope({ filter : filterValue });
      });
      
      $("#search-choose").on('click', function(){
        $('#filter-button-group').slideToggle();
      });

    });
</script>
