import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app works !
      Cart: {{cart.length}}
    <router-outlet></router-outlet>
    </p>
   
  `,
  styles: []
})
export class AppComponent {
  title = 'online-store-ngrx';
  cart: Array<any>

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select('cart').subscribe((state => this.cart = state))
  }
}
