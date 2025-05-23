
let mapToken = MapToken;
console.log(mapToken);
mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style : "mapbox://styles/mapbox/streets-v11",
        center:listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 5// starting zoom
    });
  
  // Create a default Marker and add it to the map.
  const marker1 = new mapboxgl.Marker({color: "red"})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({offset:25}).setHTML(`<h3>${listing.location}</h3><p>Exact Location provided after booking</p>`)
)
  .addTo(map);
