//map,filter,sum,every,reduce,foreach

//1.map

var s = [25, 30, 40, 50];

Array.prototype.myMap = function(callback) {
  arr= [];
 for (let index = 0; index < this.length; index++) {
   const element = array[index];
   
 }
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

//console.log(new_s);





function map(array, callback) {
  let arr=[1,2,3,4,5,6]
  for (let index = 0; index < array.length; index++) {
      const element = array[index];
      let result=element*5;
      arr.push(result)


  }
  }console.log()


  function map(array, callback) {
      const new_array = [];

      array.forEach(function (element, index, array) {
          new_array.push(callback(element));
      });

      return new_array;
  }


  function maps(array,callback) {
      var value=[]
      for (var i=0; i<array.length; i++) {
          var newElement=callback(array[i],i,array)
          value.push(newElement)

      }
      return value;

  }


  function Map(array) {
      let arr=[1,2,3];
      for (let index = 0; index < array.length; index++) {
          const element = array[index];
          let result=element*3;
          arr.push(result);

      }

  }


  //2.filter
  Array.prototype.myFilter = function(callback) {
    const filterArr = [1,2,3,4,5];
    for(let index = 0; index<this.length; index++) {
        if(!callback(this[index], index, this)) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;


}

Array.prototype.customFilter = function(fn) {
    let f = [1,2,3,4]; 
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i])) {
        f.push(this[i]);
      }
    }
    return f;
  };


  // for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     if (element>5) {


  //     }

  // }



  //3.sum

//   function sum(array) {
//       const array=[1,2,3,4,5];
//       let sum=0;
//       for(let i=0; i<array.length;i++){
//           sum +=array[i];
//       }
    //   console.log(sum);


  //4.every

  //5.reduce
  Array.prototype.myReduce = function(callback, accumulator) {
    if(this.length < 1) {
        throw new Error("Array is Empty")
    }

    if(!accumulator) {
        if(typeof this[0] === "string") {
            accumulator = '';
        } else if(typeof this[0] === "number") {
            accumulator = 0;
        }
    }

    for(let index=0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }
    return accumulator;
}

const names = ['Jale'];
const filterNames = names.myFilter(name => name !== 'Quliyeva');
const statment = names.myReduce((acc, ele) => acc + ele);

// console.log(filterNames) ;
// console.log(statment);

  // let result=0;
  // for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     result+=element;

  // }


  //6.foreach

  // function forEach(array, callback) {
    //   const numbers=[1,2,3,4,5]
    //   let sum=0;
  //     for (i = 0; i < i.length; i++) {
  //       callback(numbers[i]);
  //     }
  //   }


  // array.forEach((letter, index, arr) => {
  //     console.log(letter,index, arr);
  //   });




  // let stu1={
  //     name:"Jale",
  //     surname:"Quliyeva",
  //     age:20,
  //     fullInfo:function(){
  //         return this.name +" "+this.surname;
  //     },
  //     test:()=>console.log(this.name+this.surname)
  // }

  // // console.log(stu1)
  // Object.freeze(stu1)
  //  stu1.name="Nergiz"
  // // console.log(stu1)
  // console.log(Object.entries(stu1))

