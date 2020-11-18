import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  items: MenuItem[];
  items1: MenuItem[];
  activeItem: MenuItem;

  // tslint:disable-next-line:use-lifecycle-interface typedef
  ngOnInit() {
    this.items = [
      {
        label: 'Account',
        icon: 'pi pi-user'
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart'
      },
      {
        label: 'Favorite',
        icon: 'pi pi-heart'
      },
      {
        label: 'Login',
        icon: 'pi pi-unlock'
      }
    ];

    this.items1 = [
      {label: 'Home'},
      {label: 'Shop'},
      {label: 'Contact'}
    ];

    this.activeItem = this.items1[0];
  }
}
