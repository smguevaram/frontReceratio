/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuarioLoginComponent } from './usuario-login.component';
import { EncabezadoComponent } from 'src/app/encabezado-app/encabezado/encabezado.component';

describe('UsuarioLoginComponent', () => {
  let component: UsuarioLoginComponent;
  let fixture: ComponentFixture<UsuarioLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioLoginComponent, EncabezadoComponent ],
      imports: [ HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
