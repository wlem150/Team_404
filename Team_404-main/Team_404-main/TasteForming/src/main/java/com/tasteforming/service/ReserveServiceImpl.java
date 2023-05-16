package com.tasteforming.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tasteforming.domain.MemberVO;
import com.tasteforming.domain.ReserveVO;
import com.tasteforming.domain.VisitorVO;
import com.tasteforming.mapper.ReserveMapper;

@Service
public class ReserveServiceImpl implements ReserveService {

    @Autowired
    private ReserveMapper reserveMapper;

    @Override
    //인서트 하는 로직
    public void insertReserve(ReserveVO reservation) {
        // 예약 정보를 DB에 저장
        reserveMapper.insertReserve(reservation);
    }

	@Override
	public MemberVO getMember() {
		return reserveMapper.getMember();
	}

	@Override
	public boolean blackCheck(VisitorVO visitor) {
		return reserveMapper.blackCheck(visitor);
	}


}

