# api.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instancesGet**](DefaultApi.md#instancesGet) | **GET** /instances | 
[**instancesIdConferenceGet**](DefaultApi.md#instancesIdConferenceGet) | **GET** /instances/{id}/conference | 
[**instancesIdConferencePatch**](DefaultApi.md#instancesIdConferencePatch) | **PATCH** /instances/{id}/conference | 
[**instancesIdGet**](DefaultApi.md#instancesIdGet) | **GET** /instances/{id} | 
[**instancesIdMusicDelete**](DefaultApi.md#instancesIdMusicDelete) | **DELETE** /instances/{id}/music | 
[**instancesIdMusicGet**](DefaultApi.md#instancesIdMusicGet) | **GET** /instances/{id}/music | 
[**instancesIdMusicIndexDelete**](DefaultApi.md#instancesIdMusicIndexDelete) | **DELETE** /instances/{id}/music/{index} | 
[**instancesIdMusicPatch**](DefaultApi.md#instancesIdMusicPatch) | **PATCH** /instances/{id}/music | 
[**instancesIdMusicPost**](DefaultApi.md#instancesIdMusicPost) | **POST** /instances/{id}/music | 
[**instancesPost**](DefaultApi.md#instancesPost) | **POST** /instances | 
[**pingGet**](DefaultApi.md#pingGet) | **GET** /ping | 


# **instancesGet**
> Array<string> instancesGet()

Returns a list of available Jimmi instances

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:any = {};

apiInstance.instancesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of UUIDs |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesIdConferenceGet**
> any instancesIdConferenceGet()

Get detailed information about the conference the bot joined

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:api.DefaultApiInstancesIdConferenceGetRequest = {
  // string | UUID of the Jimmi instance
  id: "id_example",
};

apiInstance.instancesIdConferenceGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | UUID of the Jimmi instance | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Conference information |  -  |
**404** | No instance found under the given id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesIdConferencePatch**
> any instancesIdConferencePatch()

Update the joined conference of the instance

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:api.DefaultApiInstancesIdConferencePatchRequest = {
  // string | UUID of the Jimmi instance
  id: "id_example",
  // InlineObject (optional)
  inlineObject: {
    room: "room_example",
    instance: "instance_example",
  },
};

apiInstance.instancesIdConferencePatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | **InlineObject**|  |
 **id** | [**string**] | UUID of the Jimmi instance | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Conference information updated |  -  |
**400** | Invalid request body |  -  |
**404** | No instance found under the given id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesIdGet**
> any instancesIdGet()

Get detailed information about an instance

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:api.DefaultApiInstancesIdGetRequest = {
  // string | UUID of the Jimmi instance
  id: "id_example",
};

apiInstance.instancesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | UUID of the Jimmi instance | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Jimmi instance |  -  |
**404** | No instance found under the given id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesIdMusicDelete**
> void instancesIdMusicDelete()

Clear the music playlist

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:api.DefaultApiInstancesIdMusicDeleteRequest = {
  // string | UUID of the Jimmi instance
  id: "id_example",
};

apiInstance.instancesIdMusicDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | UUID of the Jimmi instance | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Playlist cleared |  -  |
**404** | No instance found under the given id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesIdMusicGet**
> void instancesIdMusicGet()

Get details about the status, current track and playlist

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:api.DefaultApiInstancesIdMusicGetRequest = {
  // string | UUID of the Jimmi instance
  id: "id_example",
};

apiInstance.instancesIdMusicGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | UUID of the Jimmi instance | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details about the running music |  -  |
**404** | No instance found under the given id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesIdMusicIndexDelete**
> void instancesIdMusicIndexDelete()

Remove a track from the queue or skip the current track

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:api.DefaultApiInstancesIdMusicIndexDeleteRequest = {
  // string | UUID of the Jimmi instance
  id: "id_example",
  // number | Track position in queue (starting with 1, submitting index 0 skips the current track)
  index: ,
};

apiInstance.instancesIdMusicIndexDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | UUID of the Jimmi instance | defaults to undefined
 **index** | **number** | Track position in queue (starting with 1, submitting index 0 skips the current track) | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Track removed or skipped |  -  |
**400** | Invalid index, either not a number, negative or higher than queue length |  -  |
**404** | No instance found under the given id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesIdMusicPatch**
> any instancesIdMusicPatch()

Perform a status change on the music stream (playing, paused, stopped) and optionally change music url if the new status is \"playing\"

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:api.DefaultApiInstancesIdMusicPatchRequest = {
  // string | UUID of the Jimmi instance
  id: "id_example",
  // InlineObject2 (optional)
  inlineObject2: {
    status: "status_example",
    current: "current_example",
  },
};

apiInstance.instancesIdMusicPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | **InlineObject2**|  |
 **id** | [**string**] | UUID of the Jimmi instance | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status and url updated |  -  |
**400** | Unknown status change requested, invalid video url provided or url provided with new status other than \&quot;playing\&quot; |  -  |
**404** | No instance found under the given id |  -  |
**502** | Could not find audio file url for the given video url |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesIdMusicPost**
> any instancesIdMusicPost()

Add a music video url to playlist

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:api.DefaultApiInstancesIdMusicPostRequest = {
  // string | UUID of the Jimmi instance
  id: "id_example",
  // InlineObject1 (optional)
  inlineObject1: {
    url: "url_example",
  },
};

apiInstance.instancesIdMusicPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | **InlineObject1**|  |
 **id** | [**string**] | UUID of the Jimmi instance | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully added url to playlist |  -  |
**400** | No url or invalid url provided |  -  |
**404** | No instance found under the given id |  -  |
**502** | Could not find audio file url for the given video url |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **instancesPost**
> InlineResponse200 instancesPost()

Create a new Jimmi instance

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:any = {};

apiInstance.instancesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**InlineResponse200**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details about the created Jimmi instance |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pingGet**
> void pingGet()

Get a heartbeat

### Example


```typescript
import { api } from 'jimmi-api-client';
import * as fs from 'fs';

const configuration = api.createConfiguration();
const apiInstance = new api.DefaultApi(configuration);

let body:any = {};

apiInstance.pingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | pong! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


