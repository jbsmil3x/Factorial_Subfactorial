
function myFunction(event) {
  //ttake a value from page
  var n = document.getElementById("facsn").value;
  //check nomber is true and check range
  var numbers = /^[0-9]+$/;
  if (n.match(numbers)) {
    if (n > 170) {
      document.getElementById("calcsf").style.backgroundColor = "red";
      document.getElementById("demo").innerHTML = "You are out of range.</br> For try again just type new nomber";
      return false;
    }
    else if (n < 0) {
      document.getElementById("calcsf").style.backgroundColor = "red";
      document.getElementById("demo").innerHTML = "You are out of range.</br> For try again just type new nomber";
    }
    else {
      document.getElementById("calcsf").style.backgroundColor = "green";
      document.getElementById("demo").innerHTML = " ";
    }
  }
  else {
    document.getElementById("calcsf").style.backgroundColor = "red";
    document.getElementById("demo").innerHTML = "This is not only numbers .</br> For try again just type new nomber";
    return false;
  }
  //Calculation subfactorial
  var sfnx = 1;

  if (n == 2 || n == 0) {
    var sfnx = 1;
  }

  if (n == 1) {
    var sfnx = 0;
  }
  var sfnxf = sfnx;
  var sfnxs = 1;
  for (let i = 2; i <= n; i++) {
    sfnxf = sfnxf * i;
  };
  var sfnxfx = 1;
  var sfnxfs = 0
  for (let i = 2; i <= n; i++) {
    sfnxfx = sfnxfx * i;
    sfnxfs = sfnxfs + Math.pow(-1, i) / sfnxfx;
  }
  //Display result

  let text = "";

  text = sfnxfx * sfnxfs;

  document.getElementById("resultsfnxe").innerHTML = '!' + n + ' ' + '=' + ' ' + Math.floor(text);
  document.getElementById("resultsfnxor").innerHTML = 'or';
  document.getElementById("resultsfnx").innerHTML = '!' + n + ' ' + '=' + ' ' + text.toLocaleString();
  document.getElementById("resultfnx_text").innerHTML = "Press and hold for copy number.";//works for android
}
