<?php
    include_once 'Models/Tec.php';
    include_once 'DAO/TecDAO.php';
    
    class TecController{
        
        public function listar($request, $response,$args){
            $dao = new TecDAO;    
            $array_Tecs = $dao->listar();        
            
            $response = $response->withJson($array_Tecs);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function buscarPorId($request, $response,$args){
            $id = $args['id'];
            
                $dao = new TecDAO;    
                $Tec = $dao->buscarPorId($id);  
                
                $response = $response->withJson($Tec);
                $response = $response->withHeader('Content-type', 'application/json');    
                return $response;
        }
        public function inserir($request, $response,$args){
            $var = $request->getParsedBody();
            $Tec = new Tec(0, $var['nome'], $var['cargo']);
        
            $dao = new TecDAO;    
            $Tec = $dao->inserir($Tec);
        
            $response = $response->withJson($Tec);
            $response = $response->withHeader('Content-type', 'application/json');    
            $response = $response->withStatus(201);
            return $response;
        }
        public function atualizar($request, $response,$args){
            $id = $args['id'];
            $var = $request->getParsedBody();
            $Tec = new Tec($id, $var['nome'], $var['cargo']);
        
            $dao = new TecDAO;    
            $dao->atualizar($Tec);
        
            $response = $response->withJson($Tec);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function deletar($request, $response,$args){
            $id = $args['id'];
            
                $dao = new TecDAO; 
                $Tec = $dao->buscarPorId($id);   
                $dao->deletar($id);
            
                $response = $response->withJson($Tec);
                $response = $response->withHeader('Content-type', 'application/json');    
                return $response;
            
            
        }


    }