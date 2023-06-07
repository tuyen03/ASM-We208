import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.css']
})
export class LayoutMenuComponent {
  chill = true;
  megaMenuDD = true;
  products = [
    {
      title: 'Home',
      status: true,
      title_child: [
        {
          name: 'Action',
          link: '',
        }
        ,
        {
          name: 'Action',
          link: '',
        }
        ,
        {
          name: 'Action',
          link: '',
        }
        ,
      ]
    },
    {
      title: 'OUR MENU',
      status: true,
      title_child: [
        {
          name: 'Action',
          link: '',
        }
        ,
        {
          name: 'Action',
          link: '',
        }
        ,
        {
          name: 'Action',
          link: '',
        }
        ,
      ]
    },
    {
      title: 'BLOG',
      status: true,
      title_child: [
        {
          name: 'Action',
          link: '',
        }
        ,
        {
          name: 'Action',
          link: '',
        }
        ,
        {
          name: 'Action',
          link: '',
        }
        ,
      ]
    }
  ]
  megaMenu = [
    {
      title: 'ALIQUAM AND LOBORTIS...',
      title_child: 'Donec nec faucibus lobortis viverra blandit semjusto',
    },
    {
      title: 'ALIQUAM AND LOBORTIS...',
      title_child: 'Donec nec faucibus lobortis viverra blandit semjusto',
    },
    {
      title: 'ALIQUAM AND LOBORTIS...',
      title_child: 'Donec nec faucibus lobortis viverra blandit semjusto',
    },
    {
      title: 'ALIQUAM AND LOBORTIS...',
      title_child: 'Donec nec faucibus lobortis viverra blandit semjusto',
    },
    {
      title: 'ALIQUAM AND LOBORTIS...',
      title_child: 'Donec nec faucibus lobortis viverra blandit semjusto',
    },
    {
      title: 'ALIQUAM AND LOBORTIS...',
      title_child: 'Donec nec faucibus lobortis viverra blandit semjusto',
    }
  ]

  show() {
    this.chill = !this.chill;
  };
  handleClick(i: any) {
    this.products[i].status = !this.products[i].status
  }
  MegaClick() {
    this.megaMenuDD = !this.megaMenuDD
  }

}
