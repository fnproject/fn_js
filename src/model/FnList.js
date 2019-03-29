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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Fn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Fn'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.FnList = factory(root.FnJs.ApiClient, root.FnJs.Fn);
  }
}(this, function(ApiClient, Fn) {
  'use strict';




  /**
   * The FnList model module.
   * @module model/FnList
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>FnList</code>.
   * @alias module:model/FnList
   * @class
   * @param items {Array.<module:model/Fn>} 
   */
  var exports = function(items) {
    var _this = this;


    _this['items'] = items;
  };

  /**
   * Constructs a <code>FnList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FnList} obj Optional instance to populate.
   * @return {module:model/FnList} The populated <code>FnList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('next_cursor')) {
        obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [Fn]);
      }
    }
    return obj;
  }

  /**
   * Cursor to send with subsequent request to receive the next page, if non-empty.
   * @member {String} next_cursor
   */
  exports.prototype['next_cursor'] = undefined;
  /**
   * @member {Array.<module:model/Fn>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


