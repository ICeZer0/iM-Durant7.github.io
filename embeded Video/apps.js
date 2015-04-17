/**
 * Created by ICe on 3/10/15.
 */

var fotorama;

$(function(){


   $('.fotorama').fotorama({
       width: 1000,
       height: 500,
       arrowsColor: '#3399cc',
       shadows:true,

       thumbwidth: '80',
       thumbheight: '80',
       stopautoplayontouch: false,
       startAutoplay: videoLength


   });


    //var fotorama_div= document.getElementById("fotorama");
    //console.log(fotorama_div);
    //console.log(fotorama_div.class);

});





/*


 <div class="fotorama__video-close"></div>



 if (!that.autoplay) {
 that.autoplay = true;
 triggerEvent('startautoplay');
 }


 if (!opts.autoplay || pausedAutoplayFLAG) {
 if (that.autoplay) {
 that.autoplay = false;
 triggerEvent('stopautoplay');
 }

 return;
 }


*/