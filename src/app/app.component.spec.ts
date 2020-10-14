import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';
import {Dude} from './Dude';

const mockArrayOfDudes: Dude[] = [
  {name: 'Mario', age: 29},
  {name: 'Luigi', age: 28},
  {name: 'Aragorn', age: 33},
  {name: 'Bilbo', age: 69}
];


describe('AppComponent', () => {
  let fixture;
  let app;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        FilterPipe
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    app.coolDudes = mockArrayOfDudes;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(app).toBeTruthy();
  });


  it('should find dude with the name typed in search box', () => {
    const hostElement = fixture.nativeElement;
    const searchBoxInput: HTMLInputElement = hostElement.querySelector('.search-box');

    searchBoxInput.value = 'luigi';
    searchBoxInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const unorderedListElements: HTMLElement[] = Array.from(hostElement.querySelectorAll('ul'));
    console.log('unorderedListElements: ', unorderedListElements);
    expect(unorderedListElements.length).toEqual(1);
    expect(unorderedListElements[0].textContent).toEqual('Luigi');

  });



  it('should not find any results', () => {
    const hostElement = fixture.nativeElement;
    const searchBoxInput: HTMLInputElement = hostElement.querySelector('.search-box');

    searchBoxInput.value = 'Anakonda';
    searchBoxInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const unorderedListElements: HTMLElement[] = Array.from(hostElement.querySelectorAll('ul'));
    console.log('unorderedListElements: (empty?): ', unorderedListElements);
    expect(unorderedListElements.length).toEqual(0);

  });


});
