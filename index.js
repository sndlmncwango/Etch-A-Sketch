const container = document.querySelector("#container")

for(let i=0;i<2000;i++){
    const divs = document.createElement("div");
    divs.setAttribute("class","box")
    container.appendChild(divs);
    divs.addEventListener("mousemove",(e)=>{
        divs.setAttribute("class","hover")
    })
}
