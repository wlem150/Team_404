<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<%@ include file="../includes/header.jsp"%>
<link rel="stylesheet" href="${path }/resources/css/menu.css">
<%
List<RestaurantVO> restaurantList = (List<RestaurantVO>) request.getAttribute("data"); // 모든 식당 정보 가져오기
List<Map<String, String>> imageList = new ArrayList<>(); // 이미지 경로와 식당 이름 저장할 배열
for (RestaurantVO restaurant : restaurantList) {
	Map<String, String> imageMap = new HashMap<>();
	imageMap.put("img_path", restaurant.getImg_path());
	imageMap.put("res_name", restaurant.getRes_Name());
	imageList.add(imageMap);
}
%>

<form action="/search" id="actionForm" method='get'></form>


<div class="header_bg">
	<div class="place_modal">
		<div class="header-bg-info">
			<div class="header-info">당신을 위한</div>
			<br>
			<div class="header-address-info">
				<span>${address}</span> 맛집 서비스
			</div>
		</div>
		<button class="modal_button">
			<p>다른 지역 선택</p>
		</button>

		<div class="sc-cmfmEs hgIRgy Location__Popup__Layer" id="modal">
			<div class="Location__Selection__Popup__Wrap"
				style="pointer-events: initial;">
				<div class="Location__Popup__Box">
					<div class="Location__Popup__Header">
						<div></div>
						<span class="Location__Popup__Title">지역 선택</span>
						<button class="Location__Popup__Close">
							<img class="Location__Popup__Close__Image"
								src="https://dcicons.s3.ap-northeast-1.amazonaws.com/new/images/web/react_components/indexPage/popup_close.png"
								alt="">
						</button>
					</div>
					<div class="Location__Popup__Main">
						<div class="Location__District__Header">
							<div class="District__Header__Title">광역시도</div>
							<div class="District__Header__Title">시군구</div>
							<div class="District__Header__Title">읍면동</div>
						</div>
						<div class="District__List__Box">
							<ul class="District__List">
								<li class="District__Item"><button
										class="District__Item__Button now" id="seoul">서울</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="gangwon">강원</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="gyeonggi">경기</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="gyeongnam">경남</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="gyeongbuk">경북</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="gwangju">광주</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="daegu">대구</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="daejeon">대전</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="busan">부산</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="sejong">세종</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="ulsan">울산</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="incheon">인천</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="jeonnam">전남</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="jeonbuk">전북</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="jeju">제주</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="chungnam">충남</button></li>
								<li class="District__Item"><button
										class="District__Item__Button " id="chungbuk">충북</button></li>
							</ul>

						</div>
					</div>
					<div class="Location__Popup__User__Confirm">
						<button class="Location__Popup__Cancle">
							<span>취소</span>
						</button>
						<button class="Location__Popup__Submit">
							<span>선택 완료</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<p class="res_name"></p>
</div>
<div class="center"></div>


<main class="main_box">
	<c:forEach items="${list }" var="entry">
		<div class="box">
			<div class="sub-box">
				<div class="type">
					<p style="font-size: 20px;">
						#
						<c:out value="${entry.key }" />
						(${fn:length(entry.value)})
					</p>
				</div>

				<div class="my-slider swiper-container">

					<ul class="swiper-wrapper">

						<!-- 여기입니다. -->
						<c:forEach items="${entry.value }" var="restaurant" begin="0" end="20">
							<li class="swiper-slide"><a class='move'
								href='<c:out value="${restaurant.res_No }"/>'> <img
									src="${path}${restaurant.img_path}" alt="">
									<div class="info_box">
										<p>
											<c:out value="${restaurant.res_Name}" />

										</p>
										<p>

											<c:out value="${fn:split(restaurant.address, ' ')[1]}" />
											|
											<c:out value="${fn:split(restaurant.menu, ',')[0]}" />
										</p>
										<hr>
										<p class="res_info">
											<c:out value="${restaurant.info }" />
										</p>

										<div class="res_info_review">
											<i class="far fa-comments comment"></i>

											<p class="reviewCnt">${restaurant.reviewCnt }</p>
											<img src="${path }/resources/img/miniLike.png" alt="">
											<p class="info_likeCnt">${restaurant.likeCnt }</p>
										</div>
									</div>

									<div class="star">
										<i class="far fa-comments comment"></i>

										<p class="reviewCnt">${restaurant.reviewCnt }</p>
										<img src="${path }/resources/img/miniLike.png" alt="">
										<p class="likeCnt">${restaurant.likeCnt }</p>
									</div>
									<p>
										<c:out value="${restaurant.res_Name}" />
									</p>
							</a></li>
						</c:forEach>
					</ul>

					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
		</div>
	</c:forEach>
