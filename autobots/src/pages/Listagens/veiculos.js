import '../style.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';

import ModalDetalhes from '../../components/ModalDetalhes/cliente';

import { MdPeopleOutline } from "react-icons/md";
import { FiX, FiEdit3 } from "react-icons/fi";

export default function TodosVeiculos() {
  const [ocorrencia, setOcorrencia] = useState([]);

  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState();

  const [total, setTotal] = useState();

  useEffect(() => {

    async function loadVeiculos() {

    }

    loadVeiculos();

  }, []);

  async function excluirVeículo(id) {

  }

  function togglePostModal(item) {
    setShowPostModal(!showPostModal);
    setDetail(item);
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Listagem dos Veículos">
          <MdPeopleOutline color="#8b8da5" size={25} />
        </Title>

        <i>Total: <strong>{total}</strong></i>

        <table>
          <thead>
            <tr>
              <th scope="col">Placa</th>
              <th scope="col">Modelo</th>
              <th scope="col">Tipo</th>
              <th scope="col">Proprietário</th>
              <th scope="col">Ações</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Placa">FDK-6870</td>
              <td data-label="Modelo">HB20</td>
              <td data-label="Tipo">HATCH</td>
              <td data-label="Proprietário">Amanda Caires Pereira</td>
              <td data-label="Ações">
                <Link className="action" style={{ backgroundColor: '#F6a935' }} to={`/Veiculo`}>
                  <FiEdit3 color="#fff" size={17} />
                </Link>

                <button className="action" style={{ backgroundColor: '#f00' }} onClick={() => excluirVeículo()}>
                  <FiX color="#fff" size={17} />
                </button>
              </td>
            </tr>

            <tr>
              <td data-label="Placa">DNC-1522</td>
              <td data-label="Modelo">Duster</td>
              <td data-label="Tipo">SUV</td>
              <td data-label="Proprietário">Gabriel Lima Gonçalves</td>
              <td data-label="Ações">
                <Link className="action" style={{ backgroundColor: '#F6a935' }} to={`/Veiculo`}>
                  <FiEdit3 color="#fff" size={17} />
                </Link>

                <button className="action" style={{ backgroundColor: '#f00' }} onClick={() => excluirVeículo()}>
                  <FiX color="#fff" size={17} />
                </button>
              </td>
            </tr>

            {/* {ocorrencia.map((item, index)=>{
              return(
                <tr key={index}>
                  <td data-label="Veículo cadastrado">{item.nomeVeículo}</td>
                  <td data-label="Ações">
                    <button className="action" style={{backgroundColor: '#3583f6'}} onClick={ () => togglePostModal(item) }>
                        <FiSearch color="#fff" size={17}/>
                    </button>

                    <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/Veiculos/${item.id}`}>
                      <FiEdit3 color="#fff" size={17}/>
                    </Link>

                    <button className="action" style={{backgroundColor: '#f00'}} onClick={ () => excluirVeículo(item.id) }>
                        <FiX color="#fff" size={17}/>
                    </button>
                  </td>
                </tr>
              )
            })}   */}

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