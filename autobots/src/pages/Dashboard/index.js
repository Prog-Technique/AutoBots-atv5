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
                      <td data-label="Listagem">Todos os clientes por gênero</td>
                      <td data-label="#">
                        <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/genero`}>
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

                    <tr>
                      <td data-label="Listagem">10 clientes que mais consumiram produtos ou serviços, em quantidade</td>
                      <td data-label="#">
                        <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/10mais`}>
                          <FiArrowRight color="#fff" size={17}/>
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td data-label="Listagem">10 clientes que menos consumiram produtos ou serviços</td>
                      <td data-label="#">
                        <Link className="action" style={{backgroundColor: '#F6a935'}} to={`/10menos`}>
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