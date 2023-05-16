
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>
<c:set var="path" value="${pageContext.request.contextPath}" />

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


<nav class="main-header navbar navbar-expand navbar-white navbar-light">
	<!-- Left navbar links -->
	<ul class="navbar-nav">
		<li class="nav-item"><a class="nav-link" data-widget="pushmenu"
			href="#" role="button"><i class="fas fa-bars"></i></a></li>
		<li class="nav-item d-none d-sm-inline-block"><a
			href="/tasteforming/main" class="nav-link">Home</a></li>
		<li class="nav-item d-none d-sm-inline-block"><a href="#"
			class="nav-link">Contact</a></li>
	</ul>

	<!-- Right navbar links -->
	<ul class="navbar-nav ml-auto">
		<!-- Navbar Search -->
		<li class="nav-item"><a class="nav-link"
			data-widget="navbar-search" href="#" role="button"> <i
				class="fas fa-search"></i>
		</a>
			<div class="navbar-search-block">
				<form class="form-inline">
					<div class="input-group input-group-sm">
						<input class="form-control form-control-navbar" type="search"
							placeholder="Search" aria-label="Search">
						<div class="input-group-append">
							<button class="btn btn-navbar" type="submit">
								<i class="fas fa-search"></i>
							</button>
							<button class="btn btn-navbar" type="button"
								data-widget="navbar-search">
								<i class="fas fa-times"></i>
							</button>
						</div>
					</div>
				</form>
			</div></li>

		<!-- Messages Dropdown Menu -->
		<li class="nav-item dropdown"><a class="nav-link"
			data-toggle="dropdown" href="#"> <i class="far fa-comments"></i>
				<span class="badge badge-danger navbar-badge">3</span>
		</a>
			<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
				<a href="#" class="dropdown-item"> <!-- Message Start -->
					<div class="media">
						<img src="../../dist/img/user1-128x128.jpg" alt="User Avatar"
							class="img-size-50 mr-3 img-circle">
						<div class="media-body">
							<h3 class="dropdown-item-title">
								Brad Diesel <span class="float-right text-sm text-danger"><i
									class="fas fa-star"></i></span>
							</h3>
							<p class="text-sm">Call me whenever you can...</p>
							<p class="text-sm text-muted">
								<i class="far fa-clock mr-1"></i> 4 Hours Ago
							</p>
						</div>
					</div> <!-- Message End -->
				</a>
				<div class="dropdown-divider"></div>
				<a href="#" class="dropdown-item"> <!-- Message Start -->
					<div class="media">
						<img src="../../dist/img/user8-128x128.jpg" alt="User Avatar"
							class="img-size-50 img-circle mr-3">
						<div class="media-body">
							<h3 class="dropdown-item-title">
								John Pierce <span class="float-right text-sm text-muted"><i
									class="fas fa-star"></i></span>
							</h3>
							<p class="text-sm">I got your message bro</p>
							<p class="text-sm text-muted">
								<i class="far fa-clock mr-1"></i> 4 Hours Ago
							</p>
						</div>
					</div> <!-- Message End -->
				</a>
				<div class="dropdown-divider"></div>
				<a href="#" class="dropdown-item"> <!-- Message Start -->
					<div class="media">
						<img src="../../dist/img/user3-128x128.jpg" alt="User Avatar"
							class="img-size-50 img-circle mr-3">
						<div class="media-body">
							<h3 class="dropdown-item-title">
								Nora Silvester <span class="float-right text-sm text-warning"><i
									class="fas fa-star"></i></span>
							</h3>
							<p class="text-sm">The subject goes here</p>
							<p class="text-sm text-muted">
								<i class="far fa-clock mr-1"></i> 4 Hours Ago
							</p>
						</div>
					</div> <!-- Message End -->
				</a>
				<div class="dropdown-divider"></div>
				<a href="#" class="dropdown-item dropdown-footer">See All
					Messages</a>
			</div></li>
		<!-- Notifications Dropdown Menu -->
		<li class="nav-item dropdown"><a class="nav-link"
			data-toggle="dropdown" href="#"> <i class="far fa-bell"></i> <span
				class="badge badge-warning navbar-badge">15</span>
		</a>
			<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
				<span class="dropdown-item dropdown-header">15 Notifications</span>
				<div class="dropdown-divider"></div>
				<a href="#" class="dropdown-item"> <i
					class="fas fa-envelope mr-2"></i> 4 new messages <span
					class="float-right text-muted text-sm">3 mins</span>
				</a>
				<div class="dropdown-divider"></div>
				<a href="#" class="dropdown-item"> <i class="fas fa-users mr-2"></i>
					8 friend requests <span class="float-right text-muted text-sm">12
						hours</span>
				</a>
				<div class="dropdown-divider"></div>
				<a href="#" class="dropdown-item"> <i class="fas fa-file mr-2"></i>
					3 new reports <span class="float-right text-muted text-sm">2
						days</span>
				</a>
				<div class="dropdown-divider"></div>
				<a href="#" class="dropdown-item dropdown-footer">See All
					Notifications</a>
			</div></li>
		<li class="nav-item"><a class="nav-link" data-widget="fullscreen"
			href="#" role="button"> <i class="fas fa-expand-arrows-alt"></i>
		</a></li>
		<li class="nav-item"><a class="nav-link"
			data-widget="control-sidebar" data-slide="true" href="#"
			role="button"> <i class="fas fa-th-large"></i>
		</a></li>
	</ul>
