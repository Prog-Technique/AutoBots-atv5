import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';

import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';

export default function Servico(){
  const { id } = useParams();
  const navigate = useNavigate();

  const [nomeServico, setNomeServico] = useState('');
  const [precoServico, setPrecoServico] = useState('');
  const [idServico, setIdServico] = useState(false);

  useEffect(()=> {
    async function loadServicos(){

    }

    loadServicos();
  }, [id]);

  async function loadId(lista){
 
  }

  async function handleRegister(e){
    e.preventDefault();

  }

  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Editar">
          <FiEdit color="#8b8da5" size={25}/>
        </Title>

        <div className="container">

          <form className="forms" onSubmit={handleRegister} >
            
            <label>Serviço</label>
            <input
              type="text"
              value={nomeServico}
              onChange={ (e) => setNomeServico(e.target.value) }
            />

            <input
              type="text"
              value={precoServico}
              onChange={ (e) => setPrecoServico(e.target.value) }
            />

            <button type="submit" className="buttons" >Salvar</button>

          </form>
          
        </div>

      </div>
    </div>
  )
}