function opencart(){
    var q;
    var total=0;
    document.getElementById("cart").style.display = "block";
    document.getElementById("main_page").style.opacity=0.5;

    // q=document.querySelector("inp#f1").value;
    // console.dir(document.getElementById("f1c"));
    
    for (let i=1;i<7;i++){
        q=document.getElementById("fr"+i).value;
        document.getElementById("f"+i+"q").textContent=q*1;
        document.getElementById("f"+i+"c").textContent=q*120 ;
        total=total+(q*120);
    }
    for (let i=1;i<7;i++){
        q=document.getElementById("vg"+i).value;
        document.getElementById("v"+i+"q").textContent=q*1;
        document.getElementById("v"+i+"c").textContent=q*120 ;
        total=total+(q*120);
    }
    for (let i=1;i<7;i++){
        q=document.getElementById("da"+i).value;
        document.getElementById("d"+i+"q").textContent=q*1;
        document.getElementById("d"+i+"c").textContent=q*120 ;
        total=total+(q*120);
    }
    for (let i=1;i<7;i++){
        q=document.getElementById("pa"+i).value;
        document.getElementById("p"+i+"q").textContent=q*1;
        document.getElementById("p"+i+"c").textContent=q*120 ;
        total=total+(q*120);
    }
    document.getElementById("total_value").textContent=total;

}
function closecart(){
    document.getElementById("cart").style.display = "none";
    document.getElementById("main_page").style.opacity=1;

}
function checkout(){
    document.getElementById("cart").style.display = "none";
    document.getElementById("main_page").style.opacity=1;
    alert("order placed");
}