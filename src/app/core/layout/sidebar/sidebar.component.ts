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
      <Link>{ name: 'Beers', icon: 'fa fa-beer' },
      <Link>{ name: 'Info', icon: 'fa fa-info' },
      <Link>{ name: 'Location', icon: 'fa fa-map-marker' },
      <Link>{ name: 'Contact', icon: 'fa fa-envelope-o' }
    );
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
