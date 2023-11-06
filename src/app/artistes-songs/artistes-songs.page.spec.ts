import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistesSongsPage } from './artistes-songs.page';

describe('ArtistesSongsPage', () => {
  let component: ArtistesSongsPage;
  let fixture: ComponentFixture<ArtistesSongsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArtistesSongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
