<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>

<c:set var="path" value="${pageContext.request.contextPath}" />

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tasteforming</title>
<link rel="stylesheet" href="${path }/resources/css/boardGet.css">
<link rel="stylesheet" href="${path }/resources/css/boardHeader.css">
<link rel="stylesheet" href="${path }/resources/css/reset.css">
</head>
<body>
	<%@include file="boardheader.jsp"%>
	<main>
		<section class="main-wrap">
			<div class="list-container">
				<span class="subject">Taste Stroy</span>

				<div class="list-container">
					<div class="list_head">
						<p class="get_head">
							<c:out value="${board.title }" />
						</p>
						<span>작성자 : <c:out value="${board.userId }" /></span> <span>작성일자
							:<fmt:formatDate value="${board.regDate}" pattern="yyyy-MM-dd" />
						</span> <span>수정일자 : <fmt:formatDate value="${board.updateDate}"
								pattern="yyyy-MM-dd" /></span>
					</div>
					<div class="list_body">
						<c:out value="${board.content }" />
					</div>
					<button data-oper='list' class="board-btn return-btn">목록</button>
					<form id='operForm' action="modify" method="get">
						<sec:authentication property="principal" var="pinfo" />
						<sec:authorize access="isAuthenticated()">
							<c:if test="${pinfo.username eq board.userId }">
								<button class="board-btn board-modify-get" data-oper='modify'>수정</button>
							</c:if>
						</sec:authorize>

						<input type="hidden" name="${_csrf.parameterName}"
							value="${_csrf.token}" /> <input type='hidden' id='board_no'
							name='board_no' value='<c:out value="${board.board_no}"/>'>
						<input type='hidden' name='pageNum'
							value='<c:out value="${cri.pageNum}"/>'> <input
							type='hidden' name='amount'
							value='<c:out value="${cri.amount}"/>'> <input
							type='hidden' name='keyword'
							value='<c:out value="${cri.keyword}"/>'> <input
							type='hidden' name='type' value='<c:out value="${cri.type}"/>'>
					</form>

				</div>
			</div>

			</div>

		</section>
		<section class="reply-wrap">
			<div class="list-container review-margin">
				<span class="subject">Reply</span>
				<ul class="review_list replies"></ul>
				<div class="reply">
					<sec:authorize access="isAuthenticated()">
						<div class="writer">
							작성자:
							<sec:authentication property="principal.username" />
						</div>
						<textarea class="reply-input" name="reply"></textarea>
						<button class="reply-send finish">등록</button>
					</sec:authorize>
					<sec:authorize access="!isAuthenticated()">
						<div class="writer">작성자 : </div>
						<textarea class="reply-input" name="reply"></textarea>
						<button class="reply-send finish" onclick="alert('로그인 후 이용해주세요')">등록</button>
					</sec:authorize>
				</div>
			</div>
		</section>

	</main>
	<%@include file="../../includes/footer.jsp"%>
	<!-- jQuery -->
	<script type="text/javascript"
		src="${path }/resources/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap 4 -->
	<script type="text/javascript"
		src="${path }/resources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- AdminLTE App -->
	<script type="text/javascript"
		src="${path }/resources/dist/js/adminlte.min.js"></script>
	<!-- Summernote -->
	<script type="text/javascript"
		src="${path }/resources/plugins/summernote/summernote-bs4.min.js"></script>
	<!-- 글수정, 글 목록돌아가기 버튼 클릭시 이동 -->
	<script type="text/javascript">
