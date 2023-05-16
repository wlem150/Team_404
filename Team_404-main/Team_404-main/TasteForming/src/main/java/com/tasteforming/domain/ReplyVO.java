package com.tasteforming.domain;

import java.sql.Date;
import lombok.Data;


@Data
public class ReplyVO {
	
	private Long review_no;
	private Long board_no;

	private String reply;
	private Date regDate;
	private Date updateDate;
	private String userId;
		
}
 