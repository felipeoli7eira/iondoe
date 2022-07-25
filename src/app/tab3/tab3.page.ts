import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  abrirWhatsApp()
  {
    window.open('https://wa.me/5596984157994/?text=Oi,%20estou%20precisando%20de%20ajuda%20voluntária.', '_blank').focus();
    // window.open('whatsapp://app').focus();
  }
}
