package com.tasteforming.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tasteforming.domain.AdminMemberVO;
import com.tasteforming.domain.BoardVO;
import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.PageDTO;
import com.tasteforming.domain.ReplyVO;
import com.tasteforming.domain.ReserveVO;
import com.tasteforming.domain.RestaurantVO;
import com.tasteforming.domain.ReviewVO;
import com.tasteforming.mapper.MemberMapper;
import com.tasteforming.service.AdminService;
import com.tasteforming.service.MainService;

import lombok.extern.log4j.Log4j;

@Controller
@RequestMapping("tasteforming/admin/*")
@Log4j
public class AdminController {
	@Autowired
	private AdminService adminService;

//	UserManagement
	@GetMapping("UserManagement")
	public void userManagement(Model model, Criteria cri) {
		log.info("MemberList" + cri);
		model.addAttribute("member", adminService.getMemberWithPaging(cri));
		int total = adminService.getMemberTotalCnt();
		model.addAttribute("pageMaker", new PageDTO(cri, total));
		log.info(adminService.getMemberTotalCnt());
	}

	@PostMapping("updateUser")
	public String updateUser(AdminMemberVO member) {
		adminService.updateUser(member);
		log.info("update User" + member);
		return "redirect:/tasteforming/admin/UserManagement";
	}

	@PostMapping("deleteUser")
	public String deleteUser(AdminMemberVO member) {
		log.info("delete User" + member);

		try {
			adminService.deleteUserAuth(member);
			Thread.sleep(1000);
			adminService.deleteUser(member);
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
			e.printStackTrace();
		}

		return "redirect:/tasteforming/admin/UserManagement";
	}

// ResManagement	
	@GetMapping("ResManagement")
	public void resManagement(Model model, Criteria cri) {
		log.info(adminService.getResTotalCnt());
		int total = adminService.getResTotalCnt();
		model.addAttribute("restaurant", adminService.getResWithPaging(cri));
		model.addAttribute("pageMaker", new PageDTO(cri, total));
	}
	
	
	@PostMapping("updateRes")
	public String updateRes(RestaurantVO res) {
		adminService.updateRes(res);
		log.info("update Res" + res);
		return "redirect:/tasteforming/admin/ResManagement";
	}

	@PostMapping("deleteRes")
	public String deleteRes(RestaurantVO res) {
		log.info("delete Res" + res);
		adminService.deleteRes(res);
		return "redirect:/tasteforming/admin/ResManagement";
	}
	
	
	
// BoardManagement
	@GetMapping("BoardManagement")
	public void boardManagement(Model model, Criteria cri) {
		log.info(adminService.getBoardWithPaging(cri));
		log.info(adminService.getBoardTotalCnt());
		int total = adminService.getBoardTotalCnt();
		model.addAttribute("pageMaker", new PageDTO(cri, total));
		model.addAttribute("board",adminService.getBoardWithPaging(cri));
	}

	@PostMapping("updateBoard")
	public String updateBoard(BoardVO board) {
		adminService.updateBoard(board);
		log.info("update Board" + board);
		return "redirect:/tasteforming/admin/BoardManagement";
	}

	@PostMapping("deleteBoard")
	public String deleteBoard(BoardVO board) {
		log.info("delete Board" + board);
		adminService.deleteBoard(board);
		return "redirect:/tasteforming/admin/BoardManagement";
	}
	
	
	
// ReplyManagement
	@GetMapping("ReplyManagement")
	public void replyManagement(Model model, Criteria cri) {
		log.info(adminService.getReplyWithPaging(cri));
		log.info(adminService.getReplyTotalCnt());
		int total = adminService.getReplyTotalCnt();
		model.addAttribute("pageMaker", new PageDTO(cri, total));
		model.addAttribute("reply",adminService.getReplyWithPaging(cri));
	}
	@PostMapping("updateReply")
	public String updateReply(ReviewVO res) {
		adminService.updateReply(res);
		log.info("update Reply" + res);
		return "redirect:/tasteforming/admin/ReplyeManagement";
	}

	@PostMapping("deleteReply")
	public String deleteReply(ReviewVO res) {
		log.info("delete Reply" + res);
		adminService.deleteReply(res);
		return "redirect:/tasteforming/admin/ReplyManagement";
	}

// ReserveManagement
	@GetMapping()
	public void	ReserveManagement(Model model, Criteria cri) {
		log.info(adminService.getReserveWithPaging(cri));
		log.info(adminService.getReserveTotalCnt());
		int total = adminService.getReserveTotalCnt();
		model.addAttribute("pageMaker", new PageDTO(cri, total));
		model.addAttribute("reserve",adminService.getReserveWithPaging(cri));
	}

	@PostMapping("updateReserve")
	public String updateReserve(ReserveVO reserve) {
		adminService.updateReserve(reserve);
		log.info("update Reserve" + reserve);
		return "redirect:/tasteforming/admin/ReserveManagement";
	}

	@PostMapping("deleteReserve")
	public String deleteReserve(ReserveVO reserve) {
		log.info("delete Reserve" + reserve);
		adminService.deleteReserve(reserve);
		return "redirect:/tasteforming/admin/ReserveManagement";
	}
	
}

/*
 * @GetMapping("/list") public void list(Criteria cri ,Model model) {
 * log.info("list : " + cri); model.addAttribute("list", adminService.getList(cri));
 * // model.addAttribute("pageMaker", new PageDTO(cri, 123));
 * 
 * int total = adminService.getTotalCount(cri); log.info("total : " + total);
 * model.addAttribute("pageMaker", new PageDTO(cri, total)); }
 */