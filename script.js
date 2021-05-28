const divScore = document.querySelector(".score");

let correctAnswers = ["A", "A", "A", "A", "A"];

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  let score = 0;
  e.preventDefault();
  // console.log(e);

  const userSanswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  userSanswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      // console.log(correctAnswers[index]);
      score += 1;
    }
  });

  // const span = document.createElement("span");
  // span.textContent = score;
  // span.classList.add(".score");
  // divScore.prepend(span);

  userSanswers.forEach((_, index) => {
    if (score > 3) {
      divScore.querySelector("span").textContent = ` ${score}%`;
      divScore.classList.remove("show");

      // alert("sss");
    }
  });

  // console.log(userSanswers);
});
