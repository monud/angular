angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){
  var ddo = {};

  ddo.restric = "AE";

  ddo.scope = {
    titulo : '@'
  };

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/meu-painel.html';
return ddo;
})
.directive('minhaFoto', function(){
    var ddo = {};

    ddo.restric = "AE";

    ddo.scope = {
      titulo : '@',
      url : '@'
    };

    ddo.template =
    '<img class="img-responsive center-block" src="{{url}}"alt="{{titulo}}">';

    return ddo;
})
.directive('meuBotaoPerigo', function(){
  var ddo = {};
  ddo.restric = "E";

  ddo.scope = {
    acao : '&',
    nome : '@'
  };

  ddo.template =
  '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

  return ddo;
})
.directive('meuFocus', function() {
  var ddo = {};
  ddo.restric = "A";
  
  ddo.link = function(scope,element) {
    scope.$on('fotoCadastrada',function() {
      element[0].focus();
    });
  };

  return ddo;
})
