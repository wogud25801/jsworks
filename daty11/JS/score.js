/* 조건
 성적 점수가 90점 이상이면 'A'학점
 성적 점수가 80점 이상이면 'B'학점
 성적 점수가 70점 이상이면 'C'학점
 성적 점수가 60점 이상이면 'D'학점
 성적 점수가 60점 미만이면 'F'학점*/

 //입력(변수선언 및 값 저장)
 var score = 75;     //점수
 var grade = "";   //학점
 
 //연산(if 조건문) 및 출력
 if(score>=90) {
     grade ="A학점";
 }
 else if(score >= 80 && score < 90) {
     grade ="B학점";
 }
 else if(score >= 70 && score < 80) {
     grade ="C학점";
 }
 else if(score >=60  && score < 70) {
     grade ="D학점";
 }
 else{
     grade = "F학점";
 }
 document.write("학점은 <span>" + grade + "</span>입니다.")
`   `

     
 