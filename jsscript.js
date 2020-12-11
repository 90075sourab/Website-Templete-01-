var desc=true;


function sicon_change(){

var icon =document.getElementById('search_icon');




if(desc == true){

icon.style.backgroundImage="url('..')";
icon.style.padding='5px 16.5px';
icon.style.width='50px';
icon.style.height='50px';
icon.style.margin='10px';
icon.style.borderRadius='150px';
icon.style.border='1px solid #444';
icon.innerText='x';
desc=false;
return(0);

}
else if(desc == false) {

icon.style.backgroundImage="url('searchicon.png')";
icon.style.padding='5px 25px';
icon.style.width='70px';
icon.style.height='65px';
icon.style.margin='3px 5px';
icon.style.borderRadius='0px';
icon.style.border='none';
icon.innerHTML='';
desc= true;
return 0;


}



}


