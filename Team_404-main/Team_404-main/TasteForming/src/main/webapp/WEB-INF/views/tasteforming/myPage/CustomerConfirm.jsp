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
    font-weight: bold;">예약신청조회</h1>
						</div>
						<div class="col-sm-6">
							<ol class="breadcrumb float-sm-right">
								<li class="breadcrumb-item"><a href="#">Home</a></li>
								<li class="breadcrumb-item active">예약신청조회</li>
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
						<h3 class="card-title">신청받은 예약</h3>
					</div>
					<!-- /.card-header -->
					<div class="card-body">
						<div id="jsGrid1" class="jsgrid"
							style="position: relative; height: 100%; width: 100%;">
							<div class="jsgrid-grid-header jsgrid-header-scrollbar">
								<table class="jsgrid-table">

									<!-- table header -->
									<tr class="jsgrid-header-row">

										<th
											class="jsgrid-header-cell jsgrid-header-sortable jsgrid-align-right"
											style="width: 20px;">번호</th>
										<th
											class="jsgrid-header-cell jsgrid-align-right jsgrid-header-sortable"
											style="width: 50px;">예약자</th>
										<th
											class="jsgrid-header-cell jsgrid-align-right jsgrid-header-sortable"
											style="width: 50px;">식당이름</th>
										<th
											class="jsgrid-header-cell jsgrid-header-sortable jsgrid-align-center"
											style="width: 50px;">예약일자</th>
										<th
											class="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
											style="width: 20px;">사람수</th>
										<th
											class="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
											style="width: 20px;">시간</th>
										<th
											class="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
											style="width: 50px;">취소일자</th>
												<th
											class="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
											style="width: 50px;">승인여부</th>
										
									</tr>
									<!-- table header -->
								</table>
							</div>



							<div class="jsgrid-grid-body">
								<table class="jsgrid-table">
									<tbody>


										<!-- table body edit -->
										<c:forEach items="${reserve }" var="reserve" varStatus="loop">
											<!-- table body -->
											<tr
												class="${loop.index % 2 == 0 ? 'jsgrid-row' : 'jsgrid-alt-row'}"
												id="data-row-${loop.index}">

												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 20px;"><c:out
														value="${reserve.order_No }" />
														<input type="hidden" value="${reserve.order_No }" name="order_No">
														</td>
												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 50px;"><c:out value="${reserve.userId}" />
													
													<input type="hidden" value="${reserve.userId }" name="userId"></td>
													
												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 50px;"><c:out
														value="${reserve.res_Name}" />
														<input type="hidden" value="${reserve.res_Name }" name="res_Name"></td>
												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 50px;"><fmt:formatDate
														value="${reserve.order_Date}" pattern="yyyy-MM-dd" />
														<input type="hidden" value="<fmt:formatDate
														value="${reserve.order_Date}" pattern="yyyy/MM/dd" />" name="order_Date">
														</td>


												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 20px;"><c:out
														value="${reserve.head_Cnt}" />
														</td>
												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 20px;"><c:out value="${reserve.hour}" />
													</td>
												<td class="jsgrid-cell jsgrid-align-center"
													style="width: 50px;"><fmt:formatDate
														value="${reserve.cancel_Date}" pattern="yyyy-MM-dd" />
														
														</td>
														
												<td
													class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
													style="width: 50px;"><input
													class="jsgrid-button jsgrid-update-button" type="button"
													title="Update"><input
													class="jsgrid-button jsgrid-cancel-edit-button"
													type="button" title="Cancel edit"
													onclick="cancelRow(${loop.index})"></td>
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
			var accept = true;
			var order_No = $('input[name="order_No"]').val();
			var userId = $('input[name="userId"]').val();
			var order_Date = $('input[name="order_Date"]').val();
			var res_Name = $('input[name="res_Name"]').val();
		   
		    // form 태그 생성
		    var form = $("<form>").attr({
		        "action": "confirm",
		        "method": "post",
		        "role": "form"
		    });
		    // input 태그 추가
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "order_No",
		        "value": order_No
		    }).appendTo(form);
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "confirm",
		        "value": accept
		    }).appendTo(form); 
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "userId",
		        "value": userId
		    }).appendTo(form); 
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "order_Date",
		        "value": order_Date
		    }).appendTo(form); 
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "res_Name",
		        "value": res_Name
		    }).appendTo(form); 
		    $("<input>").attr({
			    "type": "hidden",
			    "name": "${_csrf.parameterName}",
			    "value": "${_csrf.token}"
			}).appendTo(form);
		    // form 태그 실행
		    $(document.body).append(form);
		    form.submit();
		});
		
		$(document).on("click", ".jsgrid-cancel-edit-button", function() {
			var order_No = $('input[name="order_No"]').val();

		    
		    var today = new Date();
		    var year = today.getFullYear();
		    var month = today.getMonth() + 1;
		    var day = today.getDate();

		    if (month < 10) {
		      month = "0" + month;
		    }

		    if (day < 10) {
		      day = "0" + day;
		    }

		    var formattedDate = year + "/" + month + "/" + day;
		    console.log(formattedDate);

		    
		    var form = $("<form>").attr({
		        "action": "refuse",
		        "method": "post",
		        "role": "form"
		    });

		    $("<input>").attr({
		        "type": "hidden",
		        "name": "order_No",
		        "value": order_No
		    }).appendTo(form);
		    $("<input>").attr({
		        "type": "hidden",
		        "name": "cancel_Date",
		        "value": formattedDate
		    }).appendTo(form);
		    $("<input>").attr({
			    "type": "hidden",
			    "name": "${_csrf.parameterName}",
			    "value": "${_csrf.token}"
			}).appendTo(form);

		    $(document.body).append(form);
		    form.submit();
		});

	
	</script>

</body>

</html>