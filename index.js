const container = document.querySelector("#container");
const gridLayout = document.querySelector("#gridLayout");

gridLayout.addEventListener("click",(e)=>{
    userColumn = parseInt(prompt("enter number of columns"))
    if(userColumn <= 100 && userColumn >= 0){
    columnCount(userColumn)
    }else{alert("enter number 1-100")}
})
function columnCount(num){
    let numberColumn = userColumn * userColumn;
    let w_h = (560 / userColumn)-2
    console.log(numberColumn,w_h)
    for(let i=0;i<numberColumn;i++){
        const divs = document.createElement("div");
        divs.setAttribute("class","box")
        container.appendChild(divs);
        divs.style.width = `${w_h}px`;
        divs.style.height = `${w_h}px`;
        
        divs.addEventListener("mousemove",(e)=>{
            divs.setAttribute("class","hover")
            let rand1 = Math.floor(Math.random()*255);
            let rand2 = Math.floor(Math.random()*255);
            let rand3 = Math.floor(Math.random()*255);
            divs.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`
    })
}
}
