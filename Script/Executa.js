let empController = new EmpController;

$("body").ready(empController.loadDoc());

document.querySelector("#for").addEventListener("submit", empController.salvarEmp.bind(empController));




















// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      monta(JSON.parse(this.responseText));
//     }
//   };
//   xhttp.open("GET", "http://localhost:8080/Emp", true);
//   xhttp.send();
// }
 

// function monta(emp){
//     console.log(emp);
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
//   }
//   function limparFormulario(){
//     document.querySelector("#nome_emp").value="";
//     document.querySelector("#ende").value="";
//     document.querySelector("#cnpj").value="";

// }
//   let empController = new EmpController();
//   var form = document.getElementById("for").addEventListener("submit",empController.salvarEmp.bind(empController));


//   function deletar(id){ 
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 201) {
//         alert("Deletado: " + id);
//         limparFormulario();
//         loadDoc();
//       }
//     };
//     var xhttp = new XMLHttpRequest();
//     xhttp.open("DELETE", "http://localhost:8080/Emp/"+id, true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send(JSON.stringify(id));

//   }
