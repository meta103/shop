import { Component, OnInit, Query } from '@angular/core';
import { ChkService } from '../../service/chk.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'angly-blogDetail',
  templateUrl: './blogDetail.component.html',
  styleUrls: ['./blogDetail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  /* Variables */
  postDetail$: Observable<any>;
  postId: string;

  /*
   * Social links
   */
  socialDetails: any = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com/Misfavoritosde-104953477767550/' },
    { icon: 'fa-twitter', url: 'https://twitter.com/misfavoritosde' },
    { icon: 'fa fa-instagram', url: 'https://www.instagram.com/misfavoritosde/' },
  ]

  /*
   * Classes of social ul, li
   */
  socialsClasses: any = { ulClass: '', liClass: '', linkClass: '' };

  constructor(private service: ChkService, private route: ActivatedRoute, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.postDetail$ = this.db.list('/posts', ref => ref.orderByChild('id').equalTo(this.postId)).valueChanges();
  }

}
