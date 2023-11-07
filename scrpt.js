
function launch() {
  log = document.getElementById("log");
  output = document.getElementById("output");
  input1 = document.getElementById("input1").value;
  input2 = document.getElementById("input2").value;
  input3 = document.getElementById("input3").value;

  leibniz_iterations = Infinity;
  i = 1;
  pi_approx = 1;
  odd_nb = 3;
  plus_minus = "-";
  interval = setInterval(function() {
    leibniz();
  }, 1);
}

function debug(x) {
  log.innerHTML += x + "<br>";
}

function clearLog() {
  log.innerHTML = "";
}

function leibniz() {
  if (i < leibniz_iterations) {

    if (plus_minus == "-") {
      pi_approx -= (1 / odd_nb);
      odd_nb += 2;

      plus_minus = "+";
    }
    else if (plus_minus == "+") {
      pi_approx += (1 / odd_nb);
      odd_nb += 2;

      plus_minus = "-";
    }
  } else {
    clearInterval(interval);
  }
  
  document.getElementById("output").innerHTML = ("i = " + i + " " + "pi_approx : " + pi_approx * 4);
  
  i += 1;
}