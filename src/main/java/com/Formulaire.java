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
public class Formulaire extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String absoluteDiskPathXq;
	private Context contexte;
	private String xml;
	private String relativeWebPathXq;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Formulaire() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("Formulaire.doGet()");
		ServletContext servletContext = request.getSession().getServletContext();
		relativeWebPathXq = "src/main/resources/xq/PatronPatrimoineDescription.xq";
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
			String relativeWebPathXslt = "src/main/resources/xslt/formTest.xsl";
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