import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-obj',
  templateUrl: './set-obj.component.html',
  styleUrls: ['./set-obj.component.scss']
})
export class SetObjComponent implements OnInit {
   arr1 = new Set([1,2,3,4,5,9]);
   arr2 = new Set([4,5,3,7,10,11]);

  constructor() { }

 
  ngOnInit(): void {
    console.log(`A is => ${[...this.arr1]}`);
    console.log(`B is => ${[...this.arr2]}`);
    const _intersection = this.intersection(this.arr1, this.arr2);
    console.log("Intersection of A & B ==>"+ [..._intersection]);

    const _union = this.union(this.arr1, this.arr2)
    console.log("Union of A & B ==>"+ [..._union]);

  }

   /* 
  * Intersection 
  * create function intersection with 2 params
  * declare variable to return value 
  * check setA has setB
   */

  intersection(setA , setB) {
   let _intersection = new Set();
    for (let ele of setB){
      if(setA.has(ele)){
        _intersection.add(ele);
      }
    }
    return _intersection;
  }


  union(setA, setB) {
    let _union = new Set(setA);
    for(let ele of setB){
      _union.add(ele);
    }
    return _union;
  }
}
