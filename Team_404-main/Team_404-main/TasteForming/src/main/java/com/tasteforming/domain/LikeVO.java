package com.tasteforming.domain;

import lombok.Data;

@Data
public class LikeVO {
	
	private long like_No;
	private String userId;
	private long res_No;
	private long like_Check;
	private String res_Name;
	private String evaluation;
	
}
