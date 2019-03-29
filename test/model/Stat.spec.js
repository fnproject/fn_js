/**
 * fn
 * The open source serverless platform.
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FnJs);
  }
}(this, function(expect, FnJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FnJs.Stat();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Stat', function() {
    it('should create an instance of Stat', function() {
      // uncomment below and update the code to test Stat
      //var instance = new FnJs.Stat();
      //expect(instance).to.be.a(FnJs.Stat);
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new FnJs.Stat();
      //expect(instance).to.be();
    });

    it('should have the property metrics (base name: "metrics")', function() {
      // uncomment below and update the code to test the property metrics
      //var instance = new FnJs.Stat();
      //expect(instance).to.be();
    });

  });

}));
