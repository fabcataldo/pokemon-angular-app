import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLDivElement;

  @Component({
    selector: 'app-navbar',
    standalone: true,
  })
  class NavbarComponentMock {}

  beforeEach(async () => {
    TestBed.overrideComponent(AppComponent, {
      set: {
        imports: [NavbarComponentMock],

        //los componentes que no se encuentren, que no marque error
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      },
    });

    // lo recomendado
    // await TestBed.configureTestingModule({
    //   imports: [AppComponent],
    //   providers: [provideRouter([])],
    // })
    //   .overrideComponent(AppComponent, {
    //     add: {
    //       imports: [NavbarComponentMock],
    //     },
    //     remove: {
    //       imports: [NavbarComponent],
    //     },
    //   })
    //   .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render the navbar and router-outlet`, () => {
    // expect(compiled.getElementsByTagName('app-navbar')).toBeTruthy();
    // expect(compiled.getElementsByTagName('router-outlet')).toBeTruthy();

    //verifico solamente que los tags de estos componentes se rendericen, nada más
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pokemon-ssr');
  // });
});
