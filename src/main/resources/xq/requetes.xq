module namespace proj="xml";

declare function proj:patrimoinesWithActivitiesFree() {
  for $x in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  where $x/offres/offre/gratuit=1
  order by $x/lieuNom 
  return <div>data($x/lieuNom) data($x/offres/offre/titre)</div>
};