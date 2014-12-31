(:Il y a plusieurs fonction dans ce code.
Le but de ce fichier est de découpé en plusieurs fonction l'extraction des données puis de faire une fonction qui les appel toutes:)

(:J'ai mis des for de partout mais il faudra faire en sorte mettre des let afin de récupéré qu'une seul donnée et non toutes les données:)

module namespace proj="xml";

(:Nom du lieu. On pourra accéder au site web si il est fourni bien évidemment:)
declare function proj:lieuNom_Site()
{
  for $path in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
return if (exists($path/sitesInternet/lieuSiteInternet))
then <a href="{data($path/sitesInternet/lieuSiteInternet)}"><h1>{data($path/lieuNom)}</h1></a>
else <h1>{data($path/lieuNom)}</h1>
};

(: Affiche l'adresse complete (adresse, code postale, commune et pays :)
declare function proj:adresse()
{
  for $path in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription[1]
return <p>{data($path/lieuAdresse)}<br />{data($path/lieuCodePostal)}{data(" ")}{data($path/lieuCommune)}{data(" ")}{data($path/lieuPays)}</p>
};

(:Region:)
declare function proj:region()
{
  for $path in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  return <p>{data($path/lieuRegion)}</p>
};

(:La position des patrimoines, si elle est absente afficher Position absente
Je n'arrive à mettre une double condition, si latitude et longitude alors:)
declare function proj:position()
{
  for $x in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
   return if($x/lieuLatitude and $x/lieuLongitude)
   then <div><p>{data($x/lieuLatitude)} {data(" ")} {data($x/lieuLongitude)}</p></div>
   else <p/>
};

(:Affiche des données complémentaires: Accessibilité, région, accessible ou pas aux handicapés:)
declare function proj:infoCompl()
{
  let $path := doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription[1]
  return
   <p>{if($path/lieuAcces) then <span>ACCESSIBILITE: {data($path/lieuAcces)}</span> else <span/>} {data($path/lieuRegion)}<br /> Acces total handicapes: {if(data($path/lieuAccesTotalHandicapes) = 0) then <span>NON</span> else <span>OUI</span> }<br />Acces partiel handicapes: {if(data($path/lieuAccesPartielHandicapes) = 0) then <span>NON</span> else <span>OUI</span> } </p>
};

(:Affiche la liste des activitées des différents patrimoine, en effet il peut y avoir plusieurs activités par patrimoine.:)
declare function proj:offres()
{
  for $i in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  return <sp>{data($i/lieuNom)}: {for $x in $i/offres/offre
  return <p><span>{data($x/dateDebut)} - {data($x/dateFin)}</span> : {data($x/titre)}<br />HORAIRES: <span>{data($x/horaires)}</span><br />GRATUIT:{if($x/gratuit = 0)then <span>NON</span> else<span>OUI</span>}<br />INSCRIPTION NECESSAIRE:{if($x/inscriptionNecessaire = 0)then <span>NON</span> else<span>OUI</span>}<br />SUR INVITATION:{if($x/surInvitation = 0)then <span>NON</span> else<span>OUI</span>}</p>}</sp>
};

declare function proj:form($nom as xs:string, $adresse as xs:string, $codePostal , $commune as xs:string, $region as xs:string)
{
  if ($nom = "" and $adresse = "" and string-length($codePostal) < 5 and $region = "") then
   for $path in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  where proj:contains( $path/lieuCommune , $commune)
  return
  <div>
  <h1>{$path/lieuNom}</h1>
  <p>{$path/lieuAdresse}{$path/lieuCodePostal}{$path/lieuCommune}{$path/lieuRegion}</p>
  </div>
  else
  for $path in doc("../xml/jep2014.xml")/programmeDataEdition/fichesInscription/ficheInscription
  where ($nom != "" and proj:contains($path[lieuCommune = $commune]/lieuNom , $nom)) or ($adresse != "" and proj:contains($path[lieuCommune = $commune]/lieuAdresse , $adresse)) or ($codePostal != "" and proj:contains(xs:string($path[lieuCommune = $commune]/lieuCodePostal), $codePostal)) or ($region != "" and proj:contains($path[lieuCommune = $commune]/lieuRegion , $region))
  
  return
  <div>
  <h1>{$path/lieuNom}</h1>
  <p>{$path/lieuAdresse}{$path/lieuCodePostal}{$path/lieuCommune}{$path/lieuRegion}</p>
  </div>
 
};

(: verifie si une chaine contient la sous chaine sans contrainte de case :)
declare function proj:contains($path as xs:string? , $substring as xs:string )  as xs:boolean? {
   contains(upper-case($path), upper-case($substring))
};

(:Reste à voir typeVisiteCommentee, conditions, theme/libelle, typeVisiteCircuit, lieuClasseMH, lieuInscritMH, lieuNumInsee :)

(:Appel de toutes les fonctions:)
declare function proj:appel()
{
  <body>
  proj:lieuNom_Site()
  proj:adresse()
  proj:offres()
  proj:position()
  </body>
};

