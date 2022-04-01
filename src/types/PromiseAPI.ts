import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { InlineObject } from '../models/InlineObject.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
import { InlineObject2 } from '../models/InlineObject2.ts';
import { InlineResponse200 } from '../models/InlineResponse200.ts';
import { ObservableDefaultApi } from './ObservableAPI.ts';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of available Jimmi instances
     */
    public instancesGet(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.instancesGet(_options);
        return result.toPromise();
    }

    /**
     * Get detailed information about the conference the bot joined
     * @param id UUID of the Jimmi instance
     */
    public instancesIdConferenceGet(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.instancesIdConferenceGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update the joined conference of the instance
     * @param id UUID of the Jimmi instance
     * @param inlineObject 
     */
    public instancesIdConferencePatch(id: string, inlineObject?: InlineObject, _options?: Configuration): Promise<any> {
        const result = this.api.instancesIdConferencePatch(id, inlineObject, _options);
        return result.toPromise();
    }

    /**
     * Get detailed information about an instance
     * @param id UUID of the Jimmi instance
     */
    public instancesIdGet(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.instancesIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Clear the music playlist
     * @param id UUID of the Jimmi instance
     */
    public instancesIdMusicDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.instancesIdMusicDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get details about the status, current track and playlist
     * @param id UUID of the Jimmi instance
     */
    public instancesIdMusicGet(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.instancesIdMusicGet(id, _options);
        return result.toPromise();
    }

    /**
     * Remove a track from the queue or skip the current track
     * @param id UUID of the Jimmi instance
     * @param index Track position in queue (starting with 1, submitting index 0 skips the current track)
     */
    public instancesIdMusicIndexDelete(id: string, index: number, _options?: Configuration): Promise<void> {
        const result = this.api.instancesIdMusicIndexDelete(id, index, _options);
        return result.toPromise();
    }

    /**
     * Perform a status change on the music stream (playing, paused, stopped) and optionally change music url if the new status is \"playing\"
     * @param id UUID of the Jimmi instance
     * @param inlineObject2 
     */
    public instancesIdMusicPatch(id: string, inlineObject2?: InlineObject2, _options?: Configuration): Promise<any> {
        const result = this.api.instancesIdMusicPatch(id, inlineObject2, _options);
        return result.toPromise();
    }

    /**
     * Add a music video url to playlist
     * @param id UUID of the Jimmi instance
     * @param inlineObject1 
     */
    public instancesIdMusicPost(id: string, inlineObject1?: InlineObject1, _options?: Configuration): Promise<any> {
        const result = this.api.instancesIdMusicPost(id, inlineObject1, _options);
        return result.toPromise();
    }

    /**
     * Create a new Jimmi instance
     */
    public instancesPost(_options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.instancesPost(_options);
        return result.toPromise();
    }

    /**
     * Get a heartbeat
     */
    public pingGet(_options?: Configuration): Promise<void> {
        const result = this.api.pingGet(_options);
        return result.toPromise();
    }


}



