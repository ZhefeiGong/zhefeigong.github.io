---
layout: plain
title: Be a Worldwatcher
description: >
  A picture is worth a thousand words
---

<!-------------------------------------- THE HEAD -------------------------------------->
<head>
    <title>Advanced Marker Accessibility</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./test.js"></script>
</head>

<!-------------------------------------- THE BODY -------------------------------------->
<body>
    <div id="map"></div>
    <!--
      The `defer` attribute causes the callback to execute after the full HTML
      document has been parsed. For non-blocking uses, avoiding race conditions,
      and consistent behavior across browsers, consider loading using Promises.
      See https://developers.google.com/maps/documentation/javascript/load-maps-js-api
      for more information.
      -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBlxDPSkfw9ZBQ5zkKA3mpgVD7twJVATI&callback=initMap&libraries=marker&v=beta"
      defer
    ></script>
</body>
 
<!-------------------------------------- THE SCRIPT -------------------------------------->