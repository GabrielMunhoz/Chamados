<?php
    class Emp {
        public $id;
        public $nome_emp;
        public $ende;
        public $cnpj;

        function __construct($id, $nome_emp, $ende,$cnpj){
            $this->id = $id;
            $this->nome_emp = $nome_emp;
            $this->ende = $ende;
            $this->cnpj = $cnpj;
            
        }
    }
?>