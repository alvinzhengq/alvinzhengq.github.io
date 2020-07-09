$(document).ready(function(){
    var pageSections = document.querySelectorAll('section');

    var scrollApp = new onePageScroll({
      el: pageSections,
      time: 1200,
      easing: 'cubic-bezier(0.85, 0, 0.15, 1)',
      throttling: 300
    })

    setTimeout(()=>{
        $(".footer.page1").fadeIn();
    }, 4000);

    for(let i = 0; i < pageSections.length; i++){
        pageSections[i].addEventListener("inview", function(){
            var currentPage = pageSections[i].getAttribute("class").charAt(0);
            console.log(currentPage)

            if(currentPage != pageSections.length && currentPage != pageSections.length-1){
                $(".footer").fadeOut();

                setTimeout(()=>{
                    $(".footer").fadeIn();
                }, 1200);
            }else{
                $(".header").fadeOut();
                $(".footer").fadeOut();

                setTimeout(()=>{
                    $(".header").fadeIn();
                    $(".footer").fadeIn();
                }, 1200);
            }
        })
    }

    $(".bi-chevron-double-up").on('click', function(){
        scrollApp.goto(1);
    })

    $(".bi-chevron-double-down").on('click', function(){
        scrollApp.next();
    })
});