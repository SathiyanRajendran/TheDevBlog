import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserviewComponent } from './post-userview.component';

describe('PostUserviewComponent', () => {
  let component: PostUserviewComponent;
  let fixture: ComponentFixture<PostUserviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUserviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
