import { score } from "../Code work in VS Code/javascript/cmd_quiz/ques1/ques1";

const optionA = document.getElementById("opA");
optionA.addEventListener("click", wrong);

const optionB = document.getElementById("opB");
optionB.addEventListener("click", right);

const optionC = document.getElementById("opC");
optionC.addEventListener("click", wrong);

function wrong() {
  document.querySelector(".ans").style.visibility = "visible";
  document.querySelector(".msg").innerHTML = "OOPS WRONG ANSWER";
  optionA.style.backgroundColor = "red";
  optionB.style.backgroundColor = "green";
  optionC.style.backgroundColor = "red";
}

function right() {
  document.querySelector(".ans").style.visibility = "visible";
  document.querySelector(".msg").innerHTML = "CORRECT ANSWER";
  optionA.style.backgroundColor = "red";
  optionB.style.backgroundColor = "green";
  optionC.style.backgroundColor = "red";
  score = score + 1;
}

export { score };
