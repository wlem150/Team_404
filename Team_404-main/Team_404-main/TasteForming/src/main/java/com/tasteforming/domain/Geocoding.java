package com.tasteforming.domain;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;


public class Geocoding {
	public static String[] getGeocode(String address) {
		String[] latlng = new String[2];

		String clientId = "h8i759eo14";
		String clientSecret = "GpKvKjtt1Q6PO6HIDt7iT1bDDvjTsbiBLh0eWGUl";
		String addr;
		try {
			addr = URLEncoder.encode(address, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return latlng;
		}

		String apiURL = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=" + addr;

		URL url;
		HttpURLConnection con;
		try {
			url = new URL(apiURL);
			con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientId);
			con.setRequestProperty("X-NCP-APIGW-API-KEY", clientSecret);

			int responseCode = con.getResponseCode();

			BufferedReader br;

			if (responseCode == 200) {
				br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
			} else {
				br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
			}

			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = br.readLine()) != null) {
				response.append(inputLine);
			}

			br.close();

			JSONTokener tokener = new JSONTokener(response.toString());
			JSONObject object = new JSONObject(tokener);
			JSONArray arr = object.getJSONArray("addresses");

			if (arr.length() > 0) {
				JSONObject temp = (JSONObject) arr.get(0);
				latlng[0] = temp.getString("y");
				latlng[1] = temp.getString("x");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return latlng;
	}

	public static List<String[]> getGeocodes(List<String> addresses) {
		List<String[]> geocodes = new ArrayList<>();

		for (String address : addresses) {
			String[] latlng = getGeocode(address);
			geocodes.add(latlng);
		}

		return geocodes;
	}
}