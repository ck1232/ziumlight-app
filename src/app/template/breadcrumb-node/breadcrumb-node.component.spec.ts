import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbNodeComponent } from './breadcrumb-node.component';

describe('BreadcrumbNodeComponent', () => {
  let component: BreadcrumbNodeComponent;
  let fixture: ComponentFixture<BreadcrumbNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
