import {useEffect, useState} from "react";
import axios from "axios";
import Patient from "./Patient";
import "./Allpatients.css"

function Allpatient(prod) {
  const url = 'http://localhost:5000/api/patient/';

  const [value, setValue] = useState([]);


    useEffect(() => {
      axios.get(url)
        .then(response => {
          console.log(response.data.patient);
          setValue(response.data.patient)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return ( 
    <div className="allpatient">
            {value.map(i => {
            return (<Patient id = {i._id} name = {i.name} age = {i.age}/> )
        })}
    </div>)
  }
  
  export default Allpatient;
  