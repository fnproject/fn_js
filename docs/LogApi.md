# FnJs.LogApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsAppCallsCallLogDelete**](LogApi.md#appsAppCallsCallLogDelete) | **DELETE** /apps/{app}/calls/{call}/log | Delete call log entry
[**appsAppCallsCallLogGet**](LogApi.md#appsAppCallsCallLogGet) | **GET** /apps/{app}/calls/{call}/log | Get call logs


<a name="appsAppCallsCallLogDelete"></a>
# **appsAppCallsCallLogDelete**
> appsAppCallsCallLogDelete(call, app)

Delete call log entry

Delete call log entry

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.LogApi();

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

var apiInstance = new FnJs.LogApi();

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

