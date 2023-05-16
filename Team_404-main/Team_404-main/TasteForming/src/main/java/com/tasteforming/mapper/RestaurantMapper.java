package com.tasteforming.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tasteforming.domain.LikeVO;
import com.tasteforming.domain.RestaurantVO;
import com.tasteforming.domain.VisitorVO;

public interface RestaurantMapper {

	public List<RestaurantVO> getAllData();

	public RestaurantVO read(long resNo);

	public void insertRest(RestaurantVO restaurantVO);

	public void likeCnt(RestaurantVO restaurantVO);

	public LikeVO read(Map<String, Object> paramMap) throws Exception;
	
	public int countbyLike(Map<String, Object> paramMap) throws Exception;
	
	public void create(Map<String, Object> paramMap) throws Exception;
	
	public void like_check(HashMap<String, Object> hashMap) throws Exception;

	public void like_cnt_up(long res_No);
	
	public void like_cnt_down(long res_No);
	
	public void like_check_cancel(HashMap<String, Object> hashMap) throws Exception;
	
//	추가된 mapper
	
	public long getResNo(String res_Name);
	
	public void insertVisitor(VisitorVO visitor); 
	
	public List<VisitorVO> getAllVisitor();
	
	public void userBlack(VisitorVO visitor);
}