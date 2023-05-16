<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.tasteforming.service.MainServiceImpl"%>
<%@page import="com.tasteforming.domain.RestaurantVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="path" value="${pageContext.request.contextPath}" />
<%@ page session="false"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="${path}/resources/css/Main.css" rel="stylesheet" />
<link rel="stylesheet" href="${path }/resources/css/reset.css">
<link rel="stylesheet"
	href="${path }/resources/plugins/fontawesome-free/css/all.min.css">
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<title>TasteForming</title>
</head>

<body>

	<header>

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

						<a href="myPage/myPage">마이페이지</a><a href="javascript:void(0)"
							id="logout-link" class="logout-link">로그아웃</a>


					</div>
				</sec:authorize>
			</sec:authorize>
			<sec:authorize access="hasAuthority('ROLE_ADMIN')">
				<div class="sign">
					<a href="admin/UserManagement">관리자페이지</a> <a
						href="javascript:void(0)" id="logout-link" class="logout-link">로그아웃</a>


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
					src="${path }/resources/img/dish.png">스토리</a> <a
					href="/contactUs" style="float: right"><img alt=""
					src="${path }/resources/img/team.png" style="top: 11px;">TEAM_404</a>


			</div>
		</nav>
		<form action="/customLogout" id="logoutForm" method="post"
			style="display: none;">
			<input type="hidden" name="${_csrf.parameterName}"
				value="${_csrf.token}" />
		</form>
	</header>