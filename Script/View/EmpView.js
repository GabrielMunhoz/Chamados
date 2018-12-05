class EmpView{
    constructor(selForm, selTabela){

        this.seletorFormulario = selForm;
        this.seletorTabela = selTabela;
    }
    montarTabela(emp) {
        
        var tabela = document.querySelector(this.seletorTabela);
        tabela.innerHTML = this.exemploTabela(emp);
    }
    del(id){
        console.log(id);
    }
    exemploTabela(listaEmp){

        return `<table class = "table"> 
                    <thead class="thead-dark">
                        <th scope="col">#</th>
                        <th scope="col">NOME</th>
                        <th scope="col">ENDEREÇO</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">FUNÇÕES</th>
                    </thead>
                    <tbody>
                        ${listaEmp.map(emp =>
                            `<tr >
                                <td scope="row">${emp.id}</td>
                                <td scope="row">${emp.nome_emp}</td>
                                <td scope="row">${emp.ende}</td>
                                <td scope="row">${emp.cnpj}</td>
                                <td scope="row"><button class="btn btn-danger" id="deletar" onclick="console.log(${this})">Deletar</button></td>
                            </tr>
                            `).join('')}    
                    <tbody>
                </table>`;
    }
}