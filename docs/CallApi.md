# FnJs.CallApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsAppCallsCallGet**](CallApi.md#appsAppCallsCallGet) | **GET** /apps/{app}/calls/{call} | Get call information
[**appsAppCallsCallLogDelete**](CallApi.md#appsAppCallsCallLogDelete) | **DELETE** /apps/{app}/calls/{call}/log | Delete call log entry
[**appsAppCallsCallLogGet**](CallApi.md#appsAppCallsCallLogGet) | **GET** /apps/{app}/calls/{call}/log | Get call logs
[**appsAppCallsGet**](CallApi.md#appsAppCallsGet) | **GET** /apps/{app}/calls | Get app-bound calls.


<a name="appsAppCallsCallGet"></a>
# **appsAppCallsCallGet**
> CallWrapper appsAppCallsCallGet(app, call)

Get call information

Get call information

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.CallApi();

var app = "app_example"; // String | app name

var call = "call_example"; // String | Call ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppCallsCallGet(app, call, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| app name | 
 **call** | **String**| Call ID. | 

### Return type

[**CallWrapper**](CallWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppCallsCallLogDelete"></a>
# **appsAppCallsCallLogDelete**
> appsAppCallsCallLogDelete(call, app)

Delete call log entry

Delete call log entry

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.CallApi();

var call = "call_example"; // String | Call ID.

var app = "app_example"; // String | App name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.appsAppCallsCallLogDelete(call, app, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **call** | **String**| Call ID. | 
 **app** | **String**| App name. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppCallsCallLogGet"></a>
# **appsAppCallsCallLogGet**
> LogWrapper appsAppCallsCallLogGet(app, call)

Get call logs

Get call logs

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.CallApi();

var app = "app_example"; // String | App Name

var call = "call_example"; // String | Call ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppCallsCallLogGet(app, call, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| App Name | 
 **call** | **String**| Call ID. | 

### Return type

[**LogWrapper**](LogWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppCallsGet"></a>
# **appsAppCallsGet**
> CallsWrapper appsAppCallsGet(app, opts)

Get app-bound calls.

Get app-bound calls can filter to route-bound calls, results returned in created_at, descending order (newest first).

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.CallApi();

var app = "app_example"; // String | App name.

var opts = { 
  'path': "path_example", // String | Route path to match, exact.
  'cursor': "cursor_example", // String | Cursor from previous response.next_cursor to begin results after, if any.
  'perPage': 56, // Number | Number of results to return, defaults to 30. Max of 100.
  'fromTime': 56, // Number | Unix timestamp in seconds, of call.created_at to begin the results at, default 0.
  'toTime': 56 // Number | Unix timestamp in seconds, of call.created_at to end the results at, defaults to latest.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppCallsGet(app, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| App name. | 
 **path** | **String**| Route path to match, exact. | [optional] 
 **cursor** | **String**| Cursor from previous response.next_cursor to begin results after, if any. | [optional] 
 **perPage** | **Number**| Number of results to return, defaults to 30. Max of 100. | [optional] 
 **fromTime** | **Number**| Unix timestamp in seconds, of call.created_at to begin the results at, default 0. | [optional] 
 **toTime** | **Number**| Unix timestamp in seconds, of call.created_at to end the results at, defaults to latest. | [optional] 

### Return type

[**CallsWrapper**](CallsWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

