package com;


import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import org.basex.core.Context;
import org.basex.query.QueryException;
import org.basex.query.QueryProcessor;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;

/**
 * Servlet implementation class Hello
 */
public class Hello extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String absoluteDiskPathXq;
	private Context contexte;
	private String xml;
	private String relativeWebPathXq;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Hello() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("Adresse.doGet()");
		ServletContext servletContext = request.getSession().getServletContext();
		relativeWebPathXq = "/home/zalbiya/git/ProjectXML/src/main/resources/xq/PatronPatrimoineDescription.xq";
		absoluteDiskPathXq = servletContext.getRealPath(relativeWebPathXq);

		String type = request.getParameter("type");

		// Nouveau contexte Basex
		contexte = new Context();

		xml = "<form>\n";
		//xml += processQuery("lieuNom_Site()") + "\n";
		xml += processQuery("form('', '', '', 'paris', '')") + "\n";	
		xml += "\n</form>";
		System.out.println(xml);
		// Demandes d'affichage en html
		if(type == null || !type.equals("pdf")) {
			String relativeWebPathXslt = "/home/zalbiya/git/ProjectXML/src/main/resources/xslt/formTest.xsl";
			String absoluteDiskPathXslt = servletContext.getRealPath(relativeWebPathXslt);

			// On transforme le XML r�cuper� par la requ�te Xquery vers du Html avec Xsl
			String html = null;
			try {
				html = creerHtml(xml, relativeWebPathXslt);
			} catch (Exception e) {
				e.printStackTrace();
			}
			System.out.println(html);
			PrintWriter out = response.getWriter();
			out.print(html);

			// Envoi � la vue
			//request.setAttribute("htmlContent", html);
			//this.getServletContext().getRequestDispatcher( "/stats.jsp" ).forward( request, response );
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	private String creerHtml(String xml, String xsl) throws Exception {

		// Cr�ation de la source DOM
		DocumentBuilderFactory fabriqueD = DocumentBuilderFactory.newInstance();
		DocumentBuilder constructeur = fabriqueD.newDocumentBuilder();

		Document document = constructeur.parse(new InputSource(new StringReader(xml)));
		Source source = new DOMSource(document);

		// Create the stream that will receive the result of the transformation
		ByteArrayOutputStream htmlStreamResult = new ByteArrayOutputStream();
		// Transform input XML doc in HTML stream
		StreamResult streamResult = new StreamResult( htmlStreamResult );

		// Configuration du transformer
		TransformerFactory fabriqueT = TransformerFactory.newInstance();
		StreamSource stylesource = new StreamSource(new File(xsl));
		Transformer transformer = fabriqueT.newTransformer(stylesource);
		transformer.setOutputProperty(OutputKeys.METHOD, "html");

		// Transformation
		transformer.transform((DOMSource)source, streamResult);

		return htmlStreamResult.toString();
	}
	
	private String processQuery(String queryName) {
		String requete = "import module namespace proj = 'xml' at '"+relativeWebPathXq+"'; proj:" + queryName ;
		String resultat = null;
		QueryProcessor proc = new QueryProcessor(requete, contexte);
		try {
			resultat = proc.execute().toString();
		} catch (QueryException e) {
			System.out.println(e.getMessage());
		}

		// Close the query processor
		proc.close();

		return resultat;
	}
	

}


//package com;
//
//import java.io.File;
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.io.StringWriter;
//
//import javax.servlet.ServletContext;
//import javax.servlet.ServletException;
//import javax.servlet.http.*;
//import javax.xml.transform.Transformer;
//import javax.xml.transform.TransformerException;
//import javax.xml.transform.TransformerFactory;
//import javax.xml.transform.stream.StreamResult;
//import javax.xml.transform.stream.StreamSource;
//
//import net.sf.saxon.TransformerFactoryImpl;
//
//import org.basex.core.*;
//import org.basex.core.cmd.*;
//import org.basex.data.Result;
//import org.basex.query.QueryException;
//import org.basex.query.QueryProcessor;
//import org.basex.query.iter.Iter;
//import org.basex.query.value.item.Item;
//
//
///**
// * Servlet implementation class Hello
// */
//public class Hello extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//       
//    /**
//     * @see HttpServlet#HttpServlet()
//     */
//    public Hello() {
//        super();
//        // TODO Auto-generated constructor stub
//    }
//
//   
//
//    public void doGet(HttpServletRequest request,
//                      HttpServletResponse response)
//              throws ServletException, IOException
//    {
//
//		ServletContext servletContext = request.getSession().getServletContext();
//		String relativeWebPathXq = "/home/zalbiya/Documents/CoursM1Miage/workspaceEclipseLabs/FirstApp/src/main/resources/xml/requetes.xq";
//		// Nouveau contexte Basex
//		Context contexte = new Context();
//		
//		String requete = "import module namespace proj= 'xml' at '"+relativeWebPathXq +"'; proj:patrimoinesWithActivitiesFree()";
//		String resultat = null;
//		QueryProcessor procInfoHotel = new QueryProcessor(requete, contexte);
//		try {
//			resultat = procInfoHotel.execute().toString();
//			System.out.println("Hello.doGet()");
//		} catch (QueryException e) {
//			System.out.println(e.getMessage());
//		}
//		String res = null;
//		try {
//			 res =xmlxsl(new File("/home/zalbiya/Documents/CoursM1Miage/workspaceEclipseLabs/FirstApp/src/main/resources/xslt/functionOffreResult.xml"),new File("/home/zalbiya/Documents/CoursM1Miage/workspaceEclipseLabs/FirstApp/src/main/resources/xslt/functionOffre.xsl"));
//		} catch (TransformerException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		PrintWriter out = response.getWriter();
//		out.print(res);
//	    // Fermer le processor
//	    procInfoHotel.close();
//	    
//	    // Envoi à la vue
//	    request.setAttribute("Patrimoines", res);
//	    //this.getServletContext().getRequestDispatcher( "/patrimoines.jsp" ).forward( request, response );
//	}
//    
//    
//    public static String xmlxsl(File sFileXML, File sFileXSL) throws TransformerException{
//		 
//		 
//		 // Charge le XSL
//	      TransformerFactory tFactory = TransformerFactoryImpl.newInstance();
//	      StreamSource ss = new StreamSource(sFileXSL);
//	      Transformer transformer = tFactory.newTransformer(ss);
//
//	      StringWriter swOut = new StringWriter();
//	      transformer.transform(new StreamSource(sFileXML),new StreamResult(swOut));
//
//	      return swOut.getBuffer().toString();
//	}
//	
//  }