/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredienteCrearComponent } from './ingrediente-crear.component';
import { EncabezadoComponent } from 'src/app/encabezado-app/encabezado/encabezado.component';

describe('IngredienteCrearComponent', () => {
  let component: IngredienteCrearComponent;
  let fixture: ComponentFixture<IngredienteCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteCrearComponent, EncabezadoComponent ],
      imports: [ HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
