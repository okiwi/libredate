describe('PollCtrl', function() {
  beforeEach( module( 'LibreDate.poll' ));
  var scope, ctrl;
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('PollCtrl', {$scope: scope});
  }));

  it('scope has the poll dates', inject(function() {
    expect(scope.poll.dates.length).toBe(4);
    expect(scope.poll.title).toBe("This is the title");
  }));
  it('can add a user', inject(function() {
    expect(scope.poll.users.length).toBe(0);
    scope.addUser();
    expect(scope.poll.users.length).toBe(1);
    expect(scope.poll.users[0].name).toBe("Unnamed"); 
  }));
  it('can calculate date totals', function()  {
    scope.addUser();
    scope.poll.users[0].votes[0].result = true;
    expect(scope.getDateTotal(0)).toBe(1);
  });
});

