import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { GridComponent } from '../grid/grid.component';
import { DetailGridComponent } from '../detail-grid/detail-grid.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, HeaderComponent, NavComponent, GridComponent, DetailGridComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
