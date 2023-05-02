import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
            {/* adicionamos uma option vazia para quando limpar o formulário ela vir me branco também */}
            <option value={""}></option> 
                {/* função para cada item que recebe como parâmetro, retornar uma opção */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
                {/* map   arrow function (parametro > option Chave (key) do item ) nome do parâmetro */}
            </select>
        </div>
    )
}

export default ListaSuspensa;

//map percorre todo o array, executa e retorna os itens manipulados (outra coisa), transforma em algo diferente
//Ao contrário do ForEach que apenas percorre o array e não retorna nada, só itera a lista 