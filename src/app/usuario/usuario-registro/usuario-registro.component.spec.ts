/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuarioRegistroComponent } from './usuario-registro.component';

describe('UsuarioRegistroComponent', () => {
  let component: UsuarioRegistroComponent;
  let fixture: ComponentFixture<UsuarioRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRegistroComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule ]
    })
    .overrideProvider(ToastrService, { useValue: {} })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
