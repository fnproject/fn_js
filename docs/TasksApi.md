# FnJs.TasksApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /tasks | Get next task.


<a name="tasksGet"></a>
# **tasksGet**
> TaskWrapper tasksGet()

Get next task.

Gets the next task in the queue, ready for processing. Consumers should start processing tasks in order. No other consumer can retrieve this task.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.TasksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TaskWrapper**](TaskWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

