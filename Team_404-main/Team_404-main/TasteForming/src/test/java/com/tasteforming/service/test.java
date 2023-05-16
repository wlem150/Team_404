package com.tasteforming.service;

public class test {
	public static void main(String[] args) {
		String a = "서울%부산%강원도";
		String[] b = a.split("%");
		for (int i = 0; i < b.length; i++) {
			System.out.println(b[i]);
		}
	}
}
