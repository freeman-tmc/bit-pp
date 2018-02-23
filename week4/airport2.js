"use strict";

(function () {
    console.log("Hi");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }
    /////////////////////////////////////////////////
    function Seat(number, category) {
        this.number = number 
        this.category = category || "e";
        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }
    }
    ///////////////////////////////////////////////////////
    function Passenger(name, surname, number, category) {
        this.person = new Person(name, surname);
        this.seat = new Seat(number, category);
        this.getData = function () {
            var passengerData = '\t\t' + this.seat.getData() + ", " + this.person.getData() + '\n';;
            return passengerData;
        }
    }
    ///////////////////////////////////////////////////
    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.getData = function () {
            var flightData = '';
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                flightData +=  this.listOfPassengers[i].getData();
                
            }
            return this.date + " " + this.relation + "\n" + flightData;
        }
        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger)
        }
    }
    ///////////////////////////////////////////////////
    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }
        this.getData = function () {
            var airportData = '';
            var numOfPassengers = 0;
            var flightData = '';
            for (var i = 0; i < this.listOfFlights.length; i++) {
                numOfPassengers += this.listOfFlights[i].listOfPassengers.length;
                flightData += '\t' + this.listOfFlights[i].getData();
            }
            airportData = 'Airport: ' + this.name + ', total passengers: ' + numOfPassengers + '\n' + flightData;
            return airportData;
        }
    }





    function createFlight(relation, date) {
        var newFlight = new Flight(relation, date);
        return newFlight;
    }


    ///////////////////////////////////////////////////////////////

    var takenSeatNumbers = [];

    function assignSeatNumber(num) {
        if(takenSeatNumbers.length > 100) {
            console.log('No more empty seats!');
        } else {
            if(num == undefined) {
                do {
                num = Math.floor(Math.random() * 90 + 10); 
                } while (takenSeatNumbers.indexOf(num) != -1);
                takenSeatNumbers.push(num);
                return num;
            } else {
                if(takenSeatNumbers.indexOf(num) == -1) {
                    takenSeatNumbers.push(num);
                    return num;
                } else {
                    console.log('Seat already taken!')
                }
            }
            console.log('done');
        }
    }

    console.log(assignSeatNumber(5));


    //////////////////////////////////////////////////////////////////////
    
    function createPassenger(name, surname, number, category, checkFunc) {
        number = checkFunc(number);
        var newPassenger = new Passenger(name, surname, number, category);
        return newPassenger;
    }
    /////////////////////////////////////////////////////////////


    var airport = new Airport();

    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b", assignSeatNumber);
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b", assignSeatNumber);
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14, undefined ,assignSeatNumber);
    var passenger4 = createPassenger("Tyrion", "Lannister", undefined, undefined, assignSeatNumber);

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());





})();


