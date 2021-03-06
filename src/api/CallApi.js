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
    define(['ApiClient', 'model/Call', 'model/CallList', 'model/Error', 'model/Log'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Call'), require('../model/CallList'), require('../model/Error'), require('../model/Log'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.CallApi = factory(root.FnJs.ApiClient, root.FnJs.Call, root.FnJs.CallList, root.FnJs.Error, root.FnJs.Log);
  }
}(this, function(ApiClient, Call, CallList, Error, Log) {
  'use strict';

  /**
   * Call service.
   * @module api/CallApi
   * @version 2.0.0
   */

  /**
   * Constructs a new CallApi. 
   * @alias module:api/CallApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the fnsFnIDCallsCallIDGet operation.
     * @callback module:api/CallApi~fnsFnIDCallsCallIDGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Call} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get call information
     * Get call information
     * @param {String} fnID Opaque, unique Function ID.
     * @param {String} callID Opaque, unique Call ID.
     * @param {module:api/CallApi~fnsFnIDCallsCallIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Call}
     */
    this.fnsFnIDCallsCallIDGet = function(fnID, callID, callback) {
      var postBody = null;

      // verify the required parameter 'fnID' is set
      if (fnID === undefined || fnID === null) {
        throw new Error("Missing the required parameter 'fnID' when calling fnsFnIDCallsCallIDGet");
      }

      // verify the required parameter 'callID' is set
      if (callID === undefined || callID === null) {
        throw new Error("Missing the required parameter 'callID' when calling fnsFnIDCallsCallIDGet");
      }


      var pathParams = {
        'fnID': fnID,
        'callID': callID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Call;

      return this.apiClient.callApi(
        '/fns/{fnID}/calls/{callID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fnsFnIDCallsGet operation.
     * @callback module:api/CallApi~fnsFnIDCallsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a fns calls.
     * Get a functions calls, results returned in created_at, descending order (newest first).
     * @param {String} fnID Opaque, unique Function ID.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor from previous response.next_cursor to begin results after, if any.
     * @param {Number} opts.perPage Number of results to return, defaults to 30. Max of 100.
     * @param {Number} opts.fromTime Unix timestamp in seconds, of call.created_at to begin the results at, default 0.
     * @param {Number} opts.toTime Unix timestamp in seconds, of call.created_at to end the results at, defaults to latest.
     * @param {module:api/CallApi~fnsFnIDCallsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallList}
     */
    this.fnsFnIDCallsGet = function(fnID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'fnID' is set
      if (fnID === undefined || fnID === null) {
        throw new Error("Missing the required parameter 'fnID' when calling fnsFnIDCallsGet");
      }


      var pathParams = {
        'fnID': fnID
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'per_page': opts['perPage'],
        'from_time': opts['fromTime'],
        'to_time': opts['toTime'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CallList;

      return this.apiClient.callApi(
        '/fns/{fnID}/calls', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCallLogs operation.
     * @callback module:api/CallApi~getCallLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Log} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get logs for a call.
     * Get logs for a call.
     * @param {String} fnID Opaque, unique Function ID.
     * @param {String} callID Opaque, unique Call ID.
     * @param {module:api/CallApi~getCallLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Log}
     */
    this.getCallLogs = function(fnID, callID, callback) {
      var postBody = null;

      // verify the required parameter 'fnID' is set
      if (fnID === undefined || fnID === null) {
        throw new Error("Missing the required parameter 'fnID' when calling getCallLogs");
      }

      // verify the required parameter 'callID' is set
      if (callID === undefined || callID === null) {
        throw new Error("Missing the required parameter 'callID' when calling getCallLogs");
      }


      var pathParams = {
        'fnID': fnID,
        'callID': callID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Log;

      return this.apiClient.callApi(
        '/fns/{fnID}/calls/{callID}/log', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
