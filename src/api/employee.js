// // function getName() returns string {
// //     //call the Golang APIs -> The go lang APIs will return the database
// //     //error handle
// //     //return the list of employee names
// //     request.open("GET", "https://aws-gateway/getEmployee")
// // }

// // function getEmployeeList() {
// //     console.log("STARTING READ");
// //     fetch('https://fdu8ewa3uh.execute-api.ap-southeast-2.amazonaws.com/Prod/employees').then( response => {
// //         return response.json();
// //     }).then(emps => {
// //         const list = emps
// //         return list;
// //     });
// // }

// //function getEmployeeList() {
//     //     const Http = new XMLHttpRequest();
//     //     const url = 'https://fdu8ewa3uh.execute-api.ap-southeast-2.amazonaws.com/Prod/employees';
//     //     Http.open("GET", url);
//     //     Http.send();
    
//     //     Http.onreadystatechange=(e)=>{
//     //         console.log(e, Http.responseText)
//     //     }
//     // }
    
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// //Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables"
// import "datatables.net-dt/css/jquery.dataTables.min.css"
// import $ from 'jquery'; 
  
  
// import axios from 'axios';

// // function getEmployeeList() {

// //     var getJSON = function(url, callback) {
// //         var xhr = new XMLHttpRequest();
// //         xhr.open('GET', url, true);
// //         xhr.responseType = 'json';
// //         xhr.onload = function() {
// //         // var status = xhr.status;
// //         //if (status === 200) {
// //         callback(null, xhr.response);
// //         // } else {
// //         //////   callback(status, xhr.response);
// //         // }
// //         };
// //         xhr.send();
// //     }

// //     getJSON('https://fdu8ewa3uh.execute-api.ap-southeast-2.amazonaws.com/Prod/employees', function(err, data) {
// //      if (err !== null) {
// //        console.log('Something went wrong');
// //      } else {
// //        //console.log(data);
// //        return data
// //      }
// //    });
// //    return "Empty";
// // }

// function getEmployees(employees){
//     //API Call
//     axios
//     .get("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees/")
//     .then((res)=>
//     {
//       employees = res.data;
//       $('#example').DataTable();
//     })
//     return employees;
// }

// function getSkills(skills){      
  
//   console.log("IT IS HERER");
//   axios
//   .get("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/skills/")
//   .then((res)=>
//   {
//     this.skills = res.data;
//     $('#example').DataTable();
//   })
//   return skills;
// }


// export default  getEmployees; getSkills;