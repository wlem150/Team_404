package com.tasteforming.mapper;

import java.util.List;

import com.tasteforming.domain.RestaurantVO;

// 김정우
public interface MainMapper {
	public List<RestaurantVO> getAllData();
	public int updateReview(Long res_no);
	public List<RestaurantVO> getByAddress(List<String> list);
	public List<RestaurantVO> getSearch(String keyword);;
	public RestaurantVO read(long resNo);
}
