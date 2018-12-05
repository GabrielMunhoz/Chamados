class EmpController{
    constructor(){
        this.service = new EmpHTTPService();
        this.view = new EmpView("#form","#table");
    }

    del(id){ 
        console.log("Entrei deletar" + id);
        var self = this;
        const ok = function(){
          console.log("Documento Deletado com sucesso");
          self.limparFormulario();
          self.montaView();
        }

        const erro = function(status){
          console.log("Erro: "+ status);
        }

      this.service.deletar(id, ok, erro);
      
    }
     salvarEmp(event){
        event.preventDefault();
        var self = this;
        var emp = new Emp();
        emp.nome_emp = $("#nome_emp").val();
        
        emp.ende = $("#ende").val();
        
        emp.cnpj =  $("#cnpj").val();
        console.log(emp);

        const ok=function(){
          console.log("Entrei");
          self.limparFormulario();
          self.montaView();
        }

        const erro = function(status){
          console.log("Erro: "+ status);
        }

        this.service.insere(emp, ok, erro);
    }
    
      limparFormulario(){
          document.querySelector("#nome_emp").value="";
          document.querySelector("#ende").value="";
          document.querySelector("#cnpj").value="";
    }

    montaView(event){
      const self = this;
        const ok = function(emp){
            console.log("Carrega Tabela");
            self.view.montarTabela(emp);
           // document.querySelector("#table").addEventListener("click",self.del);
        }
        const erro = function(status){
            console.log("Error: "+status);
        }

        this.service.loadDoc(ok, erro);

    }
    
  //   monta(emp){
  //     console.log("Emp: "+emp);
  //     //limpa a table para reinserir os valores
  //     var table1 =$("#table");
  //     table1.empty()
      
  //     var div =$("#table");
  //     //cria table
  //     var table = $("<table></table>").attr("class","table");
  //     //cria cabecalho table
  //     var thead = $("<thead></thead>").attr("class","thead-dark");
  //     //cria linha dentro do thead
  //     var tr1 = $("<tr></tr>");
  //     //valores para inserir na table
  //     var nome =["#","NOME EMPRESA","ENDEREÇO","CNPJ","FUNCÕES"];
  //     //cria uma linha para cada valor
  //     for(var i in nome){
  //       var th = $("<th></th>").attr("scope","col");
  //       th.append(nome[i]);
  //       tr1.append(th);
  //     }
  //     //atribui as linhas ao cabecalho
  //     thead.append(tr1);
  //     //atribui cabecalho a table
  //     table.append(thead);
  //     var cont = 0;
  //     for(var ind in emp){
  //       var tr = $("<tr></tr>").attr("id",cont++);

  //       var td1 = $("<td></td>").attr("id",1);
  //       td1.append(emp[ind].id);

  //       var td2 = $("<td></td>").attr("id",1);
  //       td2.append(emp[ind].nome_emp);

  //       var td3 = $("<td></td>").attr("id",1);
  //       td3.append(emp[ind].ende).attr("id",1);

  //       var td4 = $("<td></td>").attr("id",1);
  //       td4.append(emp[ind].cnpj);

  //       var td5 = $("<td></td>").attr("id",1).attr("scope","col");
  //       var button = $("<button></button>").attr("class","btn btn-danger").attr("id","deletar").attr("onclick","deletar("+emp[ind].id+")");
  //       button.append("Deletar");
  //       td5.append(button);

  //       tr.append(td1);
  //       tr.append(td2);
  //       tr.append(td3);
  //       tr.append(td4);
  //       tr.append(td5);
  //       table.append(tr);
  //       div.append(table);
  //     }
  // }

  // empController = new EmpController();
  // form = document.getElementById("for").addEventListener("submit",empController.salvarEmp.bind(empController));
}

