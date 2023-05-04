import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej01DataBindingComponent } from './ej01-data-binding.component';

describe('Ej01DataBindingComponent', () => {
  let component: Ej01DataBindingComponent;
  let fixture: ComponentFixture<Ej01DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej01DataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej01DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
