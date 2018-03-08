class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonData() {
        console.log(`Name: ${this.name}
        Surname name: ${this.surname}`)
    }
}

class Programmer extends Person {

    constructor(name, surname, ...languages) {
        super(name,surname);
        this.languages = languages;
    }

    printProgrammerData() {
        super.printPersonData();
    
        console.log(`Languages: ${this.languages.join()}.`);
    }

    learnedNewLanguage(...newLanguage) {
        this.languages.push(...newLanguage);
    }
}

let me = new Person('first', 'last');
me.printPersonData();

let ja = new Programmer('second', 'third', 'js', 'c', 'ruby');

ja.printProgrammerData();
ja.learnedNewLanguage('c++');

ja.learnedNewLanguage('python', 'c');
ja.printProgrammerData();
console.log(ja.languages)
