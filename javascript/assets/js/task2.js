var namer = prompt("\n \n Enter your Name:"); 
var bangla = prompt("\n \n Input Bangla Subject Marks"); 
var english = prompt("\n \n Input English Subject Marks"); 
var math = prompt("\n \n Input Math Subject Marks"); 

bangla = parseInt(bangla);
english = parseInt(english);
math = parseInt(math);

document.getElementById("name").innerHTML = namer;
document.getElementById("inbangla").innerHTML = bangla;
document.getElementById("inenglish").innerHTML = english;
document.getElementById("inmath").innerHTML = math;


//Bangla Grade
if(bangla == ''){
    document.getElementById("rebangla").innerHTML = "Type Your Marks"; 
}else if( bangla <= 100 && bangla >=80 ){
    document.getElementById("rebangla").innerHTML = "A+";    
}else if( bangla < 80 && bangla >=70 ){
    document.getElementById("rebangla").innerHTML = "A";    
}else if( bangla < 70 && bangla >=60 ){
    document.getElementById("rebangla").innerHTML = "A-";    
}else if( bangla < 60 && bangla >=50 ){
    document.getElementById("rebangla").innerHTML = "B";    
}else if( bangla < 50 && bangla >=40 ){
    document.getElementById("rebangla").innerHTML = "C";    
}else if( bangla < 40 && bangla >=33 ){
    document.getElementById("rebangla").innerHTML = "D";    
}else if( bangla < 33 && bangla >=0 ){
    document.getElementById("rebangla").innerHTML = "Fail";    
}else{
    document.getElementById("rebangla").innerHTML = "Invalid Number";    
}


//English Grade
if( english <= 100 && english >=80 ){
    document.getElementById("reenglish").innerHTML = "A+";    
}else if( english < 80 && english >=70 ){
    document.getElementById("reenglish").innerHTML = "A";    
}else if( english < 70 && english >=60 ){
    document.getElementById("reenglish").innerHTML = "A-";    
}else if( english < 60 && english >=50 ){
    document.getElementById("reenglish").innerHTML = "B";    
}else if( english < 50 && english >=40 ){
    document.getElementById("reenglish").innerHTML = "C";    
}else if( english < 40 && english >=33 ){
    document.getElementById("reenglish").innerHTML = "D";    
}else if( english < 33 && english >=0 ){
    document.getElementById("reenglish").innerHTML = "Fail";    
}else{
    document.getElementById("reenglish").innerHTML = "Invalid Number";    
}

//Math Grade
if( math <= 100 && math >=80 ){
    document.getElementById("remath").innerHTML = "A+";    
}else if( math < 80 && math >=70 ){
    document.getElementById("remath").innerHTML = "A";    
}else if( math < 70 && math >=60 ){
    document.getElementById("remath").innerHTML = "A-";    
}else if( math < 60 && math >=50 ){
    document.getElementById("remath").innerHTML = "B";    
}else if( math < 50 && math >=40 ){
    document.getElementById("remath").innerHTML = "C";    
}else if( math < 40 && math >=33 ){
    document.getElementById("remath").innerHTML = "D";    
}else if( math < 33 && math >=0 ){
    document.getElementById("remath").innerHTML = "Fail";    
}else{
    document.getElementById("remath").innerHTML = "Invalid Number";    
}