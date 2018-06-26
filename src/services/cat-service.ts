import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class catService {

    constructor(private http: Http) {
    }

    getShoppingItems() {
        return this.http.get('http://localhost:2403/dogs').toPromise().then(result => {
            return result.json();
        });
    }

    addShoppingItem(item){
        return this.http.post('http://localhost:2403/dogs', item).toPromise().then(result => {
            return result.json()
        });
    }

    updateShoppingItem(item) {
        return this.http.put('http://localhost:2403/dogs/' + item.id, item).toPromise().then(result => {
            return result.json()
        });
    }
}