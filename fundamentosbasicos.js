1.
function Array(l){
    
    var x=[]
    for (var y=1;y<=l;y++){
    x.push (y);
  }
    return x;
}
y = Array(255);
console.log(y);


2.
function printUpTo(x) {
    var sum=0;
    for(var i=2;i<=x;i+=2){

        sum=sum+i
    }
    return sum;
  }
y=printUpTo(1000)
console.log(y)


3.
function printUpTo(x) {
    var sum=0;
    for (var i=0;i<=x;i++){
        if( i % 2 !=0 ){
           sum=sum+i 
        }
    }
    return sum;
  }
y=printUpTo(5000)
console.log(y)


4.
function suma(x) {
    var sum=0
    for (var i=0;i<x.length;i++){
        sum+=x[i];
    }
    return sum;
}
y=suma([1,2,5])
console.log(y)


5.
function ret(x) {
    var sum=0;
    for (var i=0;i<x.length;i++){
        sum=(x[i]);
    }
    return sum;
}
y=ret([-3,3,5,7])
console.log(y)


6.
function suma(x) {
    var sum=0
    for (var i=0;i<x.length;i++){
        sum+=x[i];
    }
    return sum;
}

function prom(x) {
    c=suma(x)
    return c/x.length
}
y=suma([1,3,5,7,20])
y=prom([1,3,5,7,20])
console.log(y)


7.
function Array(l){
    
    var x=[];
    for (var y=1;y<=l;y+=2){
    x.push (y);
    }
    return x;
}
y = Array(50);
console.log(y);


8.
function arr(x,y) {
    var l=0;
    for (var i=0;i<x.length;i++){
        if (x[i]>y){
            l++;
        }
    }
    return l;
}
y= arr([1,4,6,8,10,14],4)
console.log(y)

9.
function smithy(x) {
    for (var i=0; i<x.length; i++) {
        x[i]= x[i]* x[i];
    }
    return x;
 }

y=  smithy([2,5,9,10,-3])
console.log (y)


10.
function arrayNeg(x) {
    for (var i=0; i<x.length; i++){
        if(x[i]<0) {
            x[i]=0;
        }
    }
    return x;
}
y=arrayNeg([1,2,-8,-5,-3,5,6]);
console.log(y)

11.
function change(x){
    var min= x[0];
    var max= x[0];
    var avg= x[0];
    for (var i=1; i<x.length; i++) {
        if (min>x[i]){
            min= x[i];
        }
        if (max< x[i]){
            max= x[i];
        }
        avg= avg+ x[i];
    }
    avg = avg/ x.length;
    return [max, min ,avg]

}
y= change([1,5,10,-2]);
console.log(y) 


12.
function int(x) {
    i= x[0];
    x[0]= x[x.length-1];
    x[x.length-1]=i;
    return x;
}
y= int([1,3,11,-3]);
console.log(y)


13.
function string(x) {
    
    for (var i=0;i<x.length;i++){
        if (x[i]< 0){
            x[i]="Dojo";
        }
    }
    return x;
}
y= string([-1,-2,3]);
console.log(y)