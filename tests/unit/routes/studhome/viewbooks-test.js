import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | studhome/viewbooks', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:studhome/viewbooks');
    assert.ok(route);
  });
});
