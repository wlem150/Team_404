package com.tasteforming.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tasteforming.domain.Geocoding;
import com.tasteforming.domain.LikeVO;
import com.tasteforming.domain.MemberVO;
import com.tasteforming.domain.ReserveVO;
import com.tasteforming.domain.RestaurantVO;
import com.tasteforming.domain.ReviewVO;
import com.tasteforming.domain.VisitorVO;
import com.tasteforming.service.CommonService;
import com.tasteforming.service.MainService;
import com.tasteforming.service.ReserveService;
import com.tasteforming.service.RestaurantService;
import com.tasteforming.service.ReviewService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;
import oracle.jdbc.proxy.annotation.Post;

// 김정우
@Controller
@RequestMapping("/tasteforming/*")
@AllArgsConstructor
@Log4j
public class MainController {

	private MainService service;
	private ReserveService reserveService;
	private ReviewService reviewService;
	private RestaurantService restaurantService;
	private CommonService memberService;


	@GetMapping("main")
	public void list(Model model, @RequestParam(name = "address", required = false) String address,
	                 @CookieValue(name = "photoAmount", defaultValue = "10") int photoAmount,@RequestParam(name = "res_no", required = false) Long res_no) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	    model.addAttribute("list", service.getType(address));
	    model.addAttribute("data", service.getAllData());
	    
	    
	    // User주소 기반 검색
	    if (auth.getName() != ("anonymousUser")) {
	        model.addAttribute("userAddress", memberService.getAddress(auth.getName()));
	    }
	    
	    
	    if (address != null) {
	        model.addAttribute("address", address.replace("%", " "));
	    }
	    model.addAttribute("photoAmount", photoAmount);
	    
	}

	@PostMapping("photoAmount")
	public String setPhotoAmount(HttpServletResponse response,
	                             @RequestParam("amount") int amount) {
	    Cookie cookie = new Cookie("photoAmount", String.valueOf(amount));
	    cookie.setMaxAge(60 * 60 * 24 * 30); 
	    cookie.setPath("/");
	    response.addCookie(cookie);
	    return "redirect:/tasteforming/main";
	}

	@GetMapping("search")
	public String search(@RequestParam("keyword") String keyword,
	                     @RequestParam(value = "orderBy", required = false) String orderBy,
	                     Model model) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	    List<RestaurantVO> restaurantList = service.getSearch(keyword);
	    
	    // res_Name을 추출하여 리스트에 담기
	    List<String> resNameList = new ArrayList<>();
	    for (RestaurantVO restaurant : restaurantList) {
	        resNameList.add(restaurant.getRes_Name());
	    }
	    // res_No 추출
	    List<Long> resNoList = new ArrayList<>();
	    for (RestaurantVO restaurant : restaurantList) {
	        resNoList.add(Long.valueOf(restaurant.getRes_No()));
	    }

	    
	    if ("likeCnt".equals(orderBy)) {
	        restaurantList.sort((r1, r2) -> Long.compare(r2.getLikeCnt(), r1.getLikeCnt()));
	    }

	    
	    if (auth.getName() != ("anonymousUser")) {
	        model.addAttribute("userAddress", memberService.getAddress(auth.getName()));
	    }
	    
	    model.addAttribute("restaurant", restaurantList);
	    model.addAttribute("searchKeyword", keyword);

	    model.addAttribute("resNameList", resNameList);
	    model.addAttribute("resNoList", resNoList);
	    
	    List<String> addressList = new ArrayList<>();
	    for (RestaurantVO restaurant : restaurantList) {
	        addressList.add(restaurant.getAddress());
	    }

	    List<String[]> geocodes = Geocoding.getGeocodes(addressList);
	    
	    model.addAttribute("geocodes",geocodes);
	    for (String[] latlng : geocodes) {
	        double lat = Double.parseDouble(latlng[0]);
	        double lng = Double.parseDouble(latlng[1]);
	    
	     
	        // 위도와 경도 정보를 이용한 작업 수행
	    log.info(lat);
	    log.info(lng);
	    }
	    
	    return "tasteforming/search";
	}

	@GetMapping("rev")
	public String rev(@RequestParam("keyword") String keyword,
	                     @RequestParam(value = "orderBy", required = false) String orderBy,
	                     Model model) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	    List<RestaurantVO> restaurantList = service.getSearch(keyword);
	    
	    // res_Name을 추출하여 리스트에 담기
	    List<String> resNameList = new ArrayList<>();
	    for (RestaurantVO restaurant : restaurantList) {
	        resNameList.add(restaurant.getRes_Name());
	    }
	    // res_No 추출
	    List<Long> resNoList = new ArrayList<>();
	    for (RestaurantVO restaurant : restaurantList) {
	        resNoList.add(Long.valueOf(restaurant.getRes_No()));
	    }
	    if ("reviewCnt".equals(orderBy)) {
	        restaurantList.sort((r1, r2) -> Long.compare(r2.getReviewCnt(), r1.getReviewCnt()));
	    }
	    if (auth.getName() != ("anonymousUser")) {
	        model.addAttribute("userAddress", memberService.getAddress(auth.getName()));
	        log.info("안쪽"+memberService.getAddress(auth.getName()));
	    }
	    log.info("바깥쪽"+memberService.getAddress(auth.getName()));

	    model.addAttribute("restaurant", restaurantList);
	    model.addAttribute("searchKeyword", keyword);
	    model.addAttribute("resNameList", resNameList);
	    model.addAttribute("resNoList", resNoList);
	    
	    List<String> addressList = new ArrayList<>();
	    for (RestaurantVO restaurant : restaurantList) {
	        addressList.add(restaurant.getAddress());
	    }

	    List<String[]> geocodes = Geocoding.getGeocodes(addressList);
	    
	    model.addAttribute("geocodes",geocodes);
	    for (String[] latlng : geocodes) {
	        double lat = Double.parseDouble(latlng[0]);
	        double lng = Double.parseDouble(latlng[1]);
	        
	        
	        // 위도와 경도 정보를 이용한 작업 수행
	    log.info(lat);
	    log.info(lng);
	    }
	    return "tasteforming/search";
	}
	
	@GetMapping("detail")
	public void get(@RequestParam("res_No") long resNo, Model model ) {
		model.addAttribute("com", service.updateReview(resNo));
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		MemberVO member = new MemberVO();
		member.setUserId(auth.getName());
		model.addAttribute("member", member);
		model.addAttribute("res", service.get(resNo));

		// 좋아요
		LikeVO like = new LikeVO();
		like.setRes_No(resNo);
		like.setUserId(member.getUserId());

		// 리뷰
		List<ReviewVO> reviewList = reviewService.allReview(resNo);
		model.addAttribute("reviewList", reviewList);

		model.addAttribute("examine", reviewService.getAllReviewer(resNo));
		// 지도
		// resNo를 이용해서 식당 주소 가져오기
		RestaurantVO res = service.get(resNo);
		String address = res.getAddress(); // 주소 값 가져오기
		String[] latlng = Geocoding.getGeocode(address);
		double lat = Double.parseDouble(latlng[0]);
		double lng = Double.parseDouble(latlng[1]);
		
	    model.addAttribute("lat", lat);
	    model.addAttribute("lng", lng);
	    System.out.println("lat: " + lat);
	    System.out.println("lng: " + lng);
	}
	
	
	@PostMapping("insertReserve")
	public String insertReserve(@RequestParam("res_No") long res_No, Model model, ReserveVO reserveVO) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		VisitorVO visitor = new VisitorVO();
		visitor.setUserId(auth.getName());
		visitor.setRes_No(res_No);
		if(reserveService.blackCheck(visitor) == true) {
			return "redirect:/tasteforming/detail?res_No="+res_No+"&message=blackUser";
		}
	
		MemberVO member = new MemberVO();
		member.setUserId(auth.getName());
		model.addAttribute("member", member); // 이 부분 추가
		reserveService.insertReserve(reserveVO);
		return "redirect:/tasteforming/detail?res_No="+res_No+"&message=success";
	}

	@ResponseBody
	@GetMapping("checkLike")
	public String checkLike(@RequestParam("res_No") long res_No) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		JSONObject obj = new JSONObject();
		if(auth.getName().equals("anonymousUser")){
			return "";
		}
		try {
			HashMap<String, Object> hashMap = new HashMap<String, Object>();
			hashMap.put("userId", auth.getName());
			hashMap.put("res_No", res_No);
			LikeVO likeVO = restaurantService.read(hashMap); 
			RestaurantVO resVO = service.get(res_No);
			long like_check = 0;
			
			if(likeVO != null) {
				like_check = likeVO.getLike_Check();
			}
			
			long like_cnt = resVO.getLikeCnt(); 
			
			obj.put("like_check", like_check);
			obj.put("like_cnt", like_cnt);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj.toJSONString();
	}

	@ResponseBody
	@GetMapping(value = "like", produces = "text/plain;charset=UTF-8")
	public String like(@RequestParam("res_No") long res_No, Model model) throws NullPointerException {
		log.info("like.do ==================================================" + res_No);
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		// System.out.println("--> like() created");
		String userId = auth.getName();
		JSONObject obj = new JSONObject();

		try {
			ArrayList<String> msgs = new ArrayList<String>();
			HashMap<String, Object> hashMap = new HashMap<String, Object>();
			hashMap.put("userId", userId);
			hashMap.put("res_No", res_No);
			LikeVO likeVO = restaurantService.read(hashMap); // 여기에서 왜인지 계속 null 이 나타남
			if (likeVO == null) {
				restaurantService.create(hashMap);
				likeVO = restaurantService.read(hashMap);
			}
			RestaurantVO resVO = service.get(res_No);
			long like_cnt = resVO.getLikeCnt(); // 게시판의 좋아요 카운트
			long like_check = 0;
			like_check = likeVO.getLike_Check(); // 좋아요 체크 값

			if (like_check == 0) {
				msgs.add("좋아요!");
				restaurantService.like_check(hashMap);
				like_check++;
				like_cnt++;
				restaurantService.like_cnt_up(res_No); // 좋아요 갯수 증가
			} else {
				msgs.add("좋아요 취소");
				restaurantService.like_check_cancel(hashMap);
				like_check--;
				like_cnt--;
				restaurantService.like_cnt_down(res_No); // 좋아요 갯수 감소
			}
			obj.put("res_No", likeVO.getRes_No());
			obj.put("like_check", like_check);
			obj.put("like_cnt", like_cnt);
			obj.put("msg", msgs);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj.toJSONString();
	}

	

	/*
	 * @PostMapping("insertReserve") public String
	 * insertReserve(@RequestParam("res_No") long res_No, Model model, ReserveVO
	 * reserveVO) { log.info(reserveVO); reserveService.insertReserve(reserveVO);
	 * Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	 * MemberVO member = new MemberVO(); member.setUserId(auth.getName());
	 * log.info(member.getUserId() +
	 * "***************************************************");
	 * model.addAttribute("member", member); // 이 부분 추가 log.info(reserveVO);
	 * log.info("addreserve======="); return "redirect:/tasteforming/detail?res_No="
	 * + res_No; }
	 */
}
