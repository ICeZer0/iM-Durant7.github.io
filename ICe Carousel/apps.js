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
            list: 'PL1DD10E84B9B08A35'
        },
        events:{
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'controls': 0,
            'autohide': 1
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

        addElement();
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


//the $(eslector) will be a button to click
$('.play').click(function(){
    player.playVideo();

   // console.log("first video is: "+ player.getVideoUrl().split("v=")[1]);
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

    player.nextVideo();

    //playNextVideo();
    //player.loadVideoById(nextVid);

    //videoList();

});

$(".rw").click(function(){

    //playPreviousVideo();
    //player.loadVideoById(prevVid);
    player.previousVideo();


});


//function videoList(){
//
//    var playerList = player.getPlaylist();
//
//    //console.log(playerList);
//
//    for(var i=0; i<playerList.length; i++){
//        console.log(playerList[i]);
//
//    }
//
//}

var buttonsDiv = document.getElementById('buttons');

function addElement( ){

        var playerList = player.getPlaylist();

    //console.log(playerList);
//gets the video ID of each video and stores into array
        for(var i=0; i<playerList.length; i++){
            console.log(playerList[i]);

        }


    //trying to forloop div to create divs for the amount of playlist videos

    var counter = 0;
        for(var j = 0; j<playerList.length; j++){

            var div = document.createElement('div');
            var button = document.createElement('button');
            var input = document.createElement('input');

            div.setAttribute("id","jDivs");
            input.setAttribute("id","jDivs");


            //var img = document.createElement('img'); //src="http://img.youtube.com/vi/" +PlayerList[i] + "/0.jpg" class="img-rounded">
            input.type = 'image';
            counter++;
            input.src = 'http://img.youtube.com/vi/' + playerList[j]+ '/0.jpg';



            //img = 'src="http://img.youtube.com/vi/' +playerList[i]+ '/0.jpg" class="img-rounded" ';
            //button.onclick = player.loadVideoById('1blZpyhlRJA');

            button.appendChild(input);
            div.appendChild(button);
            buttonsDiv.appendChild(div);

                //button.push(button);
                //List.appendChild(div);

            var k=0;

            button.onclick = function () {

                player.loadVideoById(playerList[k++]);
                console.log("thsi is " +playerList[k++]);
            };


        }





}

////////////////////////////////////////////////





////image clicks. need to
//$("#image1").click(function(){
//    player.loadVideoById('M7lc1UVf-VE');
//});
//
//$("#image2").click(function(){
//    player.loadVideoById('1blZpyhlRJA');
//});
//$("#image3").click(function(){
//    player.loadVideoById('kr5PoOpsnjg');
//});
//$("#image4").click(function(){
//    player.loadVideoById('55QUQHm2B5A');
//});
//
//
////image clicks. need to
//$(".slideVid").click(function(){
//    player.loadVideoById('M7lc1UVf-VE');
//});
//
//$("#image2").click(function(){
//    player.loadVideoById('1blZpyhlRJA');
//});
//$("#image3").click(function(){
//    player.loadVideoById('kr5PoOpsnjg');
//});
//$("#image4").click(function(){
//    player.loadVideoById('55QUQHm2B5A');
//});

//each video url in order
// tesla/jay/spider/apple/starwars/skydiving/tests/counterstrike/s6
//var videoArray = [
//    '_nQDU7HOStc',
//    'odThhIA2gUM',
//    'DlM2CWNTQ84',
//    'kr5PoOpsnjg',
//    'S3PPXX9fa5U',
//    '55QUQHm2B5A',
//    'fHfHSq7PVDU',
//    'k9pCiHf61GY',
//    'KuaOGF8tPfA'
//];
//var nextVid;
//var prevVid;


//plays next video in array
//function playNextVideo() {
//    //what video is active   player.getVideoUrl():String
//    // Returns the YouTube.com URL for the currently loaded/playing video.
//    //var url = player.getVideoUrl();
//    console.log(player.getPlaylist());
//
//    console.log("next vid : ");
//    //method chaining////
//    var quickID = player.getVideoUrl().split("v=")[1];
//    console.log(quickID);
//
//}
    //for (i = 0; i <= videoArray.length; i++) {
    //
    //    if (quickID == videoArray[videoArray.length-1]) {
    //        nextVid = videoArray[0];
    //    }
    //    else if (quickID == videoArray[i]) {
    //        nextVid = videoArray[i + 1];
    //    }
    //
    //
    //}


// take a URL string and get a piece of it.
//log way refer to method chaing
//        var splitURL = url.split("=");
//        var ID = splitURL[1];
//        console.log(ID);




////for rw button to go through videos
//function playPreviousVideo(){
//
//    var ID = player.getVideoUrl().split("=")[1];
//
//    for(i=0;i<videoArray.length;i++){
//
//        if(ID == videoArray[0]){
//            prevVid = videoArray[videoArray.length-1];
//        }
//        else if(ID == videoArray[i]){
//            prevVid = videoArray[i-1];
//        }
//    }
//
//
//}




/////

