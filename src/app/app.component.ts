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


  Regexp() {
    const a: any = document.getElementById('email') as HTMLElement | null;
    const d: any = document.getElementById('password') as HTMLElement | null;

    let password: any = d.value;
    let email: any = a.value;

    let regexEmail: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let regexPasswort: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;


    if (!(regexEmail.test(email))) {
      let textEmail = document.querySelector('#smallEmail') as HTMLElement;
      textEmail.innerHTML = 'Invalid e-mail address!';
    } else if (!(regexPasswort.test(password))) {
      let textEmail = document.querySelector('#smallEmail') as HTMLElement;
      textEmail.innerHTML = 'The password must be min. 5 character and must contain min. 1 uppercase + min. 1 lowercase + sign!';
    } else {
      let textEmail = document.querySelector('#smallEmail') as HTMLElement;
      textEmail.innerHTML = 'Registration Completed!';
      textEmail.setAttribute('style', 'color:green;')
    }
  }

}
