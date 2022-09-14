$(function() {

  $(document.body).removeClass("hidden");
  let children = $(".grid").children();
  children.hide();

  $(children).each(function(index) {
    $(this).children().hide();
    $(this).hide().delay(800*index).fadeIn(600);
  });
  $(children).eq(2).children().delay(4800).fadeIn(1000);

  let currentDiv = $(children).eq(2);

  $(children).click(function(){
    if (currentDiv == null){
      currentDiv = $(this);
    } else {
      currentDiv.children().hide();
      currentDiv = $(this);
    }
    currentDiv.children().fadeIn(1000);
  });

});
