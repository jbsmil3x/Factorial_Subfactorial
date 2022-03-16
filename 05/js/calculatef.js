
function myFunction(event) {
  //ttake a value from page
  var n = document.getElementById("facn").value;
  //check nomber is true and check range
  var numbers = /^[0-9]+$/;
  if (n.match(numbers)) {
    if (n > 170) {
      document.getElementById("calcf").style.backgroundColor = "red";
      document.getElementById("demo").innerHTML = "You are out of range.</br> For try again just type new nomber";
      return false;
    }
    else if (n < 0) {
      document.getElementById("calcf").style.backgroundColor = "red";
      document.getElementById("demo").innerHTML = "You are out of range.</br> For try again just type new nomber";
    }
    else {
      document.getElementById("calcf").style.backgroundColor = "green";
      document.getElementById("demo").innerHTML = " ";
    }
  }
  else {
    document.getElementById("calcf").style.backgroundColor = "red";
    document.getElementById("demo").innerHTML = "This is not only numbers .</br> For try again just type new nomber";
    return false;
  }
  //Calculation factorial
  var fnx = 1;
  function factorial(fn) {
    if (n == 1 || n == 0) {
      return fnx = 1;
    }
  };
  for (let i = 1; i <= n; i++) {

    fnx = fnx * i;
  };
  //Display result
  let text = "";

  text = fnx;

  document.getElementById("resultfnxe").innerHTML = n + '!' + ' ' + '=' + ' ' + text;
  document.getElementById("resultfnxor").innerHTML = 'or';
  document.getElementById("resultfnx").innerHTML = n + '!' + ' ' + '=' + ' ' + fnx.toLocaleString();
  document.getElementById("resultfnx_text").innerHTML = "Press and hold for copy number.";//works for android

}

