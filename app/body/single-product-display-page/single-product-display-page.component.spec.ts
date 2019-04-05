import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductDisplayPageComponent } from './single-product-display-page.component';

describe('SingleProductDisplayPageComponent', () => {
  let component: SingleProductDisplayPageComponent;
  let fixture: ComponentFixture<SingleProductDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProductDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
