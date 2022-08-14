



// EJERCICIOS MAP






// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
let powItSelf = n => n**n;

let resultNums = numbers.map(powItSelf);
console.log(resultNums);




// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let resultado = foodList.map(function (food) {
    if (food === 'Pizza') {
        return `Como soy de Italia, amo comer ${food}`;
    }else if (food === 'Ramen') {
        return `Como soy de Japón, amo comer ${food}`;
    }else if (food === 'Paella') {
        return `Como soy de Valencia, amo comer ${food}`;
    }else if (food === "Entrecot") {
        return `Aunque no como carne, el ${food} es sabroso`;
    }
});
console.log(resultado);



// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];


let resultado2 = staff.map(function (member) {
return `${member.name} es ${member.role} y le gusta ${member.hobbies[0]} y ${member.hobbies[1]}`;
})
console.log(resultado2);











// EJERCICIOS FILTER




// Crea un segundo array con que devuelva los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let impares = numbers2.filter(function (num) {
    if((num%2!==0)) {
        return num;
    };
});
console.log(impares);







// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }
  ];


let veggiePlates = 

foodList2
    .filter(function (plate) {
        return plate.isVeggie == true;
    })
    .map(function (plate) {
        if (plate.name == 'Tempeh') {
            return `Qué rico ${plate.name} me voy a comer`;
        }else{
            return `Qué rica ${plate.name} me voy a comer`;
        };
    });
console.log(veggiePlates);







// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

let moreThan300 = 

inventory
    .filter(function(element) {
        return element.price > 300;
    })
    .map(function(element) {
        return element.name;
    });
console.log(moreThan300);








// EJERCICIOS REDUCE



// Dado el siguiente array, obten la multiplicación de todos los elementos del array

const numeros = [39, 2, 4, 25, 62];

let multiplicado = numeros.reduce(function(anterior,actual){
    return anterior*actual;
});
console.log(multiplicado);








// Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
    'Me',
    'llamo',
    'Nacho',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

  let frase = sentenceElements.reduce(function(ant,act) {
    return ant+' '+act;
  });
  console.log(frase);









  // Obtener el monto total de los elementos que pertenecen a catergory "code"


  const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  let monto =
  
  books
    .filter(function(element) {
        return element.category == 'code';
    })
    .map(function(element) {
        return element.price;
    })
    .reduce(function(ant,act) {
        return ant+act;
    });
  console.log(monto);