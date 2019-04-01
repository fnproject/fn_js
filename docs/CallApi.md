# FnJs.CallApi

All URIs are relative to *https://127.0.0.1:8080/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fnsFnIDCallsCallIDGet**](CallApi.md#fnsFnIDCallsCallIDGet) | **GET** /fns/{fnID}/calls/{callID} | Get call information
[**fnsFnIDCallsGet**](CallApi.md#fnsFnIDCallsGet) | **GET** /fns/{fnID}/calls | Get a fns calls.
[**getCallLogs**](CallApi.md#getCallLogs) | **GET** /fns/{fnID}/calls/{callID}/log | Get logs for a call.


<a name="fnsFnIDCallsCallIDGet"></a>
# **fnsFnIDCallsCallIDGet**
> Call fnsFnIDCallsCallIDGet(fnID, callID)

Get call information

Get call information

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.CallApi();

var fnID = "fnID_example"; // String | Opaque, unique Function ID.

var callID = "callID_example"; // String | Opaque, unique Call ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fnsFnIDCallsCallIDGet(fnID, callID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fnID** | **String**| Opaque, unique Function ID. | 
 **callID** | **String**| Opaque, unique Call ID. | 

### Return type

[**Call**](Call.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fnsFnIDCallsGet"></a>
# **fnsFnIDCallsGet**
> CallList fnsFnIDCallsGet(fnID, , opts)

Get a fns calls.

Get a functions calls, results returned in created_at, descending order (newest first).

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.CallApi();

var fnID = "fnID_example"; // String | Opaque, unique Function ID.

var opts = { 
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
apiInstance.fnsFnIDCallsGet(fnID, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fnID** | **String**| Opaque, unique Function ID. | 
 **cursor** | **String**| Cursor from previous response.next_cursor to begin results after, if any. | [optional] 
 **perPage** | **Number**| Number of results to return, defaults to 30. Max of 100. | [optional] 
 **fromTime** | **Number**| Unix timestamp in seconds, of call.created_at to begin the results at, default 0. | [optional] 
 **toTime** | **Number**| Unix timestamp in seconds, of call.created_at to end the results at, defaults to latest. | [optional] 

### Return type

[**CallList**](CallList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCallLogs"></a>
# **getCallLogs**
> Log getCallLogs(fnID, callID)

Get logs for a call.

Get logs for a call.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.CallApi();

var fnID = "fnID_example"; // String | Opaque, unique Function ID.

var callID = "callID_example"; // String | Opaque, unique Call ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallLogs(fnID, callID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fnID** | **String**| Opaque, unique Function ID. | 
 **callID** | **String**| Opaque, unique Call ID. | 

### Return type

[**Log**](Log.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

