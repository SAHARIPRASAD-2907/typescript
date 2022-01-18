import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharectersCollection} from "./CharectersCollection";
import {LinkedListCollection} from "./LinkedListCollection";

// number collection
const  numbersCollection= new NumbersCollection([10,3,-5,0])
numbersCollection.sort();
console.log(numbersCollection.data)

// string collection
const charactersCollection = new CharectersCollection('Xaaby');
charactersCollection.sort()
console.log(charactersCollection.data)

// LinkedList Collection
const linkedList = new LinkedListCollection()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort();
linkedList.print();
// use tsc -w to watch continues change