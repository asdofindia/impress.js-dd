if ("ontouchstart" in document.documentElement) { 
    document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
}

var api=impress()
api.init();

          $(document).on('impress:stepenter', function(e) {
                    var currentSlide = $(e.target).attr('id'); 
                   /* if (currentSlide=="aser-1") {
                       $('div.smiley').each(function(index){
                         if ($(this).hasClass('smile')){
                          $(this).text(":-)");
                           }
                           else
                           {
                             $(this).text(":-(");
                           }
                       });
                   }  */                  
           }); 
 