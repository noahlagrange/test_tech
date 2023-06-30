import "./Form.css"
import React ,{ useState } from "react"

function Form(prod) {
  const [showForm, setShowForm] = useState(false);

  return (
    <React.Fragment>
    <div className="form" type="text">
      <h1>Rapport d'humeur</h1>
      <p>Remplissez le champs ci dessous pour le rapport de {prod.name}</p>
      <form>
      <input />
      </form>
      <button className="fermer">Fermer</button>
      <button className="conf">Enregistrer</button>
    </div>
    </React.Fragment>
  );
}

export default Form;
