import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardGameComponent } from './info-card-game.component';

describe('InfoCardGameComponent', () => {
  let component: InfoCardGameComponent;
  let fixture: ComponentFixture<InfoCardGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
