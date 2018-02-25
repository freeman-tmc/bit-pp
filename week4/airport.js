"use strict";

(function () {
    console.log("Hi");

    ////////////// constructor functions

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        };
    }

  
    function Seat(number, category) {
        this.number = number
        this.category = category || "e";
        this.getData = function () {
            return this.number + ", " + this.category;
        };
    }

    
    function Passenger(name, surname, number, category) {
        this.person = new Person(name, surname);
        this.seat = new Seat(number, category);
        this.getData = function () {
            if (this.seat.category == 'e') {
                this.seat.category = 'economy';
            } else {
                this.seat.category = 'business';
            }
            var passengerData = '\t\t' + this.seat.getData() + ", " + this.person.getData() + '\n';;
            return passengerData;
        };
    }

    
    function Flight(relation, date) {

        // converts relation to acronym
        this.relation = (function (string) {
            var arr = string.split(' - ');
            // returns first and last consonant of the string
            function acronym(str) {
                var acrPart = '';
                for (var i = 0; i < str.length; i++) {
                    switch (str[i]) {
                        case 'a':
                        case 'e':
                        case 'i':
                        case 'o':
                        case 'u':
                            break;
                        default:
                            acrPart += str[i];
                    }
                }
                return acrPart[0] + acrPart[acrPart.length - 1].toUpperCase();
            }
            var acronym = acronym(arr[0]) + ' - ' + acronym(arr[1]);
            return acronym;
        })(relation);

        this.date = (function(date) {
            var flightDate = new Date(date);
            return flightDate.getDate() + '.' + (flightDate.getMonth() + 1) + '.' + flightDate.getFullYear();
        })(date);
        this.listOfPassengers = [];
        this.listOfTakenSeats = [];
        this.businessClass = 0;
        this.getData = function () {
            var flightData = '';
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                flightData += this.listOfPassengers[i].getData();
                if (this.listOfPassengers[i].seat.category == 'business') {
                    this.businessClass++;
                }
            }
            return this.date + " " + this.relation + ', ' + this.businessClass + " bussines class passangers\n" + flightData;
        };
        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
            this.listOfTakenSeats.push(passenger.seat);
        };
    }
    

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        };
        this.getData = function () {
            var airportData = '';
            var numOfPassengers = 0;
            var flightData = '';
            var totalBussinecClass = 0;
            for (var i = 0; i < this.listOfFlights.length; i++) {
                numOfPassengers += this.listOfFlights[i].listOfPassengers.length;
                flightData += '\t' + this.listOfFlights[i].getData();
                totalBussinecClass += this.listOfFlights[i].businessClass;
            }
            airportData = 'Airport: ' + this.name + ', total passengers: ' + numOfPassengers + ', ' + totalBussinecClass + ' business class passengers\n' + flightData;
            return airportData;
        };
    }


    function createFlight(relation, date) {
        var newFlight = new Flight(relation, date);
        return newFlight;
    }


    

    // callback for createPassenger function
    function assignSeatNumber(num, flight) {
        // checks if all seats are taken
        if (flight.listOfTakenSeats.length > 100) {
            console.log('No more empty seats!');
        } else {
            // if seat number is not entered generates unique random number 
            if (num == undefined) {
                do {
                    num = Math.floor(Math.random() * 90 + 10);
                } while (flight.listOfTakenSeats.indexOf(num) != -1);
                flight.listOfTakenSeats.push(num);
                return num;
            } else {
                // if number is entered, checks if it is unique
                if (flight.listOfTakenSeats.indexOf(num) == -1) {
                    flight.listOfTakenSeats.push(num);
                    return num;
                } else {
                    console.log('Seat already taken!')
                }
            }
        }
    }



    // callback for createPassenger function
    function checkForName(name, surname, number, flight) {
        // returns true if name is on the flight list and reassigns seat number
        for (var i = 0; i < flight.listOfPassengers.length; i++) {
            if (flight.listOfPassengers[i].person.getData() == name + ' ' + surname) {
                flight.listOfPassengers[i].seat.number = number;
                return true;
            }
        }
        // returns false if name is not on the flight list
        return false;
    }


    function createPassenger(name, surname, number, category, checkSeat, checkName, flight) {
        // assigns seat number
        number = checkSeat(number, flight);

        // checks if name is on the flight list, changes seat number if true, creates new passenger if false
        if (checkName(name, surname, number, flight)) {
            console.log('Seat number changed for ' + name + ' ' + surname + '!');
        } else {
            var newPassenger = new Passenger(name, surname, number, category);
            flight.addPassenger(newPassenger);
        }
    }


    var airport = new Airport();

    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b", assignSeatNumber, checkForName, flight1);
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b", assignSeatNumber, checkForName, flight1);
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14, undefined, assignSeatNumber, checkForName, flight2);
    var passenger4 = createPassenger("Tyrion", "Lannister", undefined, undefined, assignSeatNumber, checkForName, flight1);
    var passenger6 = createPassenger("Ned", "Stark", undefined, "e", assignSeatNumber, checkForName, flight2);
    var passenger6 = createPassenger("Sansa", "Stark", 30, "b", assignSeatNumber, checkForName, flight2);
    var passenger6 = createPassenger("Arya", "Stark", undefined, undefined, assignSeatNumber, checkForName, flight1);


    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());

})();




