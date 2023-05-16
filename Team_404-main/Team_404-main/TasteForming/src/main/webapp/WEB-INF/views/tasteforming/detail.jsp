<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!-- jsp에서 컨트롤러에 보낸 예약 정보를 받아올 쿼리문 -->
<%@ page import="java.sql.*"%>
<c:set var="path" value="${pageContext.request.contextPath}" />
<c:set value="${res }" var="res" />
<c:set value="${member}" var="mem" />
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
	<%@page import="com.tasteforming.domain.Geocoding"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tasteforming</title>
<link href="${path}/resources/css/Main.css" rel="stylesheet" />
<link rel="stylesheet" href="${path}/resources/css/NewDetail.css">
<link rel="stylesheet" href="${path}/resources/css/reset.css">
<!-- jQuery UI CSS 파일 링크 -->
<link rel="stylesheet"
	href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
	crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script type="text/javascript"
			src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=h8i759eo14"></script>
			
</head>


<body class="bg">
<header>
		<form action="/customLogout" id="logoutForm" method="post">
			<input type="hidden" name="${_csrf.parameterName}"
				value="${_csrf.token}" />
		</form>
		<form action="/search" id="actionForm" method='get'></form>
		<div class="container header">
			<a href="main" style="border: none;"><img
				src="${path }/resources/img/TasteFormingLogo.png"
				alt="TasteFormingLogo" width="150px"></a>

			<!-- 검색 -->
			<form class="search-container" action="search" method="get">
				<label for="keyword"></label> <input type="text" name="keyword"
					class="search-box" placeholder="지역, 음식 또는 식당명 입력">
				<button id="search_button"></button>
			</form>



			<!-- 로그인 -->
			<sec:authorize access="isAuthenticated()">
				<sec:authorize access="hasAnyAuthority('ROLE_MANAGER', 'ROLE_USER')">
					<div class="sign">

						<a href="myPage/myPage">마이페이지</a> <a href="/customLogout">로그아웃</a>
					</div>
				</sec:authorize>
			</sec:authorize>
			<sec:authorize access="hasAuthority('ROLE_ADMIN')">
				<div class="sign">
					<a href="admin/UserManagement">관리자페이지</a><a href="/customLogout">로그아웃</a>
				</div>
			</sec:authorize>
			<%-- <sec:authorize access="isAnonymous()"> --%>
			<sec:authorize access="!isAuthenticated()">
				<div class="sign">
					<a href="/customLogin">로그인</a> <a href="/customRegister">회원가입</a>
				</div>
			</sec:authorize>

		</div>

		<nav class="nav">
			<div class="menu_list">
				<a href="/tasteforming/search?keyword=한식"><img alt=""
					src="${path }/resources/img/bibimbap.png">한식</a> <a
					href="/tasteforming/search?keyword=중식"><img alt=""
					src="${path }/resources/img/buns.png">중식</a> <a
					href="/tasteforming/search?keyword=양식"><img alt=""
					src="${path }/resources/img/steak.png">양식</a> <a
					href="/tasteforming/search?keyword=일식"><img alt=""
					src="${path }/resources/img/nigiri.png">일식</a> <a
					href="/tasteforming/search?keyword=채식"><img alt=""
					src="${path }/resources/img/lettuce.png">채식</a> <a
					href="board/list"><img alt=""
					src="${path }/resources/img/dish.png">스토리</a> <a href="/contactUs"
					style="float: right"><img alt=""
					src="${path }/resources/img/team.png" style="top: 11px;">TEAM_404</a>


			</div>
		</nav>
	</header>
<main class="container-wrap"> 
	<aside class="subleft-cont">
	<div class="mini-map"></div>
	<p><div id="map" style="width:90%;height:70%;margin:0 auto;"></div></p>
	<c:set var="addressArray" value="${fn:split(res.address, ' ')}" />
	
<a href="http://localhost:8080/tasteforming/search?keyword=${fn:split(res.address, ' ')[1]}" style="padding-left:15px;">
    <c:out value="'${fn:split(res.address, ' ')[1]}'" />
    맛집 더 검색해보기
