const currentYear = document.querySelector("#currentYear");
const messageButton = document.querySelector("#messageButton");
const messageText = document.querySelector("#messageText");
const skillCards = document.querySelectorAll(".skill-card");
const skillTip = document.querySelector("#skillTip");

currentYear.textContent = new Date().getFullYear();

messageButton.addEventListener("click", function () {
  messageText.textContent = "谢谢你的关注！你可以把邮箱和 GitHub 换成自己的真实信息。";
});

skillCards.forEach(function (card) {
  card.addEventListener("click", function () {
    skillCards.forEach(function (item) {
      item.classList.remove("active");
    });

    card.classList.add("active");
    skillTip.textContent = "你选择了 " + card.querySelector("h3").textContent + " 技能。";
  });
});
