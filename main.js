var counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

function myFunction() {
  var x = document.getElementById("ads-background");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("button-open").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("button-open").style.display = "block";
}
