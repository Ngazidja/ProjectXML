<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="index">
		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1 " />
				<title>JEP</title>
				<link rel="stylesheet " type="text/css" href="css/css.css" />
			</head>
			<body>
				<center>
					<header>
						<span>Programme des éditions des Journées Européennes du
							Patrimoine (JEP)</span>
					</header>
					<div class="menu">
						<ul>
							<li class="icon-home" title="Accueil" onclick="viewPage('accueil')"></li>
							<li class="icon-images" title="Graphiques" onclick="viewPage('graphiques')"></li>
							<li class="icon-location" title="Map" onclick="viewPage('map')"></li>
							<li class=" icon-file-pdf" title="PDF" onclick="viewPage('PDF')"></li>
							<li class="icon-stats" title="Statistiques" onclick="viewPage('statistiques')"></li>
							<li>
								<input type="search" placeholder="Recherche..." />
							</li>
						</ul>
					</div>
				</center>
				<xsl:for-each select="div">
					<div>
						<p>
							<xsl:value-of select="." />
						</p>
					</div>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="form">
		<!-- TODO: Auto-generated template -->
		<html>
			<head>
				<meta charset="ISO-8859-1" />
				<title>Formulaire</title>
				<link rel="stylesheet " type="text/css" href="css/css.css" />
				<style type="text/css">
					h2
					{
					color:ff0000;font-size:12px;
					}
					div#form
					{
					display:
					inline-block;
					border: 1px solid black;
					}
				</style>

			</head>
			<body>
				<center>
					<header>
						<span>Programme des éditions des Journées Européennes du
							Patrimoine (JEP)</span>
					</header>
					<div class="menu">
						<ul>
							<li class="icon-home" title="Accueil" onclick="viewPage('accueil')"></li>
							<li class="icon-images" title="Graphiques" onclick="viewPage('graphiques')"></li>
							<li class="icon-location" title="Map" onclick="viewPage('map')"></li>
							<li class=" icon-file-pdf" title="PDF" onclick="viewPage('PDF')"></li>
							<li class="icon-stats" title="Statistiques" onclick="viewPage('statistiques')"></li>
							<li>
								<input type="search" placeholder="Recherche..." />
							</li>
						</ul>
					</div>
				</center>

				<h1>Liste des patrimoines</h1>
				<xsl:for-each select="div">
					<div>
						<xsl:attribute name="id">form</xsl:attribute>
						<h2>
							<xsl:value-of select="h1" />
						</h2>
						<p>
							<xsl:value-of select="p" />
						</p>
					</div>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="adresse">
		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1 " />
				<title>Adresse</title>
				<link rel="stylesheet " type="text/css" href="css/css.css" />
			</head>
			<body>
				<center>
					<header>
						<span>Programme des éditions des Journées Européennes du
							Patrimoine (JEP)</span>
					</header>
					<div class="menu">
						<ul>
							<li class="icon-home" title="Accueil" onclick="viewPage('accueil')"></li>
							<li class="icon-images" title="Graphiques" onclick="viewPage('graphiques')"></li>
							<li class="icon-location" title="Map" onclick="viewPage('map')"></li>
							<li class=" icon-file-pdf" title="PDF" onclick="viewPage('PDF')"></li>
							<li class="icon-stats" title="Statistiques" onclick="viewPage('statistiques')"></li>
							<li>
								<input type="search" placeholder="Recherche..." />
							</li>
						</ul>
					</div>
				</center>
				<ul>
					<xsl:for-each select="p">
						<li>
							<xsl:value-of select="." />
						</li>
					</xsl:for-each>
				</ul>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>