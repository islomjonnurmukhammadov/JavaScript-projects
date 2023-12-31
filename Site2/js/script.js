let nameId=document.getElementById("ThemeName");
let cursorId=document.getElementById("cursorId");


cursorId.onclick=function(){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        nameId.innerHTML="Dark";
    }else{
        nameId.innerHTML="Light";
    }
}