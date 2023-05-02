
import "./CampoTexto.css"
//componente React começa com Letra Maiúscula 
const CampoTexto = (props) => { //props é um nome usado para propriedades 

    const placeholderModificada = `${props.placeholder}...` 
    
    //use State é um rook (gancho)
    
    // *************parte transferida para formulario ou ELEVADO ao formulario*************
    // NÃO POSSO ALTERAR DIRETO NA ATRIBUIÇÃO, PRECISO PASSAR POR ESSA FUNÇÃO
    // const [valor, setValor] = useState ('')
    // me dá o valor em si e o setter (uma forma de alterar o valor) 
    //O CampoTexto vai delegar o controle dele ao Formulario
    // **************************************************************************************

    //ao ser digitado o valor é capturado
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
       
    }
    
    //value está atrelado ao estado e quando o estado muda o REACT sabe que precisa reenderizar novamente  
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )

}

export default CampoTexto