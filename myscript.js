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
    const displayvalue = document.getElementById('yourvalue');
    displayvalue.innerText = Fname.value+","+Lname.value+","+Bday.value+","+LangSelect.value;
}

const Inname = document.getElementById('Inname');
const Insurname = document.getElementById('Insurname');
const InBdate = document.getElementById('InBdate');
const SelectL = document.getElementById('SelectL');

function changeName(){
    if(Fname.value == ""){
    Inname.innerText="Insert Name";
    }else{
        Inname.innerText="";
    };
}
function changeSurname(){
    if(Lname.value == ""){
        Insurname.innerText="Insert Surname";
    }else{
        Insurname.innerText="";
    };
}
function changeDate(){
    if(Bday.value == ""){
        InBdate.innerText="Insert Birth date";
    }else{
        InBdate.innerText="";
    };
}
function changeOption(){
    if(LangSelect.value == ""){
        SelectL.innerText="Select Language";
    }else{
        SelectL.innerText="";
    };
}




