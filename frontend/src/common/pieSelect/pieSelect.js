var optionsMap = {
  '?':{class:'NC',short:'?',long:"Don't know"},
  'V':{class:'V',short:'V',long:"Yes"},
  '~':{class:'bof',short:'~',long:"Perhaps"},
  'X':{class:'X',short:'X',long:"No"}
};

angular.module('pieSelect',[])

.directive('pieSelect', function() {
  return {
    restrict: 'EA',
    require: '^ngModel',
    replace: true,
    scope: {
      ngModel: '='
    },
    template: '<div class="pie-select {{ngModel.class}}"><input type="button" class="status {{ngModel.class}}" ng-click="show()" ng-focus="show()" ng-keydown="preventDefault($event)" ng-keyup="keyUpdate($event)" value="{{ngModel.short}}"></input><div class="choiceSphere"><span title="Yes" class="V" ng-click="update(\'V\')"><a>V</a></span><span title="Perhaps" class="bof" ng-click="update(\'~\')"><a>~</a></span><span title="Don\'t know" class="NC" ng-click="update(\'?\')"><a>?</a></span><span title="No" class="X" ng-click="update(\'X\')"><a>X</a></span></div></div>',

    link: function(scope, element, attrs, ngModelCtrl){
//      scope.$watch('ngModel',function(v){
//        scope.setLabel();
//      },true);
      scope.update = function(e){
        scope.ngModel = optionsMap[e];
        element.removeClass('active');
      };
      scope.preventDefault = function(e){
        switch(e.keyCode){
          case 37: case 38: case 39: case 40:
            e.preventDefault();
        }
      };
      scope.keyUpdate = function(e){
        switch(e.keyCode){
          case 37: return scope.update('?');
          case 38: return scope.update('V');
          case 39: return scope.update('~');
          case 40: return scope.update('X');
        }
      };
      scope.show = function(){
        var tab = document.getElementsByClassName('pie-select');
        for (var i=0;i<tab.length;i++) {
          tab[i].classList.remove('active');
        }
        element.addClass('active');
      };
      scope.hide = function(){
        element.removeClass('active');
      };
    }
//    ,controller: ['$scope', function($scope) {}]
  };
});
