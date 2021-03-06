import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SchoolSearchService {
    constructor(private http: Http) {

    }
    private url = 'https://transfertool.jamesharrell.me/api/colleges';

    getColleges() {
        return this.http.get(this.url).map((response: Response) => response.json());
    }
}
