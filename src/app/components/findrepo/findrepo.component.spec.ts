import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindrepoComponent } from './findrepo.component';

describe('FindrepoComponent', () => {
  let component: FindrepoComponent;
  let fixture: ComponentFixture<FindrepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindrepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
