import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CreateNewProductService} from "../../services/create-new-product.service";

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly newProductForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl()
  });

  constructor(private _createNewProductService: CreateNewProductService) {
  }

  onNewProductFormSubmitted(newProductForm: FormGroup): void {
    this._createNewProductService.createNewProduct({
      title: newProductForm.get('title')?.value,
      price: newProductForm.get('price')?.value,
      description: newProductForm.get('description')?.value,
      image: newProductForm.get('image')?.value,
      category: newProductForm.get('category')?.value,
    }).subscribe();
  }
}
