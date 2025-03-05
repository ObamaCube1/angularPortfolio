import { Component } from '@angular/core';
import {HeaderButtonComponent} from '../header-button/header-button.component';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  buttons: Array<{ imageUrl: string; imageDescription: string; label: string }> = [ // Pas de service, les boutons relèvent du développerur et non d'un quelconque rédacteur
    { imageUrl: "assets/home.svg", imageDescription: "Icone", label: "Accueil" },
    { imageUrl: "assets/sandbox.svg", imageDescription: "Icone", label: "Bac à sable" },
    { imageUrl: "assets/contact.svg", imageDescription: "Icone", label: "Contact" },
  ];
}
