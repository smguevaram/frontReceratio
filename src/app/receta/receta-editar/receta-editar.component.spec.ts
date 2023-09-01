import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecetaEditarComponent } from './receta-editar.component';
import { EncabezadoComponent } from 'src/app/encabezado-app/encabezado/encabezado.component';
import { RecetaService } from '../receta.service';
import { IngredienteService } from 'src/app/ingrediente/ingrediente.service';
import { Ingrediente } from 'src/app/ingrediente/ingrediente';

describe('RecetaEditarComponent', () => {
  let component: RecetaEditarComponent;
  let fixture: ComponentFixture<RecetaEditarComponent>;
  let recetaService: RecetaService;
  let ingredienteService: IngredienteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaEditarComponent, EncabezadoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule ],
      providers: [RecetaService, IngredienteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaEditarComponent);
    component = fixture.componentInstance;
    recetaService = TestBed.inject(RecetaService); 
    ingredienteService = TestBed.inject(IngredienteService); 

    spyOn(ingredienteService, 'darIngredientes').and.returnValue(
      of([
        { id: 1, nombre: 'Ingrediente 1', unidad: 'gramo', costo: 10, calorias: 100, sitio: 'Cocina' },
        { id: 2, nombre: 'Ingrediente 2', unidad: 'gramo', costo: 20, calorias: 150, sitio: 'Cocina' }
      ] as Ingrediente[]) 
    );

    spyOn(recetaService, 'darReceta').and.returnValue(
      of({
        id: 1,
        nombre: 'Receta de prueba',
        duracion: 30,
        porcion: 4,
        preparacion: 'Pasos de la preparación',
        ingredientes: [
          { id: 1, ingrediente: { id: 1, nombre: 'Ingrediente 1', unidad: 'gramo', costo: 10, calorias: 100, sitio: 'Cocina' }, cantidad: 200 },
          { id: 2, ingrediente: { id: 2, nombre: 'Ingrediente 2', unidad: 'gramo', costo: 20, calorias: 150, sitio: 'Cocina' }, cantidad: 300 }
        ]
      }) 
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
