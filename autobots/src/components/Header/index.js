import './header.css';
import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';
import { FiHome, FiLogOut, FiBriefcase, FiClipboard, FiArchive } from "react-icons/fi";
import { MdPeopleOutline, MdDirectionsCar } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";

export default function Header() {

    return (
        <div className="sidebar">
            <div>
                <img src={logo} alt="AutoBot logo" />
            </div>

            <div className='normal'>
                <Link to="/dashboard">
                    <FiHome color="#fff" size={25} /> Início
                </Link>

                <Link to={`/cliente`}>
                    <MdPeopleOutline color="#fff" size={25} /> Usuário
                </Link>

                <Link to={`/empresa`}>
                    <FiBriefcase color="#fff" size={25} /> Empresa
                </Link>

                <Link to={`/veiculo`}>
                    <MdDirectionsCar color="#fff" size={25} /> Veículo
                </Link>

                <Link to={`/servico`}>
                    <FiClipboard color="#fff" size={25} /> Serviço
                </Link>

                <Link to={`/mercadoria`}>
                    <FiArchive color="#fff" size={25} /> Mercadoria
                </Link>

                <Link to={`/venda`}>
                    <FaRegCreditCard color="#fff" size={25} /> Venda
                </Link>
            </div>

            <div className='service'>
                <Link to="/dashboard"> MENU </Link>

                <div className='dropdown'>
                    <Link to="/dashboard"> Início </Link>

                    <Link to={`/cliente`}> Usuário </Link>

                    <Link to={`/empresa`}> Empresa </Link>

                    <Link to={`/veiculo`}> Veículo </Link>

                    <Link to={`/servico`}> Serviço </Link>

                    <Link to={`/mercadoria`}> Mercadoria </Link>

                    <Link to={`/venda`}> Venda </Link>
                </div>
            </div>

            <Link to="/" className='logOut'>
                <FiLogOut color="#fff" size={25} /> Sair
            </Link>
        </div>
    )
}