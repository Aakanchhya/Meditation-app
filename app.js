const app = () =>{
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    //Sounds
    const sounds = document.querySelectorAll(".sound-picker button");

    //Time Display
    const timeDisplay = document.querySelector(".time-display");

    //Get the lenfth of the outline
    window.onload = function () {
        const outlineLength = outline.getTotalLength();
        console.log(outlineLength);
    }

}

app();