</main>

<script>
  const images = [
	  <%for (Map<String, String> imageMap : imageList) {%>
	    { img_path: '<%=imageMap.get("img_path")%>', res_name: '<%=imageMap.get("res_name")%>', res_addr: '<%=imageMap.get("res_address")%>' },
	  <%}%>
	];

  var actionForm = $("#actionForm");

	$(".move").on("click",function(e) {
		e.preventDefault();
		actionForm
				.append("<input type='hidden' name='res_No' value='"
						+ $(this).attr(
								"href")
						+ "'>");
		actionForm.attr("action",
				"/tasteforming/detail");
		actionForm.submit();
});
	
	
		
$('.modal_button').click(function(){
	$('.Location__Popup__Layer').css('display', 'flex');
});

$('.Location__Popup__Close').click(function(){
	$('.Location__Popup__Layer').css('display', 'none');
});

$('.Location__Popup__Cancle').click(function(){
	$('.Location__Popup__Layer').css('display', 'none');
});

$(document).on("click", ".Location__Popup__Submit", function() {
	var regions = $('.now').map(function() {
		  return $(this).text();
		}).get();
	
	// 전체 값을 포함하고 있다면 배열에서 삭제합니다.
	var index = regions.indexOf("전체");
	if (index > -1) {
	  regions.splice(index, 1);
	}
	
	var regionString = regions.join('%');
	
    // form 태그 생성
    var form = $("<form>").attr({
        "action": "main",
        "method": "get",
        "role": "form"
    });

    $("<input>").attr({
        "type": "hidden",
        "name": "address",
        "value": regionString
    }).appendTo(form); 

    // form 태그 실행
    $(document.body).append(form);
    form.submit();
});

</script>


<script src="${path}/resources/js/Main.js"></script>
<script src="${path}/resources/js/cities/seoul.js"></script>
<script src="${path}/resources/js/cities/gwangwon.js"></script>
<script src="${path}/resources/js/cities/gyeonggi.js"></script>
<script src="${path}/resources/js/cities/gyeongnam.js"></script>
<script src="${path}/resources/js/cities/gyeongnam.js"></script>
<script src="${path}/resources/js/cities/gyeongbuk.js"></script>

<script src="${path}/resources/js/cities/gwangju.js"></script>
<script src="${path}/resources/js/cities/daegu.js"></script>
<script src="${path}/resources/js/cities/daejeon.js"></script>
<script src="${path}/resources/js/cities/busan.js"></script>
<script src="${path}/resources/js/cities/sejong.js"></script>

<script src="${path}/resources/js/cities/ulsan.js"></script>
<script src="${path}/resources/js/cities/incheon.js"></script>
<script src="${path}/resources/js/cities/jeonnam.js"></script>
<script src="${path}/resources/js/cities/jeonbuk.js"></script>
<script src="${path}/resources/js/cities/jeju.js"></script>

<script src="${path}/resources/js/cities/chungnam.js"></script>
<script src="${path}/resources/js/cities/chungbuk.js"></script>
</body>
<%@ include file="../includes/footer.jsp"%>

</html>