# FnJs.RoutesApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsAppRoutesGet**](RoutesApi.md#appsAppRoutesGet) | **GET** /apps/{app}/routes | Get route list by app name.
[**appsAppRoutesPost**](RoutesApi.md#appsAppRoutesPost) | **POST** /apps/{app}/routes | Create new Route
[**appsAppRoutesRouteDelete**](RoutesApi.md#appsAppRoutesRouteDelete) | **DELETE** /apps/{app}/routes/{route} | Deletes the route
[**appsAppRoutesRouteGet**](RoutesApi.md#appsAppRoutesRouteGet) | **GET** /apps/{app}/routes/{route} | Gets route by name
[**appsAppRoutesRoutePatch**](RoutesApi.md#appsAppRoutesRoutePatch) | **PATCH** /apps/{app}/routes/{route} | Update a Route, Fails if the route or app does not exist. Accepts partial updates / skips validation of zero values.
[**appsAppRoutesRoutePut**](RoutesApi.md#appsAppRoutesRoutePut) | **PUT** /apps/{app}/routes/{route} | Create a Route if it does not exist. Update if it does. Will also create app if it does not exist. Put does not skip validation of zero values


<a name="appsAppRoutesGet"></a>
# **appsAppRoutesGet**
> RoutesWrapper appsAppRoutesGet(app)

Get route list by app name.

This will list routes for a particular app.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.RoutesApi();

var app = "app_example"; // String | Name of app for this set of routes.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppRoutesGet(app, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| Name of app for this set of routes. | 

### Return type

[**RoutesWrapper**](RoutesWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppRoutesPost"></a>
# **appsAppRoutesPost**
> RouteWrapper appsAppRoutesPost(app, body)

Create new Route

Create a new route in an app, if app doesn&#39;t exists, it creates the app. Post does not skip validation of zero values.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.RoutesApi();

var app = "app_example"; // String | name of the app.

var body = new FnJs.RouteWrapper(); // RouteWrapper | One route to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppRoutesPost(app, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 
 **body** | [**RouteWrapper**](RouteWrapper.md)| One route to post. | 

### Return type

[**RouteWrapper**](RouteWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppRoutesRouteDelete"></a>
# **appsAppRoutesRouteDelete**
> appsAppRoutesRouteDelete(app, route)

Deletes the route

Deletes the route.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.RoutesApi();

var app = "app_example"; // String | Name of app for this set of routes.

var route = "route_example"; // String | Route name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.appsAppRoutesRouteDelete(app, route, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| Name of app for this set of routes. | 
 **route** | **String**| Route name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppRoutesRouteGet"></a>
# **appsAppRoutesRouteGet**
> RouteWrapper appsAppRoutesRouteGet(app, route)

Gets route by name

Gets a route by name.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.RoutesApi();

var app = "app_example"; // String | Name of app for this set of routes.

var route = "route_example"; // String | Route name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppRoutesRouteGet(app, route, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| Name of app for this set of routes. | 
 **route** | **String**| Route name | 

### Return type

[**RouteWrapper**](RouteWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppRoutesRoutePatch"></a>
# **appsAppRoutesRoutePatch**
> RouteWrapper appsAppRoutesRoutePatch(app, route, body)

Update a Route, Fails if the route or app does not exist. Accepts partial updates / skips validation of zero values.

Update a route

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.RoutesApi();

var app = "app_example"; // String | name of the app.

var route = "route_example"; // String | route path.

var body = new FnJs.RouteWrapper(); // RouteWrapper | One route to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppRoutesRoutePatch(app, route, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 
 **route** | **String**| route path. | 
 **body** | [**RouteWrapper**](RouteWrapper.md)| One route to post. | 

### Return type

[**RouteWrapper**](RouteWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppRoutesRoutePut"></a>
# **appsAppRoutesRoutePut**
> RouteWrapper appsAppRoutesRoutePut(app, route, body)

Create a Route if it does not exist. Update if it does. Will also create app if it does not exist. Put does not skip validation of zero values

Update or Create a route

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.RoutesApi();

var app = "app_example"; // String | name of the app.

var route = "route_example"; // String | route path.

var body = new FnJs.RouteWrapper(); // RouteWrapper | One route to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppRoutesRoutePut(app, route, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 
 **route** | **String**| route path. | 
 **body** | [**RouteWrapper**](RouteWrapper.md)| One route to post. | 

### Return type

[**RouteWrapper**](RouteWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

