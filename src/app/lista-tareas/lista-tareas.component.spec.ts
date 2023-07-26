import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasComponent } from './lista-tareas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';

describe('ListaTareasComponent', () => {
  let component: ListaTareasComponent;
  let fixture: ComponentFixture<ListaTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTareasComponent]
    });
    fixture = TestBed.createComponent(ListaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
