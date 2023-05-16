<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<script>
var logoutForm = $("#logoutForm");
$(".logout-link").on("click",function(e){
	e.preventDefault();
	logoutForm.attr("action","/customLogout");
	logoutForm.submit();
});
</script>
	<footer class="footer">
		<div class="container">
			<p class="project_name">TasteForming</p>
			<p class="team_name"><span>Team_name</span> : 404</p>
			<p class="team_member"><span>Member</span> : 김정우, 정경안, 정혜림, 김현우</p>

			<address>Copyright@2023 Team 404</address>
		</div>
	</footer>