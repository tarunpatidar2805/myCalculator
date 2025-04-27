
let a=document.getElementById("inputBox");
let b=document.querySelectorAll("button");
let string="";
let arr=Array.from(b);
 arr.forEach(button => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
        a.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            a.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            a.value=string;
        }
        else{
            string+=e.target.innerHTML;
            a.value=string;
        }
    })
    
})