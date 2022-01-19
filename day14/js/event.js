//상세 설명 보기 클릭
function showText(){
    let text = document.getElementById('detail');
    text.style.display = "block"; //텍스트 보이기

    let btn = document.getElementById('show'); //보기 버튼 선택
    btn.style.display = "none"; //버튼 숨기기
}

function hideText(){
    let text = document.getElementById('detail'); // 텍스트 숨기기
    btn.style.display = "none";
    let btn = document.getElementById('show'); //버튼 보이기
    btn.style.display = "block";
}
