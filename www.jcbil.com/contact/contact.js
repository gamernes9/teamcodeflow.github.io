/*
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
*/


/*
function initialize() {
    var style = [
      {
        featureType: "all",
        stylers: [
          { hue: "#6699FF" },
          { saturation: -75 }
        ]
      },
      {
        featureType: "poi",
        elementType: "label",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    var homeGrantClough = new google.maps.LatLng(33.0774865,-97.0173400),
    
        mapOptions = {
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "Edited"] 
            },
            zoom: 15,
            center: homeGrantClough
        },
        
        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions),
        
        styledMapType = new google.maps.StyledMapType(style, {name: "Edited"}),
        
        marker1 = new google.maps.Marker({
            position: homeGrantClough, 
            map: map, 
            animation: google.maps.Animation.DROP,
            title:"Grant's House"
        }),
        
        infowindow1 = new google.maps.InfoWindow({
            content: "<div><h1>Grant's House</h1><p>465 Frankie Ln., Lewisville, TX,<br/> 75027, United States</p></div>"
        });
  
        map.mapTypes.set("Edited", styledMapType);
        map.setMapTypeId('Edited');
  
    // Add click listener 
  
    google.maps.event.addListener(marker1, 'click', function () {
        infowindow1.open(map, marker1);
        });
}

initialize();
*/