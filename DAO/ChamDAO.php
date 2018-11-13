<?php
    include_once 'Models/Cham.php';
	include_once 'PDOFactory.php';

    class ChamDAO

    
    {
        public function inserir(Cham $Cham)
        {
            $qInserir = "INSERT INTO cham($id,$cod_cli,$cod_tec,$data_i,$data_f) VALUES (:id,:cod_cli,:cod_tec,:data_i,:data_f)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":id",$Cham->id);
            $comando->bindParam(":cod_cli",$Cham->cod_cli);
            $comando->bindParam(":cod_tec",$Cham->cod_tec);
            $comando->bindParam(":data_i",$Cham->data_i);
            $comando->bindParam(":data_f",$Cham->data_f);
            $comando->execute();
            $Cham->id = $pdo->lastInsertId();
            return $Cham;
        }

        public function deletar($id)
        {
            $qDeletar = "DELETE from cham WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id",$id);
            $comando->execute();
        }
        
        public function atualizar(Cham $Cham)
        {
            $qAtualizar = "UPDATE cham SET cod_cli=:cod_cli, cod_tec=:cod_tec,data_i=:data_i,data_f=:data_f WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":cod_cli",$Cham->cod_cli);
            $comando->bindParam(":cod_tec",$Cham->cod_tec);
            $comando->bindParam(":id",$Cham->id);
            $comando->bindParam(":data_i",$Cham->data_i);
            $comando->bindParam(":data_f",$Cham->data_f);
            $comando->execute();        
        }
        /*public $id;
        public $cod_cli;
        public $cod_tec;
        public $data_i;
        public $data_f; */
        public function listar()
        {
		    $query = 'SELECT * FROM Cham inner join tec on(cham.cod_tec = tec.id) inner join emp on(cham.cod_cli = emp.id)';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $Cham=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $Cham[] = new Cham($row->id,$row->nome_emp,$row->nome,$row->data_i,$row->data_f);
            }
            return $Cham;
        }

        public function buscarPorId($id)
        {
 		    $query = 'SELECT * FROM Cham inner join tec on(cham.cod_tec = tec.id) inner join emp on(cham.cod_cli = emp.id) WHERE cham.id=:id';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id', $id);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Cham($result->id,$result->nome,$result->cargo);           
        }
    }
?>