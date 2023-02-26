
const hidePage = `.oycrstyling > :not(.movieimage) {
    display: none;
  }`;

function listenForClicks(){
    document.addEventListener("load", e=>{

        browser.tabs.insertCSS({code: hidePage}).then(() => {
            browser.tabs.sendMessage(tabs[0].id, {
              command: "addmovies",
              msg: "random"
            });
          });
    })
    document.addEventListener("click", (e) => {

        function adhide(tabs) {
          browser.tabs.insertCSS({code: hidePage}).then(() => {
            browser.tabs.sendMessage(tabs[0].id, {
              command: "addmovies",
              msg: "random"
            });
          });
        }
        function morb(tabs) {
            browser.tabs.insertCSS({code: hidePage}).then(() => {
              browser.tabs.sendMessage(tabs[0].id, {
                command: "addmovies",
                msg: "morb"
              });
            });
          }
          function gotti(tabs) {
            browser.tabs.insertCSS({code: hidePage}).then(() => {
              browser.tabs.sendMessage(tabs[0].id, {
                command: "addmovies",
                msg: "gotti"
              });
            });
          }
          function godfa(tabs) {
            browser.tabs.insertCSS({code: hidePage}).then(() => {
              browser.tabs.sendMessage(tabs[0].id, {
                command: "addmovies",
                msg: "godfa"
              });
            });
          }
    
        function reset(tabs) {
          browser.tabs.removeCSS({code: hidePage}).then(() => {
            browser.tabs.sendMessage(tabs[0].id, {
              command: "reset"
            });
          });
        }
    
        /**
         * Just log the error to the console.
         */
        function reportError(error) {
          console.error(`Could not moviefy: ${error}`);
        }
    
        /**
         * Get the active tab,
         * then call "beastify()" or "reset()" as appropriate.
         */
        if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
          // Ignore when click is not on a button within <div id="popup-content">.
          return;
        } 
        if (e.target.type === "reset") {
          browser.tabs.query({active: true, currentWindow: true})
            .then(reset)
            .catch(reportError);
        } else if (e.target.type ==="morbi"){
            browser.tabs.query({active: true, currentWindow: true})
            .then(morb)
            .catch(reportError);
        }
        else if (e.target.type ==="godfa"){
            browser.tabs.query({active: true, currentWindow: true})
            .then(godfa)
            .catch(reportError);
        }
        else if (e.target.type ==="gotti"){
            browser.tabs.query({active: true, currentWindow: true})
            .then(gotti)
            .catch(reportError);
        }
        else{
          browser.tabs.query({active: true, currentWindow: true})
            .then(adhide)
            .catch(reportError);
        }
      })    
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute oycr content script: ${error.message}`);
  }
  
  /**
   * When the popup loads, inject a content script into the active tab,
   * and add a click handler.
   * If we couldn't inject the script, handle the error.
   */
  browser.tabs.executeScript({file: "/content_scripts/OYCR.js"})
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
  