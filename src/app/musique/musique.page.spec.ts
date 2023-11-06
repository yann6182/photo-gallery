import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusiquePage } from './musique.page';

describe('MusiquePage', () => {
  let component: MusiquePage;
  let fixture: ComponentFixture<MusiquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MusiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
