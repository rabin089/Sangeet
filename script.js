console.log("Welcome to Sangeet");
//initialize the Variables
let songIndex=0;
let audioElement= new Audio('sarangi.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs=[
    {songname:"Sushant Kc-Sarangi",filePath:"E:\Mini project\Spotify_clone\Sarangi.mp3",coverPath:"cover/1.jpg"},
    {songname:"Sushant Kc-Sarangi",filePath:"Sarangi/1.mp3",coverPath:"cover/1.jpg"},
    {songname:"Sushant Kc-Sarangi",filePath:"Sarangi/1.mp3",coverPath:"cover/1.jpg"},
    {songname:"Sushant Kc-Sarangi",filePath:"Sarangi/1.mp3",coverPath:"cover/1.jpg"},
    {songname:"Sushant Kc-Sarangi",filePath:"Sarangi/1.mp3",coverPath:"cover/1.jpg"},
 ]
// Handle play/pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})
// Listen to Event
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})


