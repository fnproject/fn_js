# FnJs.TriggersApi

All URIs are relative to *https://127.0.0.1:8080/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTrigger**](TriggersApi.md#createTrigger) | **POST** /triggers | Create A New Trigger.
[**deleteTrigger**](TriggersApi.md#deleteTrigger) | **DELETE** /triggers/{triggerID} | Delete A Trigger
[**getTrigger**](TriggersApi.md#getTrigger) | **GET** /triggers/{triggerID} | Get Definition Of A Trigger
[**listTriggers**](TriggersApi.md#listTriggers) | **GET** /triggers | Get A List Of Triggers Within An Application Or Function
[**updateTrigger**](TriggersApi.md#updateTrigger) | **PUT** /triggers/{triggerID} | Update A Trigger


<a name="createTrigger"></a>
# **createTrigger**
> Trigger createTrigger(body)

Create A New Trigger.

Creates a new Trigger, returning the complete entity.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.TriggersApi();

var body = new FnJs.Trigger(); // Trigger | Trigger data to insert.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTrigger(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Trigger**](Trigger.md)| Trigger data to insert. | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTrigger"></a>
# **deleteTrigger**
> deleteTrigger(triggerID)

Delete A Trigger

Delete the specified Trigger.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.TriggersApi();

var triggerID = "triggerID_example"; // String | Opaque, unique Trigger ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTrigger(triggerID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | **String**| Opaque, unique Trigger ID. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTrigger"></a>
# **getTrigger**
> Trigger getTrigger(triggerID)

Get Definition Of A Trigger

Gets the definition for the Trigger with the specified ID.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.TriggersApi();

var triggerID = "triggerID_example"; // String | Opaque, unique Trigger ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTrigger(triggerID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | **String**| Opaque, unique Trigger ID. | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTriggers"></a>
# **listTriggers**
> TriggerList listTriggers(opts)

Get A List Of Triggers Within An Application Or Function

This will list all Triggers for a particular Application or Function, returned in name alphabetical order.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.TriggersApi();

var opts = { 
  'appId': "appId_example", // String | Application ID.
  'fnId': "fnId_example", // String | Function ID.
  'cursor': "cursor_example", // String | Cursor from previous response.next_cursor to begin results after, if any.
  'perPage': 56, // Number | Number of results to return, defaults to 30. Max of 100.
  'name': "name_example" // String | A Trigger name to filter by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTriggers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application ID. | [optional] 
 **fnId** | **String**| Function ID. | [optional] 
 **cursor** | **String**| Cursor from previous response.next_cursor to begin results after, if any. | [optional] 
 **perPage** | **Number**| Number of results to return, defaults to 30. Max of 100. | [optional] 
 **name** | **String**| A Trigger name to filter by. | [optional] 

### Return type

[**TriggerList**](TriggerList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTrigger"></a>
# **updateTrigger**
> Trigger updateTrigger(triggerIDbody)

Update A Trigger

Updates a Trigger by merging the provided values.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.TriggersApi();

var triggerID = "triggerID_example"; // String | Opaque, unique Trigger ID.

var body = new FnJs.Trigger(); // Trigger | Trigger data to merge into current value.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTrigger(triggerIDbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | **String**| Opaque, unique Trigger ID. | 
 **body** | [**Trigger**](Trigger.md)| Trigger data to merge into current value. | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

