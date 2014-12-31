(:module namespace proj="xml";:)

(:Info pour le formulaire, il serai peut etre préférable que cette fonction appel des fonctions mais on verra :)
declare function local:form($ville as xs:string, $region as xs:string)
{
  for $path in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  where $path/lieuCommune = $ville or $path/lieuRegion = $region
return <div><h1>{$path/lieuNom}</h1><p>{$path/lieuAdresse}{$path/lieuCodePostal}{$path/lieuCommune}{$path/lieuRegion}</p></div>
};

<test>{local:form("Nice", "")}</test>