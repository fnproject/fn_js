/**
 * IronFunctions
 * The open source serverless platform.
 *
 * OpenAPI spec version: 0.1.29
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorBody', 'model/Route'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorBody'), require('./Route'));
  } else {
    // Browser globals (root is window)
    if (!root.OracleFunctions) {
      root.OracleFunctions = {};
    }
    root.OracleFunctions.RoutesWrapper = factory(root.OracleFunctions.ApiClient, root.OracleFunctions.ErrorBody, root.OracleFunctions.Route);
  }
}(this, function(ApiClient, ErrorBody, Route) {
  'use strict';




  /**
   * The RoutesWrapper model module.
   * @module model/RoutesWrapper
   * @version 0.1.29
   */

  /**
   * Constructs a new <code>RoutesWrapper</code>.
   * @alias module:model/RoutesWrapper
   * @class
   * @param routes {Array.<module:model/Route>} 
   */
  var exports = function(routes) {
    var _this = this;

    _this['routes'] = routes;

  };

  /**
   * Constructs a <code>RoutesWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoutesWrapper} obj Optional instance to populate.
   * @return {module:model/RoutesWrapper} The populated <code>RoutesWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('routes')) {
        obj['routes'] = ApiClient.convertToType(data['routes'], [Route]);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorBody.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Route>} routes
   */
  exports.prototype['routes'] = undefined;
  /**
   * @member {module:model/ErrorBody} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));

