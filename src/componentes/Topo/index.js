import React from "react";
import { Link } from "react-router-dom";
import './style.css';


const ComponenteTopo = () => (
    <header>
        <div className="limita-secao">
            <div className="cabecalho">
                <div>
                    <img className="logo" src="../assets/logo.png"></img>
                </div>
                <nav>
                    <Link className="link-topo" to='/'>Home</Link>
                    <Link className="link-topo" to='/sabores'>Sabores</Link>
                    <Link className="link-topo" to='/sobre'>Sobre</Link>
                </nav>
            </div>

        </div>
    </header>
);

export default ComponenteTopo;