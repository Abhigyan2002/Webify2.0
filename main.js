let btn=document.getElementById("add");
let data=document.getElementById("data");
let list=document.getElementById("list_container");

btn.addEventListener('click',function(){
    var paragraph=document.createElement("p");
    paragraph.classList.add("p_style");
    paragraph.textContent=data.value;
    list.appendChild(paragraph);
    data.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener("dblclick",function(){
        list.removeChild(paragraph);
    })
})