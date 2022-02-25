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
     * Returns the homepage
     */
    public rootGet(_options?: Configuration): Promise<void> {
        const result = this.api.rootGet(_options);
        return result.toPromise();
    }


}



