import '../style.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';

import ModalDetalhes from '../../components/ModalDetalhes/cliente';

import { MdPeopleOutline } from "react-icons/md";
import { FiX, FiEdit3 } from "react-icons/fi";

export default function TodosServicos(){
  const [ocorrencia, setOcorrencia] = useState([]);
    
  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState();

  const [total, setTotal] = useState();

  useEffect(()=> {

    async function loadServicos(){

    }

    loadServicos();
    
  }, []);

  async function excluirServico(id){

  }

  function togglePostModal(item){
    setShowPostModal(!showPostModal);
    setDetail(item);
  }

  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Listagem dos Serviços">
          <MdPeopleOutline color="#8b8da5" size={25}/>
        </Title>          

        <i>Total: <strong>{total}</strong></i>

        <table>
          <thead>
            <tr>
              <th scope="col">Serviço cadastrado</th>
              <th scope="col">Valor</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td data-label="Serviço cadastrado">Adição do parafuso com segredo</td>
                  <td data-label="Valor">R$ 30,00</td>
                  <td data-label="Descrição">Troca de 1 parafuso normal de cada roda</td>
                  <td data-label="Ações">

                    <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/servico`}>
                      <FiEdit3 color="#fff" size={17}/>
                    </Link>

                    <button className="action" style={{backgroundColor: '#f00'}} onClick={ () => excluirServico() }>
                        <FiX color="#fff" size={17}/>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td data-label="Serviço cadastrado">Alinhamento básico</td>
                  <td data-label="Valor">R$ 124,99</td>
                  <td data-label="Descrição">Alinhamento de rodas de veículo - pequeno porte</td>
                  <td data-label="Ações">

                    <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/servico`}>
                      <FiEdit3 color="#fff" size={17}/>
                    </Link>

                    <button className="action" style={{backgroundColor: '#f00'}} onClick={ () => excluirServico() }>
                        <FiX color="#fff" size={17}/>
                    </button>
                  </td>
                </tr>

            {/* {ocorrencia.map((item, index)=>{
              return(
                <tr key={index}>
                  <td data-label="Servico cadastrada">{item.nomeServico}</td>
                  <td data-label="Ações">
                    <button className="action" style={{backgroundColor: '#3583f6'}} onClick={ () => togglePostModal(item) }>
                        <FiSearch color="#fff" size={17}/>
                    </button>

                    <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/Servicos/${item.id}`}>
                      <FiEdit3 color="#fff" size={17}/>
                    </Link>

                    <button className="action" style={{backgroundColor: '#f00'}} onClick={ () => excluirServico(item.id) }>
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