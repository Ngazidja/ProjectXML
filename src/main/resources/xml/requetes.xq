module namespace proj = "xml";
declare namespace aml = 'http://ref.otcnice.com/webservice/';



declare function proj:patrimoinesWithActivitiesFree() {
  	for $x in doc("./jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  	 where $x/offres/offre/gratuit=1 order by $x/lieuNom 
return <div>{data($x/lieuNom)}</div>};