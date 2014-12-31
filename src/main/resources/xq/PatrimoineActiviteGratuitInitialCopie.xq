<html>
<body>
<h1>Voici la liste des patrimoine ayant des activitées GRATUITE</h1>
<ul>
{


for $x in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription

where $x/offres/offre/gratuit=1
order by $x/lieuNom 
return <li><h1>{data($x/lieuNom)}</h1>: {data($x/offres/offre/titre)} </li>
}

</ul>
</body>
</html>

