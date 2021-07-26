var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "<img src=\'../stop.png\' width=\'150px\' height=\'150px\'>";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "<img src=\'../play.png\' width=\'150px\' height=\'150px\'>";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "<img src=\'../play.png\' width=\'150px\' height=\'150px\'>";
}

