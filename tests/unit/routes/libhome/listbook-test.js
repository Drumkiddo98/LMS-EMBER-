import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | libhome/listbook', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:libhome/listbook');
    assert.ok(route);
  });
});
