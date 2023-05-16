package com.tasteforming.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tasteforming.domain.Criteria;
import com.tasteforming.domain.ReplyPageDTO;
import com.tasteforming.domain.ReplyVO;
import com.tasteforming.service.ReplyService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RequestMapping("tasteforming/board/replies")
@RestController
@Log4j
@AllArgsConstructor
public class ReplyController {

	private ReplyService service;
	
	//댓글 등록
	//http://localhost:8080/replies/new  {"board_no":274, "reply":"hello test reply", "userId": "user05"}
	@PreAuthorize("isAuthenticated()")
	@PostMapping(value = "/new", consumes =  "application/json;charset=UTF-8", produces = { MediaType.TEXT_PLAIN_VALUE  + ";charset=UTF-8" })
	public ResponseEntity<String> create(@RequestBody ReplyVO vo) { //@requestBody를 적용해 JSON데이터를 ReplyVO타입으로변환

		log.info("ReplyVO: " + vo);

		int insertCount = service.register(vo);
			
		log.info("Reply INSERT COUNT: " + insertCount);
			

		return insertCount == 1 ? new ResponseEntity<>("댓글이 등록되었습니다.", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	

	//댓글 번호 조회
	@PreAuthorize("isAuthenticated()")
	@GetMapping(value = "/{review_no}", produces = { MediaType.APPLICATION_XML_VALUE, 
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<ReplyVO> get(@PathVariable("review_no") Long review_no) {

		log.info("get : " + review_no);
		return new ResponseEntity<>(service.get(review_no), HttpStatus.OK);
	}
	
	//댓글 삭제
	@DeleteMapping(value = "/{review_no}", produces = { MediaType.TEXT_PLAIN_VALUE + ";charset=UTF-8" })
	public ResponseEntity<String> remove(@PathVariable("review_no") Long review_no) {
		log.info("remove : " + review_no);
		return service.remove(review_no) == 1 ? new ResponseEntity<>("댓글이 삭제되었습니다.", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	
	//댓글 수정-JSON 형태로 전달되는 데이터와 파라미터로 전달되는 review_no를 처리
	@RequestMapping(method = { RequestMethod.PUT, RequestMethod.PATCH }, value = "/{review_no}",
			consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE + ";charset=UTF-8"})
	public ResponseEntity<String> modify(@RequestBody ReplyVO vo, @PathVariable("review_no") Long review_no) {
		vo.setReview_no(review_no);
		log.info("review_no : " + review_no);
		log.info("modify : " + vo);

		return service.modify(vo) == 1 ? new ResponseEntity<>("댓글이 수정되었습니다.", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	  //게시글 댓글 전체 조회
    @GetMapping(value="/pages/{board_no}/{page}", produces= {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_UTF8_VALUE})
    //서비스에 있는 getListWithPaging은 댓글 목록과 댓글 전체 개수 두 개를 갖고 있는 ReplyPageDTO 타입이다.  
    public ResponseEntity<ReplyPageDTO> getList(@PathVariable("board_no") Long board_no, @PathVariable("page") int page){
        log.info("getList..........");
        Criteria cri = new Criteria(page, 10);
        log.info(cri);

        return new ResponseEntity<ReplyPageDTO>(service.getListWithPaging(cri, board_no), HttpStatus.OK);
    }

}
