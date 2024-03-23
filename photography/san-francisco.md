---
layout: plain
title: A Very Basic Example
support: [jquery, gallery]
---

At the end of our wonderful three week road trip at the West Coast of the US, we spent about four days in the wonderful city of San Francisco. The city's well known for the Golden Gate Bridge and its fog, but has so much more up its sleeve!

{% include gallery-layout.html gallery=site.data.galleries.san-francisco %}


<script>
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
</script>
