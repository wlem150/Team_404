<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="path" value="${pageContext.request.contextPath}" />
<%@ page session="false"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<c:set value="1" var="count" />
<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MyPage</title>

<!-- Google Font: Source Sans Pro -->
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
<!-- Font Awesome -->
<link rel="stylesheet"
	href="${path }/resources/plugins/fontawesome-free/css/all.min.css">
<!-- jsGrid -->
<link rel="stylesheet"
	href="${path }/resources/plugins/jsgrid/jsgrid.min.css">
<link rel="stylesheet"
	href="${path }/resources/plugins/jsgrid/jsgrid-theme.min.css">
<!-- Theme style -->
<link rel="stylesheet"
	href="${path }/resources/dist/css/adminlte.min.css">
</head>

<body class="hold-transition sidebar-mini">

	<div class="wrapper">
		<%@ include file="myPageHeader.jsp" %>

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<section class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1 style="font-size: 3rem;
    font-weight: bold;">게시글관리</h1>
						</div>
						<div class="col-sm-6">
							<ol class="breadcrumb float-sm-right">
								<li class="breadcrumb-item"><a href="#">Home</a></li>
								<li class="breadcrumb-item active">게시글관리</li>
							</ol>
						</div>
					</div>
				</div>
				<!-- /.container-fluid -->
			</section>

			<!-- Main content -->
			<section class="content">
				<div class="card">
					<div class="card-header">
						<h3 class="card-title">내가 작성한 글</h3>
					</div>
					<!-- /.card-header -->
					<div class="card-body">
						<div id="jsGrid1" class="jsgrid"
							style="position: relative; height: 100%; width: 100%;">
							<div class="jsgrid-grid-header jsgrid-header-scrollbar">
								<table class="jsgrid-table">

									<!-- table header -->
									<tr class="jsgrid-header-row">

										<th class="jsgrid-header-cell jsgrid-header-sortable jsgrid-align-right"
											style="width: 50px;">글번호</th>
										<th
											class="jsgrid-header-cell jsgrid-align-right jsgrid-header-sortable"
											style="width: 100px;">제목</th>
										<th
											class="jsgrid-header-cell jsgrid-align-right jsgrid-header-sortable"
											style="width: 200px;">내용</th>
										<th class="jsgrid-header-cell jsgrid-header-sortable jsgrid-align-right"
											style="width: 50px;">작성날짜</th>
										<th
											class="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
											style="width: 50px;">수정한날짜</th>
										<th
											class="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
											style="width: 50px;">작성자</th>
										<th
											class="jsgrid-header-cell jsgrid-control-field jsgrid-align-center"
											style="width: 50px;"><input
											class="jsgrid-button jsgrid-mode-button jsgrid-search-mode-button"
											type="button" title=""></th>
									</tr>
									<!-- table header -->
								</table>
							</div>



							<div class="jsgrid-grid-body">
								<table class="jsgrid-table">
									<tbody>


										<!-- table body edit -->
										<c:forEach items="${board }" var="board" varStatus="loop">

											<tr class="jsgrid-edit-row"
												id="edit-row-${loop.index}" style="display: none;">
												<td class="jsgrid-cell" style="width: 50px;"><input
													type="text" value="${board.board_no }" readonly></td>
												<td class="jsgrid-cell" style="width: 100px;"><input
													type="text" value="${board.title }"></td>
												<td class="jsgrid-cell" style="width: 200px;"><input
													type="text" value="${board.content }"></td>
												


												<td class="jsgrid-cell" style="width: 50px;"><input
													type="date" value="${board.regDate }" readonly></td>
												<td class="jsgrid-cell" style="width: 50px;"><input
													type="date" value="${board.updateDate}" readonly></td>
												<td class="jsgrid-cell" style="width: 50px;"><input
													type="text" value="${board.userId}" readonly></td>
												
												
												<td
													class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
													style="width: 50px;"><input
													class="jsgrid-button jsgrid-update-button" type="button"
													title="Update"><input
													class="jsgrid-button jsgrid-cancel-edit-button"
													type="button" title="Cancel edit" onclick="cancelRow(${loop.index})"></td>
											</tr>



											<!-- table body -->
											<tr
												class="${loop.index % 2 == 0 ? 'jsgrid-row' : 'jsgrid-alt-row'}"
												id="data-row-${loop.index}">

												<td class="jsgrid-cell jsgrid-align-center" style="width: 50px;"><c:out
														value="${board.board_no }" /></td>
												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 100px;"><c:out value="${board.title}" /></td>
												<td class="jsgrid-cell jsgrid-align-left"
													style="width: 200px;"><c:out value="${board.content}" /></td>
												<td class="jsgrid-cell jsgrid-align-center" style="width: 50px;"><fmt:formatDate value="${board.regDate}" pattern="yyyy-MM-dd" /></td>
												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 50px;"><fmt:formatDate value="${board.updateDate}" pattern="yyyy-MM-dd" /></td>
												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 50px;"><c:out value="${board.userId }" /></td>
												<td
													class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
													style="width: 50px;"><input
													class="jsgrid-button jsgrid-edit-button" type="button"
													title="Edit" onclick="showEditRow(${loop.index})">
													<input class="jsgrid-button jsgrid-delete-button"
													type="button" title="Delete"></td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
								
							</div>

							<form action="/tasteforming/myPage/myBoard" id="actionForm"
								method='get'>
								<input type="hidden" name='pageNum'
									value='${pageMaker.cri.pageNum }'> <input type="hidden"
									name='amount' value='${pageMaker.cri.amount }'>
							</form>

							<div class="jsgrid-pager-container">
								<div class="jsgrid-pager">
									Pages: <span class="jsgrid-pager-nav-button First"> <a
										href="?pageNum=1&amount=${pageMaker.cri.amount }">First</a>
									</span>

									<c:if test="${pageMaker.prev}">
										<span class="jsgrid-pager-nav-button Prev"> <c:choose>
												<c:when test="${pageMaker.cri.pageNum <= 10}">
													<a href="?pageNum=1&amount=${pageMaker.cri.amount}">Prev</a>
												</c:when>
												<c:otherwise>
													<a
														href="?pageNum=${pageMaker.cri.pageNum-10}&amount=${pageMaker.cri.amount}">Prev</a>
												</c:otherwise>
											</c:choose>
										</span>
									</c:if>


									<c:forEach var="num" begin="${pageMaker.startPage}"
										end="${pageMaker.endPage}">
										<span
											class="jsgrid-pager-page ${pageMaker.cri.pageNum == num ? "jsgrid-pager-current-page" : ""}">
											<a href="${num}">${num}</a>
										</span>
									</c:forEach>



									<c:if test="${pageMaker.next}">
										<span class="jsgrid-pager-nav-button Next"> <c:choose>
												<c:when
													test="${pageMaker.cri.pageNum+10 >= pageMaker.total }">
													<a
														href="?pageNum=${pageMaker.total}&amount=${pageMaker.cri.amount}">Next</a>
												</c:when>
												<c:otherwise>
													<a
														href="?pageNum=${pageMaker.cri.pageNum+10}&amount=${pageMaker.cri.amount}">Next</a>
												</c:otherwise>
											</c:choose>
										</span>
									</c:if>

									<span class="jsgrid-pager-nav-button Last"> <a
										href="?pageNum=${pageMaker.total}&amount=${pageMaker.cri.amount}">Last</a>
									</span> &nbsp;&nbsp;
									<c:out value="${pageMaker.cri.pageNum}" />
									of
									<c:out value="${pageMaker.total}" />

								</div>
							</div>

							<div class="jsgrid-load-shader"
								style="display: none; position: absolute; inset: 0px; z-index: 1000;">
							</div>
							<div class="jsgrid-load-panel"
								style="display: none; position: absolute; top: 50%; left: 50%; z-index: 1000;">
								Please, wait...</div>
						</div>
					</div>
					<!-- /.card-body -->
				</div>
				<!-- /.card -->
			</section>
			<!-- /.content -->
		</div>

		<!-- Modal -->

		<!-- end Modal -->

		<footer class="main-footer">
			<div class="float-right d-none d-sm-block">
				<b>Version</b> 3.2.0
			</div>
			<strong>Copyright &copy; 2014-2021 <a
				href="https://adminlte.io">AdminLTE.io</a>.
			</strong> All rights reserved.
		</footer>

		<!-- Control Sidebar -->
		<aside class="control-sidebar control-sidebar-dark">
			<!-- Control sidebar content goes here -->
		</aside>
		<!-- /.control-sidebar -->
	</div>
	<!-- ./wrapper -->

	<!-- jQuery -->
	<script src="${path }/resources/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap 4 -->
	<script
		src="${path }/resources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- jsGrid -->
	<script src="${path }/resources/plugins/jsgrid/demos/db.js"></script>
	<script src="${path }/resources/plugins/jsgrid/jsgrid.min.js"></script>
	<!-- AdminLTE App -->
	<script src="${path }/resources/dist/js/adminlte.min.js"></script>
	<script src="${path}\resources\js\user.js"></script>
	<script>
		var elements = document
				.querySelectorAll(".jsgrid-row, .jsgrid-alt-row");

		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener("mouseover", function() {
				this.classList.add("jsgrid-selected-row");
			});

			elements[i].addEventListener("mouseout", function() {
				this.classList.remove("jsgrid-selected-row");
			});
		}

		var actionForm = $("#actionForm");

		$(".jsgrid-pager-page a").on("click", function(e) {
			e.preventDefault();
			console.log('click');
			actionForm.find("input[name='pageNum']").val($(this).attr("href"));
			actionForm.submit();
		});

		$(".jsgrid-grid-body").on("click", ".jsgrid-row, .jsgrid-alt-row",
				function() {
					var modal = $(".jsgrid-modal");
					modal.find(".jsgrid-modal-title").text("Modal title");
					modal.modal("show");
				});

		
		
		$(document).on("click", ".jsgrid-update-button", function() {
		    // 현재 row의 정보 가져오기
		    var row = $(this).closest("tr");
		    var board_no = row.find("td:eq(0) input").val();
		    var title = row.find("td:eq(1) input").val();
		    var content = row.find("td:eq(2) input").val();
		    

		    // form 태그 생성
		    var form = $("<form>").attr({
		        "action": "updateBoard",
		        "method": "post",
		        "role": "form"
		    });

		    // input 태그 추가
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "board_no",
		        "value": board_no
		    }).appendTo(form);
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "title",
		        "value": title
		    }).appendTo(form);
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "content",
		        "value": content
		    }).appendTo(form);
		    // form 태그 실행
		    $(document.body).append(form);
		    form.submit();
		});
		

		$(document).on("click", ".jsgrid-delete-button", function() {
			var board_no = $("#data-row-${loop.index} td:first-child").text();

		    var form = $("<form>").attr({
		        "action": "deleteBoard",
		        "method": "post",
		        "role": "form"
		    });

		    $("<input>").attr({
		        "type": "hidden",
		        "name": "board_no",
		        "value": board_no
		    }).appendTo(form);

		    $(document.body).append(form);
		    form.submit();
		});
			

		
		$(document).on("click", ".jsgrid-delete-button", function () {
			var board_no = this.closest('tr').querySelector('td:first-child').innerText;

		    var form = $("<form>").attr({
		        "action": "deleteBoard",
		        "method": "post",
		        "role": "form"
		    });

		    $("<input>").attr({
		        "type": "hidden",
		        "name": "board_no",
		        "value": board_no
		    }).appendTo(form);

		    $(document.body).append(form);
		    form.submit();
		});
	</script>
	<script>

</body>

</html>