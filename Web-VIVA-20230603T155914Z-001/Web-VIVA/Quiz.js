//decleare variables
var quizs = false;
var secs = 1000 * 60;
var tot = 0;
var startQ = false;
var resetIF = false;

//get values 
function check(){
    var radios = document.getElementsByClassName("ans");
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    return false;
}

radioButtonR(true);

//radio button checkup
function getVal(qName) {
    var radiosNum = document.getElementsByName(qName);
    for (var i = 0, length = radiosNum.length; i < length; i++) {
        if (radiosNum[i].checked) {
            var answerValue = Number(radiosNum[i].value);
        }
    }if (isNaN(answerValue)) {
        answerValue = 0;
    }
    return answerValue;
}
//marking answers
function submitq() {
    if (startQ == false) {//start button not pressed warning
        window.alert("You have not started the quiz. Please click the start button.")
    }else if (check() == false) {//not select answers warning
        window.alert("Please answer all questions");
    }else {
        clearTimeout(timer);
        //answer1
        if (getVal("q1") === 1) {
            document.getElementById("ans_1").style.backgroundColor = "#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_1").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer2
        if (getVal("q2") === 1) {
            document.getElementById("ans_2").style.backgroundColor = "#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_2").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer3
        if (getVal("q3") === 1) {
            document.getElementById("ans_3").style.backgroundColor ="#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_3").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer4
        if (getVal("q4") === 1) {
            document.getElementById("ans_4").style.backgroundColor = "#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_4").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer5
        if (getVal("q5") === 1) {
            document.getElementById("ans_5").style.backgroundColor = "#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_5").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer6
        if (getVal("q6") === 1) {
            document.getElementById("ans_6").style.backgroundColor = "#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_6").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer7
        if (getVal("q7") === 1) {
            document.getElementById("ans_7").style.backgroundColor = "#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_7").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer8
        if (getVal("q8") === 1) {
            document.getElementById("ans_8").style.backgroundColor = "#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_8").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer9
        if (getVal("q9") === 1) {
            document.getElementById("ans_9").style.backgroundColor ="#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_9").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        //answer10
        if (getVal("q10") === 1) {
            document.getElementById("ans_10").style.backgroundColor ="#7ee028";
            tot += 2;
        } else {
            document.getElementById("ans_10").style.backgroundColor = "#FFFF00";
            tot -= 1;
        }
        resetIF = true;
        quizs = true;
        startQ = false;
        showScore = tot + "&nbsp; <strong>/20</strong>";
        document.getElementById("Scoring").innerHTML = showScore;}
}
//radio butto disable situation
function radiobtn(getBol) {
    var radios = document.getElementsByClassName("ans");
    for(var i=0; i < radios.length;i++){
        radios[i].disabled = getBol;
    }
}

// reset function
function resetq() {
    location.reload();

}

// set timer
function setTimer() {
    if(secs == 60000)
        timer = setInterval(setTimer, 1000)
        secs -= 1000;
        document.getElementById("timing").innerHTML = ":"+ secs/1000+"s";
    if (secs <= 0) {
        clearInterval(timer);
       window.alert("Time Over !!!");
        radiobtn(true);
        submitq();
    }
    
}
//start funtion
function start() {
    if (resetIF == true){//if reset is needed
        resetq()
    }
    startQ = true;
    radiobtn(false);
    setTimer()
}
//Change after user get the marks
function backgroundChange(){
	
	if (tot <= 10){
		document.getElementById("all").style.background = "#F08080";
	}
    
    else{
		document.getElementById("all").style.background = "#008080";
	}	
}
//Quiz summary box activate
function togglepopup(){
	document.getElementById("popup1").classList.toggle("active");
}
//Hide timer after click submit button
function hidetime(){
	document.getElementById("timing").style.display = "none";
}
//Display remained time in quiz summary
function displayTimer() {
    if(secs == 60000)
        timer = setInterval(setTimer, 1000)
        secs -= 1000;
        document.getElementById("timing2").innerHTML = ":"+ secs/1000+"s";
    
}

