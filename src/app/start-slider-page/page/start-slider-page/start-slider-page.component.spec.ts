import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSliderPageComponent } from './start-slider-page.component';

describe('StartSliderPageComponent', () => {
  let component: StartSliderPageComponent;
  let fixture: ComponentFixture<StartSliderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSliderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSliderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
