import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Header component switch menu hamburguer event', () => {
  it('#clickHamb() should toggle #showMenuHamb', () => {
    const comp = new HeaderComponent();
    expect(comp.showMenuHamb).toBe(false, 'false at first');
    comp.clickHamb();
    expect(comp.showMenuHamb).toBe(true, 'true after click');
    comp.clickHamb();
    expect(comp.showMenuHamb).toBe(false, 'false after second click');
  });


});
