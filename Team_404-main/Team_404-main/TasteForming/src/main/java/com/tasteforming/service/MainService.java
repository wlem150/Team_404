package com.tasteforming.service;
// 김정우

import java.util.List;
import java.util.Map;

import com.tasteforming.domain.RestaurantVO;

public interface MainService {
	public Map<String, List<RestaurantVO>> getType(String address);
	public List<RestaurantVO> getAllData();
	public List<RestaurantVO> getSearch(String keyword);
	public RestaurantVO get(long res_no);
	public List<RestaurantVO> getaddress(long address);
	public int updateReview(Long res_no);

}
