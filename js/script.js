document.addEventListener("DOMContentLoaded", function(event) {
    
    //animation down
    
    let arrow = document.querySelector(".first_arrow");
    arrow.addEventListener("click", e =>{
        
    e.preventDefault();
        
    $('html,body').animate({scrollTop:document.querySelector(".first").scrollHeight},1000);
    });
    
    //details
    
    const $findBlock = (allies) =>{
    return $(".details__item").filter((index, item)=>{
       return $(item).attr("data-linked-with") == allies; 
    });
}
$(".circle__button").click(e =>{ 
    e.preventDefault();
    const $this = $(e.currentTarget)   
    const target = $this.attr("data-open");
    const itemToShow =  $findBlock(target);
    const curItem = $this.closest(".circle__button");
    itemToShow.addClass("details__item--active").siblings().removeClass("details__item--active");
    curItem.addClass("c-active").siblings().removeClass("c-active");
});
    
    //details submit
    
     
     $("#details_submit").click(e =>{
         
        e.preventDefault();
       
     let heightSum =
        document.querySelector(".first").scrollHeight + 
        document.querySelector(".about").scrollHeight + 
        document.querySelector(".details").scrollHeight + 
        document.querySelector(".service").scrollHeight + document.querySelector(".portfolio").scrollHeight + document.querySelector(".team").scrollHeight + document.querySelector(".reviews").scrollHeight + document.querySelector(".price").scrollHeight * 0.4;                                                

     $('html,body').animate({scrollTop:heightSum},1000);
    });

    //service
    
    const $findBlocks = (allies) =>{
    return $(".service__item").filter((index, item)=>{
       return $(item).attr("data-linked-with") == allies; 
    });
}
$(".service__button").click(e =>{ 
    e.preventDefault();
    const $this = $(e.currentTarget)   
    const target = $this.attr("data-open");
    const itemToShow =  $findBlocks(target);
    const curItem = $this.closest(".service__button");
    itemToShow.addClass("service__item--active").siblings().removeClass("service__item--active");
    curItem.addClass("service__button--active").siblings().removeClass("service__button--active");
});
    
    //portfolio
    
        var mixer = mixitup($(".portfolio__works"));
    
    
        $("#allworks").click(e =>{ 
                e.preventDefault();
                $("#allworks").addClass("portfolio__button--active").siblings().removeClass("portfolio__button--active");
                mixer.filter('.all');
                
         });
        $("#print").click(e =>{ 
                e.preventDefault();
                $("#print").addClass("portfolio__button--active").siblings().removeClass("portfolio__button--active");
                mixer.filter('.print');
 
         });   
        $("#identity").click(e =>{ 
                e.preventDefault();
                $("#identity").addClass("portfolio__button--active").siblings().removeClass("portfolio__button--active");
                mixer.filter('.identity');
 
         });   
        $("#branding").click(e =>{ 
                e.preventDefault();
                $("#branding").addClass("portfolio__button--active").siblings().removeClass("portfolio__button--active");
                mixer.filter('.branding');
 
         });   
        $("#web").click(e =>{ 
                e.preventDefault();
                $("#web").addClass("portfolio__button--active").siblings().removeClass("portfolio__button--active");
                mixer.filter('.web');
 
         });   
        $("#html").click(e =>{ 
                e.preventDefault();
                $("#html").addClass("portfolio__button--active").siblings().removeClass("portfolio__button--active");
                mixer.filter('.html');
 
         });   
        $("#wordpress").click(e =>{ 
                e.preventDefault();
                $("#wordpress").addClass("portfolio__button--active").siblings().removeClass("portfolio__button--active");
                mixer.filter('.wordpress');
 
         });    
    
    //portfolio form
    
    $("#portfolio__form").click(e =>{
        
    e.preventDefault();
        
    $('html,body').animate({scrollTop:document.body.scrollHeight},1000);
        
    });
    
    //team
    
    const $findWorkers = (allies) =>{
    return $(".team__item").filter((index, item)=>{
       return $(item).attr("data-linked-with") == allies; 
    });
}
$(".team__switcher").click(e =>{ 
    e.preventDefault();
    const $this = $(e.currentTarget)   
    const target = $this.attr("data-open");
    const itemToShow =  $findWorkers(target);
    const curItem = $this.closest(".team__switcher");
    itemToShow.addClass("team__item--active").siblings().removeClass("team__item--active");
    curItem.addClass("team__switcher--active").siblings().removeClass("team__switcher--active");
});

    
    //review

    const $findReviewers = (allies) =>{
    return $(".review__item").filter((index, item)=>{
       return $(item).attr("data-linked-with") == allies; 
    });
}
$(".review__switcher").click(e =>{ 
    e.preventDefault();
    const $this = $(e.currentTarget)   
    const target = $this.attr("data-open");
    const itemToShow =  $findReviewers(target);
    const curItem = $this.closest(".review__switcher");
    itemToShow.addClass("review__item--active").siblings().removeClass("review__item--active");
    curItem.addClass("review__switcher--active").siblings().removeClass("review__switcher--active");
});
    
    
     


    $(".team__switcher").click(e =>{ 
    e.preventDefault();
        //'animation-iteration-count':'1'
    var width = 1000;
 $(".team__item--active").fadeIn("fast").css({ 'left': '70%' }).animate(
  { 
    'left': "0%"
  }, 
  width);

    
    });
    
    
    
    
    
    
    
});//"DOMContentLoaded"













