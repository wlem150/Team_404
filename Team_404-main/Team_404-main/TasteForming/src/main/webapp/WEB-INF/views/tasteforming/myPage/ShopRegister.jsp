<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="path" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="${path }/resources/css/login.css">
<link rel="stylesheet" href="${path }/resources/css/reset.css">
<script src="${path }/resources/plugins/jquery/jquery.min.js"></script>
<title>TasteForming</title>
</head>

<body>
	<header class="header"> <a href="/tasteforming/main"> <img
		src="${path }/resources/img/TasteFormingLogo.png" alt="">
	</a> </header>

	<main class="main-layout">
	<div class="title">식당등록</div>
	<div class="sub-title">TasteForming 에 오신 것을 환영합니다.</div>
	<!-- 경계선 -->
	<form role="form" method='post'
		action="/tasteforming/myPage/ShopRegister"
		enctype="multipart/form-data">


		<input class="form-control input-text" placeholder="식당이름"
			id="res_Name" name="res_Name" type="text" autofocus="autofocus">
		<input class="form-control input-text" placeholder="정보" name="info"
			id="info" type="text" value=""> <select name="type" id="type"
			class="input-text2">
			<option value="">음식타입</option>
			<option value="한식">한식</option>
			<option value="양식">양식</option>
			<option value="중식">중식</option>
			<option value="일식">일식</option>
			<option value="채식">채식</option>
		</select> <input class="form-control input-text" placeholder="메뉴" name="menu"
			id="menu" type="text"> <input class="form-control input-text"
			placeholder="전화번호" name="tel" id="tel" type="text" value="">


		<div class="address_button" onclick="execution_daum_address()">
			<span class="search_addr">주소찾기</span>
		</div>
		<input type="text" class="address_input_1 input-text"
			placeholder="우편번호" name='address1' id='address1' readonly="readonly">


		<div class="clearfix"></div>


		<input class="address_input_2 input-text" name="address"
			readonly="readonly" placeholder="도로명"> <input
			class="address_input_3 input-text" name="memberAddr3"
			readonly="readonly" placeholder="상세주소"> <input
			class="form-control input-text" name="img_path" id="img_path"
			type="hidden" value="img_path"> <input type="hidden"
			name="userId" value="${mem.userId }">


		<div class="forAbsol">
			<img id="preview" src="../../../resources/food/sampleimg.jpg"
				alt="Preview" style="max-width: 402px; max-height: 321px;"> <input
				class="form-control" placeholder="이미지" name="uploadFile" id="output"
				value="" style="display: none;" type="file"
				onchange="previewImage(this);"multiple"> <label
				for="output" class="pic_button">사진선택</label>

			<button type="submit" id='uploadBtn' class="regi-button">식당등록하기</button>
		</div>

		<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
	</form>
	</main>
	>


	<%@ include file="../../includes/footer.jsp"%>
	<script src="/resources/vendor/jquery/jquery.min.js"></script>
	<!-- Bootstrap Core JavaScript -->
	<script src="/resources/vendor/bootstrap/js/bootstrap.min.js"></script>

	<!-- Metis Menu Plugin JavaScript -->
	<script src="/resources/vendor/metisMenu/metisMenu.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.6.4.js"
		integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
		crossorigin="anonymous"></script>
	<script
		src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	<script>
		$(document).ready(function() {
			// 파일 확장자와 크기를 설정하고 이를 검사한다. 
			var regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");
			var maxSize = 20971520; // 20971520Byte= 20MB
			function checkExtension(fileName, fileSize) {
				if (fileSize >= maxSize) {
					alert("파일 사이즈 초과입니다.");
					return false;
				}

				if (regex.test(fileName)) {
					alert("해당 종류의 파일은 업로드할 수 없습니다.");
					return false;
				}
				return true;
			}
			$("#uploadBtn").on("click", function(e) {
				/*             /* 폼 유효성 검사 */
				if ($("#res_Name").val() === "") {
					alert("식당이름을 입력해주세요.");
					$("#res_Name").focus();
					return false;
				} else if ($("#address").val() === "") {
					alert("주소를 입력해주세요.");
					$("#address").focus();
					return false;
				} else if ($("#type").val() === "") {
					alert("음식타입을 정해주세요.");
					$("#type").focus();
					return false;
				} else if ($("#output").val() === "") {
					alert("이미지를 등록해주세요.");
					$("#output").focus();
					return false;
				} else if ($("#tel").val() === "") {
					alert("전화번호를 등록해주세요.");
					$("#tel").focus();
					return false;
				} else if ($("#menu").val() === "") {
					alert("메뉴를 작성해주세요.");
					$("#menu").focus();
					return false;
				} else if ($("#info").val() === "") {
					alert("정보를 입력해주세요.");
					$("#info").focus();
					return false;
				}
				e.preventDefault();
				$("form").submit();
				alert("회원가입을 축하드립니다.");

				var formData = new FormData();

				var inputFile = $("input[name='uploadFile']");

				var files = inputFile[0].files;

				console.log(files);

				//add filedate to formdata
				for (var i = 0; i < files.length; i++) {
					if (!checkExtension(files[i].name, files[i].size)) {
						return false;
					}
					formData.append("uploadFile", files[i]);

				}// end for

				$.ajax({
					url : '/tasteforming/myPage/ShopRegister',
					processData : false,
					contentType : false,
					data : formData,
					type : 'POST',
					success : function(result) {
						alert("Upload");
					}

				}); // end $.ajax

			});
		});
	</script>
	<script>
		/* 다음 주소 연동 */
		function execution_daum_address() {

			new daum.Postcode(
					{
						oncomplete : function(data) {
							// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
							// 각 주소의 노출 규칙에 따라 주소를 조합한다.
							// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
							var addr = ''; // 주소 변수
							var extraAddr = ''; // 참고항목 변수

							//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
							if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
								addr = data.roadAddress;
							} else { // 사용자가 지번 주소를 선택했을 경우(J)
								addr = data.jibunAddress;
							}

							// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
							if (data.userSelectedType === 'R') {
								// 법정동명이 있을 경우 추가한다. (법정리는 제외)
								// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
								if (data.bname !== ''
										&& /[동|로|가]$/g.test(data.bname)) {
									extraAddr += data.bname;
								}
								// 건물명이 있고, 공동주택일 경우 추가한다.
								if (data.buildingName !== ''
										&& data.apartment === 'Y') {
									extraAddr += (extraAddr !== '' ? ', '
											+ data.buildingName
											: data.buildingName);
								}
								// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
								if (extraAddr !== '') {
									extraAddr = ' (' + extraAddr + ')';
								}
								// 추가해야할 코드
								// 주소변수 문자열과 참고항목 문자열 합치기
								addr += extraAddr;

							} else {
								// 추가해야할 코드
								addr += ' ';
							}

							// 추가해야할 코드
							$(".address_input_1").val(data.zonecode);
							//$("[name=memberAddr1]").val(data.zonecode);    // 대체가능
							$(".address_input_2").val(addr);
							//$("[name=memberAddr2]").val(addr);            // 대체가능
							// 커서를 상세주소 필드로 이동한다.
							// 추가해야할 코드
							// 상세주소 입력란 disabled 속성 변경 및 커서를 상세주소 필드로 이동한다.
							$(".address_input_3").attr("readonly", false);
							$(".address_input_3").focus();
						}
					}).open();

		}
	</script>
	<script>
		function previewImage(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = function(e) {
					$('#preview').attr('src', e.target.result);
				}

				reader.readAsDataURL(input.files[0]);
			}
		}
	</script>
</body>

</html>
