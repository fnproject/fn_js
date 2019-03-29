# FnJs.App

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | App ID | [optional] 
**name** | **String** | Name of this app. Must be different than the image name. Can ony contain alphanumeric, -, and _. | [optional] 
**config** | **{String: String}** | Application function configuration, applied to all Functions. | [optional] 
**annotations** | **{String: Object}** | Application annotations - this is a map of annotations attached to this app, keys must not exceed 128 bytes and must consist of non-whitespace printable ascii characters, and the seralized representation of individual values must not exeed 512 bytes. | [optional] 
**syslogUrl** | **String** | A comma separated list of syslog urls to send all function logs to. supports tls, udp or tcp. e.g. tls://logs.papertrailapp.com:1 | [optional] 
**createdAt** | **Date** | Time when app was created. Always in UTC. | [optional] 
**updatedAt** | **Date** | Most recent time that app was updated. Always in UTC. | [optional] 


