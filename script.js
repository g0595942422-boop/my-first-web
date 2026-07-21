const currentYear = document.querySelector("#currentYear");
const messageButton = document.querySelector("#messageButton");
const messageText = document.querySelector("#messageText");
const skillCards = document.querySelectorAll(".skill-card");
const skillTip = document.querySelector("#skillTip");

currentYear.textContent = new Date().getFullYear();

messageButton.addEventListener("click", function () {
  messageText.textContent = "谢谢你的关注！欢迎通过页面中的联系方式联系我。";
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
