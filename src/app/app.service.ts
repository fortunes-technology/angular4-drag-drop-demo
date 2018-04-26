import { Injectable } from '@angular/core'
import { Http, RequestOptions }  from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AppService {

  constructor(private http: Http) {}

  postData(data): Observable<any> {
    const option: any =  {
        headers: {
          'Content-Type': 'Application/JSON',
        }
      };      
    return this.http.post(`https://dev-dot-ustadium-e760e.appspot.com/api/messages`, data, option);
  }

  private handleError(error: Response | any) {
    let errMsg = error.message ? error.message : error.toString()
    console.error(errMsg)
    return Observable.throw(errMsg)
  }
}
