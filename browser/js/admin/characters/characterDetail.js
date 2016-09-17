app.config(function($stateProvider){
  $stateProvider.state('adminCharacterDetail', {
    url: '/admin/character/:id',
    templateUrl: 'js/admin/characters/characterDetail.html',
    controller: 'AdminCharacterDetailCtrl',
    resolve: {
      character: function(characterFactory, $stateParams){
        return characterFactory.getById($stateParams.id);
      }
    }

  })
})

app.controller('AdminCharacterDetailCtrl', function($scope, $state, characterFactory, character){
  $scope.character = character;
  $scope.removeCharacter = function(){
    return characterFactory.removeChar(character.id).then(() => $state.go('adminCharacters'));
  }
});