function formatValue(a : string | number | boolean) : any{

    if(typeof a === 'string'){
        return a.toUpperCase()
    }
    if(typeof a === 'number'){
        return a*10
    }
    if(typeof a === 'boolean'){
        return !a
    }
}

// console.log(formatValue(100))
// console.log(formatValue('alimur'))
// console.log(formatValue(true))


function getLength(a : string | object) : any{
    if(typeof a  === 'string'){
        return (a.length)
    }
    if(typeof a  === "object"){
        return (Object.keys(a).length)
    }

}

/* console.log(getLength('tapascript'))
console.log(getLength(['a' , 'b']))
console.log(getLength({
    name : 'nnn',
    age : 20,
    edu : 'Msc'
}))*/

class Person {
    name : string ;
    age : number
    constructor(name : string , age : number) {
        this.name  = name ,
        this.age  = age     
    }
    getDetails() : string {
        return `Name : ${this.name} , Age : ${this.age}`
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


const filterByRating = (items : any[]) : any[] => items.filter((item) => {
    return item.rating > 4.0
})

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));

const filterActiveUsers  = (users : object[]) : object[] => users.filter((user) => {
    return user.isActive == true
})

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));


interface Book  {
    title : string ,
    author : string ,
    publishedYear : number ,
    isAvailable : boolean
}

const printBookDetails = (book : Book) => console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available:${book.isAvailable ? 'Yes' : 'No'}`)

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

const getUniqueValues = (a : [] , b : []) => 