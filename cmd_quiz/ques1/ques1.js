let score = 0;
const optionA = document.getElementById("opA");
optionA.addEventListener("click", wrong);

const optionB = document.getElementById("opB");
optionB.addEventListener("click", wrong);

const optionC = document.getElementById("opC");
optionC.addEventListener("click", right);

function wrong() {
  document.querySelector(".ans").style.visibility = "visible";
  document.querySelector(".msg").innerHTML = "OOPS WRONG ANSWER";
  optionA.style.backgroundColor = "red";
  optionB.style.backgroundColor = "red";
  optionC.style.backgroundColor = "green";
}

function right() {
  document.querySelector(".ans").style.visibility = "visible";
  document.querySelector(".msg").innerHTML = "CORRECT ANSWER";
  optionA.style.backgroundColor = "red";
  optionB.style.backgroundColor = "red";
  optionC.style.backgroundColor = "green";
  score = score + 1;
}
export { score };
