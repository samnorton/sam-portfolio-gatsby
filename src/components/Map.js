import React from "react"
import MapMarker from "../assets/images/logos/map-marker.png"

if (typeof window !== 'undefined') {
	window.initMap = function() {
		const map = new window.google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 15.1463554,
			lng: 120.5245996
		},
		zoom: 10,
		styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#d3d3d3"},{"lightness":50}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":50},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#4c4c4c"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#4c4c4c"},{"lightness":17},{"weight":1.2}]}]
	  })

	  new window.google.maps.Marker({
        position: { lat: 15.1463554, lng: 120.5245996 },
		icon: MapMarker,
		animation: window.google.maps.Animation.BOUNCE,
        map: map
    });
	}
  }

  








const Map = () => {
  return (
    <div id="map-container">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12 col-12 pl-0 pr-0">
					<div className="google-map">
						<div id="map"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Map
