class EmpHTTPService{

    constructor(){
        this.uri = "http://localhost:8080/Emp";
    }

    insere(emp,ok, error){
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 201) {
                return ok;                
          }
          else if(this.status != 201){
              return error (this.satatus);
          }
        };
        xhttp.open("POST", this.uri, true);
        xhttp.setRequestHeader("Content-type","application/json");
        xhttp.send(JSON.stringify(emp));
    
      }

      deletar(id){ 
        var self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 201) {
            self.alert("Deletado: " + id);
            self.limparFormulario();
            self.loadDoc();
          }
        };
        var xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", this.uri+"/"+id, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(id));
    
      }
      loadDoc() {
        var self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           var emp = (JSON.parse(this.responseText));
          }
        };
        xhttp.open("GET", this.uri, true);
        xhttp.send();
      }
}