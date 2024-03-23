---
layout: plain
title: A worldwatcher
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

At the end of our wonderful three week road trip at the West Coast of the US

<p>
  <div class="button-group filter-button-group">
    <button data-filter="*">All</button>
    <button data-filter=".Asian">Asian</button>
    <button data-filter=".Europe">Europe</button>
    <button data-filter=".America">America</button>
    <button data-filter=":Uncategorised">Uncategorised</button>
  </div>
</p>

{% include gallery-layout.html gallery=site.data.galleries.ghent-light-festival-1 %}


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
      $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
    });
</script>

