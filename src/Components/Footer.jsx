import style from '../css/Footer.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import Logo_branca from '../img/logo-branca.png';

export default function Footer(){
    return(
        <div>
            <footer>
                <div className={style.plataforma}>
                    <div className={style.direitos}>
                        <img src={Logo_branca} alt="Logo" className={style.Logo}/>
                        <p>MonBanks © 2023 | Todos os direitos reservados <br /></p> 
                    </div>
                    <div className={style.plataforma1}>
                            <span>Início</span>
                            <ul>
                                <li>Conta Digital</li>
                                <li>Cartão</li>
                                <li>Baixe o App</li>
                                <li>Mon Banks</li>
                                <li>Dúvidas</li>
                            </ul>
                    </div>
                    <div className={style.plataforma1}>
                            <span>Central de Ajuda</span>
                            <ul>
                                <li>Canais de atendimento</li>
                                <li>SAC</li>
                                <li>Relacionamento</li>
                                <li>Ouvidoria</li>
                            </ul>
                    </div>
                    <div className={style.redes}>
                                <span>Redes sociais</span>
                                <br />
                                <IconContext.Provider value={{ className: style.icons_container }}>

                                    <a href="https://www.instagram.com/mon.silv/"><FaInstagram /></a> 
                                    <a href="https://www.linkedin.com/in/ramon-silva-/"><FaLinkedin /></a> 
                                    <a href="https://github.com/Ramon-Silv"><FaGithub /></a> 
                                    
                                </IconContext.Provider>
                    </div>
                </div>
                <div className={style.termos}>
                    <div className={style.endereco}>
                        <p>R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000</p>
                    </div>
                    <hr />
                    <ul>
                        <li>Termos de Uso</li>
                        <li>Política de Privacidade</li>
                        <li>Segurança Cibernética</li>
                        <li>Cookies que Utilizamos</li>
                    </ul>
                </div>
            </footer>
            
        </div>
    )
}