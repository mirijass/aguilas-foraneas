import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretenimientoComponent } from './entretenimiento.component';

describe('EntretenimientoComponent', () => {
  let component: EntretenimientoComponent;
  let fixture: ComponentFixture<EntretenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntretenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntretenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
