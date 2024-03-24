---
layout: plain
title: Be a Worldwatcher
description: >
  A picture is worth a thousand words
content_width_5: 124 #rem
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

<p>
  <div id ="filter-button-group" class="button-group" >
    <button data-filter="*">All</button>
    <button data-filter="Asian">Asian</button>
    <button data-filter="Europe">Europe</button>
    <button data-filter="America">America</button>
    <button data-filter="Uncategorized">Uncategorized</button>
  </div>
</p>

<button class="width: 100%; padding: 10px 0; background-color: #007bff; color: white; border: none; cursor: pointer;">Click Me</button>

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
    });
</script>
