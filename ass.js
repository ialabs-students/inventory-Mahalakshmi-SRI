var chocolate = {
    modelName: "mm",
    modelNumber: "qq",
    count: "22"
};
// console.log(chocolate.modelName);
// console.log(chocolate.count)
var cakes = /** @class */ (function () {
    function cakes(modelNumber, modelName, count) {
        this.brand = 'cakes';
        this.modelNumber = modelNumber;
        this.modelName = modelName;
        this.count = count;
    }
    return cakes;
}());
var fruits = /** @class */ (function () {
    function fruits(modelNumber, modelName, count) {
        this.brand = 'fruits';
        this.modelNumber = modelNumber;
        this.modelName = modelName;
        this.count = count;
    }
    return fruits;
}());
var cake1 = new cakes('1', 'blackforest', '30');
var cake2 = new cakes('2', 'butterscotch', '31');
var fruit1 = new fruits('1', 'Apple', '23');
var fruit2 = new fruits('2', 'Mango', '13');
var fruit3 = new fruits('3', 'Goa', '10');
// const juice3 = { juice1, name: { modelnumber: '3',
//  modelname:'bovonto',
//   count:12} }
// const juice4 = { available:'yes/no'}
// const juice3withjuice4=Object.assign(juice3,juice4);
// console.log(juice3);
delete fruit3['modelNumber'];
console.log("-----------------------");
function getKey(cake1, cake2) {
    var arr = [], obj = Object.keys(cake1);
    for (var count in obj) {
        if (cake1[obj[count]] > 5) {
            arr.push(obj[count]);
        }
    }
    return arr;
}
//  console.log(juice2);
// var veg = {"mushrooms": 30, "peppers": 60, "meatballs": 1, "chicken": 
// 2, "olives": 4}
// function getKey(cake1,cake2){
//   const arr = [],
//   obj = Object.keys(cake1);
//   for (var count in obj){
//     if(cake1[obj[count]] > 5){
//       arr.push(obj[count]);
//     }
//   }
//   return arr;
// }
var cake5 = [{ brand: "cakes", modelNumber: "2", modelName: "chocolate cake", count: "23" },
    { brand: "cakes", modelNumber: "3", modelName: "mango cake", count: "21" }];
var result = cake5.filter(function (obj) {
    return obj.count > '5';
});
console.log(result);
//  var juice6 = {};
// Object.assign(juice5, {brand:"juice", modelNumber:"2",modelName:"Sprit",count:"23"});
// Object.assign(juice6,{brand:"juice", modelNumber:"3",modelName:"soda",count:"21"})
// juice6   = juice5.filter(function(elem) {
//   return !(elem.count >5 )});
// console.log(juice1.getEngineInfo());
console.log("Department dataset");
console.log(cake1, cake2, fruit1, fruit2);
console.log("--------------------------------");
console.log("delete");
console.log(fruit3);
console.log("-----------------------");
console.log("addional");
console.log(cake5);
console.log("-----------------------");
console.log("threshold");
console.log(result);
// console.log(juice2);
// console.log(biscult1);
// console.log(biscult2);
// console.log(juice3withjuice4);
// var biscult1 = new biscult('2', 'milk','12');
// console.log(biscult.getEngineInfo());
// console.log(biscult1);
// var obj: {name: string, age:number};
// obj = {name: "X", age: 1}
