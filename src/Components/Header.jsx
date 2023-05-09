import {Link} from 'react-router-dom';
import style from '../css/Header.module.css';
import Logo from '../img/Logo3.png';

export default function Header(){
    return(
        <div>
            <header>
                <Link to='/'>
                    <img src={Logo} alt="Logo MonBanks" className={style.Logo}/>
                </Link>
                <nav>
                    <ul className={style.list_centro}>
                        <Link to='/' className={style.link}><li>Início</li></Link>
                        <Link to='/Vantagens' className={style.link}><li>Vantagens</li></Link>
                        <Link to='/Duvidas' className={style.link}><li>Dúvidas</li></Link>
                    </ul>
                    <ul className={style.list_direita}>
                        <Link to='/Login'><button className={style.login}>Login</button></Link>
                        <Link to='/Cadastro'><button className={style.cadastro}>Abrir conta</button></Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}