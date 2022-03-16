
function myFunction(event) {
  var x = event.clientX;
  var w = window.innerWidth;
  if (x <= w * 0.47) {

    document.getElementById("picture").src = "img/factorialpic.jpg";

    //console.log(x);
  } else if (x > w * 0.51) {
    //var coor = "Coordinates: (" + 2 +")";
    document.getElementById("picture").src = "img/subfacpic.jpg";
  } else {
    //var coor = "Coordinates: (" + 3 +")";
    document.getElementById("picture").src = "img/nallpic.jpg";
  };
}
