<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set var="path" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tasteforming</title>
    <link rel="stylesheet" href="${path }/resources/css/boardRegister.css">
    <link rel="stylesheet" href="${path }/resources/css/reset.css">
    <link rel="stylesheet" href="${path }/resources/css/boardHeader.css">
</head>
<body>
 <%@include file="boardheader.jsp" %>
    <main>
        <section class="main-wrap">
            <div class="list-container">
                <span class="subject">Taste Stroy</span>
                 <form role="form" action="register" method="post" onsubmit="return validateForm()" name="myForm">
                 <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                <div class="list-container">
                    <div class="list_head">
                        <p class="get_head">게시글 제목</p>
                        <input type="text" class="board-box" placeholder="제목" name="title">
                    </div>
                    <div class="list_body">
                        <p class="get_head">게시글 내용</p>
                        <textarea class="board-box board-content" placeholder="내용" name="content"></textarea>
                        <input class="form-control" type="hidden" name="userId" value='<sec:authentication property="principal.username"/>' readonly="readonly">
                    </div>
                    <button class="board-btn return-btn" onclick="location.href='list'" type="submit" data-oper='list'>목록</button>

                    <button class="board-btn board-regist">
                        등록
                    </button>

                </div>
                </form>
            </div>


            </div>

        </section>
    </main>

<!-- jQuery -->
<script src="${path }/resources/plugins/jquery/jquery.min.js"></script>

<script type="text/javascript">
	$(document).ready(function() {

		var formObj = $("form");

		$('button').on("click", function(e) {

			e.preventDefault();

			var operation = $(this).data("oper");

			console.log(operation);

			 if (operation === 'list') {
				//move to list
				formObj.attr("action", "list").attr("method", "get"); 
				
				var pageNumTag = $("input[name='pageNum']").clone();
			    var amountTag = $("input[name='amount']").clone();
			    var keywordTag = $("input[name='keyword']").clone();
			    var typeTag = $("input[name='type']").clone();      

			    formObj.empty();

			    formObj.append(pageNumTag);
			    formObj.append(amountTag);
			    formObj.append(keywordTag);
			    formObj.append(typeTag);
			}

			formObj.submit();
		});
		
		
	});
	
	 
</script>

<!-- 제목과 내용이 없는 상태에서 작성버튼 클릭시 경고창 -->
<script>
function validateForm() {
    var title = document.forms["myForm"]["title"].value;
    var content = document.forms["myForm"]["content"].value;
    if (title == "" || content == "") {
      alert("제목과 내용을 작성해주세요.");
      return false;
    }
  }
</script>
<%@include file="../../includes/footer.jsp"%>
</body>
</html>


