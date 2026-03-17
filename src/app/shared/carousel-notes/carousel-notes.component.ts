import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-notes',
  imports: [],
  templateUrl: './carousel-notes.component.html',
  styleUrl: './carousel-notes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselNotesComponent implements OnInit {

  public notesCarousel = input<EventsCarousel[] | undefined>();

  notes: EventsCarousel[] = [];


  ngOnInit(): void {

  }

}
