import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CommonserviceService } from '../../utilities/services/commonservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarVisible: boolean = true;
  items: MenuItem[] | undefined;
  constructor(private commonService: CommonserviceService, private router: Router) { }
  
  logout() {
    this.commonService.logout();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.items = [
      {
          label: 'Playground',
          icon: '',
          routerLink:['/app/playground']
      },
      {
        label: 'Pipes',
        icon: '',
        routerLink:['/base/pipes']
      },
      {
        label: 'Directives',
        icon: '',
        routerLink:['/base/directives']
      },
      {
        label: 'Observables',
        icon: '',
        routerLink:['/base/observables']
      },
      {
        label: 'Content Projection',
        icon: '',
        routerLink:['/base/projection']
      },
      {
        label: 'Template & Properties',
        icon: '',
        routerLink:['/base/template_prop']
      }
  ];
  }
}
