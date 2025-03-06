import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-button',
  standalone: false,
  templateUrl: './header-button.component.html',
  styleUrl: './header-button.component.scss'
})
export class HeaderButtonComponent implements OnInit { // Théoriquement des boutons
  @Input() imageUrl!: string;
  @Input() imageDescription!: string;
  @Input() label!: string;
  @Input() routerLink!: string;
  displayLabel: string = "";

  ngOnInit() {
    this.sizeUpdate();
  }

  @HostListener('window:resize')
  sizeUpdate() {
    if (!this.label) return; // Pour une certaine raison c'est possible que le label ne soit pas défini à temps
    if (window.innerWidth < 750) {
      this.displayLabel = "";
    } else {
      this.displayLabel = this.label;
    }
  }
}
