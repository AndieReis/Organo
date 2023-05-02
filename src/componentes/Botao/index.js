import './Botao.css'

const Botao = (props) => {
    return (<button className='botao'>
    {props.children} 
    {/* propriedade children vai receber os filhos do botao (texto/gif/img) */}
    </button>)
}

export default Botao