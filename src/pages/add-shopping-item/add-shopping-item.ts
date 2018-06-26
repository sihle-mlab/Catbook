import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ShoppingBagModel } from '../../model/shopping-item';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  form: FormGroup;
  shoppingItem : ShoppingBagModel = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, fb: FormBuilder, public database: AngularFireDatabase) {
    this.form = fb.group({
      name: [],
      price: []
    });

    //When editing
    this.shoppingItem = this.navParams.get('shopping-item')
    if (this.shoppingItem != null) {
      this.form.patchValue(this.shoppingItem)
    }
    
  }

  addNewShoppingBagItem() {
    if (this.form.valid) {
        if(this.shoppingItem == null){
        } else{
        }
        this.navCtrl.pop()
    }
  }
}
