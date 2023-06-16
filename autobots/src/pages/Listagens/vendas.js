import '../style.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';

import ModalDetalhes from '../../components/ModalDetalhes/cliente';

import { MdPeopleOutline } from "react-icons/md";
import { FiX, FiEdit3 } from "react-icons/fi";

export default function TodasVendas(){
  const [ocorrencia, setOcorrencia] = useState([]);
    
  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState();

  const [total, setTotal] = useState();

  useEffect(()=> {

    async function loadVendas(){

    }

    loadVendas();
    
  }, []);

  async function excluirVenda(id){

  }

  function togglePostModal(item){
    setShowPostModal(!showPostModal);
    setDetail(item);
  }

  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Listagem das Vendas">
          <MdPeopleOutline color="#8b8da5" size={25}/>
        </Title>          

        <i>Total: <strong>{total}</strong></i>

        <table>
          <thead>
            <tr>
              <th scope="col">Data de cadastro</th>
              <th scope="col">Identificação</th>
              <th scope="col">Nome do cliente</th>
              <th scope="col">Nome do funcionário</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                <td data-label="Data de cadastro">02/05/2023</td>
                <td data-label="Identificação">1234567891</td>
                <td data-label="Nome do cliente">Amanda Caires Pereira</td>
                <td data-label="Nome do funcionário">Marcos Paulo Braga Poca</td>
                  <td data-label="Ações">
                    <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/venda`}>
                      <FiEdit3 color="#fff" size={17}/>
                    </Link>

                    <button className="action" style={{backgroundColor: '#f00'}} onClick={ () => excluirVenda() }>
                        <FiX color="#fff" size={17}/>
                    </button>
                  </td>
                </tr>

            {/* {ocorrencia.map((item, index)=>{
              return(
                <tr key={index}>
                  <td data-label="Venda cadastrada">{item.nomeVenda}</td>
                  <td data-label="Ações">
                    <button className="action" style={{backgroundColor: '#3583f6'}} onClick={ () => togglePostModal(item) }>
                        <FiSearch color="#fff" size={17}/>
                    </button>

                    <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/Vendas/${item.id}`}>
                      <FiEdit3 color="#fff" size={17}/>
                    </Link>

                    <button className="action" style={{backgroundColor: '#f00'}} onClick={ () => excluirVenda(item.id) }>
                        <FiX color="#fff" size={17}/>
                    </button>
                  </td>
                </tr>
              )
            })}                      */}
          </tbody>
        </table>
        
      </div>
      {showPostModal && (
        <ModalDetalhes
          conteudo={detail}
          close={togglePostModal}
        />
      )}
    </div>
  )
}