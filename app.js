$(document).ready(function() {
  var numbers = [];
  var finalResult = 0;
  var currentNum = "";
  var calculation = "";
 
 function showCalculation (currentNum) {
 	calculation = numbers.join("") + currentNum;
  	if (calculation == "") {
      $("#calculation").html("0");	
    } else {
      $("#calculation").html(calculation);
    }
 }

 function showCurrentNum(number) {
   currentNum += number;
   $("#result").html(currentNum);
 }

 function clear() {
 	currentNum = "";
  	numbers = [];
  	finalResult = 0;
  	calculation = "";
  	$("#result").html("0");
  	$("#calculation").html("0");
 }

 function showLastEntry() {
  var value;
  value = numbers.slice(-1);
  $("#result").html(value);
  currentNum = "";
}

function notOperetor() {
	return numbers.length % 2 !== 0;
}

 // Clicking on numbers
  $(".number").click(function() {
    var number = $(this).val();
  	if(currentNum!== "" || number != 0) {
  	  showCurrentNum(number)
  	  showCalculation(currentNum);
  	} 
  });

 // Clicking on "."
  $(".point").click(function() {
  	if (currentNum === "" || currentNum === "0") {
  	  showCurrentNum("0.");	
  	} 
  	if(currentNum.indexOf(".") === -1) {
      showCurrentNum(".")
  	}
  	showCalculation(currentNum);
  });

// Clicking on operator
  $(".operator").click(function() { 
    var operator = $(this).val();
    $("#result").html(operator);
    if(currentNum !== "") {
      numbers.push(currentNum);
      currentNum = "";
    }
    if(notOperetor()) {
      numbers.push(operator);
      showCalculation(currentNum);
    }
  });

// Clicking on equal
  $("#equal").click(function() {
  	if(currentNum !== "") {
      numbers.push(currentNum);
    }

  	if (notOperetor()) {
  	  finalResult = eval(numbers.join(""));
  	  $("#result").html(finalResult);
  	  calculation += "=" + finalResult;
  	  $("#calculation").html(calculation);
  	  
  	} 
 // clearing everything except screen 
    currentNum = "";
  	calculation = "";
  	numbers = [];
    finalResult = 0;	
  });

// Clicking on AC
  $("#clearAll").click(function() {
  	clear();
  });

// Clicking on CE 

  $("#clear").click(function() {
    if(numbers.length < 2) {
      clear();
    } else if(numbers.length !== 0 && currentNum === "") {
      numbers.pop();
      showLastEntry();
    } else if(numbers.length !== 0) {
      showLastEntry();
    }
    showCalculation(currentNum);
  });
});
