import fs from "fs";

const log = console.log;

// function updateStudent(data, id, student) {
//   const studentInfo = fs.readFileSync("./data.json", "utf-8");
//   log("Read and file into utf-8");
//   const data = JSON.parse(studentInfo);
//   log(data);
//   log(typeof data);
//   //   const updateData = data.
//   const filtered = data.map((element) => {
//     if (element.id == id) {
//       element.name = student.name;
//       element.seatNumber = student.seatNumber;
//       return { ...student, ...element };
//     }
//     fs.writeFileSync("./data.json", JSON.stringify(filtered, null, 2));
//     log("CREATED");
//   });
// }

// updateStudent({});

// function readStudent(id){
//     const json = fs.readFileSync('student.json' , 'utf-8');
//     const data = JSON.parse(json);

//     if(id){
//         return data.find((student => student.id == id){
//         })
//     }
//     return data;
// }

// function updateStudent(id, student){

function updateStudent(id, newStudent) {
  const json = fs.readFileSync("data.json", "utf-8");
  const data = JSON.parse(json);

  // for(let i = 0; i < data.length ; i++){
  //     if(data[i].id == id){
  //         if(student.name) data[i].name = student.name;
  //         if(student.seatNumber) data[i].seatNumber = student.seatNumber;
  //         if(student.id) data[i].id = student.id;

  //         // spread operation
  //         data[i] = { ...data[i]}
  //     }
  // }

  const newData = data.map((oldStudent) => {
    if (oldStudent.id == id) {
      oldStudent = { ...oldStudent, ...newStudent };
    }
    return oldStudent;
  });

  fs.writeFileSync("student.json", JSON.stringify(newData));

  // fs.writeFileSync('student.json', JSON.stringify(data))
}

updateStudent("3", { name: "ZZZ", seatNumber: "5" });
