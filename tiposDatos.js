//Social Media Profile

// Username Profile

const usarname = "TITI69";
const fullName = "Jorge Suárez";
const age = 20;
const isStudent = true;


// Ubication

const address = {
    street : '123 calle homero',
    city : 'Springfield',
    state : 'Oregon',
    country : 'USA',
    zipCode : 12345
};

// Hobbies

const Hobbies = ['jugar videojuegos', 'ir al gimnasio', 'programar'];

//Generating Text Bio

const bio = `Hola, yo soy ${fullName}.
Actualmente tengo ${age} años de edad.
Mi lugar de residencia es ${address.street}, ${address.city}.
Algunas cosas que me encantan hacer en mi día a día son:
${Hobbies[0]}, ${Hobbies[1]} y ${Hobbies[2]}`

console.log(bio);