<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="form">
		<!-- TODO: Auto-generated template -->
		<html>
			<body>

				<!-- Formulaire de recherche -->
				<form action="search" method="post" role="form">

					<div class="form-group">
						<label for="name">Ville</label>
						<input type="text" name="ville" class="form-control"
							placeholder="Ville"></input>
					</div>

					<div class="form-group">
						<label for="name">Région</label>
						<input type="text" name="region" class="form-control"
							placeholder="Région"></input>
					</div>
					
					<button type="submit">Rechercher</button>

				</form>
			</body>
		</html>
		<!-- End - Formulaire de recherche -->
		<%

String listeHotels = (String)request.getAttribute("hotels");
if (listeHotels != null) {
	if (listeHotels == "") {
	%>	<!-- Afficher une alert signifiant de l'absence de résultat sinon -->
		<div class="alert alert-info alert-dismissable">
			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			Désolé, aucun hôtel ne correspond aux critères sélectionnés.
			<br/>
			Nous vous invitons à effectuer une nouvelle recherche en modifiant vos critères de sélection.
		</div>
	
<% } else { %>
		<!-- Afficher la table si des données sont reçu -->
		<table id="table-search-hotel" class="table table-bordered table-striped">
		  <thead>
		    <tr>
		      <th>Ville</th>
		      <th>Region</th>
		    </tr>
		  </thead>
		  <tbody>
		    <%=listeHotels%>
		  </tbody>
		</table>
	
<% } 
}%>

<!-- Faire fonctionner un formulaire en xsl et faire fonctionner le retour -->
	</xsl:template>
</xsl:stylesheet>