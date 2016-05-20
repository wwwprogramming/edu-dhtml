<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isELIgnored="false" %>

<html>

<head>
<script src="http://localhost:8080/resources/sockjs.js"></script>
    <script src="http://localhost:8080/resources/stomp.js"></script>
<script type="text/javascript">

        var sock, stompClient, currentUser, subscriptions = {};

        function connect() {

                sock = new SockJS('http://localhost:8080/app1');
                sock.onheartbeat = function() {
                    console.log('heartbeat');
                };
                stompClient = Stomp.over(sock);
                stompClient.connect({whateva: "abbabaaaba"}, function (frame) {
                    console.log("connected");
                });

        }

        function subscribe() {
            subscriptions["a1"] = stompClient.subscribe('/t1', function (message) {
                console.log("in");
                console.log(message);
            });
        }

        function send() {
            stompClient.send('/app1', {subscription: '/t1'}, "Hello World");
        }


        function unsubscribe() {
            subscriptions["a1"].unsubscribe();
        }

        function disconnect() {
            for (var key in subscriptions) {
                if (subscriptions.hasOwnProperty(key)) {
                    unsubscribe(key);
                }
            }
            stompClient.disconnect(function (frame) {
               console.log("disconnected");
            });
        }
    </script>

</head>
<body>
<h2>Hello Spring MVC!</h2>

<ul>
    <li>Upload New File <a href="<c:url value='/files/upload' />">&gt;&gt;</a></li>
    <li>List Uploaded Files <a href="<c:url value='/files/list' />">&gt;&gt;</a></li>
</ul>

<button onclick="connect();">Connect</button>
<pre id="messages"></pre>
</body>
</html>
