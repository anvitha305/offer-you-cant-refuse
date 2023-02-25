

(function() {
    // ensure script isn't injected if already run as a safeguard
    if (window.hasRun) {
        window.hasRun = true;
        return;
    }
  

// find existing ads in the page
    else{
    adwords = ["ad", "sponsored"]
    classes = [].concat(...[...document.querySelectorAll('*')].map(elt => [...elt.classList]));
    classes = classes.filter(s=>adwords.some(el=>s.toLowerCase().split("-").includes(el)))
    alert(classes)
    }
  }
  )();