import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfe';
  admin_verif=false;
  agent_verif=false;
   openagentlogin(){
    this.admin_verif=false;
    this.agent_verif=true;
  }

  openadminreseaulogin(){
  this.admin_verif=true;
  this.agent_verif=false;
  }
}
