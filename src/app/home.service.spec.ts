import { TestBed } from '@angular/core/testing';

import { HOMEService } from './home.service';


describe('HOMEService', () => {
  let service: HOMEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HOMEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  // mostrarCliente(){ }
    
});
