import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  city: string = '';

  constructor()
  {
    // navigator.permissions.query({name: 'geolocation'}).then(response => {
    //   if (response.state !== 'denied') {
    //     window.navigator.geolocation.getCurrentPosition(({coords}) => {

    //       fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}+${coords.longitude}&key=4c0af22e789740efbedf2da3c09406a5`)
    //       .then(httpResponse => {
    //         httpResponse.json().then(details => {
    //           this.city = '+em+' + details.results[0].components.city;
    //         })
    //         .catch(parseError => console.log('parseApiError: ', parseError));
    //       })
    //       .catch(error => console.log(error));

    //     }, () => console.log('Geolocation permission denied.'));
    //   }
    // });
  }

  pesquisaGoogleMaps(termoPesquisa: string)
  {
    window.open(`https://www.google.com/maps/search/pontos+de+doação+de+${termoPesquisa + this.city}`, '_blank').focus();
  }
}
