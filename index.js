$( document ).ready(function() {
    var songs = ['allstar.mp3', 'emospidey.mp3', 'gearsofwar.mp3','numberone.mp3','sadsong.mp3','sandstorm.mp3','spidey2.mp3'];
    var rand = songs[Math.floor(Math.random() * songs.length)];
    $('#audioPlayer').attr('src', rand);
});