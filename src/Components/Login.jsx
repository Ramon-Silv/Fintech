import style from '../css/Login.module.css';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";

export default function Login(){
    return(
        <div className={style.container}>
            <section className={style.login}>
                <div className={style.back}>
                    <Link to='/'><BsArrowLeft className={style.voltar}/></Link>
                    <p>Para fazer seu login, digite seu CPF e sua senha</p>    
                </div>
                <form>
                    <label>CPF:</label><br />
                    <input type='text' maxLength="11" /><br />
                    <span>*Use apenas números</span>
                    <br /> <br />
                    <label>Senha:</label><br />
                    <input type="password"/>
                    <div>
                        <input type="submit" value="Entrar" />
                    </div>
                    
                </form>
            </section>
        </div>
    )
}