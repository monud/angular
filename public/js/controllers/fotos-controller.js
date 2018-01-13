angular.module('alurapic').controller("FotosController", function ($scope,recursoFt) {
   $scope.fotos = [
      //  {
      //    titulo: 'Leão',
      //    url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
      // },
  ]
  $scope.filtro='';
  // var promise = $http.get('v1/fotos');
  // promise.then(function(retorno){
  //   $scope.fotos = retorno.data;
  // }).catch(function(error){
  //   console.log(error);
  // });
  $scope.mensagem='';

  //Código abaixo melhorado pelo $resource
  // $http.get('v1/fotos')
  // .success(function(fotos){
  //   $scope.fotos = fotos;
  // })
  // .error(function(erro){
  //   console.console.log(erro);
  // });

  //   $http.delete('v1/fotos/' + foto._id)
  //   .success(function() {
  //     var indiceFt = $scope.fotos.indexOf(foto);
  //     $scope.fotos.splice(indiceFt,1);
  //     $scope.mensagem="A foto " + foto.titulo + "foi excluida com sucesso";
  //   })
  //   .error(function(erro) {
  //     $scope.mensagem="Foto não foi excluida, ocorreu um erro";
  //     console.log("Foto não foi excluida, ocorreu um erro");
  //   });
  // };
  // Código substituido pelo serviço "recursoFt" de meus-servicos
  //var recursoFt = $resource('v1/fotos/:fotoId');

  //Exibir o conteúdo na página
  recursoFt.query(function(fotos) {
    $scope.fotos = fotos;
  }, function(erro) {
    console.console.log(erro);
  });

  $scope.remover = function(foto){
    recursoFt.delete({fotoId:foto._id}, function(){
      var indiceFt = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFt,1);
      $scope.mensagem = "A foto " + foto.titulo + " foi excluida com sucesso";
    }, function(erro){
      $scope.mensagem = "Foto não foi excluida, ocorreu um erro";
      console.log("Foto não foi excluida, ocorreu um erro");
    });
  };

});
