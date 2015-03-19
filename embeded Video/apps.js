/**
 * Created by ICe on 3/10/15.
 */



$(function(){
   $('.fotorama').fotorama({
       width: 1000,
       height: 500,
       arrowsColor: '#3399cc',
       shadows:true,

       thumbwidth: '80',
       thumbheight: '80'



   });



});



$(document).ready(function() {

    $('a.youtube').YouTubePopup({


        autoplay: 1,
        draggable: true,

    });

    //$("button.youtube").YouTubePopup({
    //
    //    idAttribute: 'id'
    //});

    $("img.youtube").YouTubePopup({
        idAttribute: 'id'
    });


});



/*
///above//
 $(document).ready(function() {
 $('.image-link').magnificPopup({type:'image'});
 });

*/