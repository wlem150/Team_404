<!DOCTYPE c:set PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="com.tasteforming.domain.EventVO"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="path" value="${pageContext.request.contextPath}" />
<%@ page session="false"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>

<c:set value="${events }" var="event" />
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>예약일정</title>


<!-- Google Font: Source Sans Pro -->
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
<!-- Font Awesome -->
<link rel="stylesheet"
	href="${path }/resources/plugins/fontawesome-free/css/all.min.css">
<!-- fullCalendar -->
<link rel="stylesheet"
	href="${path }/resources/plugins/fullcalendar/main.css">
<!-- Theme style -->
<link rel="stylesheet"
	href="${path }/resources/dist/css/adminlte.min.css">

</head>

<body class="hold-transition sidebar-mini">
	<div class="wrapper">
		<%@ include file="myPageHeader.jsp" %>

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1 style="font-size: 3rem;
    font-weight: bold;">예약관리</h1>
					</div>
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item active">예약관리</li>
						</ol>
					</div>
				</div>
			</div>
			<!-- /.container-fluid --> </section>

			<!-- Main content -->
			<section class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-3">
						<div class="sticky-top mb-3">
							<div class="card">
								<!-- the events -->
								<div id="external-events"></div>
							</div>
						</div>
						<!-- /.card-body -->
					</div>
					<!-- /.card -->

				</div>
			</div>
			<!-- /.col -->
			<div class="col-md-9" style="min-width: 100%;">
				<div class="card card-primary">
					<div class="card-body p-0">
						<div id="calendar"></div>
					</div>
				</div>

			</div>
			 </section>
		</div>


		<footer class="main-footer">
		<div class="float-right d-none d-sm-block">
			<b>Version</b> 3.2.0
		</div>
		<strong>Copyright &copy; 2014-2021 <a
			href="https://adminlte.io">AdminLTE.io</a>.
		</strong> All rights reserved. </footer>

		<!-- Control Sidebar -->
		<aside class="control-sidebar control-sidebar-dark"> <!-- Control sidebar content goes here -->
		</aside>
		<!-- /.control-sidebar -->
	</div>
	<!-- ./wrapper -->
	<!-- jQuery -->
	<script src="${path }/resources/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap -->
	<script
		src="${path }/resources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- jQuery UI -->
	<script src="${path }/resources/plugins/jquery-ui/jquery-ui.min.js"></script>
	<!-- AdminLTE App -->
	<script src="${path }/resources/dist/js/adminlte.min.js"></script>
	<!-- fullCalendar 2.2.5 -->
	<script src="${path }/resources/plugins/moment/moment.min.js"></script>
	<script src="${path }/resources/plugins/fullcalendar/main.js"></script>
	<script src="${path}\resources\js\user.js"></script>
	<!-- AdminLTE for demo purposes -->

	<!-- Page specific script -->


	<script>
	
    $(function () {

      function ini_events(ele) {
        ele.each(function () {


          var eventObject = {
            title: $.trim($(this).text())
          }

          $(this).data('eventObject', eventObject)
          $(this).draggable({
            zIndex: 1070,
            revert: true, 
            revertDuration: 0 
          })

        })
      }

      ini_events($('#external-events div.external-event')) 
      var date = new Date()
      var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear()

      var Calendar = FullCalendar.Calendar;
      var Draggable = FullCalendar.Draggable;

      var containerEl = document.getElementById('external-events');
      var checkbox = document.getElementById('drop-remove');
      var calendarEl = document.getElementById('calendar');
     
      new Draggable(containerEl, {
        itemSelector: '.external-event',
        eventData: function (eventEl) {
          return {
            title: eventEl.innerText,
            backgroundColor: window.getComputedStyle(eventEl, null).getPropertyValue('background-color'),
            borderColor: window.getComputedStyle(eventEl, null).getPropertyValue('background-color'),
            textColor: window.getComputedStyle(eventEl, null).getPropertyValue('color'),
            order_No: eventEl.dataset.order_No
 

          };
        }
      });

      var calendar = new Calendar(calendarEl, {
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        themeSystem: 'bootstrap',
   events:[
<%List<EventVO> events = (List<EventVO>) request.getAttribute("events");
for (int i = 0; i < events.size(); i++) {
	String title = events.get(i).getTitle();
	String start = events.get(i).getStart();
	long order_No= events.get(i).getOrder_No();
	String backgroundColor = events.get(i).getBackgroundColor();
	String borderColor = events.get(i).getBorderColor();%>
        {
            title: '<%=title%>',
            order_No: <%=order_No%>,
            start: <%=start%>,
           	backgroundColor:'<%=backgroundColor%>',
            borderColor: '<%=borderColor%>'
        },
<%}%>
],
        editable: true,
        droppable: true, 
        drop: function (info) {
          if (checkbox.checked) {
            info.draggedEl.parentNode.removeChild(info.draggedEl);
          }
        },
        eventClick: function(info) {
        	 
            var event = info.event;
            var formattedDate = moment(event.start).format('YYYY-MM-DD');

            if (confirm("정말로 '" + event.title + " (" +formattedDate+ ") 의 예약을 취소하시겠습니까?")) {
                var today = new Date();
                
                $.ajax({
                    url: '/tasteforming/myPage/orderCancel',
                    method: 'POST',
                    data: { title: event.title, order_No: event.extendedProps.order_No },
                    success: function(response) {
                        alert(event.title+"의 예약을 취소하셨습니다.");
                    },
                    error: function(error) {
                        alert(error);
                    }
                });
            }
        }
      });

      calendar.render();

      var currColor = '#000';
      $('#color-chooser > li > a').click(function (e) {
        e.preventDefault();
        currColor = $(this).css('color')
        $('#add-new-event').css({
          'background-color': currColor,
          'border-color': currColor
        })
      })
      $('#add-new-event').click(function (e) {
        e.preventDefault()
        var val = $('#new-event').val()
        if (val.length == 0) {
          return
        }

        var event = $('<div />')
        event.css({
          'background-color': currColor,
          'border-color': currColor,
          'color': '#000'
        }).addClass('external-event')
        event.text(val)
        $('#external-events').prepend(event)

        ini_events(event)
        $('#new-event').val('')
      })
    })
  </script>

</body>

</html>