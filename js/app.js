(function() {
  'use strict';

  angular.module('app', [])
  .controller('AppController', AppController);

  function AppController() {
    var vm = this;
    vm.posts = generateFakeData();


    function generateFakeData() {
      var posts = [];
      for (var i = 0; i < 30; i++) {
        posts.push({
          title: randomString(randomInteger(10, 50)),
          source: randomString(randomInteger(3, 15)) + '.com',
          points: randomInteger(100, 1000),
          submitter: randomString(randomInteger(3, 10)),
          submittedAt: new Date() - randomInteger(0, 1000000),
          numberOfComments: randomInteger(0, 700)
        });
      }

      return posts;
    }

    function randomString(length) {
      var sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
      var sampleLength = sample.length;
      var result = "";
      for (var i = 0; i < length; i++) {
        result += sample[Math.floor(Math.random() * sampleLength)];
      };

      return result;
    }

    function randomInteger(min, max) {
      var min = min || 0;
      var max = max || 30;
      return Math.floor(Math.random() * max) + min;
    }
  }
})();
