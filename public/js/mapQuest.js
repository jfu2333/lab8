function initMap() {
L.mapquest.key = '0rj4v75MQDfrfVmdHnsqwcQzcOyuRDqE';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.882703, -117.235757],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});

L.marker([32.882703, -117.235757]).addTo(map);
}