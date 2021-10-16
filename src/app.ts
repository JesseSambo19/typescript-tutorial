// interfaces
interface IsPerson {
	name: string;
	age: number;
	speak(a: string): void;
	spend(a: number): number;
}

const me: IsPerson = {
	name: "shaun",
	age: 30,
	speak(text: string): void {
		console.log(text);
	},
	spend(amount: number): number {
		console.log("I spent ", amount);
		return amount;
	}
};

const greetPerson = (person: IsPerson) => {
	console.log("hello", person.name);
}


greetPerson(me); 
console.log(me);

import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from "./classes/ListTemplate.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;


// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'pumbling work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
// 	console.log(inv.client, inv.amount, inv.format());
// })

//console.log(invOne, invTwo);

// console.log(invoices);
// const anchor = document.querySelector("a")!;

//  if(anchor){
//    console.log(anchor);
//  }
 
// console.log(anchor.href); 

// const form = document.querySelector("form")!;

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	let values: [string, string,  number];
	values = [tofrom.value, details.value, amount.valueAsNumber]

	let doc: HasFormatter;
	if (type.value === "invoice"){
		doc = new Invoice(...values);
	} else {
		doc = new Payment(...values);
	}
	

	list.render(doc, type.value, "end");
});



// Generics

const addUID = <T extends {name: string}>(obj: T) => {
	let uid = Math.floor(Math.random() * 100);
	return {...obj, uid};
}

// let docOne = addUID({name: "yoshi", age: 40});
// let docTwo = addUID("hello");


// console.log(docOne.name);

// with interfaces
// interface Resource<T> {
// 	uid: number;
// 	resourceName: string;
// 	data: T;
// }

// const docThree: Resource<object> = {
// 	uid: 1,
// 	resourceName: "person",
// 	data: {name: "shaun"}
// }

// const docFour: Resource<string[]> = {
// 	uid: 2,
// 	resourceName: "shoppingList",
// 	data: ["bread", "milk", "toilet roll"]
// }

// console.log(docThree, docFour);

// ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// interface Resource<T> {
// 	uid: number;
// 	resourceType: number;
// 	data: T;
// }

// const docOne: Resource<object> = {
// 	uid: 1,
// 	resourceType: ResourceType.BOOK,
// 	data: {title: "name of the wind"}
// }

// const docTwo: Resource<object> = {
// 	uid: 10, 
// 	resourceType: ResourceType.PERSON,
// 	data: {name: "yoshi"}
// }

// console.log(docOne, docTwo);

// Tuples

let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];

let tup: [string, number, boolean] = ["ryu", 25, true];
tup[0] = "ken";
tup[1] = 30;

// let student: [string, number];
// student = [21212, "ken"];
// student = ["chun-li", 223423];