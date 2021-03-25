document.addEventListener("DOMContentLoaded", function(event) {
    //animation down
    
    let arrow = document.querySelector(".first_arrow");
    arrow.addEventListener("click", e =>{
        
    e.preventDefault();
        
    $('html,body').animate({scrollTop:document.querySelector(".first").scrollHeight},1000);
    });
    
    //nav_hello
    
    $('.nav_hello').click(e =>{
     e.preventDefault();
     $('html,body').animate({scrollTop:0},1000);
    });
    
    $('.nav_about').click(e =>{
     e.preventDefault();
     $('html,body').animate({scrollTop:document.querySelector(".first").scrollHeight},
    1000);
    });
    
    $('.nav_service').click(e =>{
     e.preventDefault(); 
     const height = document.querySelector(".first").scrollHeight + document.querySelector(".about").scrollHeight + document.querySelector(".details").scrollHeight + document.querySelector(".details__footer").scrollHeight;   
     $('html,body').animate({scrollTop:height},1000);
    });
    
    $('.nav_portfolio').click(e =>{
     e.preventDefault(); 
     const height = document.querySelector(".first").scrollHeight + document.querySelector(".about").scrollHeight + document.querySelector(".details").scrollHeight + document.querySelector(".details__footer").scrollHeight +
     document.querySelector(".service").scrollHeight;   
     $('html,body').animate({scrollTop:height},1000);
    });
    
    $('.nav_team').click(e =>{
     e.preventDefault(); 
     const height = document.querySelector(".first").scrollHeight + document.querySelector(".about").scrollHeight + document.querySelector(".details").scrollHeight + document.querySelector(".details__footer").scrollHeight +
     document.querySelector(".service").scrollHeight +
     document.querySelector(".portfolio__footer").scrollHeight +
     document.querySelector(".portfolio").scrollHeight;   
     $('html,body').animate({scrollTop:height},1000);
    });
    
    $('.nav_reviews').click(e =>{
     e.preventDefault(); 
     const footer_margin = parseInt($('.team__footer').css('margin-top'));
     const height = document.querySelector(".first").scrollHeight + document.querySelector(".about").scrollHeight + document.querySelector(".details").scrollHeight + document.querySelector(".details__footer").scrollHeight +
     document.querySelector(".service").scrollHeight +
     document.querySelector(".portfolio").scrollHeight +   
     document.querySelector(".team__footer").scrollHeight +   
     document.querySelector(".portfolio__footer").scrollHeight +   
     document.querySelector(".team").scrollHeight + footer_margin;   
     $('html,body').animate({scrollTop:height},1000);
    });
    
    $('.nav_contact').click(e =>{
     e.preventDefault();
      const footer_margin = parseInt($('.team__footer').css('margin-top'));
      const price_container = parseInt($('.price__container').css('margin-bottom'));
      const height = document.querySelector(".first").scrollHeight + document.querySelector(".about").scrollHeight + document.querySelector(".details").scrollHeight + document.querySelector(".details__footer").scrollHeight +
      document.querySelector(".service").scrollHeight +
      document.querySelector(".portfolio").scrollHeight +   
      document.querySelector(".team__footer").scrollHeight +
      document.querySelector(".portfolio__footer").scrollHeight +
      document.querySelector(".team").scrollHeight + 
      document.querySelector(".subscribe").scrollHeight + 
      document.querySelector(".price").scrollHeight + 
      document.querySelector(".reviews").scrollHeight + price_container + footer_margin;
           
     $('html,body').animate({scrollTop:height},2000);
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
       
     const footer_margin = parseInt($('.team__footer').css('margin-top'));
         
         
      const height = document.querySelector(".first").scrollHeight + document.querySelector(".about").scrollHeight + document.querySelector(".details").scrollHeight + document.querySelector(".details__footer").scrollHeight +
      document.querySelector(".service").scrollHeight +
      document.querySelector(".portfolio").scrollHeight +   
      document.querySelector(".team__footer").scrollHeight +
      document.querySelector(".portfolio__footer").scrollHeight +
      document.querySelector(".team").scrollHeight +  
      document.querySelector(".price__container").scrollHeight + 
      document.querySelector(".reviews").scrollHeight + footer_margin;                                               

     $('html,body').animate({scrollTop:height},1000);
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
    
        //animations :  'fade translateY(-100%)'
        // 'fade rotateZ(-180deg)'
    
        
        var mixer = mixitup($(".portfolio__works"), {
                animation: {
                    effectsOut: 'fade translateX(100%)',
                    queue: true,
                    duration: 800,
                    easing: 'ease-in-out',
                    animateResizeContainer: false
                    
                    }
                
            });
    
        
  function windowSize() {
  windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
  windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

}
    
//Init Function of init it wherever you like...
windowSize();

// For example, get window size on window resize
$(window).resize(function() {
  windowSize();
  if (windowWidth >550 && windowWidth < 768) {
     mixer.sort('default:desc');
  } else{
      mixer.sort('');
  } 
    
    
    
    
//    if(windowHeight < document.querySelector(".first").scrollHeight){
//        document.querySelector(".burger").style.cssText=`mix-blend-mode: hard-light`;
//        alert("wfwf");
//    }
});
    
    
    if (windowWidth >550 && windowWidth < 768) {
     mixer.sort('default:desc');
  } else{
      mixer.sort('');
  } 
    
    
    
        
      window.onresize = function( event ) {
            if(window.scrollHeight > -1){alert("FFWEf");}
        }
        
        
    
    
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
    
    
     


    
    
    //contact   document.getElementsByTagName("footer").scrollHeight -
    
    $("#contact").click(e =>{
        
    e.preventDefault();
   
    let height = 
        document.querySelector(".first").scrollHeight + 
        document.querySelector(".about").scrollHeight + 
        document.querySelector(".details").scrollHeight +
        document.querySelector(".details__footer").scrollHeight +
        document.querySelector(".service").scrollHeight + document.querySelector(".portfolio").scrollHeight +
        document.querySelector(".portfolio__footer").scrollHeight + document.querySelector(".team").scrollHeight + document.querySelector(".team__footer").scrollHeight +
        document.querySelector(".reviews").scrollHeight +
        document.querySelector(".price").scrollHeight;
    
    $('html,body').animate({scrollTop:height},1000);
        
    });
    
    //form
    
  const body = document.querySelector('body');
  const myForm = document.querySelector('#myForm');
  const sendBtn = document.querySelector('#send');
  const modal = document.querySelector('#modal');
  const modalText = document.querySelector('#modalText');

  sendBtn.addEventListener('click', sendForm);
  modal.addEventListener('click', closePopup);

  function sendForm(e) {
    e.preventDefault();

    if(validateForm(myForm)) {
           console.log('валидация прошла!');

          let data = new FormData();
          data.append("name", myForm.elements.name.value);
          data.append("phone", myForm.elements.phone.value);
          data.append("comment", myForm.elements.comment.value);
          data.append("subject", myForm.elements.subject.value);
          data.append("to", "my@mail.ru");
          const xhr = new XMLHttpRequest();

          xhr.responseType = 'json';
          xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
          xhr.send(data);
          xhr.addEventListener('load', () => {
            modal.classList.add('active');
            body.classList.add('locked');
            if(xhr.response.status === 0) {
              modalText.innerText = xhr.response.message;
            } else {
              modalText.innerText = xhr.response.message;
            }
          })
    }
  }

  function validateForm(form) {
    let valid = true;

    if(!validateField(form.elements.name)) {
      valid = false;
    }

    if(!validateField(form.elements.phone)) {
      valid = false;
    }

    if(!validateField(form.elements.comment)) {
      valid = false;
    }

    return valid;
  }

  function  validateField(field) {
    if(!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;
      return false;
    } else {
      field.nextElementSibling.textContent = '';
      return true;
    }
  }

  function closePopup(e) {
    e.preventDefault();
    modal.classList.remove('active');
    body.classList.remove('locked');
  }

    
    
    //map
    
    
    
    
//    let map;
//
//function initMap() {
//  map = new google.maps.Map(document.getElementById("map"), {
//    center: { lat: -34.397, lng: 150.644 },
//    zoom: 8,
//  });
//}
    
    
    //burger
    
    window.onload=function(){
let burger  = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
}

burger.addEventListener('click' , toggleMenu);
        }
    
    let stick = document.querySelector(".burger");
    
    stick.addEventListener("click", e =>{
        e.preventDefault();
        
        if($(".burger").hasClass("burger--active")){
            
        document.getElementById("line_1").animate([
            
          { transform: 'translate(-50%, -6px) rotate(-45deg)' },
          { transform: 'translate(-50%, -50%) rotate(0deg)' },
          {composite: 'accumulate'}
        ], {duration: 800}) 
        document.getElementById("line_2").animate([
            
          { transform: 'translate(-50%, -50%) rotate(45deg)' },
          { transform: 'translate(-50%, 4px) rotate(0deg)' }
        
        ], {duration: 800}) 
        document.getElementById("line_3").animate([
//          { top: '-100px' },
//          { top: '20px' }
          { left: '200px' },
          { left: '50%' }
        
        ], {duration: 800})
            
        document.querySelector("overlay--active").animate([
            
           { top: '0px' },
           { top: '-50%' }
            
        ],{duration: 1000})    
            
            
        }
    });

    
    //slider
//    $('.team__item').slick({
//        arrows:false,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//});
    
    
    
    /// price hover
    
    let price = document.querySelectorAll('.price__item');
    
    price.forEach(function(element){
        
        element.addEventListener('mouseleave', e => {
            const $this = $(e.currentTarget);
            const ItemToShow_1 = $this.find('.price__title').removeClass("price--active").addClass("price--active");    
            const ItemToShow_2 = $this.find('.price__cost').removeClass("price--active").addClass("price--active");
        })
    })
    
    
    
});//"DOMContentLoaded"























