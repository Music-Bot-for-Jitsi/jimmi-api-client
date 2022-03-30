import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { InlineObject } from '../models/InlineObject.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
import { InlineObject2 } from '../models/InlineObject2.ts';
import { InlineResponse200 } from '../models/InlineResponse200.ts';

import { ObservableDefaultApi } from "./ObservableAPI.ts";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";

export interface DefaultApiInstancesGetRequest {
}

export interface DefaultApiInstancesIdConferenceGetRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdConferenceGet
     */
    id: string
}

export interface DefaultApiInstancesIdConferencePatchRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdConferencePatch
     */
    id: string
    /**
     * 
     * @type InlineObject
     * @memberof DefaultApiinstancesIdConferencePatch
     */
    inlineObject?: InlineObject
}

export interface DefaultApiInstancesIdGetRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdGet
     */
    id: string
}

export interface DefaultApiInstancesIdMusicDeleteRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdMusicDelete
     */
    id: string
}

export interface DefaultApiInstancesIdMusicGetRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdMusicGet
     */
    id: string
}

export interface DefaultApiInstancesIdMusicIndexDeleteRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdMusicIndexDelete
     */
    id: string
    /**
     * Track position in queue (starting with 1, submitting index 0 skips the current track)
     * @type number
     * @memberof DefaultApiinstancesIdMusicIndexDelete
     */
    index: number
}

export interface DefaultApiInstancesIdMusicPatchRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdMusicPatch
     */
    id: string
    /**
     * 
     * @type InlineObject2
     * @memberof DefaultApiinstancesIdMusicPatch
     */
    inlineObject2?: InlineObject2
}

export interface DefaultApiInstancesIdMusicPostRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdMusicPost
     */
    id: string
    /**
     * 
     * @type InlineObject1
     * @memberof DefaultApiinstancesIdMusicPost
     */
    inlineObject1?: InlineObject1
}

export interface DefaultApiInstancesPostRequest {
}

export interface DefaultApiPingGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of available Jimmi instances
     * @param param the request object
     */
    public instancesGet(param: DefaultApiInstancesGetRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.instancesGet( options).toPromise();
    }

    /**
     * Get detailed information about the conference the bot joined
     * @param param the request object
     */
    public instancesIdConferenceGet(param: DefaultApiInstancesIdConferenceGetRequest, options?: Configuration): Promise<any> {
        return this.api.instancesIdConferenceGet(param.id,  options).toPromise();
    }

    /**
     * Update the joined conference of the instance
     * @param param the request object
     */
    public instancesIdConferencePatch(param: DefaultApiInstancesIdConferencePatchRequest, options?: Configuration): Promise<any> {
        return this.api.instancesIdConferencePatch(param.id, param.inlineObject,  options).toPromise();
    }

    /**
     * Get detailed information about an instance
     * @param param the request object
     */
    public instancesIdGet(param: DefaultApiInstancesIdGetRequest, options?: Configuration): Promise<any> {
        return this.api.instancesIdGet(param.id,  options).toPromise();
    }

    /**
     * Clear the music playlist
     * @param param the request object
     */
    public instancesIdMusicDelete(param: DefaultApiInstancesIdMusicDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.instancesIdMusicDelete(param.id,  options).toPromise();
    }

    /**
     * Get details about the status, current track and playlist
     * @param param the request object
     */
    public instancesIdMusicGet(param: DefaultApiInstancesIdMusicGetRequest, options?: Configuration): Promise<void> {
        return this.api.instancesIdMusicGet(param.id,  options).toPromise();
    }

    /**
     * Remove a track from the queue or skip the current track
     * @param param the request object
     */
    public instancesIdMusicIndexDelete(param: DefaultApiInstancesIdMusicIndexDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.instancesIdMusicIndexDelete(param.id, param.index,  options).toPromise();
    }

    /**
     * Perform a status change on the music stream (playing, paused, stopped) and optionally change music url if the new status is \"playing\"
     * @param param the request object
     */
    public instancesIdMusicPatch(param: DefaultApiInstancesIdMusicPatchRequest, options?: Configuration): Promise<any> {
        return this.api.instancesIdMusicPatch(param.id, param.inlineObject2,  options).toPromise();
    }

    /**
     * Add a music video url to playlist
     * @param param the request object
     */
    public instancesIdMusicPost(param: DefaultApiInstancesIdMusicPostRequest, options?: Configuration): Promise<any> {
        return this.api.instancesIdMusicPost(param.id, param.inlineObject1,  options).toPromise();
    }

    /**
     * Create a new Jimmi instance
     * @param param the request object
     */
    public instancesPost(param: DefaultApiInstancesPostRequest = {}, options?: Configuration): Promise<InlineResponse200> {
        return this.api.instancesPost( options).toPromise();
    }

    /**
     * Get a heartbeat
     * @param param the request object
     */
    public pingGet(param: DefaultApiPingGetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.pingGet( options).toPromise();
    }

}