</a>
	</aside> 
	
	
	
	
	<section class="header-container"> <img
		src="${path }${res.img_path}" alt="" class="food_img">

	<h1 class="detail_resName">
		<c:out value="${res.res_Name }"></c:out>
	</h1>
	<div class="res_menu">
		<c:out value="${res.type }"></c:out>
		|
		<c:out value="${res.menu }"></c:out>
	</div>
	<hr>

	<div class="favor-pic-appra">

		<form name='frm_read' id='frm_read' method="get">
			<input type="hidden" id='res_No' name="res_No" value='${res.res_No }'>
			<input type="hidden" id='userId' name="userId" value=''>

			<sec:authorize access="isAnonymous()">
				<a href='javascript: login_need();'><img
					src='${path }/resources/img/emptyLike.png'></a>
				<span id="like_cnt" style='margin-left: 5px;'>10</span> Likes
			</sec:authorize>

			<sec:authorize access="isAuthenticated()">
				<label class="checkbox" for="ckb_auto"> <input id="ckb_auto"
					type="checkbox" name='like-button'> <i class="heart-icon"></i>
					<span class="fs-13 fw-b"></span>
				</label>
				<span id="like_cnt" style='margin-left: 5px;'>10</span> Likes
			</sec:authorize>
		</form>



		<button type="button" class="sharebutton" id="shareButton">공유하기</button>
		<button type="button" class="reserveBtn"
			onclick="openReserveModal('${member.userId}', '${res.res_No}', '${res.res_Name}')">
			예약하기</button>
	</div>



	<!-- 공유하기 모달 -->
	<div class="modal" id="shareModal">
		<div class="modal-content">
			<span class="close" id="closeShareModal">&times;</span> <label
				for="shareUrl">현재 링크 복사하기:</label> <input type="text" id="shareUrl"
				value="" readonly>
			<button type="button" id="copyButton" class="btn btn-outline-dark">복사하기</button>
		</div>
	</div>

	<!--예약 모달 -->
	<div class="modal" id="reservationModal" tabindex="-1"
		aria-labelledby="reservationModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-fullscreen-sm-down">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="reservationModalLabel">예약 양식</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal"
						aria-label="닫기"></button>
				</div>


				<!-- 예약 정보를 입력하는 모달 창 -->
				<form action="/tasteforming/insertReserve" method="post" role="form">
					<div class="modal-body">
						<input type="hidden" name="userId" value="${mem.userId }">
						<input type="hidden" name="res_No" value="${res.res_No }">
						<input type="hidden" name="res_Name" value="${res.res_Name }">

						<h3>날짜 선택</h3>
						<input type="text" id="datepicker" name="order_Date"
							placeholder="(클릭)날짜를 선택하세요" style="width:100%; height:40px;">

						<h3>인원 수 선택</h3>
						<select id="numOfPeople" name="head_Cnt" style="width:100%; height:40px;">
							<option value="1" ${param.head_cnt == 1 ? "selected" : ""}>1명</option>
							<option value="2" ${param.head_cnt == 2 ? "selected" : ""}>2명</option>
							<option value="3" ${param.head_cnt == 3 ? "selected" : ""}>3명</option>
							<option value="4" ${param.head_cnt == 4 ? "selected" : ""}>4명</option>
							<option value="5" ${param.head_cnt == 5 ? "selected" : ""}>5명</option>
							<option value="6" ${param.head_cnt == 6 ? "selected" : ""}>6명</option>
							<option value="7" ${param.head_cnt == 7 ? "selected" : ""}>7명</option>
							<option value="8" ${param.head_cnt == 8 ? "selected" : ""}>8명</option>

						</select>

						<h3>시간 선택</h3>
						<div id="timepicker" name="hour" style="width:100%; height:40px;">
						
						</div>
						
						<br> <br>
					</div>
					<div class="modal-footer">
						<button type="submit" class="btn btn-primary my-button"
							data-bs-dismiss="modal" id="reserveBtn">예약</button>
						<button type="button" class="btn btn-secondary"
							data-bs-dismiss="modal">닫기</button>
					</div>
							<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
				</form>
			</div>
		</div>
	</div>
	<div class="modal fade" id="reservationCompleteModal" tabindex="-1"
		aria-labelledby="reservationCompleteModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="reservationCompleteModalLabel">예약
						완료</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal"
						aria-label="닫기"></button>
				</div>
				<div class="modal-body">
					<p>예약이 완료되었습니다.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-bs-dismiss="modal">닫기</button>
				</div>
			</div>
		</div>
	</div>
	</section>

	<div class="info-container">
		<p><c:out value="${res.res_Name }"></c:out></p>
		<p><c:out value="${res.address}"></c:out></p>
		<p><c:out value="${res.tel }"></c:out></p>
		<p><c:out value="${res.type }"></c:out></p>
		<p><c:out value="${res.info }"></c:out></p>
	</div>

