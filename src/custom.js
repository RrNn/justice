(function(){
  let elms = document.getElementsByClassName("row-1-info");
  console.log(elms.length);
  (function infoHover(){
    for(let i = 0; i < elms.length; i++){

      elms[i].onmouseenter = ()=>{
        
        // elms[i].classList.add('row-1-info-hovering')
      }

      elms[i].onmouseleave = ()=>{
        
        // elms[i].classList.remove('row-1-info-hovering')
      }
    }
  })()
})()