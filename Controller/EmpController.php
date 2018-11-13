<?php
    include_once 'Models/Emp.php';
    include_once 'DAO/EmpDAO.php';
    
    class EmpController{
        
        public function listar($request, $response,$args){
            $dao = new EmpDAO;    
            $array_Emps = $dao->listar();        
            
            $response = $response->withJson($array_Emps);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function buscarPorId($request, $response,$args){
            $id = $args['id'];
            
                $dao = new EmpDAO;    
                $Emp = $dao->buscarPorId($id);  
                
                $response = $response->withJson($Emp);
                $response = $response->withHeader('Content-type', 'application/json');    
                return $response;
        }
        public function inserir($request, $response,$args){
            $var = $request->getParsedBody();
            $Emp = new Emp(0, $var['nome_emp'], $var['ende'],$var['cnpj']);
        
            $dao = new EmpDAO;    
            $Emp = $dao->inserir($Emp);
        
            $response = $response->withJson($Emp);
            $response = $response->withHeader('Content-type', 'application/json');    
            $response = $response->withStatus(201);
            return $response;
        }
        public function atualizar($request, $response,$args){
            $id = $args['id'];
            $var = $request->getParsedBody();
            $Emp = new Emp($id, $var['nome_emp'], $var['ende'],$var['cnpj']);
        
            $dao = new EmpDAO;    
            $dao->atualizar($Emp);
        
            $response = $response->withJson($Emp);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function deletar($request, $response,$args){
            $id = $args['id'];
            
                $dao = new EmpDAO; 
                $Emp = $dao->buscarPorId($id);   
                $dao->deletar($id);
            
                $response = $response->withJson($Emp);
                $response = $response->withHeader('Content-type', 'application/json');    
                return $response;
            
            
        }


    }