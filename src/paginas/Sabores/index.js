import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import './style.css'

export default function Sabores() {
    return (
        <div>
            <Topo />

            <main>
                <section className="secao-banner-sabores">
                    <div className="titulo-secao-sabores">
                        <h1>Nossos Sabores</h1>
                    </div>
                </section>

                <section className="limitar-secao secao-sabores">
                    <h2>Sabores de Sorvete</h2>

                    <div className="container-sorvetes">
                        <div className="box-sorvete">
                            <img src="assets/sabor-oreo.png" alt="sorvete oreo"/>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>

                        <div className="box-sorvete">
                            <img src="assets/sabor-pistache.png" alt="sorvete pistache"/>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>

                        <div className="box-sorvete">
                            <img src="assets/sabor-cookies-avela.png" alt="sorvete cookies e avelã"/>
                            <h3>Sorvete Cookies e Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>

                        <div className="box-sorvete">
                            <img src="assets/sorbet-kiwi.png" alt="sorvete kiwi"/>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>

                        <div className="box-sorvete">
                            <img src="assets/sorbet-morango.png" alt="sorvete morango"/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>

                        <div className="box-sorvete">
                            <img src="assets/sorbet-limao.png" alt="sorvete limão"/>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Rodape />
        </div>
    )
}