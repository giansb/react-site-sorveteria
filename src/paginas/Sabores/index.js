import React from 'react';
import ComponenteTopo from '../../componentes/Topo';
import './style.css';
import ComponenteRodape from '../../componentes/Rodape';

const PaginaSabores = () => (
    <><><ComponenteTopo /><main>
        <section className='secao-banner banner2'>
            <h1>NOSSOS SABORES</h1>
        </section>
        <div className='limita-secao'>
            <section className='sabores'>
                <h2>SABORES DE SORVETE</h2>
                <div className='sabores-boxes'>
                    <div className='sabor-box'>
                        <img src='..\assets\sabor-oreo.png'></img>
                        <div className='sabor-box-cont'>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo.</p>
                            <p>Uma explosão de sabor.</p>
                        </div>
                    </div>
                    <div className='sabor-box'>
                        <img src='..\assets\sabor-pistache.png'></img>
                        <div className='sabor-box-cont'>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                    </div>
                    <div className='sabor-box'>
                        <img src='..\assets\sabor-cookies-avela.png'></img>
                        <div className='sabor-box-cont'>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                    </div>
                    <div className='sabor-box'>
                        <img src='..\assets\sorbet-kiwi.png'></img>
                        <div className='sabor-box-cont'>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                    </div>
                    <div className='sabor-box'>
                        <img src='..\assets\sorbet-morango.png'></img>
                        <div className='sabor-box-cont'>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet.</p>
                            <p>Tradicional e saboroso.</p>
                        </div>
                    </div>
                    <div className='sabor-box'>
                        <img src='..\assets\sorbet-limao.png'></img>
                        <div className='sabor-box-cont'>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main></><ComponenteRodape /></>
);

export default PaginaSabores;