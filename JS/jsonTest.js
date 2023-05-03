const concult = [];

//OOP Abstraction
class Customer {
    // สร้าง attribute เพื่อเก็บค่า name,date
    constructor(name, date) {
        this.name = name; 
        this.date = date; 
    }
    // สร้าง method เพื่อนำค่า concult มาแสดงผลใน HTML โดยมีการจัดหน้ากระดาษให้อยู่ใน class table-menu-concult tbody
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

// สร้าง class Car เพื่อเก็บค่าข้อมูลของ Car
class Car {
    // สร้าง attribute เพื่อเก็บค่า name,color,price
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    // สร้าง method และนำค่าของ customer มาเก็บค่าใน cars และทำการ push ค่าเข้าไปใน Array concult
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

// สร้าง function Submit เพื่อให้มีการตอบสนองช่วงที่เรากรอกข้อมูล เพื่อให้นำค่ากรอกมาเก็บไว้ใน attribute ต่างๆ
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
