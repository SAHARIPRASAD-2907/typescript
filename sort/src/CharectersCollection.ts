import {Sortable} from "./Sortable";
import {Sorter} from "./Sorter";

export class CharectersCollection extends Sorter{
    constructor(public data:string) {
        super();
    }
    get length(): number{
        return this.data.length;
    }
    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
    };
    swap(leftIndex:number,rightIndex:number):void{
        const charecters = this.data.split('');
        const leftHand = charecters[leftIndex];
        charecters[leftIndex] = charecters[rightIndex];
        charecters[rightIndex] = leftHand;
        this.data = charecters.join('');
    }
    sort():void{
        const {length} = this;
        for(let i=0;i<length;i++){
            for(let j=0;j<length-i-1;j++){
                if(this.compare(j,j+1)){
                    this.swap(j,j+1);
                }
            }
        }
    }
}