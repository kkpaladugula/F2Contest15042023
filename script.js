/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

  

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter((employee) => employee.profession === "developer");
  const names = developers.map((developer) => developer.name);
  console.log(names);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = arr.filter((employee) => employee.profession === "developer");
  const names = developers.map((developer) => developer.name);
  console.log(names);
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2 = [
    {id: 5, name: "Mars", age: "19", profession: "developer"},
    {id: 6, name: "jade", age: "20", profession: "developer"}
  ];
  const concatenatedArr = arr.concat(arr2);
  console.log(concatenatedArr);
}

//


