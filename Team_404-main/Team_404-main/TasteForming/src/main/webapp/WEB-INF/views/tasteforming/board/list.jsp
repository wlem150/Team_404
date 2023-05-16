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
<link rel="stylesheet" href="${path }/resources/css/board.css">
<link rel="stylesheet" href="${path }/resources/css/boardHeader.css">
<link rel="stylesheet" href="${path }/resources/css/reset.css">
</head>
<body>
	<%@include file="boardheader.jsp" %>
	<main class="main-wrap margin-bottom">
		<span class="subject">게시판</span>
		<form class="board-search-container" action="list" method="get">

			<select name='type' class="select">
				<option value="TWC"
					<c:out value="${pageMaker.cri.type eq 'TWC'?'selected':''}"/>>전체검색</option>
				<option value="T"
					<c:out value="${pageMaker.cri.type eq 'T'?'selected':''}"/>>제목</option>
				<option value="C"
					<c:out value="${pageMaker.cri.type eq 'C'?'selected':''}"/>>내용</option>
				<option value="W"
					<c:out value="${pageMaker.cri.type eq 'W'?'selected':''}"/>>작성자</option>
				<option value="TC"
					<c:out value="${pageMaker.cri.type eq 'TC'?'selected':''}"/>>제목/내용</option>
				<option value="TW"
					<c:out value="${pageMaker.cri.type eq 'TW'?'selected':''}"/>>제목/작성자</option>
			</select> <input type="text" class="form-control search-box" name='keyword'
				placeholder="Search"
				value='<c:out value="${pageMaker.cri.keyword}"/>' /> <input
				type='hidden' name='pageNum'
				value='<c:out value="${pageMaker.cri.pageNum}"/>' /> <input
				type='hidden' name='amount'
				value='<c:out value="${pageMaker.cri.amount}"/>' /> <label
				for="keyword"></label>
			<button id="search_button"></button>
		</form>

		<div class="list-container">
			<table class="board_list">
				<thead class="board_head">
					<tr>
						<th>#</th>
						<th>제목</th>
						<th>작성자</th>
						<th>작성일</th>
						<th>수정일</th>
					</tr>
				</thead>

				<tbody>
					<c:forEach items="${list}" var="board">
						<tr>
							<td><c:out value="${board.board_no}" /></td>
							<td><a class='move'
								href='<c:out value="${board.board_no}"/>'> <c:out
										value="${board.title}" />
							</a></td>
							<td><c:out value="${board.userId}" /></td>
							<td><fmt:formatDate pattern="yyyy-MM-dd"
									value="${board.regDate}" /></td>
							<td><fmt:formatDate pattern="yyyy-MM-dd"
									value="${board.updateDate}" /></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		<sec:authorize access="isAuthenticated()">
			<button class="board-register" id='regBtn' type="button">글등록</button>
		</sec:authorize>
		<form id="pageForm" action="/list" method='get'>
			<input type="hidden" name='pageNum' value='${pageMaker.cri.pageNum }'>
			<input type="hidden" name='amount' value='${pageMaker.cri.amount }'>
			<input type='hidden' name='type'
				value='<c:out value="${ pageMaker.cri.type }"/>'> <input
				type='hidden' name='keyword'
				value='<c:out value="${ pageMaker.cri.keyword }"/>'>
		</form>
		<div class="pageInfo_wrap">
			<div class="pageInfo_area">
				<ul id="pageInfo" class="pageInfo">

					<!-- 이전페이지 버튼 -->
					<c:if test="${pageMaker.prev}">
						<li class="pageInfo_btn previous"><a
							href="${pageMaker.startPage-1}">Previous</a></li>
					</c:if>

					<!-- 각 번호 페이지 버튼 -->
					<c:forEach var="num" begin="${pageMaker.startPage}"
						end="${pageMaker.endPage}">
						<li class="pageInfo_btn"${pageMaker.cri.pageNum == num ? "active":"" }"><a
							href="${num}">${num}</a></li>
					</c:forEach>

					<!-- 다음페이지 버튼 -->
					<c:if test="${pageMaker.next}">
						<li class="pageInfo_btn next"><a
							href="${pageMaker.endPage + 1 }">Next</a></li>
					</c:if>
				</ul>
			</div>
		</div>
	</main>

	<!-- --페이징처리 부분-- -->






	<!-- jQuery -->
	<script src="${path }/resources/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap 4 -->
	<script
		src="${path }/resources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- AdminLTE App -->
	<script src="${path }/resources/dist/js/adminlte.min.js"></script>
	<!-- Page specific script -->

	<script>
	$(document).ready(function() {
		var result = '<c:out value="${result}"/>';
		console.log("result1:" + result);
	});
	</script>

	<script>

	$(document).ready(function () {
		  var result = '<c:out value="${result}"/>';
		  checkModal(result);
		  console.log("result:" + result);

		  history.replaceState({}, null, null);

		  function checkModal(result) {
		    if (result == null || result === "" || history.state) {
		      return;
		    }

		    if (parseInt(result) > 0) {
		      $(".modal-body").html(
		        "게시글 " + parseInt(result) + "번이 등록되었습니다."
		      );
		    }

		    $("#myModal").modal("show");
		  }

		  $("#regBtn").on("click", function () {
		    self.location = "register";
		  });

		  var actionForm = $("#pageForm");

		  $(".paginate_button a").on("click", function (e) {
		    e.preventDefault();
		    console.log("click");
		    actionForm.find("input[name='pageNum']").val($(this).attr("href"));
		    actionForm.submit();
		  });
		  $(".move").on("click", function (e) {
		    e.preventDefault();
		    actionForm.append(
		      "<input type='hidden' name='board_no' value='" +
		        $(this).attr("href") +
		        "'>"
		    );
		    actionForm.attr("action", "get");
		    actionForm.submit();
		  });

		  $(".pageInfo a").on("click", function (e) {
		    e.preventDefault();
		    console.log("click");
		    actionForm.find("input[name='pageNum']").val($(this).attr("href"));
		    actionForm.attr("action", "list");
		    actionForm.submit();
		  });

		  var searchForm = $("#searchForm");

		  $("#searchForm button").on("click", function (e) {
		    if (!searchForm.find("input[name='keyword']").val()) {
		      alert("키워드를 입력하세요");
		      return false;
		    }

		    searchForm.find("input[name='pageNum']").val("1");
		    e.preventDefault();

		    searchForm.submit();
		  });
		});

	</script>


	<%@include file="../../includes/footer.jsp"%>
</body>
</html>


