import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'


import { ObservableDefaultApi } from "./ObservableAPI.ts";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";

export interface DefaultApiRootGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the homepage
     * @param param the request object
     */
    public rootGet(param: DefaultApiRootGetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.rootGet( options).toPromise();
    }

}
