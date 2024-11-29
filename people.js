const names = require("./names");

const passioni = require("./hobbies");

function persona() {
    const user = names.fullName("Daniel", "Ferraiuolo")
    return {
        fullName: user.firstName + " " + user.lastName,
        hobbies: passioni.preferenze("calcio", "ballo", "serie TV").hobbies,
    };
}
console.log(persona());