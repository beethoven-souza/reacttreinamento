import React, {useState} from "react";
import IndiretaFilho from './IndiretaFilho'

export default props => {
    
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd){
       setNome(nome)
       setIdade(idade)
       setNerd(nerd)
    }

    return(
        <div>
            <div>Pai</div>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{nerd ? 'Verdadeirao' : 'Falso'}</span>
            <IndiretaFilho quandoClicar = {fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}