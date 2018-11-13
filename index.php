<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
    
include_once 'Models/Tec.php';
include_once 'Models/Emp.php';
include_once 'Models/Cham.php';
include_once 'DAO/TecDAO.php';
include_once 'Controller/TecController.php';
include_once 'Controller/ChamController.php';
include_once 'Controller/EmpController.php';
require './vendor/autoload.php';

$app = new \Slim\App;

$app->group('/Tec',function(){
    $this->get('','TecController:listar');
    
    $this->get('/{id:[0-9]+}','TecController:buscarPorId');
    
    $this->post('','TecController:inserir');
    
    $this->put('/{id:[0-9]+}','TecController:atualizar');
    
    $this->delete('/{id:[0-9]+}','TecController:deletar');
});
$app->group('/Cham',function(){
    $this->get('','ChamController:listar');
    
    $this->get('/{id:[0-9]+}','ChamController:buscarPorId');
    
    $this->post('','ChamController:inserir');
    
    $this->put('/{id:[0-9]+}','ChamController:atualizar');
    
    $this->delete('/{id:[0-9]+}','ChamController:deletar');
});
$app->group('/Emp',function(){
    $this->get('','EmpController:listar');
    
    $this->get('/{id:[0-9]+}','EmpController:buscarPorId');
    
    $this->post('','EmpController:inserir');
    
    $this->put('/{id:[0-9]+}','EmpController:atualizar');
    
    $this->delete('/{id:[0-9]+}','EmpController:deletar');
});

$app->run();
?>