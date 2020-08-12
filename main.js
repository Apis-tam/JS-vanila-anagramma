let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  let inputFirst = document.getElementById("input").value;
  let inputSecond = document.getElementById("inputSecond").value;
  let firstArr = inputFirst.split("");
  let secondArr = inputSecond.split("");
  let newWord;
  if (firstArr.length == secondArr.length) {
    let newArr = [];
    for (i = 0; i < firstArr.length; i++) {
      for (y = 0; y < secondArr.length; y++) {
        if (firstArr[i] == secondArr[y]) {
          newArr.push(secondArr[y]);
          break;
        }
      }
    }
    newWord = newArr.join("");
    if (newWord == inputFirst) {
      result.innerHTML = "true  : Анаграмма";
    } else {
      result.innerHTML = "false : Не Анаграмма";
    }
  } else {
    result.innerHTML = "false : Не Анаграмма";
  }
});
