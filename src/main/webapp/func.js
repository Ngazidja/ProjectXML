/**
 * 
 */

$(function(){

})

/* -----  APPEL DES PAGES ----- */
function viewPage(_page){
	// console.log(_page);
	chgTitrePage(_page);
	if(_page=="accueil"){ 
		
	} else if(_page=="graphiques"){ 
		
	} else if (_page=="map"){
		displayMap();
	} else if(_page=="PDF"){ 
		
	} else if(_page=="statistiques"){ 
		
	}else{
		
	}
}

function chgTitrePage(_title){
	/*$("#titleDeLaPage").removeClass("moveTitle");
	$("#titleDeLaPage").empty();*/
	$("#titleDeLaPage").text(_title);
	/*$("#titleDeLaPage").addClass("moveTitle");*/
}
/* -----  MAP ----- */
function displayMap() {
	// définition des variables : myLatlng + myLatln
	var myLatlng = new google.maps.LatLng(48.8534100,2.3488000);
	var myLatln = new google.maps.LatLng(43.7031300,7.2660800);
	var _bordeau=new google.maps.LatLng(44.028249,5.157507);
	
	// options
	var mapOptions = {
			zoom: 4,
			center: myLatlng
	}
	// création de la map avec options
	var map = new google.maps.Map(document.getElementById('EmplacementDeLaPage'), mapOptions);

	// ajout des emplacements des markers ds la map

//	addMarker(myLatln,map,'Hello World : myLatln !');
//	addMarker(myLatlng,map,'Hello World : myLatlng !');
//	addMarker(_bordeau,map,'Hello World : myLatlng !');
	
	addMarker(myLatln,map,'Monaco');
	addMarker(myLatlng,map,'Paris');
	addMarker(_bordeau,map,'Marseille');


	// Chargement de la map
	google.maps.event.addDomListener(window, 'load', displayMap);
}

/* ----- AJOUT DES EMPLACEMENT DES MARKERS ----- */
function addMarker(_position,_map,_title){
	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({
		position: _position,
		map: _map,
		title: _title

	});	
	google.maps.event.addListener(marker, 'click', function() {
		//alert(_title);
	    map.setZoom(8);
	    map.setCenter(marker.getPosition());
	    infowindow.open(map, marker);
	  });

		  

}

