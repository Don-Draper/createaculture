angular.module('app.categories', ['app.checklist-model'])

.controller('categoriesController', function($scope, Categories) {
  $scope.data;
// $scope is the intermediary between what the user sees and the
// factory. $scope methods grab from the factory and display it
// via html
  $scope.choices = []; 

  $scope.workable = [];

  $scope.getAll = function() {
    Categories.getCategories().then(function(data){
      $scope.data = data;
      for(var i = 0; i < data.length; i ++){
        $scope.workable.push(data[i].name); 
      }
      for(var i = 0; i < $scope.workable.length; i ++) {
        $scope.obj[$scope.workable[i]] = data[i].beliefs;
      }
    }).catch(function(err) {
      console.log(err);
    })
  };

  // $scope.check = $scope.choices.length;

  // $scope.checkChanged = function(item){
  //   if(item) $scope.checked++;
  //   else $scope.checked--;
  // }

  // $scope.limit = 3;
  // var item = items[Math.floor(Math.random()*items.length)];

  $scope.getAll();
  $scope.obj = {};

  $scope.primary = [];

  $scope.questionTwoDiv = false;
  $scope.sevenBeliefsDiv = false;

  $scope.sevenBeliefs = [];

  $scope.grabResponseAndShowQuestionTwo = function() {
    $scope.questionTwoDiv = true;
  }
  
  // Input

  // $scope.choices = ['Hope', 'Faith', 'Kindness'];
  // $scope.primary = ['Hope'];
  // $scope.obj = {
  //   'Hope': ['list of beliefs'],
  //   'Faith': ['list of beliefs'],
  //   'Perseverance': ['list of beliefs']
  // }

  // Output

  // ['four Hope beliefs', 'two Faith beliefs', 'One Kindness belief'];

  $scope.grabResponseAndShowBeliefs = function() {
    $scope.sevenBeliefsDiv = true;
    var index = $scope.choices.indexOf($scope.primary[0]);
    console.log(index);
    $scope.choices.unshift(($scope.choices.splice(index, 1))[0]);

    // console.log($scope.choices);

    while ($scope.sevenBeliefs.length < 4) {
      var arr = $scope.obj[$scope.choices[0]];
      var temp = arr[Math.floor(Math.random()*arr.length)];
      if(!$scope.sevenBeliefs.includes(temp)) {
        $scope.sevenBeliefs.push(temp);
      }
    }
    while ($scope.sevenBeliefs.length < 6) {
      var arr = $scope.obj[$scope.choices[1]];
      var temp = arr[Math.floor(Math.random()*arr.length)];
      if(!$scope.sevenBeliefs.includes(temp)) {
        $scope.sevenBeliefs.push(temp);
      }
    }
    while ($scope.sevenBeliefs.length < 7) {
      var arr = $scope.obj[$scope.choices[2]];
      var temp = arr[Math.floor(Math.random()*arr.length)];
      if(!$scope.sevenBeliefs.includes(temp)) {
        $scope.sevenBeliefs.push(temp);
      }
    }
  }

  // var item = items[Math.floor(Math.random()*items.length)];


});