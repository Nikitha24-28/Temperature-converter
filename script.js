let cel=document.querySelector("#cel");
let fah=document.querySelector("#fah");
let kel=document.querySelector("#kel");
let convert=document.querySelector("#button");
let reset=document.querySelector("#reset");

convert.addEventListener("click",()=>{
    if(cel.value=="" && fah.value=="" && kel.value==""){
        alert("Enter a value");
    }
    else if((cel.value!=""&&fah.value!=""&&kel.value=="")||(cel.value==""&&fah.value!=""&&kel.value!="")||(cel.value!=""&&fah.value==""&&kel.value!="")||(cel.value!=""&&fah.value!=""&&kel.value!="")){
        alert("Enter only one value");
        cel.value="";
        kel.value="";
        fah.value="";
    }
    else{
        if(cel.value!=""&&fah.value==""&&kel.value==""){
            fah.value=(cel.value*(9/5))+32;
            kel.value=cel.value*1+273.15;
        }
        else if(cel.value==""&&fah.value!=""&&kel.value==""){
            cel.value=(fah.value-32)*(5/9);
            kel.value=cel.value*1+273.15;
        }
        else if(cel.value==""&&fah.value==""&&kel.value!=""){
            cel.value=kel.value-273.15;
            fah.value=(cel.value*(9/5))+32;
        }
    }
});
reset.addEventListener("click",()=>{
    cel.value="";
    kel.value="";
    fah.value="";
});