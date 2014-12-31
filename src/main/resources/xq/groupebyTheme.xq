(:Je n'arrive pas à faire de group by!!!:)

<html>
<body>
{
for $x in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
let $libelle := $x/offres/offre/themes/theme/libelle
group by $libelle
return <p> {data($libelle)} : {data($x/lieuNom)}</p> }
</body>
</html>