import { Component, OnInit } from '@angular/core';

import { InicioPage } from '../inicio/inicio.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { HomePage } from '../home/home.page';
import { LiderazgoPage } from '../liderazgo/liderazgo.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tab1Root = InicioPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;
  tab5Root = LiderazgoPage;

  constructor() { }

  ngOnInit() {}

}
