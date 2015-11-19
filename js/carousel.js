function lazyLoadingImg(el) {
    var targetContainer = $("#img-viewer");
    $("img", targetContainer).remove();
    var id = $(el).attr("href").substring(1);
    var url = $(el).children("img").attr("data-big-img");
    if(url == undefined){
        url = $(el).children("img").attr("src");
    }
    var alt = $(el).children("img").attr("alt");
    var img = '<img alt="' + alt + '" src="' + url + '" style="max-width: '+($(window).width()-10)+'px; max-height: '+($(window).height()-40)+'px;">';
    targetContainer.children("a").attr("id", id);
    targetContainer.children(".popup").children(".feedbackf").append(img);
}

function lazyLoadingClient(el) {
    var targetContainer = $("#img-viewer");
    $("img", targetContainer).remove();
    var id = $(el).attr("href").substring(1);
    var url = $(el).attr("data-big-img");
    var img = '<img alt="Благодарственное письмо" src="' + url + '">';
    targetContainer.children("a").attr("id", id);
    targetContainer.children(".popup").children(".feedbackf").append(img);
}

$(function(){
    $("#slides").slides({
        slide: {
            browserWindow: true
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
$(document).ready(function() {
    var phone_box = $("input.nameinp[name='phone']");
    phone_box.mask("+7 (999) 999-99-99", {
        completed: function () {
        }
    });

    $('.s_submit').click(function() {
        filled = 1;
        $(this).parent().children('.sinp').each(function() {
            if(this.value.replace(/^\s+|\s+$/g, '')=='' || this.value=='Ваше имя' || this.value=='Ваше имя' || this.value=='Ваш телефон') {$(this).effect('highlight');filled=0;}
        });
        var q=$(this).parent().children('.email');
        if(!validateEmail(q.val())&&(q.val()!='')) {q.effect('highlight');filled=0;}
        if(filled==1) {
            q=$(this).parent().children('.fhid').val();
            $(this).parent().submit();
            $('#dialogform').dialog('close');
            $('#dialogform2').dialog('close');
        }
    });
});


function initializeMap() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(51.658518, 39.19594689999997),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.658518, 39.19594689999997),
        map: map
    });

}
function toggleMap(el) {
    if ($(el).html() == "Показать на карте") {
        $(el).html("Скрыть карту");
        $("#map").show();
        initializeMap();
    } else {
        $(el).html("Показать на карте");
        $("#map").hide();
    }

}

// --- carousel ---

$(".carousel-button-right").live('click',function(){
   right_carusel_click();
});

$(".carousel-button-left").live('click',function(){
   left_carusel();
});
function left_carusel(){
   var block_width = $('.carousel-block').width() + 0;
   $(".carousel-items .carousel-block").eq(-1).clone().prependTo(".carousel-items");
   $(".carousel-items").css({"left":"-"+block_width+"px"});
   $(".carousel-items").animate({left: "0px"}, 400);
   $(".carousel-items .carousel-block").eq(-1).remove();
}
setInterval(function right_carusel(){
   var block_width = $('.carousel-block').width() + 0;
   $(".carousel-items").animate({left: "-"+ block_width +"px"}, 400);
   setTimeout(function () {
      $(".carousel-items .carousel-block").eq(0).clone().appendTo(".carousel-items");
      $(".carousel-items .carousel-block").eq(0).remove();
      $(".carousel-items").css({"left":"0px"});
   }, 600);
},7000);
function right_carusel_click(){
   var block_width = $('.carousel-block').width() + 0;
   $(".carousel-items").animate({left: "-"+ block_width +"px"}, 400);
   setTimeout(function () {
      $(".carousel-items .carousel-block").eq(0).clone().appendTo(".carousel-items");
      $(".carousel-items .carousel-block").eq(0).remove();
      $(".carousel-items").css({"left":"0px"});
   }, 600);
}



$(".carousel-button-right2").live('click',function(){
   right_carusel_click2();
});

$(".carousel-button-left2").live('click',function(){
   left_carusel2();
});
function left_carusel2(){
   var block_width = $('.carousel-block2').width() + 10;
   $(".carousel-items2 .carousel-block2").eq(-1).clone().prependTo(".carousel-items2");
   $(".carousel-items2").css({"left":"-"+block_width+"px"});
   $(".carousel-items2").animate({left: "0px"}, 200);
   $(".carousel-items2 .carousel-block2").eq(-1).remove();
}
setInterval(function right_carusel2(){
   var block_width = $('.carousel-block2').width() + 10;
   $(".carousel-items2").animate({left: "-"+ block_width +"px"}, 200);
   setTimeout(function () {
      $(".carousel-items2 .carousel-block2").eq(0).clone().appendTo(".carousel-items2");
      $(".carousel-items2 .carousel-block2").eq(0).remove();
      $(".carousel-items2").css({"left":"0px"});
   }, 300);
}, 3000);
function right_carusel_click2(){
   var block_width = $('.carousel-block2').width() + 10;
   $(".carousel-items2").animate({left: "-"+ block_width +"px"}, 200);
   setTimeout(function () {
      $(".carousel-items2 .carousel-block2").eq(0).clone().appendTo(".carousel-items2");
      $(".carousel-items2 .carousel-block2").eq(0).remove();
      $(".carousel-items2").css({"left":"0px"});
   }, 300);
}



$(".carousel-button-right3").live('click',function(){
   right_carusel_click3();
});

$(".carousel-button-left3").live('click',function(){
   left_carusel3();
});
function left_carusel3(){
   var block_width = $('.carousel-block3').width() + 10;
   $(".carousel-items3 .carousel-block3").eq(-1).clone().prependTo(".carousel-items3");
   $(".carousel-items3").css({"left":"-"+block_width+"px"});
   $(".carousel-items3").animate({left: "0px"}, 200);
   $(".carousel-items3 .carousel-block3").eq(-1).remove();
}
setInterval(function right_carusel3(){
   var block_width = $('.carousel-block3').width() + 1;
   $(".carousel-items3").animate({left: "-"+ block_width +"px"}, 1200);
   setTimeout(function () {
      $(".carousel-items3 .carousel-block3").eq(0).clone().appendTo(".carousel-items3");
      $(".carousel-items3 .carousel-block3").eq(0).remove();
      $(".carousel-items3").css({"left":"0px"});
   }, 1800);
}, 1850);
function right_carusel_click3(){
   var block_width = $('.carousel-block3').width() + 10;
   $(".carousel-items3").animate({left: "-"+ block_width +"px"}, 200);
   setTimeout(function () {
      $(".carousel-items3 .carousel-block3").eq(0).clone().appendTo(".carousel-items3");
      $(".carousel-items3 .carousel-block3").eq(0).remove();
      $(".carousel-items3").css({"left":"0px"});
   }, 300);
}