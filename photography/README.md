---
layout: plain
title: A worldwatcher
---

At the end of our wonderful three week road trip at the West Coast of the US, we spent about four days in the wonderful city of San Francisco. The city's well known for the Golden Gate Bridge and its fog, but has so much more up its sleeve!

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
