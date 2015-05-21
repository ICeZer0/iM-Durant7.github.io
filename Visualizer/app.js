/**
 * Created by ICe on 2/2/15.
 */

var context;
function initContext() {
    try {
        context = new webkitAudioContext();
        alert("context created"); //test
    }
    catch(e) {
        alert('Sorry, your browser does not support the Web Audio API.');
    }
}

//external sounds loaded into buffer
var myAudioBuffer = null;

//requests to 'GET" of the audio file
var url = "Kevin Gates - Crazy [Produced by B Real].mp3";
function loadSound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';//audio loaded as binary data

//decoding the audio
    request.onload = function() {
        alert("sound loaded"); //test            call back function asynchronously
        context.decodeAudioData(request.response, function(buffer) {
            myAudioBuffer = buffer;
            alert("sound decoded"); //test
        });
    }
    request.send(); //audio stored in audio buffer ready
}

var source = null;
function playSound(myAudioBuffer) {
    source = context.createBufferSource();
    source.buffer = myAudioBuffer;
    source.connect(context.destination);
    source.start();
}
//half sound no working correctly!!!!!!!
var source = null;
 //volume control
function playSoundHalf(myAudioBuffer) {
    source = context.createBufferSource();
    source.buffer = myAudioBuffer;

    var gainNode = context.createGainNode();
    source.connect(gainNode);
    gainNode.connect(context.destination);
    gainNode.gain.value = 0.5;

    source.start();
    //source.noteOn(0); //see note in Step 6 text
}


function stopSound() {
    if (source) {
        source.stop();
        //source.noteOff(0); //see note in Step 6 text
    }
}