/// <reference path="angular.min.js"/>

var myApp = angular.module("myModule", []);    // module creation

var myController = myController = function($scope) {    // controller creation

    var languages = [
        {name: "C#", likes: 0, dislikes: 0},
        {name: "Java", likes: 0, dislikes: 0},
        {name: "Python", likes: 0, dislikes: 0},
        {name: "Angular", likes: 0, dislikes: 0}
    ];
    $scope.languages = languages;

    $scope.incrementLikes = function(language) {
        language.likes++;
    }

    $scope.incrementDislikes = function(language) {
            language.dislikes++;
        }
};

// register controller with module...parameters: name and controller function
myApp.controller("myController", myController);