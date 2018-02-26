// zadatak 1 Employees an managerss

function Employee(name, surname, specialization, salaru) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.salary = salaru;
}

Employee.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

// zadatak 2 Applications

function WebApp(name, url, technologies, licence) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = 0;
}

function MobileApp(name, platforms, licence) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = 0;
}


// WebApp methods
WebApp.prototype.getData = function () {
    console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars);
}
WebApp.prototype.reactBased = function () {
    if (this.technologies.indexOf('React') == -1) {
        return false;
    } else {
        return true;
    }
}

// MobileApp methods
MobileApp.prototype.getData = function () {
    console.log(this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars);
}
MobileApp.prototype.forAndroid = function () {
    if (this.platforms.indexOf('Android') == -1) {
        return false;
    } else {
        return true;
    }
}


var web1 = new WebApp('app1', 'url1', ['tech1', 'tech2'], 'licence1');
var web2 = new WebApp('app2', 'url2', ['tech1', 'React'], 'licence2');

var mob1 = new MobileApp("mobApp1", ["IoS", "Android"], "CC");
var mob2 = new MobileApp("mobApp2", ["IoS"], "licence2");



var sharedMethods = {
    isCCLicence: function () {
        if (this.licence == 'CC') {
            return true;
        } else {
            return false;
        }
    },
    like: function () {
        this.stars++;
    },
    showStars: function () {
        console.log(this.stars);
    }

};

WebApp.prototype.__proto__ = sharedMethods;
MobileApp.prototype.__proto__ = sharedMethods;


mob1.like();
mob1.like();
mob1.like();
mob1.showStars();
console.log(mob2.forAndroid());





