let focus1 = document.getElementById('InputName');

function Myfocus1(){
    focus1.style.background ="yellow";
}

function Myblur1(){
    focus1.style.background = "white";
}

let focus2 = document.getElementById('InputSurname');

function Myfocus2(){
    focus2.style.background ="yellow";
}

function Myblur2(){
    focus2.style.background = "white";
}

const Fname = document.getElementById('InputName');
const Lname = document.getElementById('InputSurname');
const Bday = document.getElementById('Mydate');
const LangSelect = document.getElementById('Myselect');

function Myonclick(){
    console.log("ชื่อจริง :",Fname.value);
    console.log("นาสสกุล :",Lname.value);
    console.log("วันเกิด :",Bday.value);
    console.log("ภาษาที่คูณเลือก :",LangSelect.value);
}
