/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredienteListaComponent } from './ingrediente-lista.component';
import { EncabezadoComponent } from 'src/app/encabezado-app/encabezado/encabezado.component';

describe('IngredienteListaComponent', () => {
  let component: IngredienteListaComponent;
  let fixture: ComponentFixture<IngredienteListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteListaComponent, EncabezadoComponent ],
      imports: [ RouterTestingModule, ToastrModule.forRoot(), HttpClientTestingModule ],
      providers: [ ToastrService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
