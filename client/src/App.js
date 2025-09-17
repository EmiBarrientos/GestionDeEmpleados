import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import Swal from 'sweetalert2';

function App() {

  const [name , setName] = useState("");
  const [age , setAge] = useState();
  const [country , setCountry] = useState("");
  const [position , setPosition] = useState("");
  const [yearsofwork , setYearsOfWork] = useState();
  const [id , setId] = useState();

  const [edit , setEdit] = useState(false);
  
  const[employeesList,setEmployees] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      name:name,
      age:age,
      position:position,
      yearsofwork: yearsofwork,
      country:country
    }).then(()=>{
      getEmployees();
      cleanFields();

      Swal.fire({
        title: "Good job!",
        text: "Employee "+name+" Successfully added!",
        icon: "success",
        timer:3000
      });

    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Can't add this employee",
        footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Try Again later":JSON.parse(JSON.stringify(error)).message
      });
    });

  }
  
  
  const update = ()=>{
    Axios.put("http://localhost:3001/update",{
      id:id,
      name:name,
      age:age,
      position:position,
      yearsofwork: yearsofwork,
      country:country
    }).then(()=>{
      getEmployees();
      cleanFields();

      Swal.fire({
        title: "Great job!",
        text: "Employee "+name+" Successfully updated!",
        icon: "success",
        timer:3000
      });
    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Can't Update1 this employee",
        footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Try Again later":JSON.parse(JSON.stringify(error)).message
      });
    });
  }
  
  const deleteEmployee = (val)=>{

    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete "+ val.name+" from the database? You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${val.id}`).then(()=>{
          getEmployees();
          cleanFields();
          });
        Swal.fire({ 
          title: "Successfully Deleted!",
          text: val.name+" has been removed from the database.",
          icon: "success",
          timer:2000
        });
      }
    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Can't delete this employee",
        footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Try Again later":JSON.parse(JSON.stringify(error)).message
      });
    });
  }




const cleanFields =()=>{
  setAge("");
  setName("");
  setCountry("")
  setYearsOfWork("");
  setPosition("");
  setEdit(false);
}




  const getEmployees = ()=>{
    Axios.get("http://localhost:3001/employees",{}).then((response)=>{
      setEmployees(response.data);
    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Can't get list of employees",
        footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Try Again later":JSON.parse(JSON.stringify(error)).message
      });
    });
  }

  const employeeEdit = (val)=>{
    setEdit(true);
    
    setName(val.name);
    setAge(val.age);
    setPosition(val.position);
    setYearsOfWork(val.yearsofwork);
    setCountry(val.country);
    setId(val.id);


  }




useEffect(() => {
    getEmployees();
  }, []); 

  

  return (
    <div className="container">

  
        <div className="card text-center">
          <div className="card-header">
            employee register 
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Name</span>
              <input type="text" 
                 onChange={(event)=>{
                    setName(event.target.value);
                }}
              className="form-control" value={name} placeholder="enter name" aria-label="UserName" aria-describedby="basic-addon1"/>
            </div>
            
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Age</span>
              <input type="number" 
                 onChange={(event)=>{
                    setAge(event.target.value);
                }}
              className="form-control" value={age} placeholder="enter Age" aria-label="UserAge" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Position</span>
              <input type="text" 
                 onChange={(event)=>{
                    setPosition(event.target.value);
                }}
              className="form-control" value={position} placeholder="enter Position" aria-label="UserPosition" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Years of work</span>
              <input type="number" 
                 onChange={(event)=>{
                    setYearsOfWork(event.target.value);
                }}
              className="form-control" value={yearsofwork} placeholder="enter years of work" aria-label="yearsofwork" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Country</span>
              <input type="text" 
                 onChange={(event)=>{
                    setCountry(event.target.value);
                }}
              className="form-control" value={country} placeholder="enter country" aria-label="UserCountry" aria-describedby="basic-addon1"/>
            </div>

          </div>

            <div className="card-footer text-body-secondary">
              {
                edit?
                <div>
                <button className='btn btn-success m-2' onClick={update} >Save</button> 
                <button className='btn btn-warning m-2' onClick={cleanFields} >Cancel</button>
                </div>
                :<button className='btn btn-success' onClick={add} >Register</button>
              }
              
            </div>

        </div>
      

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Position</th>
              <th scope="col">Work Experience</th>
              <th scope="col">Country</th>
              <th scope="col">actions</th>
            </tr>
          </thead>
          <tbody>

            {
              employeesList.map((val,key)=>{
                 return <tr key={val.id}>
                  <th>{val.id} </th>
                  <td>{val.name} </td>
                  <td>{val.age} </td>
                  <td>{val.position} </td>
                  <td>{val.workingyears} </td>
                  <td>{val.country} </td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                          onClick={()=>{employeeEdit(val)}}
                          className="btn btn-info">edit</button>
                        <button type="button" 
                        onClick={()=>{deleteEmployee(val)}}
                           className="btn btn-danger">delete</button>
                        
                        
                    </div>
                  </td>

                </tr>

               })
            }
            
           
          </tbody>

        </table>
      </div>
  
     

    );
  }

export default App;
