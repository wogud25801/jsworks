let picture = ["images/coffee-blue.jpg", "images/coffee- gray.jpg", 
"images/coffee-pink.jpg",]

//

showPicture(); // 호출

function showPicture(){
let pic = document.getElementById("cup"); 
pic.src = picture[msg_idx];
msg_idx++; //msg_idx += 1, 1증가
// 다시 0번 인덱스로 설정
console.log(picture.length);
if(msg_idx === picture.length){ //배열의 크기와 같으면
msg_idx = 0;
}
setTimeout(showPicture, 2000); // 콜백함수(함수의 매개변수로 함수를 설정)
}
// 디지털 시계
setInterval(function(){
    const now = new Date();
    let watch = now.toLocaleTimeString(); //시간 표시
    document.querySelector("#display").innerHTML = watch;
}, 1000);