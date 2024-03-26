
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 34.84555, lng: -111.8035 },
      mapId: "4504f8b37365c3d0",
    });

    const tourStops = [
      {
        position: { lat: 48.804750, lng: 8.311450 },
        title: "Baden",
        picurl: "/assets/markers/Baden.jpg",
      },
      {
        position: { lat: 41.385063, lng: 2.173404 },
        title: "Barcelona",
        picurl: "/assets/markers/Barcelona.jpg",
      },
      {
        position: { lat: 39.904202, lng: 116.407394  },
        title: "Beijing",
        picurl: "/assets/markers/Beijing.jpg",
      },
      {
        position: { lat: 46.948780, lng: 7.443604},
        title: "Bern",
        picurl: "/assets/markers/Bern.jpg",
      },
      {
        position: { lat: 47.499191, lng: 19.046520  },
        title: "Budapest",
        picurl: "/assets/markers/Budapest.jpg",
      },
      {
        position: { lat: 28.239875, lng: 112.94076  },
        title: "Changsha",
        picurl: "/assets/markers/Changsha.jpg",
      },
      {
        position: { lat: 30.569783, lng: 104.056304 },
        title: "Chengdu",
        picurl: "/assets/markers/Chengdu.jpg",
      },
      {
        position: { lat: 29.571534, lng: 106.540984 },
        title: "Chongqing",
        picurl: "/assets/markers/Chongqing.jpg",
      },
      {
        position: { lat: 55.676854, lng: 12.577685 },
        title: "Copenhagen",
        picurl: "/assets/markers/Copenhagen.jpg",
      },
      {
        position: { lat: 38.922261, lng: 121.606621  },
        title: "Dalian",
        picurl: "/assets/markers/Dalian.jpg",
      },
      {
        position: { lat: 30.193863, lng: 122.685807 },
        title: "Dongjidao",
        picurl: "/assets/markers/Dongjidao.jpg",
      },
      {
        position: { lat: 30.292998, lng: 120.138867 },
        title: "Hangzhou",
        picurl: "/assets/markers/Hangzhou.jpg",
      },
      {
        position: { lat: 56.045124, lng: 12.686980  },
        title: "Helsingborg",
        picurl: "/assets/markers/Helsingborg.jpg",
      },
      {
        position: { lat: 56.031176, lng: 12.588701 },
        title: "Helsingør",
        picurl: "/assets/markers/Helsingor.jpg",
      },
      {
        position: { lat: 46.686693, lng: 7.863870 },
        title: "Interlaken",
        picurl: "/assets/markers/Interlaken.jpg",
      },
      {
        position: { lat: 46.522519, lng: 6.632079 },
        title: "Lausanne",
        picurl: "/assets/markers/Lausanne.jpg",
      },
      {
        position: { lat: 29.556781, lng: 103.764100 },
        title: "Leshan",
        picurl: "/assets/markers/Leshan.jpg",
      },
      {
        position: { lat: 28.806354, lng: 104.803875 },
        title: "Lizhuang",
        picurl: "/assets/markers/Lizhuang.jpg",
      },
      {
        position: { lat: 27.121754, lng: 111.028326 },
        title: "Longhui",
        picurl: "/assets/markers/Longhui.jpg",
      },
      {
        position: { lat: 47.050091, lng: 8.310726 },
        title: "Lucerne",
        picurl: "/assets/markers/Lucerne.jpg",
      },
      {
        position: { lat: 55.704951, lng: 13.192156 },
        title: "Lund",
        picurl: "/assets/markers/Lund.jpg",
      },
      {
        position: { lat: 28.873024, lng: 105.439563 },
        title: "Luzhou",
        picurl: "/assets/markers/Luzhou.jpg",
      },
      {
        position: { lat: 45.764388, lng: 4.835813 },
        title: "Lyon",
        picurl: "/assets/markers/Lyon.jpg",
      },
      {
        position: { lat: 40.419543, lng: -3.688476 },
        title: "Madrid",
        picurl: "/assets/markers/Madrid.jpg",
      },
      {
        position: { lat: 55.606146, lng: 12.997422 },
        title: "Malmo",
        picurl: "/assets/markers/Malmo.jpg",
      },
      {
        position: { lat: 46.431624, lng: 6.909340  },
        title: "Montreux",
        picurl: "/assets/markers/Montreux.jpg",
      },
      {
        position: { lat: 32.056951, lng: 118.810472 },
        title: "Nanjing",
        picurl: "/assets/markers/Nanjing.jpg",
      },
      {
        position: { lat: 29.872059, lng: 121.549971  },
        title: "Ningbo",
        picurl: "/assets/markers/Ningbo.jpg",
      },
      {
        position: { lat: 46.498403, lng: 7.726057 },
        title: "Oeschinen",
        picurl: "/assets/markers/Oeschinen.jpg",
      },
      {
        position: { lat: 50.076301, lng: 14.446386 },
        title: "Prague",
        picurl: "/assets/markers/Prague.jpg",
      },
      {
        position: { lat: 41.905865, lng: 12.492039 },
        title: "Rome",
        picurl: "/assets/markers/Rome.jpg",
      },
      {
        position: { lat: 31.217969, lng: 121.484739 },
        title: "Shanghai",
        picurl: "/assets/markers/Shanghai.jpg",
      },
      {
        position: { lat: 47.209248, lng: 7.532269 },
        title: "Solothurn",
        picurl: "/assets/markers/Solothurn.jpg",
      },
      {
        position: { lat: 36.276171, lng: 117.098984 },
        title: "Taishan",
        picurl: "/assets/markers/Taishan.jpg",
      },
      {
        position: { lat: 31.288622, lng: 121.213836 },
        title: "Tongji",
        picurl: "/assets/markers/Tongji.jpg",
      },
      {
        position: { lat: 41.902296,  lng: 12.453517 },
        title: "Vatican",
        picurl: "/assets/markers/Vatican.jpg",
      },
      {
        position: { lat: 27.456065, lng: 114.174577 },
        title: "Wugongshan",
        picurl: "/assets/markers/Wugongshan.jpg",
      },
      {
        position: { lat: 28.456490, lng: 100.342481 },
        title: "Yading",
        picurl: "/assets/markers/Yading.jpg",
      },
      {
        position: { lat: 46.018885, lng: 7.755840 },
        title: "Zermatt",
        picurl: "/assets/markers/Zermatt.jpg",
      },
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    tourStops.forEach(({ position, title, picurl}, i) => {
      //
      const pinView = new google.maps.marker.PinView({
        glyph: `${i + 1}`,
      });
      //
      const marker = new google.maps.marker.AdvancedMarkerView({
        position,
        map,
        // title: `${i + 1}. ${title}`,
        title:
        '<div id="content">' +

        '<div id="siteNotice">' +
        "</div>" +

        `<h2 id="firstHeading" class="firstHeading">${title}</h2>` +
        
        '<div id="bodyContent">' +
        '<a href= https://zhefeigong.github.io/photography/>'+
        `<img src="${picurl}" alt="pic">` + 
        '</a>' +
        "</div>" +
        
        "</div>",
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