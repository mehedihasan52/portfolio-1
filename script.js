$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navber').addClass("sticky");
      }else{
        $('.navber').removeClass("sticky");
      }
    });

    // toggle menu/navber script
    $('.menu-btn').click(function(){
      $('.navber .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
});
      //typing animation Script
      var typed = new Typed(".typing", {
        strings: ["Student", "Programmer",  "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
      strings: ["Student", "Programmer",  "Developer", "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
     