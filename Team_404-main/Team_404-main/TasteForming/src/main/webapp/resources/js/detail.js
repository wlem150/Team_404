function openReserveModal(loggedInUserId, resNo, resName) {
  // 로그인 여부 확인
  if (loggedInUserId === "anonymousUser") {
    alert("로그인이 필요합니다.");
    return;
  }

  // 모달 오픈
  $("#reservationModal").modal("show");
  // hidden input 값 설정
  $('input[name="userId"]').val(loggedInUserId);
  $('input[name="res_No"]').val(resNo);
  $('input[name="res_Name"]').val(resName);
}

// 예약 폼 제출 시
$("#reservationForm").on("submit", function (event) {
  // 폼 제출 막기
  event.preventDefault();

  // 예약 정보 전송
  $.ajax({
    type: "POST",
    url: "/tasteforming/reservation",
    data: $(this).serialize(),
    success: function (response) {
      // 예약 완료 모달을 보여줌
      $("#reservationCompleteModal").modal("show");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
});

// 날짜 선택기 초기화
$(function () {
  $("#datepicker").datepicker();
});

//댓글 등록모달

function validateReview() {
  var reviewContent = document.getElementsByName("content")[0].value.trim();
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
form.addEventListener("submit", function (event) {
  if (!validateReview()) {
    event.preventDefault();
  }
});

//댓글 수정 모달

function openModal(resview_No, res_No, userId, content) {
  // 현재 로그인된 아이디 가져오기
  const loggedInUserId = "${mem.userId}"; // 여기에 실제 현재 로그인된 아이디 값을 넣어주세요.

  // 댓글 작성자의 아이디와 현재 로그인된 아이디가 같은 경우에만 수정 창 열기
  if (userId === loggedInUserId) {
    // 모달창 열기
    document.getElementById("myModal").style.display = "block";
    // 폼 데이터 채우기
    document.getElementById("res_No").value = res_No;
    document.getElementById("content").value = content;
    document.getElementById("resview_No").value = resview_No;
  } else {
    alert("본인이 작성한 댓글만 수정 가능합니다.");
  }
}

function closeModal() {
  // 모달창 닫기
  document.getElementById("myModal").style.display = "none";
}

//댓글 삭제 모달

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

//공유하기 모달창

// 공유하기 모달창 열기
document.getElementById("shareButton").addEventListener("click", function () {
  var url = window.location.href; // 현재 페이지의 URL을 가져옴
  document.getElementById("shareUrl").value = url; // 모달창의 input 태그에 URL을 넣어줌
  document.getElementById("shareModal").style.display = "block"; // 모달창을 보이게 함
});
// 공유하기 모달창 닫기
document
  .getElementById("closeShareModal")
  .addEventListener("click", function () {
    document.getElementById("shareModal").style.display = "none"; // 모달창을 숨김
  });
// 복사 버튼 클릭 시 URL 복사
document.getElementById("copyButton").addEventListener("click", function () {
  var urlInput = document.getElementById("shareUrl");
  urlInput.select(); // input 태그의 내용을 선택함
  document.execCommand("copy"); // 복사 명령 실행
  alert("링크가 복사되었습니다.");
});
