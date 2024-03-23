---
layout: plain
title: A Very Basic Example
support: [jquery, gallery]
---

At the end of our wonderful three week road trip at the West Coast of the US, we spent about four days in the wonderful city of San Francisco. The city's well known for the Golden Gate Bridge and its fog, but has so much more up its sleeve!

<head>
    <!-- A jQuery plugin that adds cross-browser mouse wheel support. (Optional) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <!-- Actual includes needed for the gallery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.19/js/lightgallery-all.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.19/css/lightgallery.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.0/isotope.pkgd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.0/imagesloaded.pkgd.min.js"></script>
</head>

{% include gallery-layout.html gallery=site.data.galleries.san-francisco %}

<!-- <script>
    // init lightGallery
    $(document).ready(function() {
      var $gallery{% if include.id_number %}{{ include.id_number }}{% endif %} = $("#image-gallery{% if include.id_number %}-{{ include.id_number }}{% endif %}").lightGallery({
        thumbnail: false,
        selector: '.image'
      });
    });
    
    // init isotope
    var $grid{% if include.id_number %}{{ include.id_number }}{% endif %} = $('#image-gallery{% if include.id_number %}-{{ include.id_number }}{% endif %}').isotope({
      percentPosition: true,
      columnWidth: '#gallery-sizer{% if include.id_number %}-{{ include.id_number }}{% endif %}',
      itemSelector: '.image-wrapper',
      layoutMode: "masonry"
    });
    
    // layout Isotope after each image loads
    $grid{% if include.id_number %}{{ include.id_number }}{% endif %}.imagesLoaded().progress( function() {
      $grid{% if include.id_number %}{{ include.id_number }}{% endif %}.masonry();
    });    
</script> -->

<script>
$(document).ready(function() {
  $("#image-gallery").lightGallery({
    selector: '.image'
  });
  var $grid = $('#image-gallery').isotope({
    itemSelector: '.image-wrapper',
    layoutMode: 'masonry'
  });
  $grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
  });
});
</script>
