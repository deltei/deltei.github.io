  /* При нажатии на "крестик" окно закрывается, при нажатии на надпись "заинтересовались" окно открывается

    1.Ищем кнопку для закрытия
    2.Ищем окно, к которому необходимо добавлять класс
    3. При нажатии удаляем класс
  */


  var linkClose = document.querySelector(".closed");
  var modal = document.querySelector(".search-offer");
  var open = document.querySelector(".offer-text-header");

  linkClose.addEventListener("click", function(event) {

  modal.classList.add("close");
   });

  open.addEventListener("click", function(event) {

   modal.classList.remove("close");
  });
