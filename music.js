const music = document.querySelector('audio');
const play = document.querySelector('.play');
const img = document.querySelector('img');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');
const artist = document.querySelector('.artist')
const songName = document.querySelector('.song-name');
const publish = document.getElementsByClassName('publish_date');
const songs = [
    {
        name : 'mc-stan1',
        artist : 'MC STAN',
        song : 'BITCH',
        publish : 22 - 10- 2022,
    },
    {
        name : 'mc-stan2',
        artist : 'MC STAN',
        song : 'SANA BAN',
        publish : 22 - 10- 2022,
    },
    {
        name : 'mc-stan3',
        artist : 'MC STAN',
        song : 'SNAKE',
        publish : 22 - 10- 2022,
    }
    ,  
    {
        name : 'mc-stan4',
        artist : 'MC STAN',
        song : 'ONE DAY UH GONA PAY',
        publish : 22 - 10- 2022,
    }
    ,    {
        name : 'mc-stan5',
        artist : 'MC STAN',
        song : 'KAL HAI MERA SHOW',
        publish : 22 - 10- 2022,
    }
    ,    {
        name : 'mc-stan6',
        artist : 'MC STAN',
        song : 'INSAANIYAT',
        publish : 22 - 10- 2022,
    }
    ,    {
        name : 'mc-stan7',
        artist : 'MC STAN',
        song : 'INSAAN',
        publish : 22 - 10- 2022,
    }
    ,    {
        name : 'mc-stan8',
        artist : 'MC STAN',
        song : 'HOW TO HATE',
        publish : 22 - 10- 2022,
    }
    ,    {
        name : 'mc-stan9',
        artist : 'MC STAN',
        song : 'GENDER',
        publish : 22 - 10- 2022,
    }
    ,    {
        name : 'mc-stan10',
        artist : 'MC STAN',
        song : 'FUCK LOVE',
        publish : 22 - 10- 2022,
    }



]

let isPlaying = true;

const songPlay = ()=>{
    const replaceBtn = play.innerHTML = "<i class='bx bx-pause'></i>";
    isPlaying = false;
    music.play();
    play.classList.remove(this.replaceBtn);
}
const songPause = ()=>{
    const replaceBtn2 = play.innerHTML = "<i class='bx bx-play'></i>";
    isPlaying = true;
    music.pause();
    play.classList.remove(this.replaceBtn2);
}

play.addEventListener('click', function(){
    // if(isPlaying){
    //     songPause();
    // }
    // else{
    //     songPlay();
    // }

    isPlaying ? songPlay() : songPause();
})

// For Song
const loadSong = (songs)=> {
    artist.textContent = songs.artist;
    songName.textContent = songs.song;
    music.src = "music/"+ songs.name + ".mp3";
    img.src = "img/" + songs.name + ".webp";
}
// loadSong(songs[0]);
songsIndex = 0;
const nextSong = ()=>{
    songsIndex = (songsIndex + 1) % songs.length;
    loadSong(songs[songsIndex]);
    songPlay();
}
const prevSong = ()=>{
    songsIndex = (songsIndex -1 + songs.length) % songs.length;
    loadSong(songs[songsIndex]);
    songPlay();

}
rightBtn.addEventListener('click', nextSong);
leftBtn.addEventListener('click', prevSong);