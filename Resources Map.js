 function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 40.742071, lng: -74.170548},
            zoom: 18,
		});
		marker = new google.maps.Marker({
			map: map,
			animation: google.maps.Animation.DROP,
			position: {lat: 40.742071, lng: -74.170548},
		});
		marker2 = new google.maps.Marker({
			map: map,
			animation: google.maps.Animation.DROP,
			position: {lat: 40.742071, lng: -74.170548},
		});
		marker3 = new google.maps.Marker({
			map: map,
			animation: google.maps.Animation.DROP,
			position: {lat: 40.7420121, lng: -74.170548},
		});
		marker4 = new google.maps.Marker({
			map: map,
			animation: google.maps.Animation.DROP,
			position: {lat: 40.7420121, lng: -74.170548},
		});
		marker5 = new google.maps.Marker({
			map: map,
			animation: google.maps.Animation.DROP,
			position: {lat: 40.7420121, lng: -74.170548},
		});
 }