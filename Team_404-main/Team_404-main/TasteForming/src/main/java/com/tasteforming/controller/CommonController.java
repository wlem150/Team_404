package com.tasteforming.controller;

import java.util.Random;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tasteforming.domain.MemberVO;
import com.tasteforming.service.CommonService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;
@Controller
@Log4j
@AllArgsConstructor

public class CommonController {
	private CommonService commonService;
	
	@Autowired
    private JavaMailSender mailSender;
    
	@GetMapping("contactUs")
	public void contactUs() {
		
	}
	
	@GetMapping("accessError")
	public void accessDenied(Authentication auth, Model model) {

		log.info("access Denied : " + auth);

		model.addAttribute("msg", "Access Denied");
	}

	@GetMapping("/customLogin")
	public void loginInput(String error, String logout, Model model) {

		log.info("error: " + error);
		log.info("logout: " + logout);

		if (error != null) {
			model.addAttribute("error", "Login Error Check Your Account");
		}

		if (logout != null) {
			model.addAttribute("logout", "Logout!!");
		}
	}

	 
	
	@PostMapping("/customLogout") public String logoutPost(RedirectAttributes
			rttr) {
  
	  log.info("custom logout"); return "redirect:/tasteforming/main"; }
	 

	
	
	@GetMapping("/customRegister") public void registerGET() {
	  
	log.info("custom register"); }
		 

	@PostMapping("/customRegister")
	public String signupPOST(MemberVO member, RedirectAttributes rttr) {
		log.info("[ MEMBER ] 1 : " + member);
		commonService.customRegister(member);
		rttr.addFlashAttribute("result", member.getUserName());
		return "redirect:/tasteforming/main";
	}

	@RequestMapping(value = "/memberIdChk", method = RequestMethod.POST)
	@ResponseBody
	public String memberIdChkPOST(String userId) throws Exception {
		log.info("중복체크 진입");
		int result = commonService.idCheck(userId);

		log.info("결과값 = " + result);

		if (result != 0) {

			return "fail"; // 중복 아이디가 존재

		} else {

			return "success"; // 중복 아이디 x

		}
	}
	
	@RequestMapping(value = "/enabledChk", method = RequestMethod.POST)
	@ResponseBody
	public String memberEnabledChkPOST(@RequestParam("userid") String userId, MemberVO mem) throws Exception {
		log.info("enabled진입");
		int result = 0;
		result=commonService.enabledCheck(userId);

		if (result == 1) {

			return "fail"; // fail 전달

		} else {

			return "success"; // 중복 아이디 x

		}
	}
    /* 이메일 인증 */
    @RequestMapping(value="/mailCheck", method=RequestMethod.GET)
    @ResponseBody
    public String mailCheckGET(String email) throws Exception{
        
        /* 뷰(View)로부터 넘어온 데이터 확인 */
        log.info("이메일 데이터 전송 확인");
        log.info("인증메일 : " + email);
        /* 인증번호(난수) 생성 */
        Random random = new Random();
        int checkNum = random.nextInt(888888) + 111111;
        log.info("인증번호 " + checkNum);
        
        /* 이메일 보내기 */
        //내가 메일보내는 주체
        String setFrom = "jayleesin@naver.com";
        String toMail = email;
        String title = "회원가입 인증 이메일 입니다.";
        String content = 
                "홈페이지를 방문해주셔서 감사합니다." +
                "<br><br>" + 
                "인증 번호는 " + checkNum + "입니다." + 
                "<br>" + 
                "해당 인증번호를 인증번호 확인란에 기입하여 주세요.";
		
		  try {
		  
		  MimeMessage message = mailSender.createMimeMessage(); MimeMessageHelper
		  helper = new MimeMessageHelper(message, true, "utf-8");
		  helper.setFrom(setFrom); helper.setTo(toMail); helper.setSubject(title);
		  helper.setText(content,true); mailSender.send(message);
		  
		  }catch(Exception e) { e.printStackTrace(); }
		 
        String num = Integer.toString(checkNum);
        
        return num;
    }
}
