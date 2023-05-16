package com.tasteforming.service;

import java.util.List;

import com.tasteforming.domain.MemberVO;
import com.tasteforming.domain.ReserveVO;
import com.tasteforming.domain.VisitorVO;
public interface ReserveService {

	// 예약 추가
	public void insertReserve(ReserveVO reservation);
	public MemberVO getMember();
	
	public boolean blackCheck(VisitorVO visitor);

}
