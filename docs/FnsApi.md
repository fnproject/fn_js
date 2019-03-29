# FnJs.FnsApi

All URIs are relative to *https://127.0.0.1:8080/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFn**](FnsApi.md#createFn) | **POST** /fns | Create A New Function
[**deleteFn**](FnsApi.md#deleteFn) | **DELETE** /fns/{fnID} | Delete A Function
[**getFn**](FnsApi.md#getFn) | **GET** /fns/{fnID} | Get Definition Of A Function
[**listFns**](FnsApi.md#listFns) | **GET** /fns | Get A list Of Functions Within An Application
[**updateFn**](FnsApi.md#updateFn) | **PUT** /fns/{fnID} | Update A Function


<a name="createFn"></a>
# **createFn**
> Fn createFn(body)

Create A New Function

Creates a new Function, returning the complete entity.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.FnsApi();

var body = new FnJs.Fn(); // Fn | Function data to insert.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFn(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Fn**](Fn.md)| Function data to insert. | 

### Return type

[**Fn**](Fn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFn"></a>
# **deleteFn**
> deleteFn(fnID, )

Delete A Function

Delete the specified Function.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.FnsApi();

var fnID = "fnID_example"; // String | Opaque, unique Function ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFn(fnID, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fnID** | **String**| Opaque, unique Function ID. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFn"></a>
# **getFn**
> Fn getFn(fnID, )

Get Definition Of A Function

Gets the definition for the Function with the specified ID.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.FnsApi();

var fnID = "fnID_example"; // String | Opaque, unique Function ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFn(fnID, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fnID** | **String**| Opaque, unique Function ID. | 

### Return type

[**Fn**](Fn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFns"></a>
# **listFns**
> FnList listFns(opts)

Get A list Of Functions Within An Application

Get a filtered list of Functions for an Application, in alphabetical order.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.FnsApi();

var opts = { 
  'appId': "appId_example", // String | Application ID.
  'cursor': "cursor_example", // String | Cursor from previous response.next_cursor to begin results after, if any.
  'perPage': 56, // Number | Number of results to return, defaults to 30. Max of 100.
  'name': "name_example" // String | Function name to filter by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFns(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application ID. | [optional] 
 **cursor** | **String**| Cursor from previous response.next_cursor to begin results after, if any. | [optional] 
 **perPage** | **Number**| Number of results to return, defaults to 30. Max of 100. | [optional] 
 **name** | **String**| Function name to filter by | [optional] 

### Return type

[**FnList**](FnList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFn"></a>
# **updateFn**
> Fn updateFn(fnID, body)

Update A Function

Updates a Function via merging the provided values.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.FnsApi();

var fnID = "fnID_example"; // String | Opaque, unique Function ID.

var body = new FnJs.Fn(); // Fn | Function data to merge with current values.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFn(fnID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fnID** | **String**| Opaque, unique Function ID. | 
 **body** | [**Fn**](Fn.md)| Function data to merge with current values. | 

### Return type

[**Fn**](Fn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

