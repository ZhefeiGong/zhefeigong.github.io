---
layout: plain
title: Be a Worldwatcher
description: >
  A picture is worth a thousand words.
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

<div id="interact-area" class="interact-area">
  
  <div id="search-button-group" class="search-button-group">
  <button class="search-btn" id="search-choose">Gallery</button>
  <button class="search-btn" id="search-world" onclick='location.href="/photography/map/";'>Journey</button>
  </div>
  
  <div id ="filter-button-group" class="filter-button-group">
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="*">All</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="China">China</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Switzerland">Switzerland</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Czech">Czech</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Denmark">Denmark</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="France">France</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Hungary">Hungary</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Italy">Italy</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Spain">Spain</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Sweden">Sweden</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Vatican">Vatican</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Korea">Korea</button>
    </div>
    <div class="choose-btn-wrapper">
    <button class="choose-btn" data-filter="Uncategorized">Uncategorized</button>
    </div>
  </div>

</div>


{% include gallery-layout.html gallery=site.data.galleries.zhefei-gallery %}

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


