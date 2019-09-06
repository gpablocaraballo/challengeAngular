import { TestBed,inject  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UtilsService]
    });
  });

  it('should be initialized UTILSERVICE!!!!!', inject([UtilsService], (authService: UtilsService) => {
    expect(authService).toBeTruthy();
  }));


});

