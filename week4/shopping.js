'use strict';

(function () {
    console.log("Hi");
    // constructor function for product object
    function Product(name, price, expirationDate) {
        this.id = (function () {
            var productId = Math.floor(90000 * Math.random() + 10000);
            return productId;
        })();
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.getInfo = function () {
            var info = this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase() + this.id;
            var info1 = this.name;
            var info2 = this.price;
            return (info + "," + info1 + "," + info2);

        }
    }
// creating two product objects
    var coffee = new Product("Grand kafa", 102.45, new Date(2018, 6, 15));
    var sugar = new Product("secer", 50, new Date(2018, 7, 16));

// construction function for shopping bag
    function ShoppingBag() {
        // starting with empty shopping bag
        this.listOfProducts = [];
        this.averagePrice = function () {
            var sum = 0;
            var average;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            average = sum / this.listOfProducts.length;
            return average;
        }
        // finding most expensiv - method
        this.getMostExpensive = function () {
            var max = 0;
            var maxIndex;
            //finding index of most expensive product in list of product array
            for (var i = 0; i < this.listOfProducts.length; i++) {
                if (max < this.listOfProducts[i].price) {
                    max = this.listOfProducts[i].price
                    maxIndex = i;
                }

            } return this.listOfProducts[maxIndex].getInfo();
        }
        
        this.addProduct = function (product) {
            //checking expiration date and adding to list of product array if date is valid 
            if (new Date() < product.expirationDate) {
                this.listOfProducts.push(product)
            } else {
                console.log(product.name + ' Date expired ' + product.expirationDate)
            }
        }
        this.totalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return sum;
        }
    }

    // payment card constructor

    function PaymentCard(balance, status, expirationDate) {
        this.balance = balance;
        this.status = status;
        this.expirationDate = expirationDate;
    }

    // creating shoping one object
    var shoppingOne = new ShoppingBag();
    // creating card1 object
    var card1 = new PaymentCard(100, 'active', 2020);
    //adding products to list of products
    shoppingOne.addProduct(coffee);
    shoppingOne.addProduct(sugar);
    // writing total price
    console.log(shoppingOne.totalPrice());
    // checking avalible amount of money, comparing it to total price and return messsage
    function checkoutAndBuy(shopping, card) {
        if (shopping.totalPrice() >= card.balance) {
            var diff = shopping.totalPrice() - card.balance;
            console.log('Not enough money. Missing ' + diff.toFixed(2) + ' RSD!');
        } else {
            console.log('Thank you, come again!')
        }
    }
    //calling function for objects
    checkoutAndBuy(shoppingOne, card1);
})();