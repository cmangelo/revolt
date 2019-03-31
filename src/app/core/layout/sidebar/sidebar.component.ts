import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/link.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  sidebarOpen = false;
  links: Array<Link>;

  constructor() { }

  ngOnInit() {
    this.links = this.getLinks();
  }

  getLinks(): Array<Link> {
    return new Array(
      <Link>{ name: '#info', icon: 'fa fa-home' },
      <Link>{ name: '#beers', icon: 'fa fa-beer' },
      <Link>{ name: '#location', icon: 'fa fa-map-marker' },
      <Link>{ name: '#feeds', icon: 'fa fa-newspaper-o' },
      <Link>{ name: '#contact', icon: 'fa fa-envelope-o' }
    );
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
