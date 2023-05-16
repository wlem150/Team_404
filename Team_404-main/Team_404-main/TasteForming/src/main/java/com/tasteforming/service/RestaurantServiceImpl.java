package com.tasteforming.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tasteforming.domain.LikeVO;
import com.tasteforming.domain.RestaurantVO;
import com.tasteforming.domain.VisitorVO;
import com.tasteforming.mapper.RestaurantMapper;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
@AllArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {
	@Autowired
	private RestaurantMapper mapper;

	// RestaurantService 에서 호출받아 mapper과 상호작용 후 처리
	// 비지니스 로직 작성구간
	// RestaurantServiceImpl은 반환된 데이터를 RestaurantController로 반환합니다.
	@Override
	public List<RestaurantVO> getAllData() {
		return mapper.getAllData();
	}

	@Override
	public void likeCnt(RestaurantVO restaurantVO) {
		mapper.likeCnt(restaurantVO);
	}

	@Override
	public void RestRegister(RestaurantVO restaurantVO) {
		log.info("서비스인포 식당이름:" + restaurantVO.getRes_Name());
		log.info("서비스인포 주소:" + restaurantVO.getAddress());
		log.info("서비스인포 정보:" + restaurantVO.getInfo());
		log.info("서비스인포 메뉴:" + restaurantVO.getMenu());
		log.info("서비스인포 번호:" + restaurantVO.getTel());
		mapper.insertRest(restaurantVO);
	}

	@Override
	public LikeVO read(Map<String, Object> paramMap) throws Exception {
		return mapper.read(paramMap);
	}

	@Override
	public int countbyLike(Map<String, Object> paramMap) throws Exception {
		return mapper.countbyLike(paramMap);
	}

	@Override
	public void create(Map<String, Object> paramMap) throws Exception {
		mapper.create(paramMap);
		
	}

	@Override
	public void like_check(HashMap<String, Object> hashMap) throws Exception {
		mapper.like_check(hashMap);
		
	}

	@Override
	public void like_cnt_up(long res_No) {
		mapper.like_cnt_up(res_No);
		
	}

	@Override
	public void like_check_cancel(HashMap<String, Object> hashMap) throws Exception {
		mapper.like_check_cancel(hashMap);
		
	}

	@Override
	public void like_cnt_down(long res_No) {
		mapper.like_cnt_down(res_No);
		
	}

	@Override
	public long getResNo(String res_Name) {
		return mapper.getResNo(res_Name);
	}

	@Override
	public void insertVisitor(VisitorVO visitor) {
		mapper.insertVisitor(visitor);
		
	}

	@Override
	public List<VisitorVO> getAllVisitor() {
		return mapper.getAllVisitor();
	}

	@Override
	public void userBlack(VisitorVO visitor) {
		log.info("serviceImpl"+visitor);
		mapper.userBlack(visitor);
	}

	
	}