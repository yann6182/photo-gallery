import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongArtistePage } from './song-artiste.page';

describe('SongArtistePage', () => {
  let component: SongArtistePage;
  let fixture: ComponentFixture<SongArtistePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SongArtistePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
