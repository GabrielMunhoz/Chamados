<?php
    class Tec {
        public $id;
        public $nome;
        public $cargo;

        function __construct($id, $nome, $cargo){
            $this->id = $id;
            $this->nome = $nome;
            $this->cargo = $cargo;
        }
    }
?>