package com.tasteforming.domain;


import java.util.Date;

import lombok.Data;

@Data
public class VisitorVO {
	private long vno;
	private String userId;
	private String res_Name;
	private Date visitedDate;
	private boolean enabled;
	private long res_No;
}
