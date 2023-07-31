console.log("Welcome to Sangeet");
//initialize the Variables
let songIndex=0;
let audioElement= new Audio('Songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Sushant Kc-Sarangi",filePath:"Songs/1.mp3",coverPath:"Covers/1.jpg"},
    {songName:"K garu tmro hunalai",filePath:"Songs/2.mp3",coverPath:"Covers/2.jpg"},
    {songName:"Yabesh thapa-Aakhale",filePath:"Songs/3.mp3",coverPath:"Covers/3.jpg"},
    {songName:"Naganya Maya",filePath:"Songs/4.mp3",coverPath:"Covers/4.jpg"},
    {songName:"Sajjan raj-Dhairya",filePath:"Songs/5.mp3",coverPath:"Covers/5.jpg"},
 ]
 songItem.forEach((element,i)=>{
    // console.log(element,i)
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

 })
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
const makeAllPlay =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= 'songs/1.mp3'
        audioElement.currentTime=0;
        audioElement.play();

    })
})


