let Player1;
let Player2;



    function editNames(){
        Player1=prompt("Enter Player1 name");
        Player2=prompt("Enter Player2 name");


    document.querySelector("p.Player1").innerHTML=Player1;
    document.querySelector("p.Player2").innerHTML=Player2;


}

document.querySelectorAll("button")[1].addEventListener("click","editNames");

    function rollTheDice(){
        let randomNum1=Math.floor(Math.random()*6)+1;
        let randomNum2=Math.floor(Math.random()*6)+1;

        document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNum1+".png");
        document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNum2+".png");


        if(randomNum1>randomNum2){
            document.querySelector("h1").innerHTML=Player1 + " WINS"
        }
        else if(randomNum1<randomNum2){
            document.querySelector("h1").innerHTML=Player2 + " WINS"
        }
        else{
            document.querySelector("h1").innerHTML="GAME TIE!"
        }

    }