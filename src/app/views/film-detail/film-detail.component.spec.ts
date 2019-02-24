import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailComponent } from './film-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FilmDetailComponent', () => {
  let component: FilmDetailComponent;
  let fixture: ComponentFixture<FilmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         RouterTestingModule,
         HttpClientModule
      ],
      declarations: [ FilmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
