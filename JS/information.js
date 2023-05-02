//OOP Abstraction
function Customer(name,time,price){
    this.name = name;
    this.time = time;
    this.price = price;

    let Insurance = 2000;

    let calculate = function(){
        let sum = price+Insurance;
        console.log("Total: " + sum);
    }
    this.getCustomer = function(){
        console.log("Customer: " + this.name + " Date: " + this.time + " Price: " + this.price);
        calculate();
    }
}

let c1 = new Customer("Oneone","05/03/2023",20000);
let c2 = new Customer("May","05/02/2023",5000);
let c3 = new Customer("Harry","05/01/2023",15000);

//OOP Inheritance
class Car{
    setName(name){
        this.name = name;
        console.log("Car: " +this.name);
    }
}
class Tesla extends Car{
    colers(col){
        this.col = col;
        console.log("Colors: " +this.col);
    }
    price(){
        console.log("Price: 20,000 baht");
    }
}
class Honda extends Car{
    colers(col){
        this.col = col;
        console.log("Colors: " +this.col);
    }
    price(){
        console.log("Price: 5,000 baht");
    }
}
class BMW extends Car{
    colers(col){
        this.col = col;
        console.log("Colors: " +this.col);
    }
    price(){
        console.log("Price: 5,000 baht");
    }
}

let car1 = new Tesla();
let car2 = new Honda();
let car3 = new BMW();

car1.setName("Tesla");
car1.colers("White");
car1.price();
c1.getCustomer();
console.log("--------------------------------")
car2.setName("Honda Civic");
car2.colers("White");
car2.price();
c2.getCustomer();
console.log("--------------------------------")
car3.setName("BMW M8");
car3.colers("Blue");
car3.price();
c3.getCustomer();
console.log("--------------------------------")

