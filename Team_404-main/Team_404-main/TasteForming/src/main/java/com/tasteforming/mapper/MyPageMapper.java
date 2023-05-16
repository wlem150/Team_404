package com.tasteforming.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.tasteforming.domain.BoardVO;
import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.LikeVO;
import com.tasteforming.domain.MemberVO;
import com.tasteforming.domain.ReplyVO;
import com.tasteforming.domain.ReserveVO;
import com.tasteforming.domain.RestaurantVO;
import com.tasteforming.domain.ReviewVO;

public interface MyPageMapper {
	
	// 예약 정보 가져오기 (김정우)
	public List<ReserveVO> getReservation(MemberVO member);
	public void orderCancel(ReserveVO reserve);
	public List<ReserveVO> getReserveCustomer(MemberVO member);
	
	
	public List<ReserveVO> getCustomer(@Param("cri") Criteria cri, @Param("userId") String userId);
	public int getCustomerTotalCnt(@Param("userId") String userId);
	public void confirm(ReserveVO reserve);
	public void refuse(ReserveVO reserve);
	
	public List<RestaurantVO> getRestaurantWithUserId(@Param("cri")Criteria cri ,@Param("userId")String userId);
	public int getResTotalCnt(@Param("userId") String userId);
	public void updateRes(RestaurantVO res);
	public void deleteRes(RestaurantVO res);
	
	public List<BoardVO> getBoardWithPaging(@Param("cri")Criteria cri,@Param("userId") String userId);
	public int getBoardTotalCnt();
	public void updateBoard(BoardVO board);
	public void deleteBoard(BoardVO board);
	
	public List<ReviewVO> getReplyWithPaging(Criteria cri, String userId);
	public int getReplyTotalCnt();
	public void updateReply(ReviewVO rev);
	public void deleteReply(ReviewVO rev);
	
	public List<LikeVO> getLikes(@Param("userId")String userId);
	public void updateEvaluation(LikeVO like);
	
	public List<ReserveVO> myReservation(@Param("cri") Criteria cri, @Param("userId") String userId);
}
