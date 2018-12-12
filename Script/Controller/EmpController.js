class EmpController{
    constructor(){
        this.service = new EmpHTTPService();
        this.view = new EmpView(this,"main","#aqui");
        this.formview = new FormEmp(this,"main");

    }
    deletarEmp(id, event){
      event.preventDefault();
      console.log("Entrei: "+id);    
      const self = this;
      this.service.deletar(id, 
          () => {
              self.montaView();
          },
          (status) => console.log(status)
      );
    }
    salvarEmp(event){
      event.preventDefault();
  
      let emp = this.formview.getDataEmp();
      
      const self = this;

      this.service.insere(emp, 
          () => {
              self.formview.limparFormulario();
              self.montaView();
          },
          (status) => console.log(status)
      );
  }
    editarEmp(id,event){
      event.preventDefault();

      let emp = this.formview.getDataEmp();
      
      const self = this;

      this.service.atualizarEmp(id,emp, 
          () => {
              self.formview.limparFormulario();
              self.montaView();
          },
          (status) => console.log(status)
      );
  }  
    buscaEmp(id,event){
      console.log("Estou busca Emp");
      event.preventDefault();
      console.log("Entrei" + id);
      this.carregaFormularioComEmp(id,event);
  }

    montaView(event){
      const self = this;
        const ok = function(emp){
            console.log("Carrega Tabela");
            self.view.montarTabela(emp);
        }
        const erro = function(status){
            console.log("Error: "+status);
        }

        this.service.loadDoc(ok, erro);

    }
    
    carregaFormulario(event){
      event.preventDefault();
      console.log("Estou"+JSON.stringify(event));
      this.formview.montarForm();              
    }

    carregaFormulariob(event){
      event.preventDefault();
      console.log("Estoub"+JSON.stringify(event));
      this.formview.montarFormb();              
    }
    
    carregaFormularioComEmp(id, event){
      event.preventDefault();             
      console.log("Entrei"+id);
      const self = this;
      const ok = function(emp){
          self.formview.montarForm(emp);
      }
      const erro = function(status){
          console.log(status);
      }

      this.service.buscarEmp(id,ok,erro);   
    }
}

