/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecetaService } from './receta.service';

describe('Service: Receta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetaService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should ...', inject([RecetaService], (service: RecetaService) => {
    expect(service).toBeTruthy();
  }));
});
