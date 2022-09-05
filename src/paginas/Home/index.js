import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

export default function Home() {
    return (
        <div>
            < Topo/>

            <main>
                <section>
                    <div>
                        <h1>Sorveteria Artesanal</h1>
                    </div>
                </section>

                <section>
                    <img src="assets/banner-sabores.jpg" alt="sabores sorvetes"/>

                    <div>
                        <h2>Nossos Sabores</h2>
                        <span>Novos e deliciosos!</span>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na Gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </div>
                </section>

                <section>
                    <div>
                        <h2>Nossos Eventos</h2>
                        <span>Delícias com sorvete!</span>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </div>

                    <img src="assets/eventos-image.jpg" alt="eventos gelateria"/>
                </section>

                <section>
                    <img src="assets/sobre-image.jpg"/>

                    <div>
                        <h2>Sobre Nós</h2>
                        <span>Alegria em cada casquinha!</span>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
                </section>
            </main>

            <Rodape />
        </div>
    )
}