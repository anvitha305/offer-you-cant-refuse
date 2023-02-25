
  // find existing ads in the page
    function adblock(){
        adwords = ["ad", "sponsored"]
        classes = [].concat(...[...document.querySelectorAll('*')].map(elt => [...elt.classList]));
        classes = classes.filter(s=>adwords.some(el=>s.toLowerCase().split("-").includes(el)))
        classes.forEach(element => {
            document.getElementsByClassName(element).forEach(e=>e.style.border = "5px solid red");
        });
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "adblock") {
          adblock();
        }
      });
