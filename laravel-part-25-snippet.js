$('.add').click(function(){
      var id = $(this).data('id');
      if (parseInt($(this).parent().prev().val()) < 10) {
          $(this).parent().prev().val(parseInt($(this).parent().prev().val())+1);
          var qty = $(this).parent().prev().val();
          updateCart(id,qty)
      }            
  });

  $('.sub').click(function(){
      var id = $(this).data('id');
      if (parseInt($(this).parent().next().val()) > 1) {
          $(this).parent().next().val(parseInt($(this).parent().next().val())-1);
          var qty = $(this).parent().next().val();
          updateCart(id,qty)
      }            
  }); 
