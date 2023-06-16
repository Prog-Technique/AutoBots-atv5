import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

import CadastrarCliente from './pages/Cadastro/Usuario';
import Cliente from './pages/Editar/cliente';
import TodosClientes from './pages/Listagens/usuarios';

import CadastrarEmpresa from './pages/Cadastro/Empresa';
import TodasEmpresas from './pages/Listagens/empresas';

import CadastrarVeiculo from './pages/Cadastro/Veiculo';
import TodosVeiculos from './pages/Listagens/veiculos';

import CadastrarServico from './pages/Cadastro/Servico';
import TodosServicos from './pages/Listagens/servicos';

import CadastrarMercadoria from './pages/Cadastro/Mercadoria';
import TodasMercadorias from './pages/Listagens/mercadorias';

import CadastrarVenda from './pages/Cadastro/Venda';
import TodasVendas from './pages/Listagens/vendas';


export default function RoutesApp(){
  return(
    <Routes>
      <Route exact path="/" element={ <SignIn/> } />
      <Route exact path="/dashboard" element={ <Dashboard/> } />
      
      <Route exact path="/cliente" element={ <CadastrarCliente/> } />
      <Route exact path="/clientes/:id" element={ <Cliente/> } />
      <Route exact path="/listagem_clientes" element={ <TodosClientes/> } />
      
      <Route exact path="/empresa" element={ <CadastrarEmpresa/> } />
      <Route exact path="/listagem_empresas" element={ <TodasEmpresas/> } />
      
      <Route exact path="/veiculo" element={ <CadastrarVeiculo/> } />
      <Route exact path="/listagem_veiculos" element={ <TodosVeiculos/> } />
      
      <Route exact path="/servico" element={ <CadastrarServico/> } />
      <Route exact path="/listagem_servicos" element={ <TodosServicos/> } />

      <Route exact path="/mercadoria" element={ <CadastrarMercadoria/> } />
      <Route exact path="/listagem_mercadorias" element={ <TodasMercadorias/> } />

      <Route exact path="/venda" element={ <CadastrarVenda/> } />
      <Route exact path="/listagem_vendas" element={ <TodasVendas/> } />
    
    </Routes>
  )
}
