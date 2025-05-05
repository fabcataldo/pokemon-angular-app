import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { provideRouter } from '@angular/router';
import { SimplePokemon } from '../../interfaces';

const mockPokemon: SimplePokemon = {
  id: '1',
  name: 'bulbasaur',
};
describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    fixture.componentRef.setInput('pokemon', mockPokemon);

    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon signal inputValue', () => {
    expect(component.pokemon()).toEqual(mockPokemon);
  });

  it('should render the pokemon name and image correctly', () => {
    const img = compiled.querySelector('img') as HTMLImageElement;
    expect(img).toBeDefined();

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`;
    expect(img!.src).toEqual(imageUrl);
    expect(compiled.textContent?.trim()).toBe(mockPokemon.name);
  });

  it('should have the proper ng-reflect-router-link', () => {
    const divWithLink = compiled.querySelector('div');

    expect(
      divWithLink?.attributes.getNamedItem('ng-reflect-router-link')?.value
    ).toBe(`/pokemons,${mockPokemon.name}`);
  });
});
