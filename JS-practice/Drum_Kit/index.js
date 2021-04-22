
document.addEventListener("keypress", (event) => {

  var music = new Audio("sounds/"+event.key+".mp3");
    music.play();

    var activeButton = document.querySelector("." + event.key);
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");}, 50);
});
