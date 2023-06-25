// 1) Создайте класс ShoppingCart, который имеет свойства items и totalPrice, а также методы addItem и removeItem. Метод addItem должен добавлять товар в корзину и обновлять общую цену, а метод removeItem должен удалять товар из корзины и обновлять общую цену. Оба метода должны выдавать ошибку, если переданный аргумент не является допустимым объектом со свойствами name и price.
class ShoppingCart{
    constructor(items, totalPrice){
        this.items = [items];
        this.totalPrice = totalPrice;
    }
    addItem(newitem, newPrice){
        try{
        if(typeof newitem !== "string" || typeof newPrice !== "number" ){
            throw new Error("Typeof Error")
        }else{
            this.items.push(newitem);
            this.totalPrice = this.totalPrice+newPrice;

            
        }
    }catch(e){
        console.log(e.message);
    }
    }
    removeItem(deletItem, deletePrice){
        try{
            if(typeof deletItem !== "string" || typeof deletePrice !== "number" ){
                throw new Error("Typeof Error")
            }else{
        for(let i = 0; i<this.items.length; i++){
            if(this.items[i]===deletItem){
                this.items.splice(i,1);
                this.totalPrice = this.totalPrice-deletePrice;
       }
    } }}catch (e){
        console.log(e.message);
    }
    }
}

const korzina = new ShoppingCart("book",200);
korzina.addItem("car", 200);
korzina.removeItem("book", 100);
console.log(korzina);
//-------------------------------------------------------
// 3)Создайте класс Circle со свойствами radius и diameter. Добавьте методы getter и setter для обоих свойств, которые обновляют другое свойство соответствующим образом. Например, если обновляется свойство radius, то свойство diameter также должно обновляться по формуле diameter = radius * 2, и наоборот. При создании экземпляра указываем только радиус.

class Circle{
    constructor(radius,diametr){
        this.radius = radius;
        this.diametr = diametr;
    }
    
    set newRadius(newRadius){
        this.radius =newRadius;
        this.diametr = this.radius*2;
       
        
    
        }
    get newRadius(){
       return this.radius
    }

    set newDiametr(newDiametr){
        
        this.diametr = newDiametr;
        this.radius =this.diametr/2;
    
        }
    get newDiametr(){
        return this.diametr
    }

}
let radiusNew = new Circle(10);

radiusNew.newRadius = 20;
console.log(radiusNew);
radiusNew.newDiametr = 100;
console.log(radiusNew);

//-----------------------------------------------------------
// 2)Создайте класс с именем Triangle, который имеет свойства a, b и c, представляющие длины сторон треугольника. Класс должен иметь метод getPerimeter который вычисляет периметр. Класс также должен использовать блоки try-catch для обработки ошибок при создании нового экземпляра класса, выбрасывая ошибку, если значения a, b и c не являются допустимыми числами.

class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimetr(){
        
        try{
            if(this.a<this.b+this.c && this.b<this.c+this.a && this.c<this.a+this.b){
            return this.a+this.b+this.c
            }
            throw new Error('Error')
        }catch (e){
            console.log(e.message) 

        }
        
    }


}

let triangl = new Triangle(4,4,3);
;
console.log(triangl.getPerimetr());

//--------------------------------------------------------

// 4)Создайте класс Person со свойствами firstName, lastName и age. Добавьте статическое свойство oldestPerson, которое хранит самый старый экземпляр Person, созданный на данный момент. Добавьте статический метод compareAge, который принимает два экземпляра Person и возвращает разницу в их возрасте.

class Person{
    static persons = [];
//     static oldestPerson(arrayObjects){
// return arrayObjects.sort((a,b)=>a.age-b.age)[arrayObjects.length-1]
// }
static oldestPerson(){
return Person.persons.sort((a,b)=>a.age-b.age)[Person.persons.length-1] }
    static compareAge(object1,object2){
        return object1.age - object2.age
    }
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        Person.persons.push(this);
    }
}
const kinderGarten = new Person("Ivan", "Lukianenko", 3);
const school = new Person("Misha", "Ivanov", 13);
const uni = new Person("Angelina", "Chechelnitska", 18);
// let array = [kinderGarten,school,uni];

console.log(Person.oldestPerson());
console.log(Person.compareAge(uni,school));
console.log(Person.persons);
//-----------------------------------------------------------
// 5)Создайте класс Book со свойствами title, author и yearPublished. Добавьте статическое свойство, где будут сохранены все экземпляры Book.  Добавьте статический метод listAuthors, который возвращает массив со  всеми именами авторов.
class Book {
    static books = [];
   
    static listAuthors(){
        let array1 = [];
       array1 = Book.books.map((element,index,array)=>
      element.author);
    return console.log(array1) 
    };

    constructor(title, author, yearPublished){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        Book.books.push(this);
    }
}
const objectAuthors = new Book("Three Musketeers","Duma",1844);
const objectAuthors1 = new Book("Don Kihot", "Servantes",1605);
const objectAuthors2 = new Book("Master i Margarita", "Bulgakov",1967);
const objectAuthors3 = new Book("Gore ot Uma", "Griboedov",1831);
// console.log(objectAuthors2);
console.log(Book.books);
Book.listAuthors();