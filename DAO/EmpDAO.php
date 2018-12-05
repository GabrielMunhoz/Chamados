<?php
    include_once 'Models/Emp.php';
	include_once 'PDOFactory.php';

    class EmpDAO
    {
        /*id
        nome_emp
        ende
        cnpj
        */
        public function inserir(Emp $Emp)
        {
            $qInserir = "INSERT INTO emp(nome_emp,ende,cnpj) VALUES (:nome_emp,:ende,:cnpj)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":nome_emp",$Emp->nome_emp);
            $comando->bindParam(":ende",$Emp->ende);
            $comando->bindParam(":cnpj",$Emp->cnpj);
            $comando->execute();
            $Emp->id = $pdo->lastInsertId();
            return $Emp;
        }

        public function deletar($id)
        {
            $qDeletar = "DELETE from emp WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id",$id);
            $comando->execute();
        }

         /*id
        nome_emp
        ende
        cnpj
        */
        public function atualizar(Emp $Emp)
        {
            $qAtualizar = "UPDATE Emp SET nome_emp=:nome_emp, ende=:ende,cnpj=:cnpj WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":id",$Emp->id);
            $comando->bindParam(":nome_emp",$Emp->nome_emp);
            $comando->bindParam(":ende",$Emp->ende);
            $comando->bindParam(":cnpj",$Emp->cnpj);
            $comando->execute();        
        }
        /*id
        nome_emp
        ende
        cnpj
        */
        public function listar()
        {
		    $query = 'SELECT * FROM Emp order by id';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $Emp=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $Emp[] = new Emp($row->id,$row->nome_emp,$row->ende,$row->cnpj);
            }
            return $Emp;
        }

        public function buscarPorId($id)
        {
 		    $query = 'SELECT * FROM Emp WHERE id=:id';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id', $id);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Emp($result->id,$result->nome_emp,$result->ende,$result->cnpj);           
        }
    }
?>