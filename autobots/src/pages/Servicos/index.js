import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';

import { toast } from 'react-toastify';
import { FiClipboard, FiX, FiEdit3 } from "react-icons/fi";

export default function Servicos(){
  const [ocorrencia, setOcorrencia] = useState([]);
  const [nomeServico, setNomeServico] = useState('');
  const [precoServico, setPrecoServico] = useState('');

  const [total, setTotal] = useState();

  async function cadastrarServico(e){
    e.preventDefault();

    toast.success('Serviço cadastrado!');

    setNomeServico('');
    setPrecoServico('');
  }

  useEffect(()=> {

    async function loadServicos(){

    }

    loadServicos();
    
  }, []);

  async function excluirServico(id){

  }

  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Serviço">
          <FiClipboard color="#8b8da5" size={25}/>
        </Title>

        <div className="container">
          <form className="forms">
            <label>Cadastrar Serviço:</label>
            <input type="text" placeholder="Nome do serviço" value={nomeServico} onChange={ (e) => setNomeServico(e.target.value) } />
            <input type="text" placeholder="Preço do serviço" value={precoServico} onChange={ (e) => setPrecoServico(e.target.value) } />
            <button className='submit' onClick={cadastrarServico}>Cadastrar</button>
          </form>
        </div>

        <i>Total: <strong>{total}</strong></i>

        <table>
          <thead>
            <tr>
              <th scope="col">Serviços cadastrados</th>
              <th scope="col">Preço</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {ocorrencia.map((item, index)=>{
              return(
                <tr key={index}>
                  <td data-label="Serviço cadastrado">{item.nomeServico}</td>
                  <td data-label="Preço">{item.precoServico}</td>
                  <td data-label="#">
                    
                    <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/servicos/${item.id}`}>
                      <FiEdit3 color="#fff" size={17}/>
                    </Link>

                    <button className="action" style={{backgroundColor: '#f00'}} onClick={ () => excluirServico(item.id) }>
                        <FiX color="#fff" size={17}/>
                    </button>
                    
                  </td>
                </tr>
              )
            })}            
          </tbody>
        </table>
        
      </div>
    </div>
  )
}