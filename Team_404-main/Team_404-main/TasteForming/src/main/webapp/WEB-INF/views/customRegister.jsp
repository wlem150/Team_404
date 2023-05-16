<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<c:set var="path" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="${path }/resources/plugins/jquery/jquery.min.js"></script>
<link rel="stylesheet" href="${path }/resources/css/Register.css">
<link rel="stylesheet" href="${path }/resources/css/reset.css">
<title>TasteForming</title>
</head>
<body>
<body>
	<header class="header"> <a href="tasteforming/main"> <img
		src="${path }/resources/img/TasteFormingLogo.png" alt="">
	</a> </header>

	<main class="main-layout">
	<div class="title">회원가입</div>
	<div class="sub-title">TasteForming 에 오신 것을 환영합니다.</div>
	<div class="wrapper">
		<form role="form" method='post' action="/customRegister">
			<div class="wrap">
				<div class="id_wrap">
					<div>
						<input type="text" class="input-text" placeholder="아이디"
							name="userId" id="userId">
					</div>
					<span class="id_input_re_1">사용 가능한 아이디입니다.</span> <span
						class="id_input_re_2">아이디가 이미 존재합니다.</span>
				</div>
				<input type="password" class="input-text" placeholder="비밀번호"
					name='userPw' id="userPw"> <input type="text"
					class="input-text" placeholder="이름" name='userName' id="userName">
				<div class="mail_wrap">
					<div class="mail_name"></div>
					<div class="mail_input_box">
						<input class="mail_input" name="memberMail" placeholder="이메일" id="email">
					</div>
					<div class="mail_check_wrap">
						<div class="mail_check_input_box" id="mail_check_input_box_false">
							<input class="mail_check_input" disabled="disabled" id="emailauth">
						</div>
						<div class="mail_check_button">
							<span>인증번호 전송</span>
						</div>
						<div class="clearfix"></div>
						<span id="mail_check_input_box_warn"></span>
					</div>
				</div>
				<div class="address_wrap">
					<div class="address_input_1_wrap">
						<div class="address_input_1_box">
							<input type="text" class="address_input_1 input-text" placeholder="우편번호"
								name='address1' id='address1' readonly="readonly">
						</div>
					</div>
					<div class="address_button" onclick="execution_daum_address()">
						<span class="search_addr">주소찾기</span>
					</div>
					<div class="clearfix"></div>

					<div class="address_input_2">
						<div class="address_input_2_box">
							<input class="address_input_2 input-text" name="address" readonly="readonly"
								placeholder="도로명">
						</div>
					</div>
					<div class="address_input_3_wrap">
						<div class="address_input_3_box">
							<input class="address_input_3 input-text" name="memberAddr3"
								readonly="readonly" placeholder="상세주소">
						</div>
					</div>
				</div>
				<div style="padding: 12px 0;">
					<div class="fl">
						<label class="checkbox" for="ckb_auto"> <input
							id="ckb_auto" type="checkbox" value="ROLE_USER" name="auth"
							onclick="check(this)" checked> <i class="check-icon"></i>
							<span class="fs-13 fw-b">일반회원</span>
						</label> <label class="checkbox" for="ckb_restaurant"> <input
							id="ckb_restaurant" type="checkbox" value="ROLE_MANAGER"
							name="auth" onclick="check(this)"> <i class="check-icon"></i>
							<span class="fs-13 fw-b">식당회원</span>
						</label>
					</div>
				</div>

				<button type="submit" class="register-btn" id="sign-up-btn">회원가입</button>
				<input type="hidden" name="${_csrf.parameterName}"
					value="${_csrf.token}" />
			</div>
		</form>
	</div>
	<hr>


	<button type="button" class="login-btn"
		onclick="window.location.href='customLogin'">로그인</button>
	</main>
	<script
		src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	<script>
		flag = 0;
		function check(checkbox) {
			var checkboxes = document.getElementsByName("auth");
			checkboxes
					.forEach(function(cb) {
						cb.checked = false; // 모든 체크박스를 선택 안 된 상태로 초기화
						var checkIcon = cb.parentNode
								.querySelector(".check-icon");
						checkIcon.style.backgroundImage = "url(https://dfzrjox9sv97l.cloudfront.net/dicons_20160930/img/common/ic-signup-chk-off.png)";
					});
			checkbox.checked = true; // 선택된 체크박스의 checked 속성을 true로 설정
			var checkIcon = checkbox.parentNode.querySelector(".check-icon");
			checkIcon.style.backgroundImage = "url(https://dfzrjox9sv97l.cloudfront.net/dicons_20160930/img/common/ic-signup-chk-on.png)";
		}

		$(document).ready(function() {
			$("#sign-up-btn").on("click", function(e) {
				/* 폼 유효성 검사 */
				if ($("#userId").val() === "") {
					alert("아이디를 입력해주세요.");
					$("#userId").focus();
					return false;
				} else if ($("#userPw").val() === "") {
					alert("패스워드를 입력해주세요.");
					$("#userPw").focus();
					return false;
				} else if ($("#userName").val() === "") {
					alert("사용자 명을 입력해주세요.");
					$("#userName").focus();
					return false;
				} else if ($("#address").val() === "") {
					alert("주소를 입력해주세요.");
					$("#address").focus();
					return false;
				} else if ($("#email").val() === "") {
					alert("이메일 인증을 제대로 완료해주세요.");
					$("#email").focus();
					return false;
				} else if ($("#emailauth").val() === "" || flag===1) {
					alert("이메일 인증을 제대로 완료해주세요.");
					$("#emailauth").focus();
					return false;
				} 
				e.preventDefault();
				$("form").submit();
				alert("회원가입을 축하드립니다.");
			});
		});
		$('#userId').on("propertychange change keyup paste input", function() {

			var userId = $('#userId').val();
			var data = {
				userId : userId
			};
			// '컨트롤에 넘길 데이터 이름' : '데이터(#userId에 입력되는 값)'
			$.ajax({
				type : "post",
				url : "/memberIdChk",
				data : data,
				success : function(result) {
					if (result != 'fail') {
						$('.id_input_re_1').css("display", "inline-block");
						$('.id_input_re_2').css("display", "none");
					} else {
						$('.id_input_re_2').css("display", "inline-block");
						$('.id_input_re_1').css("display", "none");
					}
				}//success 종료
			}); // ajax 종료

		});// function 종료

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
								// 주소변수 문자열과 참고항목 문자열 합치기
								addr += extraAddr;

							} else {
								// 추가해야할 코드
								addr += ' ';
							}

							$(".address_input_1").val(data.zonecode);
							//$("[name=memberAddr1]").val(data.zonecode);    // 대체가능
							$(".address_input_2").val(addr);
							//$("[name=memberAddr2]").val(addr);            // 대체가능
							// 상세주소 입력란 disabled 속성 변경 및 커서를 상세주소 필드로 이동한다.
							$(".address_input_3").attr("readonly", false);
							$(".address_input_3").focus();

						}
					}).open();

		}
		
		
		 /* 입력 이메일 형식 유효성 검사 */
		 function mailFormCheck(email){
		    var form = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		    return form.test(email);
		};
		/* 인증번호 이메일 전송 */
		$(".mail_check_button").click(function() {

			var email = $(".mail_input").val(); // 입력한 이메일
			var cehckBox = $(".mail_check_input"); // 인증번호 입력란
			var boxWrap = $(".mail_check_input_box"); // 인증번호 입력란 박스
			var warnMsg = $(".mail_input_box_warn");    // 이메일 입력 경고글
			
		    /* 이메일 형식 유효성 검사 */
		    if(mailFormCheck(email)){
		       alert("올바른 양식입니다! 메일 전송을 시도합니다.");
		       
		    } else {
		    	alert("올바르지 못한 형식의 이메일입니다.");
		        return false;
		    } 

			$.ajax({

				type : "GET",
				url : "mailCheck?email=" + email,
				success : function(data) {

					//console.log("data : " + data);
					alert("발신성공! 이메일을 확인해 주세요.");
					cehckBox.attr("disabled", false);
					boxWrap.attr("id", "mail_check_input_box_true");
					code = data;

				}

			});

		});
		/* 인증번호 비교 */
		$(".mail_check_input").blur(function() {
			var inputCode = $(".mail_check_input").val(); //입력코드    
			var checkResult = $("#mail_check_input_box_warn"); //비교 결과
			if (inputCode == code) { // 일치할 경우
				checkResult.html("인증번호가 일치합니다.");
				checkResult.attr("class", "correct");
				flag = 0;
			} else { // 일치하지 않을 경우
				checkResult.html("인증번호를 다시 확인해주세요.");
				checkResult.attr("class", "incorrect");
				flag = 1;
			}
		});
	</script>
	<%@ include file="./includes/footer.jsp"%>
</body>
</html>