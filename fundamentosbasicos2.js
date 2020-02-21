1.
function arr(x){
    for (var i=0; i<x.length; i++){
        if (x[i]>0){
            x[i]= "Big";
        }
    }
    return x;
}
y= arr([-3,-1,2,6,-2]);
console.log (y)

2.
function arr(x){
    var min=0;
    var max=0;
    for (var i=0; i<x.length; i++){
        if (x[i]>max){
            max= x[i];
        }
        if (x[i]<x[i-1]){
            min=x[i];
        }
    }
    console.log (min);
    return max;
}
y= arr([-3,4,8,-4,-1]);
console.log (y)

3.
function arr(x){
    l=[];
    for (var i=0; i<x.length; i++){
        if (x[i]%2==1 || x[i]%2== -1){
            l.push(x[i]);
        }
    }
    console.log (x[(x.length-2)]);
    return l[0]; 
}
y= arr([-1,2,3,4,5,6]);
console.log (y)

4.
function doub(x){
    var l=[];
    var z=0;
    for (var i=0; i<x.length; i++){
        z= x[i]+ x[i];
        l.push(z);
    }
    return l;
}
y= doub([1,3,5]);
console.log (y)

5.
function CNTpositives(x){
    var z=0;
    var t= (x.length-1);
    for (var i=0; i<x.length; i++){
        if (x[i]>0){
            z= z+1;
        }
    }
    x.pop(x[t]);
    x.push (z);
    return x;
}
y= CNTpositives([-1,1,1,1,1]);
console.log(y)

6.
function arr(x){
    var par=0;
    var impar=0;
    for (var i=0;i<x.length;i++){
        if (x[i]%2==1 && x[i+1]%2==1 && x[i+2]%2==1){
            console.log ("¡que imparcial!");
        }
        else {            
            (x[i]%2==0 && x[i+1]%2==0 && x[i+2]%2==0)
            console.log("¡Es para bien!");
        }
    }
    
}
y= arr([1,2,3,4,5])
console.log(y)



7.
function incres(x){
    for (var i=0; i<x.length; i++){
        console.log (x[i]);
        if (x[i]%2==1){
            x[i]= x[i]+ 1;
        }
    }
    return x;
}
y= incres([1,2,3,4,5,6]);
console.log (y)

8.
function long(x){
    var l=[];
    for (var i=0; i<x.length;i++){
        l.push(x[i].length);
    }
    for (var j=1;j<x.length;j++){
        x[j]= l[j-1];
    }
    return x;
}
y= long(["programar","dojo","genial"]);
console.log (y)

9.
function Sumonn(x){
    var l=[];
    for (var i=0; i<x.length; i++){
        l.push(x[i]+7);
    }
    return l;
}
y= Sumonn([2,4,6]);
console.log (y)

10.
function inverso(x){
    for (var i=0; i<x.length; i++){
        [x[i],x[x.length-i-1]]=[x[x.length-i-1],x[i]];
    }
    return x;
}
y=inverso([5,4,3,2,1]);
console.log(y)

11.
function Neg(x){
    for (var i=0; i<x.length; i++){
        if( x[i]>0){
        x[i]= -x[i];
        }
    }
    return x;
}
y= Neg([1,-2,5]);
console.log (y)


12.
function hungry(x){
    var z=0;
    for (var i=0; i<x.length; i++){
        if (x[i]=="comida"){
            z+=1;
            console.log ("yummy");
        }
        if (z==0){
            return console.log ("tengo hambre");
        }
    }
}
y= hungry ([2,2,2,2]);


13.
function change(x){
    for (var i=0; i<x.length/2; i++){
        if (i%2==0){
            [x[i],x[x.length-i-1]]=[x[x.length-i-1],x[i]];
        }
    }
    return x;
}
y= change([1,2,3,4,5]);
console.log(y)

14.
function escala(x,z){
    for (var i=0;i<x.length;i++){
        x[i]=x[i]*z;
    }
    return x;
}
y= escala([1,3,5,7],2);
console.log(y)