<div class="menu-container">
	<h2>영업시간</h2>
	<p>매일 === 오전 11시 - 오후 10시</p>

	<h2>메뉴정보</h2>
	<c:forEach items="${res.menu}" var="menu" varStatus="status">
	<p>
		<c:out value="${menu}" escapeXml="false" />
	</p>
	<c:if test="${not status.last}">
	</c:if>
</c:forEach>
</div>

	<div class="review_box">
		<h3 class="review-title">
			<span><c:out value="${res.reviewCnt}" /></span>건의 방문자 평가
		</h3>
		<hr>
		<form action="/Review/insert" method="post" role="form" class="mb-4"
			id="review-form">
			<textarea name="content" cols="20" rows="10" class="review-content"
				placeholder="맛있는 경험을 같이 공유해봐요!!"></textarea>
			<input type="hidden" name="userId" id="userId" value="${mem.userId}">
			<input type="hidden" name="res_No" value="${res.res_No}">
			<div class="favor-pic-appra">
				<button type="submit" class="reserve">등록하기</button>
			</div>
					<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
		</form>


		<c:forEach var="review" items="${reviewList}">
			<div class="reviews">

				<span class="review_no"><c:out value="ID : " />
					<span class="username dd"> <c:out value="${review.userId}" />
				</span></span>

				<div class="dates">
					작성일자 :
					<c:out value="${fn:substring(review.regDate, 0, 10)}" />
				</div>

				<div class="content">
					댓글 :
					<c:out value="${review.content}" />
					<td><button type="button" class="btn btn-outline-dark"
							onclick="openModal('${review.resview_No}', '${review.res_No}', '${review.userId}', '${review.content}')"
							style="font-size: 10px; padding: 0.2rem 0.2rem;">수정</button></td>
					<td><button type="button" class="btn btn-outline-dark"
							onclick="deleteReview('${review.resview_No}','${review.res_No}','${review.userId}')"
							style="font-size: 10px; padding: 0.2rem 0.2rem;">삭제</button></td>

				</div>
			</div>
		</c:forEach>

		<!-- 수정, 삭제 모달 -->
		<div id="myModal" class="modal">

			<div class="modal-content">
				<span class="close" onclick="closeModal()">&times;</span>
				<form id="updateReview" action="/Review/update" method="post">
					<div>
						<input type="hidden" name="resview_No" id="resview_No" value="">
						<input type="hidden" name="res_No" id="res_No"
							value="${res.res_No}"> <label for="content">댓글
							내용:</label>
						<textarea id="content" name="content" id="content"></textarea>
						<input type="submit" value="수정" class="btn btn-outline-dark">
					</div>
							<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
				</form>
			</div>
		</div>
		<div id="deleteModal" class="modal">
			<div class="modal-content">
				<span class="close" onclick="closeDeleteModal()">&times;</span>
				<form id="deleteReview" action="/Review/delete" method="post">

					<div>
						<input type="hidden" name="resview_No" id="resview_No_delete">
						<input type="hidden" name="res_No" id="res_No_delete" value="">
						<input type="hidden" name="userId" id="userId" value="">
						<p>정말 삭제하시겠습니까?</p>
						<button type="submit" onclick="saveLike()"
							class="btn btn-outline-dark">예</button>
						<button type="button" onclick="closeLikeModal()"
							class="btn btn-outline-dark">아니오</button>

						<!-- userId 파라미터를 전송할 필요가 없으므로 삭제합니다. -->
					</div>
							<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
				</form>
			</div>
		</div>
	</div>
	</main>

	<script type="text/javascript">
	const selectElement = document.createElement("select"); // select 요소 생성
	selectElement.setAttribute("name", "hour");
	selectElement.setAttribute("style", "width: 100%; height: 40px;");
	for (let i = 9; i <= 22; i++) { 
	  const hour = i < 10 ? "0" + i : i; // 시간을 2자리 문자열로 변환
	  const optionElement = document.createElement("option"); // option 요소 생성
	  optionElement.value = hour + ":00"; // option 요소의 value 값 설정
	  optionElement.text = hour + ":00"; // option 요소의 텍스트 설정
	  selectElement.add(optionElement); // select 요소에 option 요소 추가
	  const halfOptionElement = document.createElement("option"); // 반 시간 옵션 생성
	  halfOptionElement.value = hour + ":30"; // 반 시간 옵션의 value 값 설정
	  halfOptionElement.text = hour + ":30"; // 반 시간 옵션의 텍스트 설정
	  selectElement.add(halfOptionElement); // select 요소에 반 시간 옵션 추가
	}

	const timePickerWrapper = document.getElementById("timepicker"); // select 요소가 삽입될 곳 선택
	timePickerWrapper.appendChild(selectElement); //
	
	
	</script>	

	<script>
	var mapOptions = {
				center : new naver.maps.LatLng(${lat}, ${lng}),
				zoom : 16
			};

			var map = new naver.maps.Map('map', mapOptions);

			var markerOptions = {
				position : new naver.maps.LatLng(${lat}, ${lng}),
				map : map,
				icon : {
					url : '${path}/resources/img/pin_default.png', // 사용자가 제공한 이미지 파일 경로
					size : new naver.maps.Size(50, 50), // 이미지 크기
					origin : new naver.maps.Point(0, 0), // 이미지의 원점 위치
					anchor : new naver.maps.Point(25, 25)
				// 이미지의 앵커 위치
				}
			};
			var address

			var marker = new naver.maps.Marker(markerOptions);
		</script>
		
		<!--  좋아요 -->
	<script>
		function login_need() {
			alert("로그인을 먼저 해주세요.")
			return false;
		};

		$(document)
				.ready(
						function() {
							var res_No = parseInt($('#res_No', frm_read).val());
							var checkbox = document.getElementById("ckb_auto");
							checkbox.checked = !checkbox.checked;
							var checkIcon = document
									.querySelector(".heart-icon");
							$
									.ajax({
										type : "GET",
										url : "/tasteforming/checkLike",
										data : {
											res_No : res_No
										},
										success : function(data) {

											var jsonData = JSON.parse(data);
											var like_check = jsonData.like_check;
											var res_No = jsonData.res_No;
											var like_cnt = jsonData.like_cnt;
											console.log("like_check: "
													+ like_check + ", res_No: "
													+ res_No + ", like_cnt: "
													+ like_cnt);

											var checkIcon = document
													.querySelector(".heart-icon");
											if (like_check == 0) {
												checkIcon.style.backgroundImage = "url(/resources/img/emptyLike.png)";
											} else {
												checkIcon.style.backgroundImage = "url(/resources/img/like.png)";
												console.log(data.like_check
														+ "찾을수없다");
											}
											$("#like_cnt").html(data.like_cnt);
										},
										error : function(e) {
											console.log(e);
										}
									});

							$('#ckb_auto')
									.on(
											'click',
											function() {
												var frm_read = $('#frm_read');
												var res_No = parseInt($(
														'#res_No', frm_read)
														.val());
												var userId = $('#userId',
														frm_read).val();
												var checkbox = document
														.getElementById("ckb_auto");
												checkbox.checked = !checkbox.checked;
												var checkIcon = document
														.querySelector(".heart-icon");

												$
														.ajax({
															url : "/tasteforming/like",
															type : "GET",
															cache : false,
															dataType : "json",
															data : {
																res_No : res_No
															},
															success : function(
																	data) {
																var msg = '';
																var like_img = '';
																var like_cnt = data.like_cnt;
																msg += data.msg;
																alert(data.msg);

																if (data.like_check == 0) {
																	checkIcon.style.backgroundImage = "url(${path}/resources/img/emptyLike.png)";
																} else {
																	checkIcon.style.backgroundImage = "url(${path}/resources/img/like.png)";
																}
																$('#like_img',
																		frm_read)
																		.attr(
																				'src',
																				like_img);
																$('#like_cnt')
																		.html(
																				data.like_cnt);
																$('#like_check')
																		.html(
																				data.like_check);
															},
															error : function(
																	request,
																	status,
																	error) {
																alert("code:"
																		+ request.status
																		+ "\n"
																		+ "message:"
																		+ request.responseText
																		+ "\n"
																		+ "error:"
																		+ error);
															}
														});
											});
						});
	</script>
	<!-- 예약 모달 -->
	<script>
    function openReserveModal(loggedInUserId, resNo, resName) {
        // 로그인 여부 확인
        if (loggedInUserId === "anonymousUser") {
            alert('로그인이 필요합니다.');
            return;
        }
        
        // 모달 오픈
        $('#reservationModal').modal('show');
        // hidden input 값 설정
        $('input[name="userId"]').val(loggedInUserId);
        $('input[name="res_No"]').val(resNo);
        $('input[name="res_Name"]').val(resName);
    }

    // 예약 폼 제출 시
    $('#reservationForm').on('submit', function(event) {
        // 폼 제출 막기
        event.preventDefault();

        // 예약 정보 전송
        $.ajax({
            type: 'POST',
            url: '/tasteforming/reservation',
            data: $(this).serialize(),
            success: function(response) {
                // 예약 완료 모달을 보여줌
                $('#reservationCompleteModal').modal('show');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    });

    // 날짜 선택기 초기화
	$(function() {
	  // 오늘 날짜를 가져옴
	  var today = new Date();
	
	  // Datepicker 초기화
	  $("#datepicker").datepicker({
	    // minDate 옵션을 오늘 날짜로 설정
	    minDate: today,
	  });
	});

</script>


	<!-- 댓글 등록모달 -->
	<script>
		function validateReview() {
			var reviewContent = document.getElementsByName("content")[0].value
					.trim();
			if (reviewContent === "") {
				alert("댓글을 입력해주세요.");
				return false;
			}

			const loggedInUserId = "${mem.userId}".trim();
			if (loggedInUserId === "" || loggedInUserId === "anonymousUser") {
				alert("로그인이 필요합니다.");
				return false;
			}

			return true;
		}

		var form = document.querySelector("#review-form");
		form.addEventListener("submit", function(event) {
			if (!validateReview()) {
				event.preventDefault();
			}
		});
	</script>



	<!-- 댓글 수정 모달 -->
	<script>
		function openModal(resview_No, res_No, userId, content) {
			// 현재 로그인된 아이디 가져오기
			const loggedInUserId = "${mem.userId}"; // 여기에 실제 현재 로그인된 아이디 값을 넣어주세요.

			// 댓글 작성자의 아이디와 현재 로그인된 아이디가 같은 경우에만 수정 창 열기
			if (userId === loggedInUserId) {
				// 모달창 열기
				document.getElementById('myModal').style.display = 'block';
				// 폼 데이터 채우기
				document.getElementById('res_No').value = res_No;
				document.getElementById('content').value = content;
				document.getElementById('resview_No').value = resview_No;
			} else {
				alert("본인이 작성한 댓글만 수정 가능합니다.");
			}
		}

		function closeModal() {
			// 모달창 닫기
			document.getElementById('myModal').style.display = 'none';
		}
	</script>

	<!-- 댓글 삭제 모달 -->
	<script>
		function deleteReview(resview_No, res_No, userId) {
			// Get logged in user ID from JSP variable
			const loggedInUserId = "${mem.userId}";

			// Check if current user is the same as the comment author
			if (loggedInUserId !== userId) {
				alert("삭제 권한이 없습니다.");
				return;
			}

			// Set form values and show delete modal
			document.getElementById("resview_No_delete").value = resview_No;
			document.getElementById("res_No_delete").value = res_No;
			document.getElementById("userId").value = userId;
			document.getElementById("deleteModal").style.display = "block";
		}

		function deleteReviewAction() {
			// Do something when delete button is clicked
			document.getElementById("deleteReview").submit();
		}

		function closeDeleteModal() {
			// Close delete modal
			document.getElementById("deleteModal").style.display = "none";
		}
	</script>

	<!-- 공유하기 모달창 -->
	<script>
		// 공유하기 모달창 열기
		document
				.getElementById("shareButton")
				.addEventListener(
						"click",
						function() {
							var url = window.location.href; // 현재 페이지의 URL을 가져옴
							document.getElementById("shareUrl").value = url; // 모달창의 input 태그에 URL을 넣어줌
							document.getElementById("shareModal").style.display = "block"; // 모달창을 보이게 함
						});
		// 공유하기 모달창 닫기
		document
				.getElementById("closeShareModal")
				.addEventListener(
						"click",
						function() {
							document.getElementById("shareModal").style.display = "none"; // 모달창을 숨김
						});
		// 복사 버튼 클릭 시 URL 복사
		document.getElementById("copyButton").addEventListener("click",
				function() {
					var urlInput = document.getElementById("shareUrl");
					urlInput.select(); // input 태그의 내용을 선택함
					document.execCommand("copy"); // 복사 명령 실행
					alert("링크가 복사되었습니다.");
				});
	</script>

	<script type="text/javascript">
	const urlParams = new URLSearchParams(window.location.search);
	const message = urlParams.get("message");
	if (message === "success") {
	  alert("예약이 완료되었습니다.");
	}else if(message === "blackUser"){
		alert("고객님은 식당에 예약을 하실 수 없습니다.");
	}
	</script>

	<%@ include file="../includes/footer.jsp"%>
</body>

</html>