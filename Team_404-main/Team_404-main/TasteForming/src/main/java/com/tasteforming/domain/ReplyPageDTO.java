package com.tasteforming.domain;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReplyPageDTO {
	private int replyCnt;		//해당개시글 총 댓글 수
	private List<ReplyVO> list;	// 해당 게시글에서 페이지에 맞는 댓글 목록
}
