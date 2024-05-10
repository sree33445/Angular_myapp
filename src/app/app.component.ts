import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'my first app';
  name: string = ' Expertz';
  isFound: boolean = true;
  numArray = [10, 20, 30];
  myId = 'newId';
  isDisabled = false;
  isChange: boolean = false;
  hasError = true;
  isSpecial = true;
  isBold = true;
  highlightColor = 'orange';

  titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  successClass = 'text-success';

  person = {
    name: 'John',
    age: 50,
  };
  tvimage =
    'https://tse2.mm.bing.net/th/id/OIP.sGNyrp81KzfxWes6k6oXxgHaE8?rs=1&pid=ImgDetMain';

  greet() {
    return 'Hello' + this.name;
  }
  max(num1: number, num2: number) {
    return Math.max(num1, num2);
  }
  getDate() {
    return Date();
  }
  printname() {
    console.log('Expertzlab');
  }
  changeImage() {
    this.isChange = !this.isChange;

    if (this.isChange) {
      this.tvimage =
        'https://tse2.mm.bing.net/th/id/OIP.sGNyrp81KzfxWes6k6oXxgHaE8?rs=1&pid=ImgDetMain';
    } else {
      this.tvimage =
        'https://i5.walmartimages.com/asr/3e94a10b-b889-4ecc-9d2c-ace12aa95341_3.997ddf1d59b9786ad1f38ccc1e1f5b4e.jpeg';
    }
  }
}
