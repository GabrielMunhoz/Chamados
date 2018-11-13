<?php
    include_once ('Emp.php');
    include_once ('Tec.php');
    class Cham {
        public $id;
        public $cod_cli;
        public $cod_tec;
        public $data_i;
        public $data_f;

        function __construct($id, $cod_cli, $cod_tec, $data_i,$data_f){
            $this->id = $id;
            $this->cod_cli = $cod_cli;
            $this->cod_tec = $cod_tec;
            $this->data_i = $data_i;
            $this->data_f = $data_f;
        }
    }
?>