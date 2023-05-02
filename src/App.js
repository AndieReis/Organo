
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    //esse array será uma lista de objetos {} cada um para um time
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
   ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //vamos pegar o array antigo (colaboradores) e colocar o novo colaborador no final 
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>      
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
{/* 
    Iteração=  para cada time dentro da lista [de times] crie um componente nome time time.nome */}
    {/* passa para dentro do map 1º parametro(time) e recebo => time.nome (prop) */}
        {times.map(time => <Time 
        key={time.nome}
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        //método filter para filtrar o time (dropbox) arrow para setar no card certo
        colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
        />)}
    {/* props com as propriedades dos itens, do lado esquerdo = é o nome da prop / eu escolho */}
      
        <Rodape />
    </div>
  );
}

export default App;
