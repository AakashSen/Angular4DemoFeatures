import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrappanelComponent } from './bootstrappanel.component';

describe('BootstrappanelComponent', () => {
  let component: BootstrappanelComponent;
  let fixture: ComponentFixture<BootstrappanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrappanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrappanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
