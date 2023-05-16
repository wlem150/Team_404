package com.tasteforming.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.tasteforming.domain.BoardVO;
import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.EventVO;
import com.tasteforming.domain.LikeVO;
import com.tasteforming.domain.MemberVO;
import com.tasteforming.domain.PageDTO;
import com.tasteforming.domain.ReplyVO;
import com.tasteforming.domain.ReserveVO;
import com.tasteforming.domain.RestaurantVO;
import com.tasteforming.domain.ReviewVO;
import com.tasteforming.domain.VisitorVO;
import com.tasteforming.service.MyPageService;
import com.tasteforming.service.RestaurantService;

import javassist.compiler.ast.Visitor;
import lombok.extern.log4j.Log4j;

import java.io.File;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping("tasteforming/myPage/*")
@PreAuthorize("isAuthenticated()")
@Log4j
public class MyPageController {
	@Autowired
	private MyPageService service;
	@Autowired
	private RestaurantService restaurantService;
	
	
	@GetMapping("myPage")
	public void GetReservation(Model model) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		MemberVO member = new MemberVO();
		member.setUserId(auth.getName());
		LocalDateTime currentDateTime = LocalDateTime.now();
		List<ReserveVO> reserves = service.getReservation(member);
		List<EventVO> events = new ArrayList<EventVO>();
		Gson gson = new Gson();
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm");
		log.info(member.getUserId() + "***************************************************");

		for (ReserveVO reserve : reserves) {

			try {
				EventVO eventVO = new EventVO();
				log.info(reserve.getOrder_Date() + "reserve_getOrder_date");
				Date startDate = simpleDateFormat.parse(simpleDateFormat.format(reserve.getOrder_Date()));
				Date time = timeFormat.parse(reserve.getHour());
				Calendar calendar = Calendar.getInstance();
				calendar.setTime(startDate);
				Calendar timeCalendar = Calendar.getInstance();
				timeCalendar.setTime(time);
				calendar.set(Calendar.HOUR_OF_DAY, timeCalendar.get(Calendar.HOUR_OF_DAY));
				calendar.set(Calendar.MINUTE, timeCalendar.get(Calendar.MINUTE));
				String jsDate = "new Date(" + "y" + "," + calendar.get(Calendar.MONTH) + ","
						+ calendar.get(Calendar.DAY_OF_MONTH) + "," + calendar.get(Calendar.HOUR_OF_DAY) + ","
						+ calendar.get(Calendar.MINUTE) + ")";

				
				LocalDateTime start = LocalDateTime.ofInstant(calendar.toInstant(), ZoneId.systemDefault());

		        String backgroundColor = "##00a000";
		        String borderColor = "##00a000";
		        if (start.isBefore(currentDateTime)) {
		            backgroundColor = "#A9A9A9";
		            borderColor = "#A9A9A9";
		        }
		        
		        eventVO.setBackgroundColor(backgroundColor);
		        eventVO.setBorderColor(borderColor);
				eventVO.setStart(jsDate);
				eventVO.setTitle(reserve.getRes_Name());
				eventVO.setOrder_No(reserve.getOrder_No());
				events.add(eventVO);
			} catch (ParseException e) {
				e.printStackTrace();
			}

		}

