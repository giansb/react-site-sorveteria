import React from "react";
import './style.css';

export default function ComponenteRodape() {
    return (
        <footer>
        <div className="rodape-boxes">
            <img className="logo" src="../assets/logo.png"></img>
            <div className="rodape-box">
                <h3>ENDEREÇO</h3>
                <p>Av.Bernardinho de Campos,98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div className="rodape-box">
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel:(11) 3456-7890</p>
            </div>
            <div className="rodape-box">
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>
        <div className="credits">
            <p>Gelateria. Orgulhosamente desenvolvida por GianSB</p>
        </div>
    </footer>
    );
}

