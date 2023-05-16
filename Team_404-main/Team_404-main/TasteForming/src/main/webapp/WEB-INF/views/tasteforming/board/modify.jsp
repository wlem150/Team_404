<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>
<c:set var="path" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tasteforming</title>
<link rel="stylesheet" href="${path }/resources/css/boardRegister.css">
<link rel="stylesheet" href="${path }/resources/css/reset.css">
<link rel="stylesheet" href="${path }/resources/css/boardHeader.css">
</head>
<body>
	<%@include file="boardheader.jsp" %>

	<main>
		<section class="main-wrap">
			<div class="list-container">
				<span class="subject">Taste Stroy</span>
				<form role="form" action="modify" method="post">
					<input type="hidden" name="${_csrf.parameterName}"
						value="${_csrf.token}" /> <input type='hidden' name='pageNum'
						value='<c:out value="${cri.pageNum }"/>'> <input
						type='hidden' name='amount'
						value='<c:out value="${cri.amount }"/>'> <input
						type='hidden' name='type' value='<c:out value="${cri.type}"/>'>
					<input type='hidden' name='keyword'
						value='<c:out value="${cri.keyword}"/>'> <input
						class="form-control" name='board_no' type="hidden"
						value='<c:out value="${board.board_no }"/>' readonly="readonly">
					<div class="list-container">
						<div class="list_head">
							<p class="get_head">게시글 제목</p>
							<input type="text" class="board-box" placeholder="제목"
								name="title" value='<c:out value="${board.title }"/>'>
						</div>
						<div class="list_body">
							<p class="get_head">게시글 내용</p>
							<textarea class="board-box board-content" placeholder="내용"
								name="content"><c:out value="${board.content}" /></textarea>
							<input class="form-control" type="hidden" name="userId"
								value='<sec:authentication property="principal.username"/>'
								readonly="readonly">
						</div>

						<input class="form-control" type="hidden" name='userId'
							value='<c:out value="${board.userId}"/>'>

						<button class="board-btn return-btn" type="submit"
							data-oper='list'>목록</button>
						<sec:authentication property="principal" var="pinfo" />
						<sec:authorize access="isAuthenticated()">
							<c:if test="${pinfo.username eq board.userId }">
								<button class="board-btn board-modify" type="submit"
									data-oper='modify'>수정</button>
								<button class="board-btn board-delete" type="submit"
									data-oper='remove'>삭제</button>
							</c:if>
						</sec:authorize>


					</div>
				</form>
			</div>


			</div>

		</section>
	</main>

	<!-- jQuery -->
	<script src="${path }/resources/plugins/jquery/jquery.min.js"></script>

	<script>
		$(document).ready(function() {

			var formObj = $("form");

			$('button').on("click", function(e) {

				e.preventDefault();

				var operation = $(this).data("oper");

				console.log(operation);

				if (operation === 'remove') {
					formObj.attr("action", "remove");

				} else if (operation === 'list') {
					formObj.attr("action", "list").attr("method", "get");

					var pageNumTag = $("input[name='pageNum']").clone();
					var amountTag = $("input[name='amount']").clone();
					var keywordTag = $("input[name='keyword']").clone();
					var typeTag = $("input[name='type']").clone();

					formObj.empty();

					formObj.append(pageNumTag);
					formObj.append(amountTag);
					formObj.append(keywordTag);
					formObj.append(typeTag);
				}
				formObj.submit();
			});
		});
	</script>
	<%@include file="../../includes/footer.jsp"%>
</body>
</html>


