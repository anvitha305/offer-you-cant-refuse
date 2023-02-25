
function listenForClicks() {
    let b = document.getElementById("toggle");
    b.addEventListener("click", (e=>{
        if (b.innerText==="adblock on"){
            b.innerText= "adblock off";
        }
        else {
            b.innerText = "adblock on";
        }

    }
    ));
}
function reportExecuteScriptError(error) {
    console.error(`Failed to execute Offer You Can't Refuse content script: ${error.message}`);
 }

  
browser.tabs.executeScript({file: "/content_scripts/OYCR.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);