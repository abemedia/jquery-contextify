(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  QUnit.module('jQuery#contextify', {
    // This will run before each test in this module.
    beforeEach: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  QUnit.test('is chainable', function(assert) {
    assert.expect(1);
    // Not a bad test to run on collection methods.
    assert.strictEqual(this.elems.contextify({items:[{divider:true}]}), this.elems, 'should be chainable');
  });

}(jQuery));
