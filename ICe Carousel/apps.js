/**
 * Created by ICe on 4/22/15.
 */

//use youtube api to create video
//video should have a playlist...carousel??
//maybe ign type
//youtube should be disabled so that user cant go to youtube
//use pause and play buttons to allow user to still take control of a video

//loads youtube api script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//create iframe and youtube player
//playlist http://stackoverflow.com/questions/9313216/example-youtube-playlist-code
var player;
function onYouTubeIframeAPIReady(){

    player = new YT.Player('player', {
        height: '750',
        width: '1280',
        //playlistId: 'PL1DD10E84B9B08A35'
        //videoId: '_nQDU7HOStc', //player.loadVideoById(videoId:String, startSeconds:Number, suggestedQuality:String):Void
        playerVars: {
            listType:'playlist',
            list: 'PL1DD10E84B9B08A35',
            'autoplay': 1,
            'controls': 0
        },
        events:{
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange

        }

    });
}

//API will call this function when player is ready
function onPlayerReady(event){

    event.target.playVideo();

    //loading playlist into player using playerVArs instead above
    //event.target.loadPlaylist({
    //    list: "UUPW9TMt0le6orPKdDwLR93w",
    //    index: 1,
    //    startSeconds: 10,
    //    suggestedQuality: "small"
    //});
}

//API calls when player state changes
//playing video = state=1
var done= false;
function onPlayerStateChange(event){
    console.log(event);
    if (event.data == YT.PlayerState.PLAYING && !done){
        //setTimeout(stopVideo, 6000);
        done=true;
    }
    //checkign that the data is passed
    if(event.data == 1){
        var playing = event.data;
        console.log("is playing " + playing);

    }
    if(event.data == 2){
        //trying to set data to an object to pass into a button
        var paused = event.data;
        console.log("is paused " + paused);

    }
}

function stopVideo(){
    player.stopVideo();
}

//the $(eslector) will be a button to click
$('.play').click(function(){
    player.playVideo();
    //alert("The paragraph was clicked. PLAY");
});

$('.pause').click(function(){
    player.pauseVideo();
    //alert("The paragraph was clicked. PAUSE");
});

$(".stop").click(function(){
    player.stopVideo();
    //alert("The paragraph was clicked. STOP");
});

//ff click plays next video
//found the active video now.....
$(".ff").click(function(){

    //playNextVideo();
    //player.loadVideoById(nextVid);
    player.nextVideo();




});

$(".rw").click(function(){
    //playPreviousVideo();
    //player.loadVideoById(prevVid);
    player.previousVideo();
});
//each video url in order
// tesla/jay/spider/apple/starwars/skydiving/tests/counterstrike/s6
var videoArray = [
    '_nQDU7HOStc',
    'odThhIA2gUM',
    'DlM2CWNTQ84',
    'kr5PoOpsnjg',
    'S3PPXX9fa5U',
    '55QUQHm2B5A',
    'fHfHSq7PVDU',
    'k9pCiHf61GY',
    'KuaOGF8tPfA'
];
var nextVid;
var prevVid;





////plays next video in array
//function playNextVideo() {
//    //what video is active   player.getVideoUrl():String
//    // Returns the YouTube.com URL for the currently loaded/playing video.
//    var url = player.getVideoUrl();
//
//    //method chaining////
//    var quickID = player.getVideoUrl().split("v=")[1];
//    console.log(quickID);
//
//    for (i = 0; i <= videoArray.length; i++) {
//
//        if (quickID == videoArray[videoArray.length-1]) {
//            nextVid = videoArray[0];
//        }
//        else if (quickID == videoArray[i]) {
//            nextVid = videoArray[i + 1];
//        }
//
//
//    }
//
//
//
//}


// take a URL string and get a piece of it.
//log way refer to method chaing
//        var splitURL = url.split("=");
//        var ID = splitURL[1];
//        console.log(ID);



//for rw button to go through videos
function playPreviousVideo(){

    var ID = player.getVideoUrl().split("=")[1];

    for(i=0;i<videoArray.length;i++){

        if(ID == videoArray[0]){
            prevVid = videoArray[videoArray.length-1];
        }
        else if(ID == videoArray[i]){
            prevVid = videoArray[i-1];
        }
    }


}


//image clicks. need to
$("#image1").click(function(){
   player.loadVideoById('M7lc1UVf-VE');
});

$("#image2").click(function(){
    player.loadVideoById('1blZpyhlRJA');
});
$("#image3").click(function(){
    player.loadVideoById('kr5PoOpsnjg');
});
$("#image4").click(function(){
    player.loadVideoById('55QUQHm2B5A');
});


//image clicks. need to
$(".slideVid").click(function(){
    player.loadVideoById('M7lc1UVf-VE');
});

$("#image2").click(function(){
    player.loadVideoById('1blZpyhlRJA');
});
$("#image3").click(function(){
    player.loadVideoById('kr5PoOpsnjg');
});
$("#image4").click(function(){
    player.loadVideoById('55QUQHm2B5A');
});

/////

