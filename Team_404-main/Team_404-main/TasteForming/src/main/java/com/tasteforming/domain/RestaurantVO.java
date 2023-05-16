package com.tasteforming.domain;

import java.util.Date;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class RestaurantVO {

	private long res_No;
	private String res_Name;
	private Date create_Date;
	private String address;
	private String info;
	private String userId;
	private String menu;
	private String type;
	private String img_path;
	private String tel;
	private long likeCnt;
	private long reviewCnt;
}