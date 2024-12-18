import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartList : any = [];
public vehiculeList = new BehaviorSubject<any>([]);
public grandTotal : number = 0;
totalamount : number = 0;

  constructor() { }

  getVehicules(){
    return this.vehiculeList.asObservable();
  };

  setVehicules(vehicule : any){
    this.cartItemList.push(...vehicule); //... = mettre à la suite
    this.vehiculeList.next(vehicule);
  }
}

//à faire addToCart(){}
