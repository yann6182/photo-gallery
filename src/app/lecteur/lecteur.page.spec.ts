import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecteurPage } from './lecteur.page';

describe('LecteurPage', () => {
  let component: LecteurPage;
  let fixture: ComponentFixture<LecteurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
