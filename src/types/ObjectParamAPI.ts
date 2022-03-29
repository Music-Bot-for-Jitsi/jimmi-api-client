import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { InlineObject } from '../models/InlineObject.ts';

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
    conference: InlineObject
}

export interface DefaultApiInstancesIdGetRequest {
    /**
     * UUID of the Jimmi instance
     * @type string
     * @memberof DefaultApiinstancesIdGet
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
    public instancesGet(param: DefaultApiInstancesGetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.instancesGet( options).toPromise();
    }

    /**
     * Get detailed information about the conference the bot joined
     * @param param the request object
     */
    public instancesIdConferenceGet(param: DefaultApiInstancesIdConferenceGetRequest, options?: Configuration): Promise<void> {
        return this.api.instancesIdConferenceGet(param.id,  options).toPromise();
    }

    /**
     * Update the joined conference of the instance
     * @param param the request object
     */
    public instancesIdConferencePatch(param: DefaultApiInstancesIdConferencePatchRequest, options?: Configuration): Promise<void> {
        return this.api.instancesIdConferencePatch(param.id, param.conference,  options).toPromise();
    }

    /**
     * Get detailed information about an instance
     * @param param the request object
     */
    public instancesIdGet(param: DefaultApiInstancesIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.instancesIdGet(param.id,  options).toPromise();
    }

    /**
     * Get details about the running music
     * @param param the request object
     */
    public instancesIdMusicGet(param: DefaultApiInstancesIdMusicGetRequest, options?: Configuration): Promise<void> {
        return this.api.instancesIdMusicGet(param.id,  options).toPromise();
    }

    /**
     * Create a new Jimmi instance
     * @param param the request object
     */
    public instancesPost(param: DefaultApiInstancesPostRequest = {}, options?: Configuration): Promise<void> {
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
