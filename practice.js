// task-1   let/const 
const oldPrice = 10000;
let mobilePrice = 12000;

// task-2    template string,dynamic
const laptop = { name: 'Dell', price: 30000, model: 'dell-032', ram: '4GB' };

const myMobile = `My mobile price is ${mobilePrice}. Old price is ${oldPrice}. 
My laptop name is ${laptop.name}. Its price ${laptop.price}. Ram ${laptop.ram}`;
// console.log(myMobile);

// task-3.1     arrow function
const division = x => x / 5;
const result1 = division(1000);
// console.log(result1);

// task-3.2  
const addMul = (x, y) => (x + 2) * (y + 2);
const result2 = addMul(5, 6);
// console.log(result2);

// task-3.3
const multiply = (x, y, z) => x * y * z;
const result3 = multiply(2, 3, 4);
// console.log(result3);

// task-3.4
const multilineAdd = (x, y) => {
    const num1 = x + 2;
    const num2 = y + 2;
    const multiply = num1 * num2;
    return multiply;
}
const result4 = multilineAdd(5, 7);
// console.log(result4);

// task -5
const numbers = [10, 5, 8, 9, 200];
const result5 = numbers.map(x => x * 5);
// console.log(result5);

//task -6
const id = [121, 334, 890, 43, 25, 70, 98];
const result6 = id.filter(x => x % 2 == 1);
// console.log(result6);

// task-7
const shop = [
    { name: 'Cake', price: 500 },
    { name: 'Rice', price: 5000, wight: '100 kg' },
    { name: 'IceCream', price: 300 },
    { name: 'Dal', price: 9000 },
    { name: 'Oil', price: 5000 },
]
const fiveThousand = shop.find(x => x.price == 5000);
// console.log(fiveThousand);

// task-8
const shopObject = { name: 'Cake', price: 500 };
const { price } = shopObject;
// console.log(price);

// task-9
const ages = [20, 13, 50, 89, 78];
const [one, two, three] = ages;
// console.log(three);

// task-10
function addition(x, y, z = 7) {
    const sum = x + y + z;
    return sum;
}
const add = addition(30, 20, 50);
// console.log(add);

// task-11
const employee = {
    app: { name: 'Arman', age: 20, job: 'developer' },
    web: {
        name: ['arif', 'arman', 'asif'],
        age: 23,
        tech: {
            first: 'js',
            second: ['html', 'css', 'bootstrap']
        }
    }

};
// task-12
const getName = employee?.app?.tech?.third;
// console.log(getName);