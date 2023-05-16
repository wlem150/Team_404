package com.tasteforming.service;

import java.util.List;

import com.tasteforming.domain.MemberVO;

public interface CommonService {
	public void customRegister(MemberVO member);
	public int idCheck(String userId) throws Exception;
	public int enabledCheck(String userId) throws Exception;
	public MemberVO getAddress(String userId);
	
}
