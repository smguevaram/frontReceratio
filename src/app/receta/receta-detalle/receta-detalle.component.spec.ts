/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecetaDetalleComponent } from './receta-detalle.component';
import { EncabezadoComponent } from 'src/app/encabezado-app/encabezado/encabezado.component';

describe('RecetaDetalleComponent', () => {
  let component: RecetaDetalleComponent;
  let fixture: ComponentFixture<RecetaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaDetalleComponent, EncabezadoComponent ],
      imports: [ HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaDetalleComponent);
    component = fixture.componentInstance;
    const mockReceta = {
      id: 1,
      nombre: 'Receta de prueba',
      duracion: 30,
      preparacion: 'Pasos de preparación...',
      porcion: 4,
      ingredientes: [],
    };

    component.recetaDetalle = mockReceta;

    fixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