$(document).ready(function() {
  
  var operForm = $("#operForm"); 
  
   $("button[data-oper='modify']").on("click", function(e){
    operForm.attr("action","modify").submit();
  });
    
  $("button[data-oper='list']").on("click", function(e){
    operForm.find("#board_no").remove();
    operForm.attr("action","list")
    operForm.submit();
    
  });  
});
</script>

	<!-- 댓글부분  -->
	<script type="text/javascript" src="/resources/js/reply.js"></script>
	<script type="text/javascript">
     $(document).ready(function(){

    	 var board_no = "${board.board_no}";
		 var replyUL = $(".replies");
		 var replyPaging = $(".paging");
	   	 var pageNum = 1;
    	var userId = null;
    	
     	 showList(pageNum);
     	 
	 	<sec:authorize access="isAuthenticated()">
	   	userId = '<sec:authentication property="principal.username"/>';
	   	</sec:authorize>
	   	
	   	var csrfHeaderName = "${_csrf.headerName}";
	   	var csrfTokenValue = "${_csrf.token}";
	   	console.log("로그인된userId:::" + userId);
	   	
    	// 등록버튼을 눌렀을 때
    	$(".finish").on("click", function(e){
    		e.preventDefault();
    		// 필요한 데이터: 댓글 작성자, 댓글
    		var reply = $("textarea[name='reply']").val();
    		
		   	
    		if(userId == "" || reply == "" ) {
    			alert("댓글이 입력되지 않았습니다.");
    			return;
    			}
    		
    		replyService.add({board_no: board_no, reply:reply, userId:userId}, function(result){
    			alert(result);
    			$("input[name='userId']").val("userId");
    			$("textarea[name='reply']").val("Reply");
    			pageNum = 1;
    			showList(pageNum);
   			});
    	});

	
	// 현재 페이지가 무엇인지 알아야하므로 페이지 번호를 받아와야 한다.
	function showList(page){
		replyService.getList({board_no:board_no, page: page||1}, function(replyCnt, list){
			console.log("replyCnt : " + replyCnt);
			console.log("list : " + list);
			console.log("로그인된userId:" + userId);
			//console.log("regdate" + regDate);
			var str = "";
			
			if(list == null || list.length == 0 ){
				if(pageNum > 1 ) { // 2페이지에서 하나 남은 댓글을 삭제하면 1페이지로 가야되는데 2페이지로 유지되면서 등록된 댓글이 없다고 나온다.
					pageNum -= 1; // 내 페이지를 1개 감소 시키고 
					showList(pageNum); // 다시 그리기.
				}
				replyUL.html("등록된 댓글이 없습니다.");
				return;
			}

			
			for(var i = 0, len = list.length || 0; i < len; i++){
				console.log("list:" + list[i]);
				str += "<li>";
				str += "<div class='reply-writer'>" + list[i].userId + "</div>";
				str += "<div class='reply-content reply"+ list[i].review_no +"'>" + list[i].reply + "</div>";
				str += "<div class='reply-date'>" + list[i].updateDate +"</div>";
				
				// 수정, 삭제 버튼을 보이거나 숨기도록 설정합니다.
					if(list[i].userId == userId) {
						str += "<button class='review_button reply_modify modify' href='"+ list[i].review_no +"'>수정</button>";
						str += "<button class='review_button reply_modify finish' href='"+ list[i].review_no +"' style='display:none;'>완료</button>";
						str += "<button class='review_button delete remove' href='"+ list[i].review_no +"'>삭제</button>";
					}
				str += "</li>"
			}	
			
			replyUL.html(str);
			//showReplyPage(replyCnt);

		});
	}
	
    // 댓글 삭제 
    // 삭제 버튼 클릭 시 해당 댓글 번호를 가져와 삭제하기
      $(".replies").on("click", "button.remove", function(e){ // 이벤트 위임
         e.preventDefault();
         var review_noValue = $(this).attr("href");

         replyService.remove(review_noValue, function(result){
             alert(result);
             showList(pageNum); // 삭제를 했으면 다시 보여주도록 하기.(새로고침 없이) 
         });
      });

	var check = false; // 다른 댓글 수정 못하게 (동시에) 플래그를 만들어야 한다.
	
	// 댓글 수정
	$(".replies").on("click", "button.modify", function(e){ // 이벤트 위임
		// 1. 수정완료 버튼
		// 2. p태그를 textarea로 변경 (기존 p태그의 내용을 textarea로 옮겨야 한다.)
		e.preventDefault();
	
		if(check){alert("수정중인 댓글이 있습니다."); return;}
		
		var review_noValue = $(this).attr("href");
		var reply = $(".reply" + review_noValue); // p태그
		
		reply.html("<textarea class='"+ review_noValue +"'>"+ reply.text() + "</textarea>"); // textarea로 변경
		$(this).hide(); // 수정 버튼 숨김
		
		var finishs = $(".finish");
		for(let i = 0; i < finishs.length; i++) {
			if($(finishs[i]).attr("href") == review_noValue ){
				$(finishs[i]).show(); // 수정완료 버튼 
				check = true;
				break;
			}
		}
	});
	
	//수정 완료
	$(".replies").on("click", "button.finish", function(e){
		e.preventDefault();
		
		var review_noValue = $(this).attr("href");
		var newReply = $("." + review_noValue).val(); //사용자가 랜더링(브라우저 해석) 다 되고나서 가져와야하기 때문이다.
		
		replyService.update({review_no:review_noValue, reply:newReply}, function(result){
			alert(result);
			check = false;
			showList(pageNum);
		});
	});
	
    	
     });

 </script>


</body>
</html>