
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

interface Response {
   data: any;
}

@Injectable()
export class ChkService {

   constructor(private http: HttpClient) { }

   /*
    * Get services
    */
   getServices() {
      return this.http.get<Response>("assets/data/service.json").pipe(map(response => response.data));
   }

   /*
    * Get posts
    */
   getPosts() {
      return this.http.get<Response>("https://misfavoritosde1-0.firebaseio.com/posts").pipe(map(response => response.data));
   }

   /*
    * Get a single post
    */
   getASinglePosts(postId: string) {
      return this.http.get<Response>("assets/data/posts.json").pipe(map(response => response.data.filter(post => post.id === postId)));
   }

   /*
    * Get about.
    */
   getAbout() {
      return this.http.get<Response>("assets/data/about.json").pipe(map(response => response.data));
   }

   /*
   * Get the content of support/FAQ page.
   */
   getFAQContent() {
      return this.http.get<Response>("assets/data/support.json").pipe(map(response => response.data));
   }

   /*
    * Get footer logo list
    */
   getFooterLogoList() {
      return this.http.get<Response>("assets/data/footer-logo.json").pipe(map(response => response.data));
   }

   /*
    * Get products list
    */
   getProductsList() {
      return this.http.get<Response>("assets/data/products-list.json").pipe(map(response => response.data));
   }

   /*
       * Get a single product
       */
   getASingleProduct(productId: string) {
      return this.http.get<Response>("assets/data/products-list.json").pipe(map(response => response.data.filter(product => product.id === productId)));
   }

}
