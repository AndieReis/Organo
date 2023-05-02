import './Rodape.css'

const Rodape = () => {
    return(

        <footer className='footer'>
            <section>
          <ul>
            <li>
                <a href="facebook.com" target="_blank" >
                    <img src="/imagens/fb.png" alt="Icone do Facebook" />
                </a>
            </li>            
          </ul>

           <ul>
            <li>
                <a href="twitter.com" target="_blank" >
                    <img src="./imagens/tw.png" alt="Icone do Twitter" />
                </a>
            </li>            
          </ul>

           <ul>
            <li>
                <a href="instagram.com" target="_blank" >
                    <img src="./imagens/ig.png" alt="Icone do Instagram" />
                </a>
            </li>            
          </ul>
          </section>  
          <section>
            <img src='/imagens/logo.png' />
          </section>

          <section>
            <p>Desenvolvido por Alura.</p>
          </section>
          
        </footer>


    )
}

export default Rodape