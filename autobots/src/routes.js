import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

import Clientes from './pages/Clientes';
import Cliente from './pages/Editar/cliente';

import Produtos from './pages/Produtos';
import Produto from './pages/Editar/produto';
import AddProdutos from './pages/Add/produto';

import Genero from './pages/Listagens/genero';
import CincoValor from './pages/Listagens/5valor';
import DezMais from './pages/Listagens/10mais';
import DezMenos from './pages/Listagens/10menos';

export default function RoutesApp(){
  return(
    <Routes>
      <Route exact path="/" element={ <SignIn/> } />
      <Route exact path="/dashboard" element={ <Dashboard/> } />
      
      <Route exact path="/clientes" element={ <Clientes/> } />
      <Route exact path="/clientes/:id" element={ <Cliente/> } />
      
      <Route exact path="/produtos" element={ <Produtos/> } />
      <Route exact path="/produtos/:id" element={ <Produto/> } />

      <Route exact path="/adicionar_produtos/:id" element={ <AddProdutos/> } />

      <Route exact path="/genero" element={ <Genero/> } />
      <Route exact path="/5valor" element={ <CincoValor/> } />
      <Route exact path="/10mais" element={ <DezMais/> } />
      <Route exact path="/10menos" element={ <DezMenos/> } />
    
    </Routes>
  )
}
