

(function() {
    // ensure script isn't injected if already run as a safeguard
    if (window.hasRun) {
        window.hasRun = true;
        return;
    }
  
    function addMovies(msg){
        adblock();
        oycr = Array.from(document.getElementsByClassName("oycrstyling"));
        oycr.forEach(e=>{
            let image = document.createElement("img");
            movieURL="https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti0.png";
            image.setAttribute("src", movieURL);
            image.style="width:100%; object-fit: fill;"
            image.className="movieimage";
            e.appendChild(image)
            }
        );
    }
// find existing ads in the page
    function adblock(){
        adwords = ["ad", "adContainer","ads","rail", "sponsored"]
        classes = [].concat(...[...document.querySelectorAll('*')].map(elt => [...elt.classList]));
        classes = classes.filter(s=>adwords.some(el=>s.toLowerCase().split("-").join("_").split(".").join("_").split("_").includes(el)))
        classes.forEach(element => {
            Array.from(document.getElementsByClassName(element)).forEach(e=>{
                e.style.border = "5px solid red";
                e.classList.add("oycrstyling");
            });

        });
        reset()

    }
    function reset(){
        let existing = document.getElementsByClassName("movieimage");
        for (let b of existing) {
            b.remove();
        }
        let e = document.querySelectorAll("oycrstyling");
        for (let i of e){
            e.style.border = "";
        }
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "addmovies") {
          addMovies(message.msg);
        } else if (message.command === "reset") {
          reset();
        }
      });
}
  
  )();