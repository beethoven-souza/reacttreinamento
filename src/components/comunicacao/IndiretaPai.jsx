import React, {useState} from "react";
import IndiretaFilho from './IndiretaFilho'

export default props => {
    
    let nome = '?'
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nome, idade, nerd)
    }

    return(
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar = {fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}