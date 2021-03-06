# FnJs.AppsApi

All URIs are relative to *https://127.0.0.1:8080/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppsApi.md#createApp) | **POST** /apps | Create A New Application
[**deleteApp**](AppsApi.md#deleteApp) | **DELETE** /apps/{appID} | Delete An Application
[**getApp**](AppsApi.md#getApp) | **GET** /apps/{appID} | Get Information For An Application
[**listApps**](AppsApi.md#listApps) | **GET** /apps | Get A List Of Applications
[**updateApp**](AppsApi.md#updateApp) | **PUT** /apps/{appID} | Update an Application


<a name="createApp"></a>
# **createApp**
> App createApp(body)

Create A New Application

Creates a new Application, returning the complete entity.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var body = new FnJs.App(); // App | Application data to insert.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createApp(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**App**](App.md)| Application data to insert. | 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApp"></a>
# **deleteApp**
> deleteApp(appID)

Delete An Application

Delete the specified Application.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var appID = "appID_example"; // String | Opaque, unique Application ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteApp(appID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | **String**| Opaque, unique Application ID. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApp"></a>
# **getApp**
> App getApp(appID)

Get Information For An Application

Returns more details about an Application, such as statistics.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var appID = "appID_example"; // String | Opaque, unique Application ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApp(appID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | **String**| Opaque, unique Application ID. | 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listApps"></a>
# **listApps**
> AppList listApps(opts)

Get A List Of Applications

Get a filtered list of Applications in alphabetical order.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var opts = { 
  'cursor': "cursor_example", // String | Cursor from previous response.next_cursor to begin results after, if any.
  'perPage': 56, // Number | Number of results to return, defaults to 30. Max of 100.
  'name': "name_example" // String | The Application name to filter by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listApps(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor from previous response.next_cursor to begin results after, if any. | [optional] 
 **perPage** | **Number**| Number of results to return, defaults to 30. Max of 100. | [optional] 
 **name** | **String**| The Application name to filter by. | [optional] 

### Return type

[**AppList**](AppList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateApp"></a>
# **updateApp**
> App updateApp(appIDbody)

Update an Application

Updates an Application via merging the provided values.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var appID = "appID_example"; // String | Opaque, unique Application ID.

var body = new FnJs.App(); // App | Application data to merge with current values.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateApp(appIDbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | **String**| Opaque, unique Application ID. | 
 **body** | [**App**](App.md)| Application data to merge with current values. | 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

