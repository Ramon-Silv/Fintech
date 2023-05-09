import style from '../css/Cadastro.module.css';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";

export default function Cadastro(){
    return(
        <div className={style.container}>
            <section className={style.cad}>
                <div className={style.back}>
                    <Link to='/'><BsArrowLeft className={style.voltar}/></Link>
                    <p>Abra sua Conta Digital MonBanks</p>    
                </div>
                <form>
                    <label className={style.label_cad}>Nome</label><br />
                    <input type='text' placeholder='Digite seu nome' className={style.label_input}/>
                    <br /> <br />
                    <label className={style.label_cad}>Telefone</label><br />
                    <input type="tel" placeholder='Digite seu telefone' className={style.label_input}/>
                    <br /><br />
                    <label className={style.label_cad}>E-mail</label><br />
                    <input type="email" placeholder="Digite seu e-mail" className={style.label_input}/>
                    <br /><br />
                    <label className={style.label_cad}>CPF</label><br />
                    <input type="text" placeholder="Digite seu CPF" maxLength="14" className={style.label_input}/>
                    <br /><br />
                    <label className={style.label_cad}>Data de Nascimento</label><br />
                    <input type="text" placeholder="Digite sua data de nascimento" className={style.label_input}/>
                    <div className={style.aceito}>
                        <input type="checkbox" name="aceitar"/>
                        <p>Autorizo o banco MonBanks a tratar meus dados pessoais e também estou de acordo com a Política de Privacidade.</p>
                    </div>
                    <div className={style.continue}>
                        <input type="submit" value="Continuar" />
                        <p>Pronto? Agora <a href="https://www.linkedin.com/in/ramon-silva-/"><span>Baixe o App</span></a></p>
                    </div>
                </form>
            </section>
        </div>
    )
}