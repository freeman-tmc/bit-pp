
var breacfast = {

    name: "kajgana",
    ingrediants: ["egs", "chees", "milk", "baconn"],
    energy: 510,
    printInstractions: function () {
        console.log("sheeking  together egs, chees, milk and beconn, and fry in hot pan")
    },
    JSCompilant: function () {
        if (breacfast.energy > 500) {
            return true;
        } else {
            return false;
        }
    }

};

console.log(breacfast.printInstractions());

var lunch = {
    name: 'pljeska',
    ingredients: ['meso', 'hleb', 'so', 'biber'],
    energy: 300,
    printInstruction: function () {
        console.log('sve pomesati i peci')
    },
    JSCompilant: function() {
        if (lunch.energy > 500) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(lunch.JSCompilant());

