class FormEmp{
    constructor(controller, seletor){
        this.controller = controller;
        this.FormEmp = document.querySelector(seletor);
    }
    montarForm(emp){
        if(!emp){
            emp = new Emp();
        } 
        var str = `<form id="for">
            <table class = "table"> 
            <thead class="thead-dark">
                <th scope="col">#</th>
                <th scope="col">NOME</th>
                <th scope="col">ENDEREÇO</th>
                <th scope="col">CNPJ</th>
                <th scope="col">FUNÇÃO</th>
            </thead>
            <tbody>
                <tr type="hidden" id="idEmp" value="${emp.id}">
                <td>#</td>
                <td scope="row"><input type="text" id="nome" value="${emp.nome_emp ?emp.nome_emp:''}"/></td>
                <td scope="row"><input type="text" id="ende" value="${emp.ende ?emp.ende:''}"/></td>
                <td scope="row"><input type="number" id="cnpj" value="${emp.cnpj ?emp.cnpj:''}"/></td>
                <td scope="row"><button class="btn btn-primary" type="submit" >Enviar</button>&nbsp
                <button class="btn btn-primary" type="submit" id="botaocancelar">Cancelar</button></td>
                </tr>
            </table>    
        </form>`
        this.FormEmp.innerHTML = str;

            let elForm = document.querySelector("#for");
            if(!emp.id){
                elForm.addEventListener("submit",this.controller.salvarEmp.bind(this.controller));
            }
            else {
                elForm.addEventListener("submit",this.controller.editarEmp.bind(this.controller, emp.id));
            }
            const botaocancelar = document.querySelector("#botaocancelar");
            botaocancelar.addEventListener("click",this.controller.montaView.bind(this.controller));
    }
    montarFormb(emp){
        if(!emp){
            emp = new Emp();
        } 
        var str = `<form id="for">
            <table class = "table"> 
            <thead class="thead-dark">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">ID</th>
                <th scope="col"></th>
                <th scope="col">FUNÇÃO</th>
            </thead>
            <tbody>
                <tr type="hidden">
                <td>#</td>
                <td scope="row"></td>
                <td scope="row"><input type="text" id="idEmp1" value="${emp.id ?emp.id:''}"/></td>
                <td scope="row"></td>
                <td scope="row"><button class="btn btn-primary" type="submit" >Enviar</button>&nbsp
                <button class="btn btn-primary" type="submit" id="botaocancelar">Cancelar</button></td>
                </tr>
            </table>    
        </form>`
        this.FormEmp.innerHTML = str;

            let elForm = document.querySelector("#for");
                elForm.addEventListener("submit",this.controller.carregaFormularioComEmp.bind(this.controller,26));
            
            const botaocancelar = document.querySelector("#botaocancelar");
            botaocancelar.addEventListener("click",this.controller.montaView.bind(this.controller));
  }
    limparFormulario(){
        document.querySelector("#nome").value="";
        document.querySelector("#ende").value="";
        document.querySelector("#cnpj").value="";
    }
    getDataEmp(){
        let emp = new Emp();
        if(!document.querySelector("#idEmp").value)
            emp.nome_emp = document.querySelector("#nome").value;
            emp.ende = document.querySelector("#ende").value;
            emp.cnpj = document.querySelector("#cnpj").value;
        return emp;        
}
}