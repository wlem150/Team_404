<!DOCTYPE link PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ include file="../includes/header.jsp"%>
<link rel="stylesheet" href="${path }/resources/css/Search.css">
<script type="text/javascript"
	src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=h8i759eo14"></script>

<script src="${path }/resources/plugins/jquery/jquery.min.js"></script>
<!-- Main -->
<c:set value="${restaurant }" var="res"></c:set>
<c:set value="1" var="count"></c:set>
<%-- <c:set value="${beginIndex}" var="beginIndex" />
<c:set value="${endIndex}" var="endIndex" /> --%>
<div id="list">
	<div>
		<main class="content">
		<section class="main_section">
		<div class="sort_container">
			<span class="sort_marker"> <img
				src="${path}/resources/img/order.png" alt=""> 정렬
			</span>
			<ul class="sort">
				<li><a href="#" onclick="reviewOrder()">리뷰많은순</a></li>
				<li><a href="#" onclick="likeOrder()">좋아요많은순</a></li>

			</ul>

			<div class="location">
				<a href="/tasteforming/search?keyword=${userAddress.address }"> 위치 : ${userAddress.address }</a>
			</div>
		</div>
		<div class="map_header">
			<span id="searchKeyword">${searchKeyword}</span> <span>맛집(</span><span
				class="place-count"><c:out value="${res.size()}" /></span><span>곳)</span>
			</span>

		</div>

		<div id="map"></div>

		<c:forEach items="${restaurant}" var="res" begin="0" end="9">
				<div class="list" onclick="goDetail()">
					<a href="/tasteforming/detail?res_No=${res.res_No }" style="border:none;">
					<div class="list_inner">
						<img src="${path}${res.img_path}" alt="">
						<div class="list_inner_info">
							<h1 class="res_title">
								${count }.
								<c:out value="${res.res_Name }"></c:out>
							</h1>
							<div>
								<c:out value="${res.address }" />
							</div>
							<span><c:out value="${res.menu}"></c:out></span>
							<div class="star_search">
								<img src="${path }/resources/img/miniLike.png" alt="">
								<p class="likeCnt_search">${res.likeCnt }</p>
								<i class="far fa-comments comment"></i>

								<p class="reviewCnt">${res.reviewCnt }</p>
							</div>
						</div>
						
					</div>
					<p>
						<c:out value="${res.info }"></c:out>
					</p>
					<div class="reply_cnt">
						<span>추천란</span>
					</div>
					</a>
				</div>
				<c:set var="count" value="${count + 1}" />
		
		</c:forEach> </section>

		<div class="a"></div>
		<button class="kmeaye">
			<img
				src="https://dcicons.s3.ap-northeast-1.amazonaws.com/new/images/web/react_components/indexPage/recom_move_top_default.png"
				alt="">
		</button>

		</main>
		<script>
			function goDetail() {

			}

			function likeOrder() {
				var keyword = $("#searchKeyword").text();
				console.log(keyword);
				$.ajax({
					type : "get",
					url : "/tasteforming/search",
					data : {
						keyword : keyword,
						orderBy : "likeCnt"
					},
					success : function(data) {
						$('#list').html(data);

					},
					error : function(e) {
						console.log(e);
					}
				});
			}
			function reviewOrder() {
				var keyword = $("#searchKeyword").text();
				console.log(keyword);
				$.ajax({
					type : "get",
					url : "/tasteforming/rev",
					data : {
						keyword : keyword,
						orderBy : "reviewCnt"
					},
					success : function(data) {
						$('#list').html(data);

					},
					error : function(e) {
						console.log(e);
					}
				});
			}
				   
			//마우스 클릭
var mapOptions = {
    center: new naver.maps.LatLng(35.9020062, 127.0732386),
    zoom: 5
};
var map = new naver.maps.Map('map', mapOptions);
<%
List<String[]> geocodes = (List<String[]>) request.getAttribute("geocodes");
List<String> resNameList = (List<String>) request.getAttribute("resNameList");
List<Long> resNoList = (List<Long>) request.getAttribute("resNoList");
for (int i = 0; i < geocodes.size(); i++) {
    String[] latlng = geocodes.get(i);
    double lat = Double.parseDouble(latlng[0]);
    double lng = Double.parseDouble(latlng[1]);
    String resName = resNameList.get(i);
    Long res_No = resNoList.get(i);
%>
var contentString<%=i%> = '<div style="padding:10px; background-color:#ffffff; border:1px solid #000000;"><%=resName%></div>';
var infowindow<%=i%> = new naver.maps.InfoWindow({
    content: contentString<%=i%>,
    disableAnchor: true
});
var markerOptions = {
    position: new naver.maps.LatLng(<%=lat%>, <%=lng%>),
    map: map,
    icon: {
        url: 'https://navermaps.github.io/maps.js/docs/img/example/pin_default.png',
        size: new naver.maps.Size(22, 35),
        scaledSize: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35)
    },
    title: '<%=resName%>'
};

// 마커클릭시 식당으로 이동
// 마커클릭시 식당으로 이동


var marker<%=i%> = new naver.maps.Marker(markerOptions);
naver.maps.Event.addListener(marker<%=i%>, 'mouseover', function() {
    infowindow<%=i%>.open(map, marker<%=i%>);
});
naver.maps.Event.addListener(marker<%=i%>, 'mouseout', function() {
    infowindow<%=i%>.close();
});
naver.maps.Event.addListener(marker<%=i%>, 'click', function() {
    window.location.href = 'http://localhost:8080/tasteforming/detail?res_No=' + <%=res_No%>;
    
});
<%
}
%>

			
		</script>
		<script src="${path}/resources/js/Search.js"></script>

		</body>
		<%@ include file="../includes/footer.jsp"%>
		</html>