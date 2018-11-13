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
    
    var table = $("#table1");
    for(var ind in emp){
      var tr = $("<tr></tr>");

      var td1 = $("<td></td>");
      td1.attr=("id",1);
      td1.append(emp[ind].id);

      var td2 = $("<td></td>");
      td2.attr=("id",2);
      td2.append(emp[ind].nome_emp);

      var td3 = $("<td></td>");
      td3.attr=("id",3);
      td3.append(emp[ind].ende);

      var td4 = $("<td></td>");
      td4.attr=("id",4);
      td4.append(emp[ind].cnpj);

      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      table.append(tr);
    }
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
        monta(JSON.parse(this.responseText));
      }
    };

    console.log(emp);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/Emp", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(emp));

  }
