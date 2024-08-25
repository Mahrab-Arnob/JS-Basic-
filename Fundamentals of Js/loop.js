console.log("I am a video on loops!");
// for


 
 
let a=1;
for (let I = 0; I < 10; I++) {
    const element = (a+I);
    console.log(element);
    
}
// for_in
let object = {
    "name":"Arnob" ,
    "Age":"24"

}

for (const key in object) 
     {
        const element = object[key];
        console.log(key,element);
        
    }
// for_of
    for (const c of "Arnob") {
        console.log(c);
    }
// while
let b =2;
let i=0;
while(i<11) {
    c= b+i;
    console.log(c);
    i++;
}    
// do while
do {
 c = a+i;
 console.log(c);   
}
 while (i<11);

