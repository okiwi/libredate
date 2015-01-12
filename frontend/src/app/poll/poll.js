angular.module( 'LibreDate.poll', [
  'ui.router',
  'plusOne',
  'pieSelect'
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

.service('PollService', function () {
  var mockPoll = [
    new Date(2014, 01, 02),
    new Date(2014, 01, 03),
    new Date(2014, 01, 04),
    new Date(2014, 01, 05)
  ];
  var poll = {
    id: 1,
    title: "This is the poll",
    dates: mockPoll,
    users: []
  };
  var id;
  return {
    getNewPoll()
    getPoll: function (pollId) {
      return $http.get('/poll/' + pollId)
    },
    getUser: function () {
      return {
        name: "Unnamed",
        votes: mockPoll.map(function (date) {
          return {
            date: date,
            result: optionsMap['?']
          };
        })
      };
    },
    save: function () {
      
      console.log(poll);
    }
  };
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'PollCtrl', function HomeController( $scope, $log, PollService ) {
  $scope.poll = PollService.getPoll(id);
  $scope.addUser = function () {
    $scope.poll.users.push(PollService.getUser());
  };
  $scope.savePoll = function () {
    PollService.save();
  };

  $scope.getDateTotal = function (i) {
   return $scope.poll.users.reduce(function(previous, user){
      return previous + (user.votes[i].result.short === "V" ? 1 : 0);
   }, 0);
  };
})

;

