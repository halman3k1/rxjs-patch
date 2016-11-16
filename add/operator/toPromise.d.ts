import { ToPromiseSignature } from '../../operator/toPromise';
import {Observable} from '../../Observable';
declare module '../../Observable' {
    interface Observable<T> {
        toPromise: ToPromiseSignature<T>;
    }
}
