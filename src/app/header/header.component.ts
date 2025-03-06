import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  buttons: Array<{ imageUrl: string; imageDescription: string; label: string, routerLink: string }> = [ // Pas de service, les boutons relèvent du développerur et non d'un quelconque rédacteur
    { imageUrl: "assets/home.svg", imageDescription: "Icone", label: "Accueil", routerLink: "home" },
    { imageUrl: "assets/sandbox.svg", imageDescription: "Icone", label: "Bac à sable", routerLink: "sandbox" },
    { imageUrl: "assets/contact.svg", imageDescription: "Icone", label: "Contact", routerLink: "contact" },
  ];
}
