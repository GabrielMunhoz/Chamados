<?php
    include_once 'Models/Cham.php';
    include_once 'DAO/ChamDAO.php';
    
    class ChamController{
        
        public function listar($request, $response,$args){
            $dao = new ChamDAO;    
            $array_Chams = $dao->listar();        
            
            $response = $response->withJson($array_Chams);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function buscarPorId($request, $response,$args){
            $id = $args['id'];
            
                $dao = new ChamDAO;    
                $Cham = $dao->buscarPorId($id);  
                
                $response = $response->withJson($Cham);
                $response = $response->withHeader('Content-type', 'application/json');    
                return $response;
        }
        
        public function inserir($request, $response,$args){
            $var = $request->getParsedBody();
            $Cham = new Cham(0, $var['cod_cli'], $var['cod_tec'],$var['data_i'],$var['data_f']);
        
            $dao = new ChamDAO;    
            $Cham = $dao->inserir($Cham);
        
            $response = $response->withJson($Cham);
            $response = $response->withHeader('Content-type', 'application/json');    
            $response = $response->withStatus(201);
            return $response;
        }
        /*
        id
        cod_cli
        cod_tec
        data_i
        data_f
        */
        public function atualizar($request, $response,$args){
            $id = $args['id'];
            $var = $request->getParsedBody();
            $Cham = new Cham($id, $var['cod_cli'], $var['cod_tec'], $var['data_i'], $var['data_f']);
        
            $dao = new ChamDAO;    
            $dao->atualizar($Cham);
        
            $response = $response->withJson($Cham);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function deletar($request, $response,$args){
            $id = $args['id'];
            
                $dao = new ChamDAO; 
                $Cham = $dao->buscarPorId($id);   
                $dao->deletar($id);
            
                $response = $response->withJson($Cham);
                $response = $response->withHeader('Content-type', 'application/json');    
                return $response;
            
            
        }


    }