// ReserveMapper.java
package com.tasteforming.mapper;


import com.tasteforming.domain.MemberVO;
import com.tasteforming.domain.ReserveVO;
import com.tasteforming.domain.VisitorVO;

public interface ReserveMapper {
    // 예약 정보 추가
	public void insertReserve(ReserveVO reservation);
	public MemberVO getMember();
	public boolean blackCheck(VisitorVO visitor);

}