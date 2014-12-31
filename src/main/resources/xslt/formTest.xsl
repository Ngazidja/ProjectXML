<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="form">
		<!-- TODO: Auto-generated template -->
		<html>
			<head>
				<meta charset="utf-8" />
				<title>Formulaire</title>
				<style type="text/css">
					h2
					{
					color:ff0000;font-size:12px;
					}
					div
					{
					display: inline-block;
					border: 1px solid black;
					}
				</style>
			</head>
			<body>
			<h1>Liste des patrimoines</h1>
				<xsl:for-each select="div">
					<div>
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
</xsl:stylesheet>