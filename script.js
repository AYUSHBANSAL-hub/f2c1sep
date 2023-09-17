let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(
        // is for doing some operation
        // Print Developers (`PrintDeveloper` function): Log all developers from the array to the console.
        (person)=>{
            if(person.profession==="developer"){
                console.log(`I am ${person.name}. I am ${person.age} years old. I am working as a ${person.profession}.`);
            }
        }
    )
  }
  
  // 2. Add Data
  function addData() {
    let newname=prompt("Enter the name:");
    let newage=parseInt(prompt("Enter your age"));
    let newprofession=prompt("Enter the profession:");
    // console.log(newname,newage,newprofession);
    data.push({
        name:newname,
        age:newage,
        profession:newprofession
    });
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin(){
    // Remove Admins (`removeAdmin` function): Extract and remove all admins from the array.
    data=data.filter((person)=>person.profession!="admin");
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyarray=[
        {name:"Ayush", age:21,profession:"developer"},
        {name:"Vimal", age:22,profession:"Student"}
    ]
    // let combinedArr=data.concat(dummyarray);
    data.push(...dummyarray);
    console.log(data);
  }
  
  // 5. Average Age
  function averageAge() {
    let avgval=0;
    // for(let i=0;i<data.length;i++){
    //     avgval+=data[i].age;
    // }
    data.forEach((person)=>{
        avgval+=person.age;
    })
    console.log(avgval/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    // Age Check (`checkAgeAbove25` function): Validate if there's at least one person in the array who's older than 25.
    let status=false;
    data.forEach(person=>{
        if(person.age>25){
            status=true;
        }
    })
    let count= data.some((person)=>person.age>25);
    console.log(count?"Yes, a person greater than age 25 exist":"No, a person greater than age 25 does not exist");
  }

  // 7. Unique Professions
  function uniqueProfessions() {
    let professionsarr=[];
    data.forEach(person=>{
        if(!professionsarr.includes(person.profession)){
            professionsarr.push(person.profession);
        }
    })
    // console.log(professionsarr);
    // let arr=["apple","banana","orange"];
    // let arr2=["apple","kiwi","mango"];
    // console.log(arr2.includes("banana"));
  }
  
  // 8. Sort by Age
  function sortByAge() {

    data.sort((a,b)=>b.age-a.age);
    // comparator function
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(person=>{
        if(person.name=="john"){
            person.profession="manager";
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devcount=data.filter(person=>person.profession=="developer");
    let admincount=data.filter(person=>person.profession=="admin");
    console.log(`Developers: ${devcount.length}, admin: ${admincount.length}`);
  }