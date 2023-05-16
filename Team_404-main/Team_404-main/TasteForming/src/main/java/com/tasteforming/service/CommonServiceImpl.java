package com.tasteforming.service;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.tasteforming.domain.MemberVO;
import com.tasteforming.mapper.MemberMapper;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
@AllArgsConstructor
public class CommonServiceImpl implements CommonService {

	private PasswordEncoder pwEncoder;
	private MemberMapper memberMapper;
	
	@Transactional
	@Override
	public void customRegister(MemberVO member) {
		member.setUserPw(pwEncoder.encode(member.getUserPw()));
		log.info("User Sec PW" + member.getUserPw());
		memberMapper.createMember(member);
		memberMapper.createMemberAuth(member);
	}
	@Override
	public int idCheck(String userId) throws Exception {
		return memberMapper.idCheck(userId);
	}
	@Override
	public int enabledCheck(String userId) {
		return memberMapper.enabledCheck(userId);
	}
	@Override
	public MemberVO getAddress(String userId) {
		return memberMapper.getAddress(userId);
	}
}