

	
var table=document.getElementById("bookTable");
var tab_desc1=document.getElementsByClassName('table_desc_box')[0];
var tot_book=tab_desc1.getElementsByTagName('h3');
tot_book[0].innerText=table.rows.length-1;






var i;//here coding for total comment count start//
var rows=table.rows;
var Nreq=0;
for(i=1;i<table.rows.length;++i){

req=rows[i].getElementsByTagName('td')[5];
Nreq=Nreq+Number(req.innerText);


}
var tab_desc2=document.getElementsByClassName('table_desc_box')[4];
var tot_com=tab_desc2.getElementsByTagName('h3')[0];
tot_com.innerText=Nreq;   
                        //here total comment of a single book ended her //


var tsi=document.getElementById("table_search_input");  // tsi means table search input // // her we create a opertion for search book into table
tsi.oninput = function(){
var i;
var table=document.getElementById("bookTable");
var rows=table.rows;
var filter=tsi.value.toUpperCase();
//table.insertBefore(rows[2],rows[1]);
//alert(tsi.value);
var data=0;
for(i=1;i<rows.length;++i){
var cell=rows[i].getElementsByTagName("td")[0];
data=cell.innerText.toUpperCase();

if(data.indexOf(filter) > -1)
rows[i].parentNode.insertBefore(rows[i],rows[1]);


}


}




var re_but=document.getElementById("RefreshButton");

re_but.onclick = function(){

location.reload();


}


