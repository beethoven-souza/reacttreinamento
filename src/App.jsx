import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import './App.css'
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default () =>(
    <div className='App'>
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo = "#08 - Renderização Condicional" color = "#982395">
                    <ParOuImpar numero = {21}></ParOuImpar>
                    <UsuarioInfo usuario = {{nome : 'Fernando'}}></UsuarioInfo>
                </Card>

                <Card titulo = "#07 - Tabela Produtos" color = "#202E15">
                    <TabelaProdutos></TabelaProdutos>
                </Card> 

                <Card titulo = "#06 - Repetição" color = "#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card> 

                <Card titulo = "#05 - Componentes com filhos" color = "#7575a3">
                    <Familia sobrenome = "Ferreira">
                        <FamiliaMembro nome = "Pedro" />
                        <FamiliaMembro nome = "Gistavo" />
                        <FamiliaMembro nome = "Pedro" />
                    </Familia>
                </Card> 

                <Card titulo = "#04 - Desafio Aleatório" color = "#00cc7a">
                    <NumeroAleatorio min = {10} max = {60}/>
                </Card> 

                <Card titulo = "#03 - Fragmento" color = "#ff4da6">
                    <Fragmento/>
                </Card> 

                <Card titulo = "#02 - Componente com paramentro" color = "#4d88ff">
                    <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!"/>
                </Card>   

                <Card titulo = "#01 - Primeiro Componente" color = "#669999">
                    <Primeiro></Primeiro>
                </Card> 
            </div>            
        </div>
)