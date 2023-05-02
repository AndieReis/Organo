import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


export const Formulario = (props) => {

    // ******extraído para o APP js ou elevado o estado*********
    // const times = [ //array com as options (itens)
    //     '',
    //     "Bastos",
    //     "Cruz",
    //     "Reis",
    //     "Silva",
    //     "SerHumaninhos"
    // ]
    // *****************************************

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState ('')
  
    
    const aoSalvar = (evento) => { //função que recebe o proprio evento como parametro
        evento.preventDefault() //prevenir o comportamento padrão de reload 
        props.aoColaboradorCadastrado({  //objeto javascritp {}
            nome,
            cargo,
            imagem,
            time,
        })
      
        //vamos "forçar" limpar os campos do input ao clicar no botão
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='formulario'>
            {/* Na própria tag adicionamos o evento de ouvir o submit e executar a funcao */}
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o card do seu familiar</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    //como vamos apenas setar o valor não precisa extrair para 1 função
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" placeholder="Digite o sua cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario