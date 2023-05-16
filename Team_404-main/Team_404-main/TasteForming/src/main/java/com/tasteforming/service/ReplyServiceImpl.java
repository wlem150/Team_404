package com.tasteforming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.ReplyPageDTO;
import com.tasteforming.domain.ReplyVO;
import com.tasteforming.mapper.ReplyMapper;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Service
@Log4j
@AllArgsConstructor
public class ReplyServiceImpl implements ReplyService {

	@Autowired
	private ReplyMapper mapper; //ReplySErviceImpl은 ReplyMapper와 의존적인 관계기 때문에 생성자 자동주입  

	@Override
	public int register(ReplyVO vo) {
		log.info("register......" + vo);
		return mapper.insert(vo);
	}

	@Override
	public ReplyVO get(Long review_no) {
		log.info("get......" + review_no);
		return mapper.read(review_no);
	}

	@Override
	public int modify(ReplyVO vo) {
		log.info("modify......" + vo);
		return mapper.update(vo);
	}

	@Override
	public int remove(Long review_no) {
		log.info("remove......" + review_no);
		return mapper.delete(review_no);
	}

	@Override
	public List<ReplyVO> getList(Criteria cri, Long board_no) {
		log.info("get Reply List of a Board " + board_no);
		return mapper.getListWithPaging(cri, board_no);
	}

	public ReplyPageDTO getListWithPaging(Criteria cri, Long board_no) {
        log.info("get Reply List of a Board" + board_no);
        //댓글을 구현하기 위해 필요한 두 개의 요소를 ReplyPageDTO에 전달한다.
        return new ReplyPageDTO(mapper.getTotal(board_no), mapper.getListWithPaging(cri, board_no));
    }



}
