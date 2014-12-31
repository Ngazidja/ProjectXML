<%@ include file="header.html" %>
	
	
	<!-- JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js" type="text/javascript"></script>
<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
<!-- Bootstrap core JavaScript -->
<script src="js/bootstrap.min.js"></script>


<script type="text/javascript">

// creartion de la map
var map = new google.maps.Map(document.getElementById('map-canvas'), {
	zoom: 14,
	center: new google.maps.LatLng(43.7, 7.27),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, tr;

$('#data-map-hotel tbody tr').each(function() {

	tr = $(this);

	marker = new google.maps.Marker({
		position: new google.maps.LatLng(tr.find(".latitude").text(), tr.find(".longitude").text()),
		map: map
	});

	google.maps.event.addListener(marker, 'click', (function(marker, tr) {
		return function() {
			infowindow.setContent(
				'<div class="info-hotel"><b>' + tr.find(".name_fr").text() + '</b> <a href="/ProjetXML/details?id='+tr.find(".id").text()+'">plus d\'infos</a><br>'
				+ tr.find(".address_line1").text() + '<br>'
				+ tr.find(".zip").text() + ' ' + tr.find(".city").text() + '<br>'
				+ tr.find(".phone").text() + '<br>'
				+ tr.find(".email").text() + '<br>'
				+ '<a href="' + tr.find(".website").text() + '">' + tr.find(".website").text() + '</a></div>'
				+ '<img class="apercu-img-hotel" src="' + tr.find(".1st-image").text() + '">'
			);
			infowindow.open(map, marker);
		}
	})(marker, tr));

});
</script>
	
	
<%@ include file="footer.html" %>