package com.tasteforming.mapper;

import java.util.List;

import com.tasteforming.domain.ReviewVO;


public interface ReviewMapper {

	public List<ReviewVO> allReview(long res_No);
	// 리뷰 등록
	public int insert(ReviewVO reviewVO);
	
	public int update(ReviewVO reviewVO);
	
	public int deleteReview(long review_no);

	public long getAllReviewer(long res_No);
}