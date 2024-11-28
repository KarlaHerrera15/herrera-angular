import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent1Component } from './app-component1.component';

describe('AppComponent1Component', () => {
  let component: AppComponent1Component;
  let fixture: ComponentFixture<AppComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
