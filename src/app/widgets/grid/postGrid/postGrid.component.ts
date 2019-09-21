/*
 * post grid structure.
 * Used in another components.
 */
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[angly-postGrid]',
  templateUrl: './postGrid.component.html',
  styleUrls: ['./postGrid.component.scss']
})
export class PostGridComponent implements OnInit {

  /*
   * postGridContent is a attribute.
   */
  @Input() postGridContent:any;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onClick(page: string) {
		this.router.navigate([`blog/${page}`]);
	}

}
