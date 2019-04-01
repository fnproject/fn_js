# FnJs.Fn

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier | [optional] 
**name** | **String** | Unique name for this function. | [optional] 
**appId** | **String** | App ID. | [optional] 
**image** | **String** | Full container image name, e.g. hub.docker.com/fnproject/yo or fnproject/yo (default registry: hub.docker.com) | [optional] 
**memory** | **Number** | Maximum usable memory given to function (MiB). | [optional] 
**timeout** | **Number** | Timeout for executions of a function. Value in Seconds. | [optional] [default to 30]
**idleTimeout** | **Number** | Hot functions idle timeout before container termination. Value in Seconds. | [optional] [default to 30]
**config** | **{String: String}** | Function configuration key values. | [optional] 
**annotations** | **{String: Object}** | Func annotations - this is a map of annotations attached to this func, keys must not exceed 128 bytes and must consist of non-whitespace printable ascii characters, and the seralized representation of individual values must not exeed 512 bytes. | [optional] 
**createdAt** | **Date** | Time when function was created. Always in UTC RFC3339. | [optional] 
**updatedAt** | **Date** | Most recent time that function was updated. Always in UTC RFC3339. | [optional] 


