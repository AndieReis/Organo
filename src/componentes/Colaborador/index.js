import './Colaborador.css'


// ************************************************************************
// Outra forma de fazer (bem comum) é desestruturar o objeto (props)

const Colaborador = ({ nome, imagem, idade, corDeFundo }) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'> 
            <h4>{nome}</h4>
            <h5>{idade}</h5>
        </div>
    </div>)
}

export default Colaborador

// const Colaborador = (props) => {
//     return (<div className='colaborador'>
//         <div className='cabecalho'>
//             <img src={props.imagem} alt={props.nome} />
//         </div>
//         <div className='rodape'> 
//             <h4>{props.nome}</h4>
//             <h5>{props.idade}</h5>
//         </div>
//     </div>)
// }

// export default Colaborador







// ****************************************************************************************
// Dumb componente ou componente bobo

// Não tem comportamento apenas recebe/exibe alguma informação
// ****************************************************************************************