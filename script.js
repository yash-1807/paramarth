const options = document.querySelectorAll(".wrapper label");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", ()=>{
    for (let j = 0; j < options.length; j++) {
      if(options[j].classList.contains("selected")){
        options[j].classList.remove("selected");
      }
    }

    options[i].classList.add("selected");
    for (let k = 0; k < options.length; k++) {
      options[k].classList.add("selectall");
    }

    let forVal = options[i].getAttribute("for");
    let selectInput = document.querySelector("#"+forVal);
    let getAtt = selectInput.getAttribute("type");
    if(getAtt == "checkbox"){
      selectInput.setAttribute("type", "radio");
    }else if(selectInput.checked == true){
      options[i].classList.remove("selected");
      selectInput.setAttribute("type", "checkbox");
    }

    let array = [];
    for (let l = 0; l < options.length; l++) {
      if(options[l].classList.contains("selected")){
        array.push(l);
      }
    }
    if(array.length == 0){
      for (let m = 0; m < options.length; m++) {
        options[m].removeAttribute("class");
      }
    }
  });
}




const options2 = document.querySelectorAll(".wrapper2 label");
for (let i = 0; i < options2.length; i++) {
  options2[i].addEventListener("click", ()=>{
    for (let j = 0; j < options2.length; j++) {
      if(options2[j].classList.contains("selected")){
        options2[j].classList.remove("selected");
      }
    }

    options2[i].classList.add("selected");
    for (let k = 0; k < options2.length; k++) {
      options2[k].classList.add("selectall");
    }

    let forVal = options2[i].getAttribute("for");
    let selectInput = document.querySelector("#"+forVal);
    let getAtt = selectInput.getAttribute("type");
    if(getAtt == "checkbox"){
      selectInput.setAttribute("type", "radio");
    }else if(selectInput.checked == true){
      options2[i].classList.remove("selected");
      selectInput.setAttribute("type", "checkbox");
    }

    let array = [];
    for (let l = 0; l < options2.length; l++) {
      if(options2[l].classList.contains("selected")){
        array.push(l);
      }
    }
    if(array.length == 0){
      for (let m = 0; m < options2.length; m++) {
        options2[m].removeAttribute("class");
      }
    }
  });
}



const options3 = document.querySelectorAll(".wrapper3 label");
for (let i = 0; i < options3.length; i++) {
  options3[i].addEventListener("click", ()=>{
    for (let j = 0; j < options3.length; j++) {
      if(options3[j].classList.contains("selected")){
        options3[j].classList.remove("selected");
      }
    }

    options3[i].classList.add("selected");
    for (let k = 0; k < options3.length; k++) {
      options3[k].classList.add("selectall");
    }

    let forVal = options3[i].getAttribute("for");
    let selectInput = document.querySelector("#"+forVal);
    let getAtt = selectInput.getAttribute("type");
    if(getAtt == "checkbox"){
      selectInput.setAttribute("type", "radio");
    }else if(selectInput.checked == true){
      options3[i].classList.remove("selected");
      selectInput.setAttribute("type", "checkbox");
    }

    let array = [];
    for (let l = 0; l < options3.length; l++) {
      if(options3[l].classList.contains("selected")){
        array.push(l);
      }
    }
    if(array.length == 0){
      for (let m = 0; m < options3.length; m++) {
        options3[m].removeAttribute("class");
      }
    }
  });
}