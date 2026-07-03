let count = 0;
let isDark = false;

//click button
document.getElementById("clickbtn").addEventListener("click", function () {
  if (count < 10) {
    count++;
    document.getElementById("count").innerText = "Click: " + count;
    document.getElementById("title").innerText = "NumberOfClicks";
    document.getElementById("title").style.color = "red";
    document.getElementById("para").innerText =
      "Increase clicks by clicking it again and again";
  }

  if (count === 10) {
    document.getElementById("count").innerText = "Stop";
    document.getElementById("title").innerText = "maximum clicks is 10";
    document.getElementById("title").style.color = "black";
    document.getElementById("para").innerText = "Limit reached";
    document.getElementById("clickbtn").disabled = true;
  }
});

//alert button

document.getElementById("alertbtn").addEventListener("click", function () {
  document.getElementById("title").innerText = "ALERT!!!";
  document.getElementById("para").innerText = "Alert button on!";
  document.body.style.color = "red";
});

//Toggle color
document.getElementById("colorbtn").addEventListener("click", function () {
  if (isDark) {
    document.getElementById("title").innerText = "Color Change";
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    isDark = false;
  } else {
    document.getElementById("title").innerText = "Color Change";
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    isDark = true;
  }
});
