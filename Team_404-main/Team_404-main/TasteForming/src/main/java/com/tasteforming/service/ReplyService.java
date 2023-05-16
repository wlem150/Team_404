package com.tasteforming.service;

import java.util.List;

import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.ReplyPageDTO;
import com.tasteforming.domain.ReplyVO;

public interface ReplyService {

	public int register(ReplyVO vo); 	//댓글 등록하기
	
	public ReplyVO get(Long review_no); //특정 게시글 번호의 댓글 가져오기
	
	public int modify(ReplyVO vo);		//댓글 수정하기
	
	public int remove(Long review_no);	//댓글삭제하기
	
	public List<ReplyVO> getList(Criteria cri, Long board_no); //전체 댓글 가져오기

	public ReplyPageDTO getListWithPaging(Criteria cri, Long board_no);

}