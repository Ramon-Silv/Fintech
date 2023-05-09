import style from '../css/Home.module.css';
import {Link} from 'react-router-dom';
import Pix from '../img/pix.png';
import card1 from '../img/card1.svg';
import card2 from '../img/card2.svg';
import card3 from '../img/card3.svg';
import card4 from '../img/card4.svg';
import woman from '../img/woman-monbanks.png';
import {BsCurrencyDollar} from "react-icons/bs";
import {BiTrendingUp} from "react-icons/bi";

export default function Vantagens(){
    return(
        <div className={style.container}>
            <section className={style.second}>
                    <div className={style.escolha_melhor}>
                        <h2> <span>MonBanks</span> <br /> sua melhor escolha</h2>
                    </div>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <BsCurrencyDollar className={style.icons}/>
                            <span>Conta completa</span>
                            <p>Sem taxa de abertura e nem de manutenção.</p>
                        </div>
                        <div className={style.card}>
                            <img src={Pix} alt="Pix" />
                            <span>Pix</span>
                            <p>Pagamentos instantâneos e gratuitos na sua conta digital.</p>
                        </div>
                        <div className={style.card}>
                            <BiTrendingUp className={style.icons}/>
                            <span>Plataforma de investimentos</span>
                            <p>Investimento de acordo com seus objetivos.</p>
                        </div>
                    </div>
                </section>

                <section className={style.fourth}>
                    <div className={style.fourth_1}>
                        <h2>Venha para a conta digital <span>MonBanks</span>, a conta que valoriza o seu dinheiro</h2>
                        <p>Tudo o que você precisa de um banco em um só App.</p>
                    </div>
                    <div className={style.fourth_2}>
                        <img src={woman} alt="App MonBanks" />
                    </div>
                </section>

                <section className={style.third}>
                    <div class={style.containerCarta}>
                        <img src={card4} className={style.carta}/>
                        <img src={card3} className={style.carta}/>
                        <img src={card2} className={style.carta}/>
                        <img src={card1} className={style.carta}/>
                    </div>
                    <div className={style.texto_third}>
                        <h2>Um cartão diferente e <br /> <span>zero anuidade</span> para você!</h2>
                        <p>Com o Cartão MonBanks, você encontra tudo o que precisa para suas finanças e ainda ganha dinheiro de volta!</p>
                        <p>Mais vantagens para você comprar como, quando e onde quiser.</p>
                        <p>Peça já o seu cartão.</p>
                        <Link to='/Cadastro'><button>Quero meu cartão</button></Link>
                    </div>
                </section>
        </div>
    )
}