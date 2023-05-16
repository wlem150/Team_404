package com.tasteforming.mapper;
import com.tasteforming.domain.MemberVO;

public interface MemberMapper {

	public MemberVO read(String userid);
	public void createMember(MemberVO member);
	public void createMemberAuth(MemberVO member);
	public int idCheck(String userId);
	public int enabledCheck(String userId);

	
	public MemberVO getAddress(String userId);
	/*
	 * public int overlappedID(MemberVO memberVO); public int setInsert(MemberVO
	 * member);
	 */
}
