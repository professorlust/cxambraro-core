/* Кнопки */
let save = document.getElementById("btn-save")
let info = document.getElementById("btn-info")

save.onclick = function() {
  alert("Ваша игра успешно сохранена.");
  /* зафигачить сохранение */
};
info.onclick = function() {
  /* тут будет код того, что будет*/
  /* тут откуда-то вылезет див с инфой об игре */
  /* должна быть либа для этого точно */
};

/* Всякое на экране */
var responses = $("#responses")
var world = $("#world")
var output = $("#output")

/* Переменная для обмена данными, костыльный путь */
var trade
