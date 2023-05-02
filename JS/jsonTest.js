const concult = [];

//OOP Abstraction
class Customer {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }
    showBooking() {
        const bookingtable = document.querySelector(
            ".table-menu-concult tbody"
        );

        bookingtable.innerHTML = "";

        concult.forEach((item) => {
            const concultItem = document.createElement("tr");
            concultItem.innerHTML = `
            <th>${item.name}</th>
            <th>${item.car}</th>
            <th>${item.color}</th>
            <th>${item.date}</th>
            <th>${item.price}</th>
            `;

            bookingtable.appendChild(concultItem);
        });
    }
}

class Car {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    booking(customer) {
        const cars = {
            car: this.name,
            color: this.color,
            price: this.price,
            name: customer.name,
            date: customer.date,
        };
        concult.push(cars);

        customer.showBooking();
    }
}

function Submitted(event) {
    event.preventDefault();
    const car = new Car(
        document.getElementById("car").value,
        document.getElementById("color").value,
        document.getElementById("price").value
    );
    const customer = new Customer(
        document.getElementById("name").value,
        document.getElementById("date").value
    );

    car.booking(customer);

    document.getElementById("form").reset();
}

const form = document.getElementById("form");
form.addEventListener("submit", Submitted);
