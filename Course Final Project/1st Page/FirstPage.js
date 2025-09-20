const btns = document.querySelectorAll(".btn");
const line = document.getElementsByClassName("decLine");

const HcBtn = document.getElementById("headContact");
const FcBtn = document.getElementById("footContact");

btns.forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    const line = btn.getElementsByClassName("decLine")[0];
    line.style.width = "118px";
  });
  btn.addEventListener("mouseleave", function () {
    const line = btn.getElementsByClassName("decLine")[0];
    line.style.width = "0px";
  });
});

HcBtn.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "black";
});
HcBtn.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "#2c3878";
});

FcBtn.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "black";
  this.style.color = "white";
});
FcBtn.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "white";
  this.style.color = "black";
});
