import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemon-list-sckeleton',
  imports: [],
  standalone: true,
  templateUrl: './pokemon-list-sckeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListSckeletonComponent {}
