let acc=document.getElementsByClassName("accordion");
// give me all elements with calss accordion
let i; 
for(i=0;i<acc.length;i++){
// addEventListener (action , function)
    acc[i].addEventListener("click",function(){
// this function occurs when i click
        this.classList.toggle("active");
// this => return to element that happens the action
// toggle => once true and once false  
// in this code toggle add class active once and remove once
        var panel=this.nextElementSibling;
// next element called sibling
        if(panel.style.maxHeight){
// if element have maxheight remove it
            panel.style.maxHeight=null;
        }
        else{
// if element haven't height add it
// scroll height => على قد المحتوى بتاعك
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    })
}