$(document).ready(function () {
    AOS.init();
    //firebase
    firebase.initializeApp({
        apiKey: "AIzaSyBGbzHQ0TTQOZTyHE1xSGo0icu0GSZqsBQ",
        authDomain: "finalweb-4d42c.firebaseapp.com",
        projectId: "finalweb-4d42c",
        storageBucket: "finalweb-4d42c.appspot.com",
        messagingSenderId: "830286669914",
        appId: "1:830286669914:web:7636143aae8133943d5063",
        measurementId: "G-V6X42K3B2P"
    });

    // 選擇集合
    let chatroomDocRef = firebase.firestore()
        .collection("chatrooms")
        .doc("chatroom1");
    let messagesCollectionRef
        = chatroomDocRef.collection("messages");
    //設定DOM元件選擇器
    const $messageField = $('#message-field');
    const $nameField = $('#name-field');
    const $messageList = $('#message-list');
    const $islike = $('#checkbox');
    //將聊天內容傳送⾄FIREBASE
    /*
    $messageField.keypress(function (e) {
        if (e.keyCode == 13 && $messageField.val() != '' && !e.shiftKey) {
            let senderName = $nameField.val();
            let message = $messageField.val();
            let islike = $islike.is(":checked");
            messagesCollectionRef.add({
                senderName: senderName,
                message: message,
                islike: islike,
                timestamp: Date.now(),
            });
            $messageField.val('');
        }
    });
    */

    var btn = document.getElementById('btn');
    btn.onclick = function () {
        if ($messageField.val() != '') {
            let senderName = $nameField.val();
            let message = $messageField.val();
            let islike = $islike.is(":checked");
            messagesCollectionRef.add({
                senderName: senderName,
                message: message,
                islike: islike,
                timestamp: Date.now(),
            });
            $messageField.val('');
        }
    };


    //排序聊天內容
    //監聽後台並取得最新聊天內容
    messagesCollectionRef.orderBy("timestamp", "desc").onSnapshot(function (querySnapshot) {
        $messageList.html("");
        querySnapshot.forEach(function (doc) {
            let senderName = doc.data().senderName || "路人";
            let message = doc.data().message.replace(/\n/g, "<br/>");
            let islike = doc.data().islike;
            if(islike==true){
                islike = "goldborder";
            }else{
                islike = "blueborder";
            }
            let messageItem = `
            <div class="col-xl-3 col-md-5 col-sm-8 box ${islike}" style="font-size: 3vh;" data-aos="fade-right" data-aos-id="super-duper">
            <div style="font-size: 4vh; font-weight:bold">
            ${senderName} </div>
            <hr>
            ${message}
            </div>
            <div class="col-1"></div>
            `;
            $messageList.append(messageItem);
        });
    });
    //手機導覽
    var flag = new Boolean(true);
    $(".CB").click(function (event) {
        if (flag) {
            $(this).html("<br>收<br>回");
            $(".phonenav").addClass("PCani");
            $(".phonenav").removeClass("unPCani");
        }
        else {
            $(this).html("<br>選<br>單");
            $(".phonenav").removeClass("PCani");
            $(".phonenav").addClass("unPCani");
        }
        flag = !flag;
    });
    //輸入
    $(".ADDcomment").click(function (event) {
        $(this).addClass("hide");
        $(".ADDcommentO").removeClass("hide");
    });
    $(".ADDcommentO img").click(function (event) {
        $(".ADDcommentO").addClass("hide");
        $(".ADDcomment").removeClass("hide");
    });


    //AOS
    document.addEventListener('aos:in', ({ detail }) => {
        console.log('animated in', detail);
    });

    document.addEventListener('aos:out', ({ detail }) => {
        console.log('animated out', detail);
    });
});
