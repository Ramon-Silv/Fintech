import Vantagens from './Vantagens';
import {Link} from 'react-router-dom';
import style from '../css/Home.module.css';
import Blob from '../img/img-principal.png';


export default function Home(){
    return(
            <div className={style.container}>
                <section className={style.first}>
                    <div className={style.div_texto}>
                        <h1>Digitalize suas <br /> <span>finanças</span></h1>
                        <ul>
                            <li>Rápido, fácil e ainda tem cashback</li>
                            <li>Rendimento maior que a poupança</li>
                            <li>Cartão MonBanks sem anuidade</li>
                        </ul>
                        <Link to='/Cadastro'><button>Quero ser MonBanks</button></Link>
                    </div>
                    <img src={Blob} alt="App MonBanks" />
                    
                </section>

                <Vantagens/>

                <section className={style.fifth}>
                    <h2>Conta gratuita com total transparência</h2>
                    <p>O banco que entende o seu mundo.</p>
                    <Link to='/Cadastro'><button>Abrir conta</button></Link>
                </section>
            </div>
    )
}