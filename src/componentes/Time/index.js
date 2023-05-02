import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
        const css = {background: props.corSecundaria}

        return( //tudo que está no return é JSX é uma linha só de código
        //vamos colocar uma condicional para mostrar apenas os times que tem colaboradores
        //se colaboradores for maior que zero && retornar a section colaborador 
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className='colaboradores'>

                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} nome={colaborador.nome} key={colaborador.nome} idade={colaborador.idade} imagem={colaborador.imagem} />)}
                
            </div>
        </section>
    )

    // *******outra maneira de escrever (e mais comum) é na mesma linha do objeto abrir chaves e declarar a variável js*********
    //     return(
    //         <section className='time' style={{backgroundColor: props.corSecundaria }}>
    //             <h3>{props.nome}</h3>
    //         </section>
    //     )
    // ****************************************************************************************    

}

export default Time 