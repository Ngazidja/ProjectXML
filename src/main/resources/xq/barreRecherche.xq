module namespace proj="xml";

declare function proj:search($search) {
  for $path in doc("../xml/jep2014.xml")//ficheInscription
  where proj:contains($path/lieuNom, $search)
  return <p>{data($path/lieuNom)}</p>
};


declare function proj:contains($path as xs:string? , $substring as xs:string )  as xs:boolean? {
   contains(upper-case($path), upper-case($substring))
};

