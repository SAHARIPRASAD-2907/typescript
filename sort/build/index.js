"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharectersCollection_1 = require("./CharectersCollection");
var LinkedListCollection_1 = require("./LinkedListCollection");
// number collection
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// string collection
var charactersCollection = new CharectersCollection_1.CharectersCollection('Xaaby');
charactersCollection.sort();
console.log(charactersCollection.data);
// LinkedList Collection
var linkedList = new LinkedListCollection_1.LinkedListCollection();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
// use tsc -w to watch continues change
