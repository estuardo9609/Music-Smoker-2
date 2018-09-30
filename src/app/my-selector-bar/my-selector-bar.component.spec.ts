import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelectorBarComponent } from './my-selector-bar.component';

describe('MySelectorBarComponent', () => {
  let component: MySelectorBarComponent;
  let fixture: ComponentFixture<MySelectorBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySelectorBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelectorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
