console.log(hello);                                   
var hello = 'world';                                 
//imprime undefined 
//define hello y asigna el valor world, no imprime porque antes de console log no existia hello

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// imprime magnet porque console log se encuentra dentro de la funcion 

var brendan = 'super cool';
function print(){
    brendan = 'only okay'; 
    console.log(brendan);
}
console.log(brendan);

//imprime solo super cool por se define la variable brendan al inicio
//no imprime only okay porque se dedinio duera de la duncion, y no se invoca a print fuera de la funcion 

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// imprime chiken poque hay un console.log luego de definir y asignar la variable
// imprime half-chicken porue llama a eat() fuera de la funcion, no imprime gone porque luego de asignar el valor no pide console.log


mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); 

// no definido, por lo que no ejecuta nada tira error por que es una funcion expresiva no puede llamar a la funcion antes de definir 

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); 

// undefined
//rock
//r&b
//disco 

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank"; 
    console.log(dojo);
}
console.log(dojo);

// san jose 
// seattle
//burbank 
//san jose 

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//{ name: 'Chicago', students: 65, hiring: true }
// error porque dojo es una constante y dentro de la funcion se quiere asignar un valor distito como seria en un var




