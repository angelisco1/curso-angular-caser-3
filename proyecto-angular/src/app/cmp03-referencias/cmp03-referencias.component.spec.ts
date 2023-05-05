import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03ReferenciasComponent } from './cmp03-referencias.component';

describe('Cmp03ReferenciasComponent', () => {
  let component: Cmp03ReferenciasComponent;
  let fixture: ComponentFixture<Cmp03ReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp03ReferenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp03ReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
