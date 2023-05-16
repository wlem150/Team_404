package com.tasteforming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tasteforming.domain.BoardVO;
import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.LikeVO;
import com.tasteforming.domain.MemberVO;
import com.tasteforming.domain.ReplyVO;
import com.tasteforming.domain.ReserveVO;
import com.tasteforming.domain.RestaurantVO;
import com.tasteforming.domain.ReviewVO;
import com.tasteforming.mapper.MyPageMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MyPageServiceImpl implements MyPageService{
	@Autowired
	MyPageMapper mapper;
	
	// 예약 정보 가져오기 (김정우)
	@Override
	public List<ReserveVO> getReservation(MemberVO member) {
		return mapper.getReservation(member);
	}

	@Override
	public List<ReviewVO> getReplyWithPaging(Criteria cri, String userId) {
		return mapper.getReplyWithPaging(cri, userId);
	}

	@Override
	public int getReplyTotalCnt() {
		
		return mapper.getReplyTotalCnt();
	}

	@Override
	public void updateReply(ReviewVO rev) {
		mapper.updateReply(rev);
		
	}

	@Override
	public void deleteReply(ReviewVO rev) {
		mapper.deleteReply(rev);
		
	}
	
	@Override
	public List<BoardVO> getBoardWithPaging(Criteria cri, String userId) {
		return mapper.getBoardWithPaging(cri,userId);
	}

	@Override
	public int getBoardTotalCnt() {
		return mapper.getBoardTotalCnt();
	}

	@Override
	public void updateBoard(BoardVO res) {
		mapper.updateBoard(res);
		
	}

	@Override
	public void deleteBoard(BoardVO res) {
		mapper.deleteBoard(res);
		
	}

	@Override
	public void orderCancel(ReserveVO reserve) {
		mapper.orderCancel(reserve);
	}

	@Override
	public List<RestaurantVO> getRestaurantWithUserId(Criteria cri, java.lang.String userId) {

		return mapper.getRestaurantWithUserId(cri, userId);
	}

	@Override
	public int getResTotalCnt(String userId) {
		return mapper.getResTotalCnt(userId);
	}

	@Override
	public void updateRes(RestaurantVO res) {
		mapper.updateRes(res);
		
	}

	@Override
	public void deleteRes(RestaurantVO res) {
		mapper.deleteRes(res);
		
	}

	@Override
	public List<ReserveVO> getReserveCustomer(MemberVO member) {
		return mapper.getReserveCustomer(member);
	}

	@Override
	public List<ReserveVO> getCustomer(Criteria cri, String userId) {
		return mapper.getCustomer(cri, userId);
	}	
	

	@Override
	public int getCustomerTotalCnt(String userId) {
		return mapper.getCustomerTotalCnt(userId);
	}

	@Override
	public void confirm(ReserveVO reserve) {
		mapper.confirm(reserve);
		
	}

	@Override
	public void refuse(ReserveVO reserve) {
		mapper.refuse(reserve);
		
	}

	@Override
	public List<LikeVO> getLikes(String userId) {
		return mapper.getLikes(userId);
	}

	@Override
	public void updateEvaluation(LikeVO like) {
		mapper.updateEvaluation(like);
		
	}

	@Override
	public List<ReserveVO> myReservation(Criteria cri, String userId) {
		return mapper.myReservation(cri, userId);
	}

}
