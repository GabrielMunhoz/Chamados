class EmpHTTPService{

    constructor(){
        this.uri = "http://localhost:8080/Emp";
    }

    insere(emp,ok, error){
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 201) {
                 ok();                
          }
          else if(this.status != 201){
               error (this.status);
          }
        };
        xhttp.open("POST", this.uri, true);
        xhttp.setRequestHeader("Content-type","application/json");
        xhttp.send(JSON.stringify(emp));
    
      }

      deletar(id, ok, error){ 
        var self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 201) {
            ok();
          }else if(this.status !== 201){
            error(this.status);
        };
        var xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", this.uri+"/"+id, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(id));
      }
      }
      loadDoc(ok, error) {
        var self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            ok(JSON.parse(this.responseText));                
        }
        else if(this.status !== 200){
            error(this.status);
        }
        };
        xhttp.open("GET", this.uri, true);
        xhttp.send();
      }
}