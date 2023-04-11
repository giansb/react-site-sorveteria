import React from "react";
import ComponenteTopo from "../../componentes/Topo";
import './style.css';
import ComponenteRodape from "../../componentes/Rodape";

const PaginaSobre = () => (
    <><><ComponenteTopo /><main>
        <section className='secao-banner banner3'>
            <h1>A GELATERIA</h1>
        </section>
        <div className="limita-secao">
            <section className="sobre-secao-sobre margem">
                <div className=" tag-metade-cont cont-sobre">
                    <h2>SOBRE NÓS</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </div>
            </section>
            <section className="secao-imagem-cont secao-margem">
                <img className="secao-tag-metade" src="..\assets\sobre-image.jpg"></img>
                <img className="secao-tag-metade" src="..\assets\sorveteria.jpg"></img>
            </section>
        </div>
    </main></><ComponenteRodape /></>
);

export default PaginaSobre;