angular.module( 'LibreDate.poll', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'poll', {
    url: '/poll',
    views: {
      "main": {
        controller: 'PollCtrl',
        templateUrl: 'poll/poll.tpl.html'
      }
    },
    data:{ pageTitle: 'Poll' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'PollCtrl', function HomeController( $scope ) {
  var mockPoll = [
    new Date(2014, 01, 02),
    new Date(2014, 01, 03),
    new Date(2014, 01, 04),
    new Date(2014, 01, 05)
  ];
  $scope.poll = {
    title: "This is the title",
    dates: mockPoll,
    users: []
  };
  $scope.addUser = function () {
    user = {
      name: "Unnamed",
      votes: mockPoll.map(function (date) {
        return {
          date: date,
          result: false
        };
      })
    };
    $scope.poll.users.push(user);
  };

  $scope.getDateTotal = function (i) {
   return $scope.poll.users.reduce(function(previous, user){
      return previous + (user.votes[i].result ? 1 : 0);
   }, 0);
  };
})

;

