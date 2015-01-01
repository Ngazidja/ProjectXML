(:le nombre de lieu par régions:)
declare function local:nbLieuParRegion() {
  for $path in doc("../xml/jep2014.xml")//ficheInscription
  let $region :=  $path/lieuRegion
  group by $region
  order by $region
  
  return <div><region>{$region}</region> {count($path/lieuNom)}</div>
};

declare function local:lieuParRegion() {
  for $path in doc("../xml/jep2014.xml")//ficheInscription
  let $region :=  $path/lieuRegion
  group by $region
  order by $region
  return <div><region>{$region}</region> <lieu>{$path/lieuNom}</lieu></div>
};


<p>{local:nbLieuParRegion()}</p>