		model.addAttribute("events", events);
	}
	
	@GetMapping("ShopReservation")
	public void ShopReservation(Model model) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		MemberVO member = new MemberVO();
		member.setUserId(auth.getName());
		LocalDateTime currentDateTime = LocalDateTime.now();
		List<ReserveVO> reserves = service.getReserveCustomer(member); // confirm == 1 인 값을 가져온다.
		List<EventVO> events = new ArrayList<EventVO>();
		Gson gson = new Gson();
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm");
		log.info(member.getUserId() + "***************************************************");

		for (ReserveVO reserve : reserves) {

			try {
				EventVO eventVO = new EventVO();
				log.info(reserve.getOrder_Date() + "reserve_getOrder_date");
				Date startDate = simpleDateFormat.parse(simpleDateFormat.format(reserve.getOrder_Date()));
				Date time = timeFormat.parse(reserve.getHour());
				Calendar calendar = Calendar.getInstance();
				calendar.setTime(startDate);
				Calendar timeCalendar = Calendar.getInstance();
				timeCalendar.setTime(time);
				calendar.set(Calendar.HOUR_OF_DAY, timeCalendar.get(Calendar.HOUR_OF_DAY));
				calendar.set(Calendar.MINUTE, timeCalendar.get(Calendar.MINUTE));
				String jsDate = "new Date(" + "y" + "," + calendar.get(Calendar.MONTH) + ","
						+ calendar.get(Calendar.DAY_OF_MONTH) + "," + calendar.get(Calendar.HOUR_OF_DAY) + ","
						+ calendar.get(Calendar.MINUTE) + ")";

				
				LocalDateTime start = LocalDateTime.ofInstant(calendar.toInstant(), ZoneId.systemDefault());

		        String backgroundColor = "##00a000";
		        String borderColor = "##00a000";
		        if (start.isBefore(currentDateTime)) {
		            backgroundColor = "#A9A9A9";
		            borderColor = "#A9A9A9";
		        }
		        
		        eventVO.setBackgroundColor(backgroundColor);
		        eventVO.setBorderColor(borderColor);
				eventVO.setStart(jsDate);
				eventVO.setTitle(reserve.getUserId()+" : "+reserve.getRes_Name());
				eventVO.setOrder_No(reserve.getOrder_No());
				events.add(eventVO);
			} catch (ParseException e) {
				e.printStackTrace();
			}

		}

		model.addAttribute("events", events);
	}
	
	@GetMapping("CustomerConfirm")
	public void CustomerConfirm(Model model, Criteria cri) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		int total = service.getCustomerTotalCnt(auth.getName());
		log.info(service.getCustomer(cri, auth.getName()));
		
		model.addAttribute("reserve" , service.getCustomer(cri, auth.getName())); // confirm == 0 이 값을 가져온다.
		model.addAttribute("pageMaker", new PageDTO(cri, total));
		
	}
	
	
	@PostMapping("confirm")
	public String confirm(ReserveVO reserve) {
		VisitorVO visitor = new VisitorVO();
		visitor.setRes_No(restaurantService.getResNo(reserve.getRes_Name()));
		visitor.setUserId(reserve.getUserId()); 
		visitor.setVisitedDate(reserve.getOrder_Date());
		visitor.setRes_Name(reserve.getRes_Name());
		
		restaurantService.insertVisitor(visitor);
		service.confirm(reserve);
		
		log.info("update restaurant" + reserve);
		return "redirect:/tasteforming/myPage/CustomerConfirm";
	}

	@PostMapping("refuse")
	public String refuse(ReserveVO reserve) {
		log.info("delete restaurant" + reserve);
		service.refuse(reserve);
		return "redirect:/tasteforming/myPage/CustomerConfirm";
	}
	
	
	@GetMapping("Visitors")
	public void visitor(Model model) {
		model.addAttribute("visitors" ,restaurantService.getAllVisitor());
	}
	
	@PostMapping("userBlack")
	public String userBlack(VisitorVO visitor) {
		log.info(visitor);
		restaurantService.userBlack(visitor);
		return "redirect:/tasteforming/myPage/Visitors";
	}
	
	@GetMapping("MyLikes")
	public void likes(Model model) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		model.addAttribute("likes" , service.getLikes(auth.getName()));
		
	}
	
	@PostMapping("updateEvaluation")
	public String updateEvaluation(LikeVO like) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		like.setUserId(auth.getName());
		service.updateEvaluation(like);
		return "redirect:/tasteforming/myPage/MyLikes";
	}

	
	@GetMapping("showMyReserve")
	public void showMyReserve(Model model, Criteria cri) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		int total = service.getCustomerTotalCnt(auth.getName());
		log.info(service.myReservation(cri, auth.getName()));
		
		model.addAttribute("reserve" , service.myReservation(cri, auth.getName()));
		model.addAttribute("pageMaker", new PageDTO(cri, total));
	}
	
	@GetMapping("ShopManagement")
	public void ShopManagement(Model model, Criteria cri){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		int total = service.getResTotalCnt(auth.getName());
		model.addAttribute("pageMaker", new PageDTO(cri, total));
		model.addAttribute("restaurant", service.getRestaurantWithUserId(cri, auth.getName()));
	}
	
	@PostMapping("updateRes")
	public String updateRes(RestaurantVO restaurant) {
		service.updateRes(restaurant);
		log.info("update restaurant" + restaurant);
		return "redirect:/tasteforming/myPage/ShopManagement";
	}

	@PostMapping("deleteRes")
	public String deleteRes(RestaurantVO restaurant) {
		log.info("delete restaurant" + restaurant);
		service.deleteRes(restaurant);
		return "redirect:/tasteforming/myPage/ShopManagement";
	}
	
	@ResponseBody
	@PostMapping(value = "orderCancel", produces = "text/plain;charset=UTF-8")
	public void orderCancel(@RequestParam("title") String res_Name, @RequestParam("order_No") int order_No) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		ReserveVO reserve = new ReserveVO();
		String[] res = res_Name.split(":");
		log.info(res.length);
		if(res.length == 2) {
			reserve.setRes_Name(res[1].trim());
			reserve.setUserId(res[0].trim());
			reserve.setOrder_No(order_No);	
		}else {
			reserve.setRes_Name(res_Name);
			reserve.setUserId(auth.getName());
			reserve.setOrder_No(order_No);
		}
		service.orderCancel(reserve);
	}

	@GetMapping("myBoard")
	public void getBoardList(Model model, Criteria cri) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		log.info(auth.getName());
		log.info("myBoard=========================");
		log.info(service.getBoardWithPaging(cri, auth.getName()));
		log.info(service.getBoardTotalCnt());
		int total = service.getBoardTotalCnt();
		model.addAttribute("pageMaker", new PageDTO(cri, total));
		model.addAttribute("board", service.getBoardWithPaging(cri, auth.getName()));
	}

	@PostMapping("updateBoard")
	public String updateBoard(BoardVO board) {
		service.updateBoard(board);
		log.info("update Board" + board);
		return "redirect:/tasteforming/myPage/myBoard";
	}

	@PostMapping("deleteBoard")
	public String deleteBoard(BoardVO board) {
		log.info("delete Board" + board);
		service.deleteBoard(board);
		return "redirect:/tasteforming/myPage/myBoard";
	}

	@GetMapping("myComment")
	public void getReplyList(Model model, Criteria cri) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		log.info(service.getReplyWithPaging(cri, auth.getName()));
		log.info(service.getReplyTotalCnt());
		int total = service.getReplyTotalCnt();
		model.addAttribute("pageMaker", new PageDTO(cri, total));
		model.addAttribute("reply", service.getReplyWithPaging(cri, auth.getName()));
	}

	@PostMapping("updateReply")
	public String updateReply(ReviewVO rev) {
		service.updateReply(rev);
		log.info("update Reply" + rev);
		return "redirect:/tasteforming/myPage/myCommnet";
	}

	@PostMapping("deleteReply")
	public String deleteReply(ReviewVO rev) {
		log.info("delete Reply" + rev);
		service.deleteReply(rev);
		return "redirect:/tasteforming/myPage/myComment";
	}
	
	
	
	
	@GetMapping("ShopRegister")
	public void ShopRegisterGet() {
		log.info("res==========================");
	};

	@PostMapping("ShopRegister")
	public String restReg(RestaurantVO restaurantVO, MultipartFile[] uploadFile)
			throws NullPointerException {
		try {
		log.info(restaurantVO);
		log.info("update ajax post......");
		
		  Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		  restaurantVO.setUserId(auth.getName());
		  log.info(restaurantVO.getUserId());
		 
		  String uploadFolder = "C:\\404_git\\Team_404-main\\Team_404-main\\TasteForming\\src\\main\\webapp\\resources\\food";
		log.info("설정전경로:" + restaurantVO.getImg_path());
		String pathString = "aaaa";
		restaurantVO.setImg_path(pathString);
		log.info("설정후경로:" + restaurantVO.getImg_path());

		switch (restaurantVO.getType()) {
		case "한식":
			uploadFolder = uploadFolder + "\\korea";
			break;
		case "양식":
			uploadFolder = uploadFolder + "\\western";
			break;
		case "채식":
			uploadFolder = uploadFolder + "\\vegetarian";
			break;
		case "중식":
			uploadFolder = uploadFolder + "\\china";
			break;
		case "일식":
			uploadFolder = uploadFolder + "\\japan";
			break;
		default:
			break;
		}

		log.info(uploadFolder);
		for (MultipartFile multipartFile : uploadFile) {
			log.info("------------");
			log.info("Upload File Name: " + multipartFile.getOriginalFilename());
			log.info("Upload File Size: " + multipartFile.getSize());

			String uploadFileName = multipartFile.getOriginalFilename();

			uploadFileName = uploadFileName.substring(uploadFileName.lastIndexOf("\\") + 1);
			log.info("only file name: " + uploadFileName);

			UUID uuid = UUID.randomUUID();
			log.info("uuid: " + uuid);
			uploadFileName = uuid.toString() + "_" + uploadFileName;
			switch (restaurantVO.getType()) {
			case "한식":
				restaurantVO.setImg_path("/resources/food/korea/" + uploadFileName);
				break;
			case "양식":
				restaurantVO.setImg_path("/resources/food/western/" + uploadFileName);
				break;
			case "일식":
				restaurantVO.setImg_path("/resources/food/japan/" + uploadFileName);
				break;
			case "중식":
				restaurantVO.setImg_path("/resources/food/china/" + uploadFileName);
				break;
			case "채식":
				restaurantVO.setImg_path("/resources/food/vegetarian/" + uploadFileName);
				break;
			default:
				break;
			}

			File saveFile = new File(uploadFolder, uploadFileName);
			log.info("세이브파일: " + saveFile);
			try {
				multipartFile.transferTo(saveFile);
			} catch (Exception e) {
				log.error(e.getMessage());
			}
		}
		restaurantService.RestRegister(restaurantVO);
		return "redirect:/tasteforming/myPage/myBoard";
		}catch (NullPointerException e) {
			return "redirect:/accessError";
		}
	}

}
