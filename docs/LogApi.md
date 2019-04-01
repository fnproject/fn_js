# FnJs.LogApi

All URIs are relative to *https://127.0.0.1:8080/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCallLogs**](LogApi.md#getCallLogs) | **GET** /fns/{fnID}/calls/{callID}/log | Get logs for a call.


<a name="getCallLogs"></a>
# **getCallLogs**
> Log getCallLogs(fnID, callID)

Get logs for a call.

Get logs for a call.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.LogApi();

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

