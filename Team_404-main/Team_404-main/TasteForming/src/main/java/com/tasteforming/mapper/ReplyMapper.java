package com.tasteforming.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.ReplyVO;

public interface ReplyMapper {
	
	public int insert(ReplyVO vo);
	
	public ReplyVO read(Long review_no);
	
	public int delete(Long board_no); 
	
	public int update(ReplyVO reply);
	
	public List<ReplyVO> getListWithPaging(@Param("cri") Criteria cri, @Param("board_no") Long board_no);
	
	public int getTotal(Long board_no);

	
}
