angular.module('alurapic')
.controller('FotonovaController',function($scope, $http,recursoFt,
  cadastroFt,$routeParams){

  $scope.foto = {};
  $scope.mensagem = '';

  if ($routeParams.fotoId) {
     $http.get('v1/fotos/' + $routeParams.fotoId)
     .success(function(foto) {
       $scope.foto = foto;
     })
     .error(function(erro) {
       $scope.mensagem = 'Não foi possível obter o ID da foto';
       console.log(erro);
     });
   }

  //  Foi criado o meu serviço "recursoFt" de meus-servicos para substituir
  //  o código abaixo
  //  var recursoFt = $resource('v1/fotos/:fotoId',null,{
  //    update : {
  //      method : 'PUT'
  //    }
  //  });

  $scope.submeter = function() {
  			if ($scope.formulario.$valid) {
          //Código atualizado para receber o serviço cadastroFt
          // if ($scope.foto._id) {
          //   // $http.put('v1/fotos/'+ $scope.foto._id, $scope.foto)
          //   // .success(function(){
          //   //    $scope.mensagem = 'A foto ' + $scope.foto.titulo +
          //   //      ' foi alterada com sucesso';
          //   // })
          //   // .error(function(erro){
          //   //     $scope.mensagem = 'Não foi possível alterar a foto';
          //   //     console.log(erro);
          //   // });
          //   recursoFt.update({fotoId : $scope.foto._id}, $scope.foto,function() {
          //     $scope.mensagem = 'A foto ' + $scope.foto.titulo +
          //       ' foi alterada com sucesso';
          //   },function(erro) {
          //     $scope.mensagem = 'Não foi possível alterar a foto';
          //     console.log(erro);
          //   });
          // }// fim if $scope.foto._id
          // else{
          //
    			// 	// $http.post('/v1/fotos', $scope.foto)
    			// 	// .success(function() {
    			// 	// 	$scope.foto = {};
    			// 	// 	$scope.mensagem = 'Foto cadastrada com sucesso';
    			// 	// })
    			// 	// .error(function(erro) {
    			// 	// 	console.log(erro);
    			// 	// 	$scope.mensagem = 'Não foi possível cadastrar a foto';
    			// 	// });
          //
          //   recursoFt.save($scope.foto, function() {
          //     $scope.foto = {};
    			// 		$scope.mensagem = 'Foto cadastrada com sucesso';
          //   }, function(erro) {
          //     console.log(erro);
    			// 		$scope.mensagem = 'Não foi possível cadastrar a foto';
          //   });
          //
          // }// fim else $scope.foto._id
          cadastroFt.cadastrar($scope.foto)
          .then(function(dados) {
            $scope.mensagem = dados.mensagem;
            if (dados.inclusao) $scope.foto = {};

          }).catch(function(dados) {
            $scope.mensagem = dados.mensagem;
          });

  			}// fim if $scope.formulario.$valid
  		};
});
