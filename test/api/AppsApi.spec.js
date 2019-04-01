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
    instance = new FnJs.AppsApi();
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

  describe('AppsApi', function() {
    describe('createApp', function() {
      it('should call createApp successfully', function(done) {
        //uncomment below and update the code to test createApp
        //instance.createApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApp', function() {
      it('should call deleteApp successfully', function(done) {
        //uncomment below and update the code to test deleteApp
        //instance.deleteApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApp', function() {
      it('should call getApp successfully', function(done) {
        //uncomment below and update the code to test getApp
        //instance.getApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApps', function() {
      it('should call listApps successfully', function(done) {
        //uncomment below and update the code to test listApps
        //instance.listApps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateApp', function() {
      it('should call updateApp successfully', function(done) {
        //uncomment below and update the code to test updateApp
        //instance.updateApp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
