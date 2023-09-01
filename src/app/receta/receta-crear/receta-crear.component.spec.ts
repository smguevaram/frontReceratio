/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecetaCrearComponent } from './receta-crear.component';
import { EncabezadoComponent } from 'src/app/encabezado-app/encabezado/encabezado.component';

describe('RecetaCrearComponent', () => {
  let component: RecetaCrearComponent;
  let fixture: ComponentFixture<RecetaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaCrearComponent, EncabezadoComponent ],
      imports: [ HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
