---
layout: default
title: A More Complex Example
# no_menu_item: true # required only for this example website because of menu construction
support: [jquery, gallery]
---

This example shows how to include several galleries into one page. Also notice that some captions have been set.

{% include gallery-layout.html gallery=site.data.galleries.ghent-light-festival-1 id_number=1 %}

The pictures from part two:

{% include gallery-layout.html gallery=site.data.galleries.ghent-light-festival-2 id_number=2 %}

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