$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });

  $(".modal-button").on("click", function () {
    var modalName = "#" + $(this).attr("data-modal");
    $(modalName).addClass("is-active");
  });

  $(".delete, .modal-background").on("click", function () {
    $(".modal").removeClass("is-active");
  })

  $("#email-submit").on("click", function() {
    $(".clear").val("");
  })
});