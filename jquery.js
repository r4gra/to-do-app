$(function(){
    
	  //add task
    $('#add').hover(function(){
        //event handler
        var val =$("input").val();
  if(val !== '') {
        var elem =$('<li></li>').text(val);
        $(elem).append('<p class="rem">X</p>');
        $("ol").append(elem);
        $('input').val('');//clear the input
        

          //task completion
      $(elem).click(function(){
       if($(this).css('text-decoration-line')=="none")
           $(this).css('text-decoration-line', 'line-through');
       else if($(this).css('text-decoration-line')=="line-through")

        $(this).css('text-decoration-line','none');


                      //$(this).toggleClass('complete');

      }); //task complettion button


     //remove task
        $('.rem').click(function(){
          $(this).parent().remove();
    



        }); //.rem click

      



 }//if
    
    });  //add task button 


 
}); //main
