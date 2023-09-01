import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredienteEditarComponent } from './ingrediente-editar.component';
import { EncabezadoComponent } from 'src/app/encabezado-app/encabezado/encabezado.component';
import { IngredienteService } from '../ingrediente.service';
import { Ingrediente } from '../ingrediente';

describe('IngredienteEditarComponent', () => {
  let component: IngredienteEditarComponent;
  let fixture: ComponentFixture<IngredienteEditarComponent>;
  let ingredienteService: IngredienteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteEditarComponent, EncabezadoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule ],
      providers: [IngredienteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteEditarComponent);
    component = fixture.componentInstance;
    ingredienteService = TestBed.inject(IngredienteService);

    spyOn(ingredienteService, 'darIngrediente').and.returnValue(
      of({
        id: 1,
        nombre: 'Ingrediente de prueba',
        unidad: 'gramo',
        costo: 10,
        calorias: 100,
        sitio: 'Cocina'
      } as Ingrediente)
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
