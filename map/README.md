---
layout: plain
title: Be a Worldwatcher
description: >
  A picture is worth a thousand words
---


<head>
  <title>Advanced Marker Accessibility</title>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
</head>

<!-- <div id="map"></div> -->

<!-- prettier-ignore -->

<iframe
  width="600"
  height="450"
  style="border:0"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCBlxDPSkfw9ZBQ5zkKA3mpgVD7twJVATI
    &q=Space+Needle,Seattle+WA">
</iframe>

<!-- <script>
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
  ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "beta"});
</script>
  -->

<!-- <div id="map">
  <p>
    Here's a test sentance
  </p>
  <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]=  {});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
  ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "beta"});
  </script>
</div> -->

<!-- key : AIzaSyCBlxDPSkfw9ZBQ5zkKA3mpgVD7twJVATI -->

<!-------------------------------------- THE SCRIPT -------------------------------------->
<script>
async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    const map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 12,
        center: { lat: 34.84555, lng: -111.8035 },
        mapId: '4504f8b37365c3d0',
    });

    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
        {
            position: { lat: 34.8791806, lng: -111.8265049 }, 
            title: "Boynton Pass"
        },
        {
            position: { lat: 34.8559195, lng: -111.7988186 }, 
            title: "Airport Mesa"
        },
        {
            position: { lat: 34.832149, lng: -111.7695277 }, 
            title: "Chapel of the Holy Cross"
        },
        {
            position: { lat: 34.823736, lng: -111.8001857 }, 
            title: "Red Rock Crossing"
        },
        {
            position: { lat: 34.800326, lng: -111.7665047 }, 
            title: "Bell Rock"
        },
    ];

    // Create an info window to share between markers.
    const infoWindow = new InfoWindow();

    // Create the markers.
    tourStops.forEach(({position, title}, i) => {
        const pin = new PinElement({
            glyph: `${i + 1}`,
        });

        const marker = new AdvancedMarkerElement({
            position,
            map,
            title: `${i + 1}. ${title}`,
            content: pin.element,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener('click', ({ domEvent, latLng }) => {
            const { target } = domEvent;
            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
        });
    });
}

initMap();
export{ };


</script>