import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carousel-notes',
  imports: [RouterLink],
  templateUrl: './carousel-notes.component.html',
  styleUrl: './carousel-notes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselNotesComponent implements OnInit {

  public notesCarousel = input<EventsCarousel[] | undefined>();

  notes: EventsCarousel[] = [];


  ngOnInit(): void {
    console.log(this.notesCarousel(), 'notas')
  }

}
