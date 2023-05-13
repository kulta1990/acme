import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acme';



  click(): void {
    let text = document.getElementById('emailLabel') as HTMLElement;
    text.setAttribute('style', 'color: #4A90E2');
    let hr = document.getElementById('hr1') as HTMLElement;
    hr.setAttribute('style', 'border-top: 1px solid #4A90E2');
    let text1 = document.getElementById('pass') as HTMLElement;
    text1.setAttribute('style', 'color: #A1A1A1');
    let hr2 = document.getElementById('hr2') as HTMLElement;
    hr2.setAttribute('style', 'border-top: 1px solid #A1A1A1');
  }


  click2(): void {
    let text = document.getElementById('pass') as HTMLElement;
    text.setAttribute('style', 'color: #4A90E2');
    let hr = document.getElementById('hr2') as HTMLElement;
    hr.setAttribute('style', 'border-top: 1px solid #4A90E2');
    let texta = document.getElementById('emailLabel') as HTMLElement;
    texta.setAttribute('style', 'color: #A1A1A1');
    let hr1 = document.getElementById('hr1') as HTMLElement;
    hr1.setAttribute('style', 'border-top: 1px solid #A1A1A1');
  }

}
