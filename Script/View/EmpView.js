class EmpView{
    constructor(controller, selTabela, outros){

        this.controller = controller;
        this.seletorTabela = document.querySelector(selTabela);
        this.outrosel = document.querySelector(outros);
    }
    montarTabela(emp) {
        
       this.exemploTabela(emp);
    }
    exemploTabela(listaEmp){
        var str1 =`<li class="nav-item" id="novo">
        <a class="nav-link" href="#">Cadastrar Empresa</a>
      </li>`
        str1+= `<li class="nav-item" id="busca">
        <a class="nav-link" href="#">Buscar Empresa</a>
      </li>`;
        var str = `<table class = "table"> 
                    <thead class="thead-dark">
                        <th scope="col">#</th>
                        <th scope="col">NOME</th>
                        <th scope="col">ENDEREÇO</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">FUNÇÕES</th>
                    </thead>
                    <tbody>
                        ${listaEmp.map(emp =>
                            `<tr id=${emp.id}>
                                <td scope="row" >${emp.id}</td>
                                <td scope="row">${emp.nome_emp}</td>
                                <td scope="row">${emp.ende}</td>
                                <td scope="row">${emp.cnpj}</td>
                                <td scope="row"><a class="deletar" href="#">Deletar</a> 
                                                <a class="editar" href="#">Editar</a></td>
                            </tr>
                            `).join('')}    
                    <tbody>
                </table>`;
                var cad = this.outrosel;
                cad.innerHTML = str1;            
                var tabela = this.seletorTabela;
                tabela.innerHTML = str;
                
                const linkNovo = document.querySelector("#novo");
                linkNovo.addEventListener("click",this.controller.carregaFormulario.bind(this.controller));
                const linkBusca = document.querySelector("#busca");
                linkBusca.addEventListener("click",this.controller.carregaFormulariob.bind(this.controller));

                const linksDelete = document.querySelectorAll(".deletar");
                for(let linkDelete of linksDelete)
                {
                    const id = linkDelete.parentNode.parentNode.id;
                    linkDelete.addEventListener("click",this.controller.deletarEmp.bind(this.controller,id));
                }
                const linksEdit = document.querySelectorAll(".editar");
                for(let linkEdit of linksEdit)
                {
                    const id = linkEdit.parentNode.parentNode.id;
                    linkEdit.addEventListener("click",this.controller.carregaFormularioComEmp.bind(this.controller,id));
                 }
       
    }
    
}