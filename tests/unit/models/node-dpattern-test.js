import Ember from 'ember';

import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('node-dpattern', {
  // Specify the other units that are required for this test.
  needs: ['model:grid-node']
});

test('it exists', function(assert) {
  var model = this.subject({ 
    svgenv: Ember.Object.create()
  });
  // var store = this.store();
  assert.ok(!!model);
});

test('set template name', function(assert) {
  var model = this.subject({ 
    id: 'foobar',
    svgenv: Ember.Object.create()
  });

  assert.equal(model.get('template'), 'dpatterns/foobar');
});
