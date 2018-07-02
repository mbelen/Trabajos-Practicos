var fav = [];

$('.fa-bookmark').on('click', function(){
	var titulo = $(this).data('id');
        var icono = $(this)
        $(this).toggleClass('marked')


        $.ajax({
                url: "/biblioteca/fav",
                type: "post",
                data:{info: JSON.stringify({'bookmarked':titulo})},
              
                success: function () {
                   if(icono.hasClass('marked')){
                       console.log(titulo);
                         
                  }else{
                        console.log('error')
                  }       
                },
                error: function() {
                        console.log("Por favor haga una nueva seleccion");
                }
              }); 






})