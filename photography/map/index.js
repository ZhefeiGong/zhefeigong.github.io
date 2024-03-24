
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 34.84555, lng: -111.8035 },
      mapId: "4504f8b37365c3d0",
    });

    const tourStops = [
      {
        position: { lat: 34.8791806, lng: -111.8265049 },
        title: "Boynton Pass",
        picurl: "/assets/ori/test2_200x200.png",
      },
      {
        position: { lat: 34.8559195, lng: -111.7988186 },
        title: "Airport Mesa",
        picurl: "/assets/ori/test2_200x200.png",
      },
      {
        position: { lat: 34.832149, lng: -111.7695277 },
        title: "Chapel of the Holy Cross",
        picurl: "/assets/ori/test2_200x200.png",
      },
      {
        position: { lat: 34.823736, lng: -111.8001857 },
        title: "Red Rock Crossing",
        picurl: "/assets/ori/test2_200x200.png",
      },
      {
        position: { lat: 34.800326, lng: -111.7665047 },
        title: "Bell Rock",
        picurl: "/assets/ori/test_150x150.png",
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
        infoWindow.open(anchor=marker, marker.map);
      });
    });
  }

  window.initMap = initMap;

// // This example displays a marker at the center of Australia.
// // When the user clicks the marker, an info window opens.
// function initMap() {
//   const uluru = { lat: -25.363, lng: 131.044 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   const contentString =
//     '<div id="content">' +
//     '<div id="siteNotice">' +
//     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
//     '<div id="bodyContent">' +
//     '<a href="https://zhefeigong.github.io/photography/">'+
//     '<img src="/assets/ori/test_200x200.png" alt="test">' + 
//     '</a>' +
//     "</div>" +
//     "</div>" +
//     "</div>";
//   const infowindow = new google.maps.InfoWindow({
//     content: contentString,
//     ariaLabel: "Uluru",
//   });
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map,
//     title: "Uluru (Ayers Rock)",
//   });

//   marker.addListener("click", () => {
//     infowindow.open({
//       anchor: marker,
//       map,
//     });
//   });
// }

// window.initMap = initMap;
