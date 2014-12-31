package com;

public class Cordnate {

	private double lat, lon;
	
	Cordnate(double lat_, double lon_){
		lat = lat_;
		lon = lon_;
	}
	
	public double getLat(){
		return lat;
	}
	
	public double getLon(){
		return lon;
	}
}