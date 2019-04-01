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
    define(['ApiClient', 'model/Error', 'model/Trigger', 'model/TriggerList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Trigger'), require('../model/TriggerList'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.TriggersApi = factory(root.FnJs.ApiClient, root.FnJs.Error, root.FnJs.Trigger, root.FnJs.TriggerList);
  }
}(this, function(ApiClient, Error, Trigger, TriggerList) {
  'use strict';

  /**
   * Triggers service.
   * @module api/TriggersApi
   * @version 2.0.0
   */

  /**
   * Constructs a new TriggersApi. 
   * @alias module:api/TriggersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTrigger operation.
     * @callback module:api/TriggersApi~createTriggerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create A New Trigger.
     * Creates a new Trigger, returning the complete entity.
     * @param {module:model/Trigger} body Trigger data to insert.
     * @param {module:api/TriggersApi~createTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trigger}
     */
    this.createTrigger = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTrigger");
      }


      var pathParams = {
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
      var returnType = Trigger;

      return this.apiClient.callApi(
        '/triggers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTrigger operation.
     * @callback module:api/TriggersApi~deleteTriggerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete A Trigger
     * Delete the specified Trigger.
     * @param {String} triggerID Opaque, unique Trigger ID.
     * @param {module:api/TriggersApi~deleteTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTrigger = function(triggerID, callback) {
      var postBody = null;

      // verify the required parameter 'triggerID' is set
      if (triggerID === undefined || triggerID === null) {
        throw new Error("Missing the required parameter 'triggerID' when calling deleteTrigger");
      }


      var pathParams = {
        'triggerID': triggerID
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
      var returnType = null;

      return this.apiClient.callApi(
        '/triggers/{triggerID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrigger operation.
     * @callback module:api/TriggersApi~getTriggerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Definition Of A Trigger
     * Gets the definition for the Trigger with the specified ID.
     * @param {String} triggerID Opaque, unique Trigger ID.
     * @param {module:api/TriggersApi~getTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trigger}
     */
    this.getTrigger = function(triggerID, callback) {
      var postBody = null;

      // verify the required parameter 'triggerID' is set
      if (triggerID === undefined || triggerID === null) {
        throw new Error("Missing the required parameter 'triggerID' when calling getTrigger");
      }


      var pathParams = {
        'triggerID': triggerID
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
      var returnType = Trigger;

      return this.apiClient.callApi(
        '/triggers/{triggerID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTriggers operation.
     * @callback module:api/TriggersApi~listTriggersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TriggerList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get A List Of Triggers Within An Application Or Function
     * This will list all Triggers for a particular Application or Function, returned in name alphabetical order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.appId Application ID.
     * @param {String} opts.fnId Function ID.
     * @param {String} opts.cursor Cursor from previous response.next_cursor to begin results after, if any.
     * @param {Number} opts.perPage Number of results to return, defaults to 30. Max of 100.
     * @param {String} opts.name A Trigger name to filter by.
     * @param {module:api/TriggersApi~listTriggersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TriggerList}
     */
    this.listTriggers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'app_id': opts['appId'],
        'fn_id': opts['fnId'],
        'cursor': opts['cursor'],
        'per_page': opts['perPage'],
        'name': opts['name'],
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
      var returnType = TriggerList;

      return this.apiClient.callApi(
        '/triggers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTrigger operation.
     * @callback module:api/TriggersApi~updateTriggerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update A Trigger
     * Updates a Trigger by merging the provided values.
     * @param {String} triggerID Opaque, unique Trigger ID.
     * @param {module:model/Trigger} body Trigger data to merge into current value.
     * @param {module:api/TriggersApi~updateTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trigger}
     */
    this.updateTrigger = function(triggerID, body, callback) {
      var postBody = body;

      // verify the required parameter 'triggerID' is set
      if (triggerID === undefined || triggerID === null) {
        throw new Error("Missing the required parameter 'triggerID' when calling updateTrigger");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTrigger");
      }


      var pathParams = {
        'triggerID': triggerID
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
      var returnType = Trigger;

      return this.apiClient.callApi(
        '/triggers/{triggerID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
