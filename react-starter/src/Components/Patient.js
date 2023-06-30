import './Patient.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Form.css";
import pp from '../pp.jpeg';

function Patient(prod) {
  const url = 'http://localhost:5000/api/humeur/patient/' + prod.id



  const [showForm, setShowForm] = useState(false);

  const Id = prod.id;

  const [post, setPost] = useState({
    description: '',
    id_patient: Id
  })


  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/humeur/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : post
  };


  const handleInput = (event) => {
      setPost({...post,[event.target.name]: event.target.value});
      console.log(post);
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error)});
  }

  const [value, setValue] = useState([]);
    useEffect(() => {
      axios.get(url)
        .then(response => {
          console.log(response.data.humeursof);
          setValue(response.data.humeursof)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const len = value.length;

    return ( 
    <div>



    <div className="patient">
      <img src={pp} className='pp'/>
      <h1 className='patienth1'>{prod.name}</h1>
      <h2 className='infopatient'>{prod.age} ans, Reunion</h2>
      <h2 className='inforapport'><a className='souligne'>{len} Rapports</a> d'humeurs</h2>
      <button className='buttonrapport' onClick={() => setShowForm(true)}>Réaliser un Rapport</button>
    </div>




      <React.Fragment>
          {
            showForm ? <div className="form" type="text">
            <h1 className="title">Rapport d'humeur</h1>

            <p>Remplissez le champs ci dessous pour le rapport de <a className='NameGars'>{prod.name}</a></p>
            
            <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleInput} name="description"/>
            
            </form>
            
            <button className="fermer" onClick={() => setShowForm(false)}>Fermer</button>
            <button className="conf" onClick={handleSubmit}>Enregistrer</button>
            
            </div> : <br></br>
          }
      </React.Fragment>



    </div>)
  }
  
  export default Patient;
  