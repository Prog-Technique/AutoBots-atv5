import Header from '../../components/Header';
import Title from '../../components/Title';

import { Link } from 'react-router-dom';
import { FiHome, FiArrowRight } from "react-icons/fi";

export default function Dashboard(){
  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Início">
          <FiHome color="#8b8da5" size={25}/>
        </Title>

            <table>
              <thead>
                <tr>
                  <th scope="col">Listagens</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                      <td data-label="Listagem">Todos os clientes</td>
                      <td data-label="#">
                        <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/listagem_clientes`}>
                          <FiArrowRight color="#fff" size={17}/>
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td data-label="Listagem">Todas as empresas</td>
                      <td data-label="#">
                        <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/listagem_empresas`}>
                          <FiArrowRight color="#fff" size={17}/>
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td data-label="Listagem">5 clientes que mais consumiram em valor</td>
                      <td data-label="#">
                        <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/5valor`}>
                          <FiArrowRight color="#fff" size={17}/>
                        </Link>
                      </td>
                    </tr>

              </tbody>
            </table>
      </div>
    </div>
  )
}