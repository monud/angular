angular.module('meusServicos',['ngResource'])
.factory('recursoFt',function($resource){
  return $resource('v1/fotos/:fotoId',null,{
    update : {
      method : 'PUT'
    }
  });
})
.factory('cadastroFt', function(recursoFt,$q,$rootScope){

  var servico = {};
  var evento = 'fotoCadastrada';
  servico.cadastrar = function(foto) {
    return $q(function(resolve,revert) {
      if (foto._id) {
        recursoFt.update({fotoId : foto._id}, foto , function() {
          $rootScope.$broadcast(evento);
          resolve({
            mensagem:  'A foto ' + foto.titulo +
              ' foi alterada com sucesso',
            inclusao : false
          });
        }, function(erro) {
          console.log(erro);
          reject({
            mensagem : 'Não foi possível alterar a foto'
          });
        });
      } else {
        recursoFt.save(foto, function() {
          $rootScope.$broadcast(evento);
          resolve({
            mensagem : 'Foto cadastrada com sucesso',
            inclusao : true
          });
        }, function(erro) {
          console.log(erro);
          reject({
            mensagem : 'Não foi possível cadastrar a foto'
          });
        });
      }
   });
 };

  return servico;
});
