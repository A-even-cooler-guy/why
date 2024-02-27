function send(){
    number1=document.getElementById("num1").value;
    number2=document.getElementById("num2").value;
    actual_answer=parseInt(num1)* parseInt(num2);

question="<h4> " + multiplicand  +"X"+ multiplier + "</h4>";
input_box="<br>Answer: <input type='text' id='input_checkbox'>";
check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";

row=question+input_box+check_button;
document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value=" ";
    document.getElementById("num2").value=" ";
}
question_turn="player1";
    answer_turn="player2";
function check(){
  get_answer=document.getElementById("input_check_box").value;
  if(get_answer_turn==actual_answer)  {
    if(answer_turn=="player1"){
        update_player1=player1_score+1;
    document.getElementById("player1_score").innerHTML=updated_player1_score;    
}
else{
    update_player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=updated_player2_score;    
}
if(question_turn=="player1"){
    update_player1=player1_score+1;
document.getElementById("player1_score").innerHTML=updated_player1_score;    
}
else{
update_player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=updated_player2_score;    
}
  }
}


