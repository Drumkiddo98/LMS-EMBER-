import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | libhome/addstudent', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:libhome/addstudent');
    assert.ok(route);
  });
});
