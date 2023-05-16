package com.tasteforming.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.tasteforming.domain.RestaurantVO;
import com.tasteforming.mapper.MainMapper;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

// 김정우
@Service
@AllArgsConstructor
@Component
@Log4j
public class MainServiceImpl implements MainService{
	private MainMapper mapper;
	
	@Override
	@Cacheable(value = "typeCache")
	public Map<String, List<RestaurantVO>> getType(String address) {
	    Map<String, List<RestaurantVO>> typeMap = new HashMap<>();
	    try {
	        List<RestaurantVO> list = null;
	        if (address == null) {
	            list = mapper.getAllData();
	        } else {
	        	List<String> addresses = new ArrayList<>(Arrays.asList(address.split("%")));     	
	            list = mapper.getByAddress(addresses);
	        }
	        for (RestaurantVO restaurant : list) {
	            String type = restaurant.getType();
	            if (!typeMap.containsKey(type)) {
	                typeMap.put(type, new ArrayList<>());
	            }
	            typeMap.get(type).add(restaurant);
	        }
	        return typeMap;
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return typeMap;
	}

	
	@Override
	public List<RestaurantVO> getAllData(){
		return mapper.getAllData();
		
	}
	
	@Override
	public List<RestaurantVO> getSearch(String keyword) {
		return mapper.getSearch(keyword);
	}

	@Override
	public RestaurantVO get(long res_no) {
		log.info("get_Res_no===========" + res_no);
		return mapper.read(res_no);
	}


	@Override
	public List<RestaurantVO> getaddress(long address) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public int updateReview(Long res_no) {
		return mapper.updateReview(res_no);
	}

}