</nav>
<!-- /.navbar -->

<!-- Main Sidebar Container -->
<!-- Menu -->
<aside class="main-sidebar sidebar-dark-primary elevation-4"
	style="height: 1600px;">
	<!-- Brand Logo -->
	<a href="../../tasteforming/main" class="brand-link"> <img
		src="${path }\resources\img\TasteFormingLogo.png"
		alt="TasteFormingLogo" class="brand-image img-circle elevation-3"
		style="margin-left: -0.8rem; background-color: #fff"> <span
		class="brand-text font-weight-light" style="font-size: 25px">Tasteforming</span>
	</a>

	<!-- Sidebar -->
	<div class="sidebar">
		<!-- Sidebar user panel (optional) -->
		<div class="user-panel mt-3 pb-3 mb-3 d-flex">
			<div class="info"
				style="font-weight: bold; font-size: 25px; margin-left: 30px;">
				<sec:authorize access="hasRole('ROLE_MANAGER')">
					<a href="/tasteforming/myPage/myPage" class="d-block"
						style="margin: auto;"> <img alt=""
						src="${path }/resources/img/chef.png"
						style="width: 45px; height: 45px; margin-bottom: 2px;">식당주인
					</a>
				</sec:authorize>

				<sec:authorize access="hasRole('ROLE_USER')">
					<a href="/tasteforming/myPage/myPage" class="d-block"
						style="margin: auto;"><img alt=""
						src="${path }/resources/img/food.png"
						style="filter: invert(0.92); width: 40px; height: 40px; margin-bottom: 5px; margin-right: 9px;">일반유저</a>
				</sec:authorize>
			</div>
		</div>


		<nav class="mt-2">
			<ul class="nav nav-pills nav-sidebar flex-column"
				data-widget="treeview" role="menu" data-accordion="false">
				<li class="nav-item menu-is-opening menu-open">

					<ul class="nav nav-treeview">
						<sec:authorize access="hasRole('ROLE_MANAGER')">
							<li
								style="margin-top: 10px; font-size: 25px; font-weight: bold; color: #FFF;">식당
								관리</li>
							<li class="nav-item"><a
								href="http://localhost:8080/tasteforming/myPage/ShopRegister"
								class="nav-link" id="ShopRegister"> <i
									class="far fa-circle nav-icon"></i>
									<p>식당등록</p>
							</a></li>
							<li class="nav-item"><a
								href="http://localhost:8080/tasteforming/myPage/ShopManagement"
								class="nav-link" id="ShopManagement"> <i
									class="far fa-circle nav-icon"></i>
									<p>식당관리</p>
							</a></li>
							<li class="nav-item"><a
								href="http://localhost:8080/tasteforming/myPage/ShopReservation"
								class="nav-link" id="ShopReservation"> <i
									class="far fa-circle nav-icon"></i>
									<p>예약일정조회</p>
							</a></li>

							<li class="nav-item"><a
								href="http://localhost:8080/tasteforming/myPage/CustomerConfirm"
								class="nav-link" id="CustomerConfirm"> <i
									class="far fa-circle nav-icon"></i>
									<p>예약신청조회</p>
							</a></li>
							<li class="nav-item"><a
								href="http://localhost:8080/tasteforming/myPage/Visitors"
								class="nav-link" id="Visitors"> <i
									class="far fa-circle nav-icon"></i>
									<p>방문자리스트</p>
							</a></li>
						</sec:authorize>

						<li
							style="margin-top: 10px; font-size: 25px; font-weight: bold; color: #FFF;">마이페이지</li>
						<li class="nav-item"><a
							href="http://localhost:8080/tasteforming/myPage/showMyReserve"
							class="nav-link" id="showMyReserve"> <i
								class="far fa-circle nav-icon"></i>
								<p>신청한예약</p>
						</a></li>
						<li class="nav-item"><a
							href="http://localhost:8080/tasteforming/myPage/myPage"
							class="nav-link" id="myPage"> <i
								class="far fa-circle nav-icon"></i>
								<p>예약관리</p>
						</a></li>
						<li class="nav-item"><a
							href="http://localhost:8080/tasteforming/myPage/myBoard"
							class="nav-link" id="myBoard"> <i
								class="far fa-circle nav-icon"></i>
								<p>게시글관리</p>
						</a></li>
						<li class="nav-item"><a
							href="http://localhost:8080/tasteforming/myPage/myComment"
							class="nav-link" id="myComment"> <i
								class="far fa-circle nav-icon"></i>
								<p>댓글 관리</p>
						</a></li>
						<li class="nav-item"><a
							href="http://localhost:8080/tasteforming/myPage/MyLikes"
							class="nav-link" id="myLikes"> <i
								class="far fa-circle nav-icon"></i>
								<p>찜목록</p>
						</a></li>

					</ul>
				</li>

			</ul>



		</nav>
	</div>
</aside>
