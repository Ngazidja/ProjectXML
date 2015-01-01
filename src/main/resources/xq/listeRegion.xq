 declare function local:listeRegion() {
 for $path in distinct-values(doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription/lieuRegion)
 order by $path
 return <p>{$path}</p>
};

<p>{local:listeRegion()}</p>