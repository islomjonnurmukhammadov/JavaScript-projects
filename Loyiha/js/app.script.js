let pass=document.getElementById('passopen');
let password = document.getElementById('passwords');
let copy=document.getElementById('copy');
pass.onclick = function(){
    pass.innerHTML='Hide'
    if(password.type=="password"){
        password.type= 'text';
    }else{
        password.type='password'
        pass.innerHTML='Show'
    }
}

copy.onclick=function(){
    if(password.value==''){
        copy.innerHTML='no'
    }else{
        navigator.clipboard.writeText(password.value);
        copy.innerHTML='Copied'
    }
}