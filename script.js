console.log("Welcome to Sangeet");
//initialize the Variables
let songIndex=0;
let audioElement= new Audio('Songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');

let songs=[
    {songname:"Sushant Kc-Sarangi",filePath:"./Songs/1.mp3",coverPath:"cover/1.jpg"},
    {songname:"Sushant Kc-Sarangi",filePath:"Sarangi/2.mp3",coverPath:"cover/2.jpg"},
    {songname:"Sushant Kc-Sarangi",filePath:"Sarangi/3.mp3",coverPath:"cover/3.jpg"},
    {songname:"Sushant Kc-Sarangi",filePath:"Sarangi/4.mp3",coverPath:"cover/4.jpg"},
    {songname:"Sushant Kc-Sarangi",filePath:"Sarangi/5.mp3",coverPath:"cover/5.jpg"},
 ]
// Handle play/pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');//document update model 
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})
// Listen to Event
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    console.log(audioElement.currentTime)
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})


