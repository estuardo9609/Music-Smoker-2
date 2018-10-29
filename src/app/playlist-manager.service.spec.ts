import { TestBed } from '@angular/core/testing';

import { PlaylistManagerService } from './playlist-manager.service';

describe('PlaylistManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistManagerService = TestBed.get(PlaylistManagerService);
    expect(service).toBeTruthy();
  });
});
