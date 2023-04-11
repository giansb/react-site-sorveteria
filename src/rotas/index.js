import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaHome from "../paginas/Home";
import PaginaSabores from "../paginas/Sabores";
import PaginaSobre from "../paginas/Sobre";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element = {<PaginaHome/>}/>
            <Route path='/sabores' element = {<PaginaSabores/>}/>
            <Route path='/sobre' element = {<PaginaSobre/>}/>
        </Routes>
    </BrowserRouter>
);

export default Rotas;