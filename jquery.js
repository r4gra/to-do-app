














$(function(){
    $("button").hover(function(){
        //event handler
        var val =$("input").val();
  if(val !== '') {
        var elem =$('<li></li>').text(val);
        $(elem).append('<button class="rem">X</button>');
        $("ol").append(elem);
        $('input').val('');//clear the input
      }
    });
 
});
