

(function() {
    // ensure script isn't injected if already run as a safeguard
    if (window.hasRun) {
        window.hasRun = true;
        return;
    }
  
    function addMovies(msg){
        reset();
        adblock();
        oycr = Array.from(document.getElementsByClassName("oycrstyling"));
        oycr.forEach(e=>{
            let image = document.createElement("img");
            if (msg === "Gotti"){
            arr=[
                "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti0.png",
                "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti1.png",
                "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti2.png",
                "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti3.png",
                "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti4.png",
                "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti5.png"
            ];
            movieURL = arr[Math.floor(Math.random() * arr.length)];
            }
            else if (msg === "Godfather") {
                arr=[
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god0.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god1.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god2.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god3.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god4.png"
                ];
                movieURL = arr[Math.floor(Math.random() * arr.length)];
            }
            else if (msg === "Morbius"){
                arr=[
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb0.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb1.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb2.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb3.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb4.png"
                ];
                movieURL = arr[Math.floor(Math.random() * arr.length)];
            }
            else if (msg==="Random"){
                arr=[
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god0.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god1.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god2.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god3.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/god4.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti0.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti1.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti2.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti3.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/gotti4.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb0.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb1.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb2.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb3.png",
                    "https://raw.githubusercontent.com/anvitha305/offer-you-cant-refuse/main/morb/morb4.png"
                ];
                movieURL = arr[Math.floor(Math.random() * arr.length)];
            }
            image.setAttribute("src", movieURL);
            image.style="width:100%; object-fit: fill;"
            image.className="movieimage";
            e.appendChild(image)
            }
        );
    }
// find existing ads in the page
    function adblock(){
        adwords = ["ad", "darla", "adContainer","ads","rail", "sponsored"]
        classes = [].concat(...[...document.querySelectorAll('*')].map(elt => [...elt.classList]));

        classes = classes.filter(s=>adwords.some(el=>s.toLowerCase().split("-").join("_").split(".").join("_").split("_").includes(el)))
        classes.forEach(element => {
            Array.from(document.getElementsByClassName(element)).forEach(e=>{
                e.style.border = "5px solid red";
                e.classList.add("oycrstyling");
            });

        });
        ids = document.querySelectorAll('[id]');

        ids = Array.from(ids).map(e=>e.id)
        ids = ids.filter(s=>adwords.some(el=>s.toLowerCase().split("-").join("_").split(".").join("_").split("_").includes(el)))
        ids.forEach(element => {
                            document.getElementById(element).classList.add("oycrstyling");
                        document.getElementById(element).style.border = "5px solid red";
                    });        

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