import React from "react";
import ComponenteTopo from "../../componentes/Topo";
import ComponenteRodape from "../../componentes/Rodape";
import './style.css';

const PaginaHome = () => (
    <><><ComponenteTopo />
        <main>
            <section className="secao-banner">
                <div>
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>
            <div className="limita-secao secao-margem">
            <section className="secao-imagem-cont">
                <img className="secao-tag-metade" src="..\assets\banner-sabores.jpg"></img>
                <div className="secao-tag-metade tag-metade-cont">
                    <h2>nossos sabores</h2>
                    <span>Novos e deliciosos!</span>
                    <p>Sorvete bom é aquele feito com os melhores igredientes! Aqui na gelateria todos os nossos produtos são naturais, á base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>
            <section className="secao-imagem-cont">
            <img className="secao-tag-metade img-small" src="..\assets\eventos-image.jpg"></img>
                <div className="secao-tag-metade tag-metade-cont">
                    <h2>Nossos eventos</h2>
                    <span>Delicias com sorvete!</span>
                    <p> Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </div>
                <img className="secao-tag-metade img-big" src="..\assets\eventos-image.jpg"></img>
            </section>
            <section className="secao-imagem-cont">
                <img className="secao-tag-metade" src="..\assets\sobre-image.jpg"></img>
                <div className="secao-tag-metade tag-metade-cont">
                    <h2>Sobre nós</h2>
                    <span>Alegria em casa casquinha!</span>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                </div>
            </section>
            </div>
        </main></><ComponenteRodape /></>
    
);

export default PaginaHome;