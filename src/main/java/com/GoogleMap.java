package com;
import java.util.ArrayList;


public class GoogleMap {
	
	private ArrayList<Cordnate> myCordnate;
	private String url;
	GoogleMap(){
		myCordnate = new ArrayList<Cordnate>();
		url = "";
	}

	public void addCordnate(double lat_, double lon_){
		myCordnate.add(new Cordnate(lat_, lon_));
	}
	
	public String getMarkers(){
		String markers="&markers=size:mid%7Ccolor:green";
		for(Cordnate c : myCordnate){
			markers += "%7C"+c.getLat()+","+c.getLon();
		}
		return markers;
	}
	
	public void setPoint(){
		url += "http://maps.googleapis.com/maps/api/staticmap?size=400x280&maptype=roadmap&sensor=false";
		url += this.getMarkers();
	}
	
	public String toString(){
		return url;
	}
	
}