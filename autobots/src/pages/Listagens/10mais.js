import '../style.css';
import { useState } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';

import { toast } from 'react-toastify';
import { FiCalendar } from "react-icons/fi";

export default function DezMais() {

  const [opcao, setOpcao] = useState('escolha');
  const [listagem, setListagem] = useState([]);
  const [total, setTotal] = useState();

  async function lista10mais(e) {
    e.preventDefault();
    
  }

  function handleChangeSelect(e) {
    setOpcao(e.target.value);
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Listagem">
          <FiCalendar color="#8b8da5" size={25} />
        </Title>

        <p>Mais consumiram produtos ou serviços, em quantidade</p>

        <div className="container">
          <form className="form-student">
            <label>Pesquisa por:</label>
            <select value={opcao} onChange={handleChangeSelect} className="selected">
              <option value="escolha">Escolha</option>
              <option value="quantProd">Produtos</option>
              <option value="quantSer">Serviços</option>
            </select>

            <button className='submit' onClick={lista10mais}>Procurar</button>
          </form>
        </div>


        <i>Total: <strong>{total}</strong></i>
        <table id="dataTable">
          <thead>
            <tr>
              <th scope="col">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {listagem.map((item, index) => {
              return (
                <tr key={index}>
                  <td data-label="Resultado">{item.nomeCliente}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}