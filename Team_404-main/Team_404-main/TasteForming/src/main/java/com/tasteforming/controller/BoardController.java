package com.tasteforming.controller;
// 장혜림

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tasteforming.domain.BoardVO;
import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.MemberVO;
import com.tasteforming.domain.PageDTO;
import com.tasteforming.service.BoardService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller
@Log4j
@RequestMapping("tasteforming/board/*")
@AllArgsConstructor

public class BoardController {//service에 의존적

	private BoardService service;


	@GetMapping("/list")
	public void list(Criteria cri, Model model) {
		log.info("list: " + cri);
		model.addAttribute("list", service.getList(cri));
		int total= service.getTotalCount(cri);
		PageDTO pageMake = new PageDTO(cri, total);
		model.addAttribute("pageMaker", pageMake);
	}
	
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/register")
	public void register() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		MemberVO member = new MemberVO();
		member.setUserId(auth.getName());
		log.info(member.getUserId()+"***************************************************");
	}
	
	@PostMapping("/register")
	@PreAuthorize("isAuthenticated()")
	public String register(BoardVO board, RedirectAttributes rttr) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		log.info("register: " + board);
		service.register(board);
		rttr.addFlashAttribute("result", board.getBoard_no());
		
		return "redirect:/tasteforming/board/list"; // redirect:접두어를 사용해 스프링MVC가 내부적으로 response.sendRedirect()
	}

	
	@GetMapping({ "/get", "modify"})
	public void get(@RequestParam("board_no") Long board_no, @ModelAttribute("cri")Criteria cri, Model model) {
		
		log.info("/get or modify");
		model.addAttribute("board", service.get(board_no));
//		model.addAttribute("pageInfo", service.getList(board_no));
	}
	
	@PreAuthorize("principal.username == #board.userId")
	@PostMapping("/modify")
	public String modify(BoardVO board, @ModelAttribute("cri")Criteria cri, RedirectAttributes rttr) {
		log.info("modify:" + board);

		if (service.modify(board)) {
			rttr.addFlashAttribute("result", "success");
		}
		
		rttr.addAttribute("pageNum", cri.getPageNum());
		rttr.addAttribute("amount", cri.getAmount());
		rttr.addAttribute("type", cri.getType());
		rttr.addAttribute("keyword", cri.getKeyword());
		
		return "redirect:/tasteforming/board/list";
	}
	
	@PreAuthorize("principal.username == #userId")
	@PostMapping("/remove")
	public String remove(@RequestParam("board_no") Long board_no, Criteria cri, RedirectAttributes rttr) {
		service.deleteReview(board_no);
		log.info("remove..." + board_no);
		if (service.remove(board_no)) {
			rttr.addFlashAttribute("result", "success");
		}
		
		rttr.addAttribute("pageNum", cri.getPageNum());
		rttr.addAttribute("amount", cri.getAmount());
		rttr.addAttribute("type", cri.getType());
		rttr.addAttribute("keyword", cri.getKeyword());
		
		return "redirect:/tasteforming/board/list";
	}
	
	
}
