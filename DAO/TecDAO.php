<?php
    include_once 'Models/Tec.php';
	include_once 'PDOFactory.php';

    class TecDAO
    {
        public function inserir(Tec $Tec)
        {
            $qInserir = "INSERT INTO tec(nome,cargo) VALUES (:nome,:cargo)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":nome",$Tec->nome);
            $comando->bindParam(":cargo",$Tec->cargo);
            $comando->execute();
            $Tec->id = $pdo->lastInsertId();
            return $Tec;
        }

        public function deletar($id)
        {
            $qDeletar = "DELETE from tec WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id",$id);
            $comando->execute();
        }

        /*
        id
        nome
        cargo */
        public function atualizar(Tec $Tec)
        {
            $qAtualizar = "UPDATE tec SET nome=:nome, cargo=:cargo WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":nome",$Tec->nome);
            $comando->bindParam(":cargo",$Tec->cargo);
            $comando->bindParam(":id",$Tec->id);
            $comando->execute();        
        }

        public function listar()
        {
		    $query = 'SELECT * FROM tec';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $tec=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $tec[] = new Tec($row->id,$row->nome,$row->cargo);
            }
            return $tec;
        }

        public function buscarPorId($id)
        {
 		    $query = 'SELECT * FROM tec WHERE id=:id';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id', $id);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Tec($result->id,$result->nome,$result->cargo);           
        }
    }
?>