import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { catService } from "../../services/cat-service"
import { ShoppingBagModel } from '../../model/shopping-item';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shoppingBags = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, public datatbase: AngularFireDatabase) {
    
    //Gets list 
    datatbase.list('home').valueChanges().subscribe((results : any) => {
      this.shoppingBags = results.reverse();
      console.log(results);
    });
  }

  addShoppingItem() {
    this.navCtrl.push('AddShoppingItemPage');
  }

  editShoppingBag(shoppingBag, i){
      this.navCtrl.push('AddShoppingItemPage', {'shopping-item': shoppingBag, 'index': i})
  }


}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.va();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
}
