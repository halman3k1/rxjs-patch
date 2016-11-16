import { MapSignature } from '../../operator/map';
import { Observable } from '../../Observable'
declare module '../../Observable' {
    interface Observable<T> {
        map: MapSignature<T>;
    }
}
