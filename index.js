const data =require("./students_data.json");
console.log(data);
console.log(data.students[0].cgpa);
console.log(data.students[0].languages[1]);

data.students[0].friends[0].name="Sathiya";
console.log(data.students[0].friends[0]);

console.log(data.students[1].friends[0].name);

for(x in data){
    console.log(x);
    console.log(data[x]);
}

