/**
 * Created by Julius Alvarado on 11/28/2016.
 */

// ja = julius alvarado, only add "ja" object to global namespace.
var ja = (function () {
    //create a closure so "this" isn't scoped to the Window.
    var ja = {};
    ja.fibonacciMessage = "Fibonacci Series";
    ja.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    ja.jFibonacci = function () {
        var fibonacci = [];
        fibonacci[1] = 1; fibonacci[2] = 1; //initial vals
        var fSize = 10; //fibonacci size

        for (var i = 3; i < fSize; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }

        fibonacci[0] = this.fibonacciMessage;
        return fibonacci;
    };

    ja.isEven = function(x){ return (x % 2 == 0); };
    ja.evenNumbers = ja.numbers.filter(ja.isEven);

    //-----------------------------------
    //return the api for the "ja" object.
    //-----------------------------------
    return {
        fibonacci: ja.jFibonacci().join(" + "),
        message: this.fibonacciMessage+" from 'ja' object"
    }
})();



document.getElementById("array1").innerHTML = ja.fibonacci;
document.getElementById("linked-list1").innerHTML == list;
//\\