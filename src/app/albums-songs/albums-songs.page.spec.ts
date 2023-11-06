import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsSongsPage } from './albums-songs.page';

describe('AlbumsSongsPage', () => {
  let component: AlbumsSongsPage;
  let fixture: ComponentFixture<AlbumsSongsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlbumsSongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
