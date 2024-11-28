import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent3Component } from './app-component3.component';

describe('AppComponent3Component', () => {
  let component: AppComponent3Component;
  let fixture: ComponentFixture<AppComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
