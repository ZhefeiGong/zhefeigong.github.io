---
layout: plain
title: Be a Worldwatcher
description: >
  A picture is worth a thousand words
---


<head>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
</head>

<body>
  <div id="map"></div>
  <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
  ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "beta"});</script>
</body>


<!-------------------------------------- THE SCRIPT -------------------------------------->
<script>
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 34.84555, lng: -111.8035 },
      mapId: "4504f8b37365c3d0",
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
      {
        position: { lat: 34.8791806, lng: -111.8265049 },
        title: "Boynton Pass",
      },
      {
        position: { lat: 34.8559195, lng: -111.7988186 },
        title: "Airport Mesa",
      },
      {
        position: { lat: 34.832149, lng: -111.7695277 },
        title: "Chapel of the Holy Cross",
      },
      {
        position: { lat: 34.823736, lng: -111.8001857 },
        title: "Red Rock Crossing",
      },
      {
        position: { lat: 34.800326, lng: -111.7665047 },
        title: "Bell Rock",
      },
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    tourStops.forEach(({ position, title }, i) => {
      const pinView = new google.maps.marker.PinView({
        glyph: `${i + 1}`,
      });
      const marker = new google.maps.marker.AdvancedMarkerView({
        position,
        map,
        title: `${i + 1}. ${title}`,
        content: pinView.element,
      });

      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;

        infoWindow.close();
        infoWindow.setContent(marker.title);
        infoWindow.open(marker.map, marker);
      });
    });
  }

  window.initMap = initMap;

</script>