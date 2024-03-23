---
layout: page
title: A worldwatcher
# support: [jquery, gallery]
---

At the end of our wonderful three week road trip at the West Coast of the US, we spent about four days in the wonderful city of San Francisco. The city's well known for the Golden Gate Bridge and its fog, but has so much more up its sleeve!

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.19/js/lightgallery-all.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.19/css/lightgallery.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.0/isotope.pkgd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.0/imagesloaded.pkgd.min.js"></script>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery.js/dist/css/lightgallery.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/lightgallery.js/dist/js/lightgallery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/isotope-layout@3.0.6/dist/isotope.pkgd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/imagesloaded@4.1.4/imagesloaded.pkgd.min.js"></script> -->
</head>

{% include gallery-layout.html gallery=site.data.galleries.san-francisco %}

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
});
</script>
