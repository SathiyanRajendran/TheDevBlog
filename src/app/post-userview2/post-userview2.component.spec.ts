import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserview2Component } from './post-userview2.component';

describe('PostUserview2Component', () => {
  let component: PostUserview2Component;
  let fixture: ComponentFixture<PostUserview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUserview2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUserview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
