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

                sock = new SockJS('http://localhost:8080/ws/app1');
                sock.onheartbeat = function() {
                    console.log('heartbeat');
                };
                stompClient = Stomp.over(sock,['v11.stomp']);
                var headers = {
                    login: 'anonymous',
                    passcode: 'access',
                    "x-testing": true
                };
                stompClient.connect(headers, function (frame) {
                    console.log("connected");
                    console.log(frame);
                }, function(error) {
                    console.log("not connected");
                    console.log(error);
                });

        }

        function subscribe() {
            subscriptions["t1"] = stompClient.subscribe('/t1', function (message) {
                console.log("incoming message from ... ");
                console.log(message);
            });
        }

        function send() {
            stompClient.send('/t1', {}, "Hello World");
        }


        function unsubscribe() {
            subscriptions["t1"].unsubscribe();
            delete subscriptions["a1"];
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

<button onclick="subscribe();">Subscribe</button>

<button onclick="send('MOIMOI MOI');">Send MOIMOIMOI</button>
<pre id="messages"></pre>
</body>
</html>
