$(document).ready(    
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       monta(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "http://localhost:8080/Emp", true);
    xhttp.send();
  });

 

function monta(emp){
    console.log(emp);
    var cont = 0;
    var table = $("#table1");
    for(var ind in emp){
      var tr = $("<tr></tr>").attr("id",cont++);

      var td1 = $("<td></td>").attr("id",1);
      td1.append(emp[ind].id);

      var td2 = $("<td></td>").attr("id",1);
      td2.append(emp[ind].nome_emp);

      var td3 = $("<td></td>").attr("id",1);
      td3.append(emp[ind].ende).attr("id",1);

      var td4 = $("<td></td>").attr("id",1);
      td4.append(emp[ind].cnpj);

      var td5 = $("<td></td>").attr("id",1).attr("scope","col");
      var button = $("<button></button>").attr("class","btn btn-danger").attr("id","deletar").attr("onclick","deletar("+emp[ind].id+")");
      button.append("Deletar");
      td5.append(button);

      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tr.append(td5);
      table.append(tr);
    }
  }
  function limparFormulario(){
    document.querySelector("#nome_emp").value="";
    document.querySelector("#ende").value="";
    document.querySelector("#cnpj").value="";

}

  var form = document.getElementById("for");
  form.onsubmit = function(event){
    event.preventDefault();
    var emp = {};
    emp.nome_emp = $("#nome_emp").val();
    
    emp.ende = $("#ende").val();
    
    emp.cnpj =  $("#cnpj").val();
    insere(emp);
  }


  function insere(emp){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 201) {
        alert("Empresa Cadastrada com sucesso!");
        limparFormulario();
        monta(JSON.parse(this.responseText));
      }
    };
    xhttp.open("POST", "http://localhost:8080/Emp", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify(emp));

  }
  function deletar(id){
    alert("Deletado: " + id);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        limparFormulario();
        monta(JSON.parse(this.responseText));
      }
    };
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:8080/Emp/"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(id));

  }
