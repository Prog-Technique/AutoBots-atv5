import { useState } from "react";
import { Link } from 'react-router-dom';
import { IMaskInput } from "react-imask";

import { FiPlusCircle } from "react-icons/fi";

export default function Documentos({ onButtonClick }) {
  const [formValue, setFormValue] = useState([{ doc: "" }])
  const [formValue2, setFormValue2] = useState([{ telefone: "" }])

  let handleChange = (i, e) => {
    let newFormValue = [...formValue];
    newFormValue[i][e.target.name] = e.target.value;
    setFormValue(newFormValue);
  }

  let addFormField = () => {
    setFormValue([...formValue, { doc: "" }])
  }

  let removeFormField = (i) => {
    let newFormValue = [...formValue];
    newFormValue.splice(i, 1);
    setFormValue(newFormValue)
  }

  // -----------------------------------------------------

  let handleChange2 = (i, e) => {
    let newFormValue = [...formValue2];
    newFormValue[i][e.target.name] = e.target.value;
    setFormValue2(newFormValue);
  }

  let addFormField2 = () => {
    setFormValue2([...formValue2, { telefone: "" }])
  }

  let removeFormField2 = (i) => {
    let newFormValue = [...formValue2];
    newFormValue.splice(i, 1);
    setFormValue2(newFormValue)
  }

  // -----------------------------------------------------

  function handleSubmit() {
    onButtonClick("pagethree");
  }

  function handleReturn(e) {
    return onButtonClick("pageone")
  }

  return (
    <div className="container">
      <form className="forms" onSubmit={handleSubmit}>
        <label id="stepTitle">Documento</label>

        {formValue.map((e, index) => (
          <>
            <div className="plus" key={index}>
              <input placeholder='Tipo' value={e.doc} onChange={e => handleChange(index, e)} />
              <input placeholder='Número' value={e.doc} onChange={e => handleChange(index, e)} />
              {index ?
                <button type="button" className='del' onClick={() => removeFormField(index)}>Deletar</button>
                : null}
            </div>
          </>
        ))}

        <Link onClick={() => addFormField()}>
          <FiPlusCircle color="#000" size={25}/>
        </Link>

        {/* --------------------------------------------- */}

        <label id="stepTitle">Telefone</label>

        {formValue2.map((e, index) => (
          <>
            <div className="plus" key={index}>
              <IMaskInput mask="(00) 00000-0000" placeholder='Telefone' value={e.telefone} 
              onChange={e => handleChange2(index, e)} />
              {index ?
                <button type="button" className='del' onClick={() => removeFormField2(index)}>Deletar</button>
                : null}
            </div>
          </>
        ))}

        <Link onClick={() => addFormField2()}>
          <FiPlusCircle color="#000" size={25}/>
        </Link>

        <div className="BackNext">
        <button className="submit" onClick={() => handleReturn()}>
          Voltar</button>

        <button className="submit" onClick={() => handleSubmit()}>
          Próximo</button>
        </div>
      </form>
    </div>
  )
}