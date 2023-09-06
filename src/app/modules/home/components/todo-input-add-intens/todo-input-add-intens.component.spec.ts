import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddIntensComponent } from './todo-input-add-intens.component';

describe('TodoInputAddIntensComponent', () => {
  let component: TodoInputAddIntensComponent;
  let fixture: ComponentFixture<TodoInputAddIntensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoInputAddIntensComponent]
    });
    fixture = TestBed.createComponent(TodoInputAddIntensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
