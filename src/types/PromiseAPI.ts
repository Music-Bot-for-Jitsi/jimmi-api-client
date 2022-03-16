import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

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
    public instancesGet(_options?: Configuration): Promise<void> {
        const result = this.api.instancesGet(_options);
        return result.toPromise();
    }

    /**
     * Get detailed information about an instance
     * @param id UUID of the Jimmi instance
     */
    public instancesIdGet(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.instancesIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Get details about the running music
     * @param id UUID of the Jimmi instance
     */
    public instancesIdMusicGet(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.instancesIdMusicGet(id, _options);
        return result.toPromise();
    }

    /**
     * Create a new Jimmi instance
     */
    public instancesPost(_options?: Configuration): Promise<void> {
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



