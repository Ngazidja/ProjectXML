(:Info pour le formulaire, il serait peut etre préférable que cette fonction appel des fonctions mais on verra. Recherche à partir de la ville:)
declare function local:form($nom as xs:string, $adresse as xs:string, $codePostal , $commune as xs:string, $region as xs:string)
{
  if ($nom = "" and $adresse = "" and string-length($codePostal) < 5 and $region = "") then
   for $path in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  where local:contains( $path/lieuCommune , $commune)
  return
  <div>
  <h1>{$path/lieuNom}</h1>
  <p>{$path/lieuAdresse}{$path/lieuCodePostal}{$path/lieuCommune}{$path/lieuRegion}</p>
  </div>
  else
  for $path in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  where ($nom != "" and local:contains($path[lieuCommune = $commune]/lieuNom , $nom)) or ($adresse != "" and local:contains($path[lieuCommune = $commune]/lieuAdresse , $adresse)) or ($codePostal != "" and local:contains(xs:string($path[lieuCommune = $commune]/lieuCodePostal), $codePostal)) or ($region != "" and local:contains($path[lieuCommune = $commune]/lieuRegion , $region))
  
  return
  <div>
  <h1>{$path/lieuNom}</h1>
  <p>{$path/lieuAdresse}{$path/lieuCodePostal}{$path/lieuCommune}{$path/lieuRegion}</p>
  </div>
 
};

(: verifie si une chaine contient la sous chaine sans contrainte de case :)
declare function local:contains( $path as xs:string? , $substring as xs:string )  as xs:boolean? {
   contains(upper-case($path), upper-case($substring))
};
<infos>{local:form("musee", "","06300", "Nice", "")}</infos> (: augmenter l'affinement, je ne devrait avoir que matisse :)