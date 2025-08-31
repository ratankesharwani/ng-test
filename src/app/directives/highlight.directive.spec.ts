import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

// Host component for testing the directive
@Component({
  template: `<p appHighlight>Test</p>`
})
class TestHostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, HighlightDirective]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should highlight background on mouseenter', () => {
    // Arrange
    const debugElement = fixture.debugElement.query(By.css('p'));
    const paragraphEl: HTMLElement = debugElement.nativeElement;

    // Act
    debugElement.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    // Assert
    expect(paragraphEl.style.backgroundColor).toBe('yellow');
  });

  it('should remove highlight on mouseleave', () => {
    // Arrange
    const debugElement = fixture.debugElement.query(By.css('p'));
    const paragraphEl: HTMLElement = debugElement.nativeElement;

    // Act
    debugElement.triggerEventHandler('mouseenter', {}); // highlight first
    fixture.detectChanges();
    debugElement.triggerEventHandler('mouseleave', {}); // then unhighlight
    fixture.detectChanges();

    // Assert
    expect(paragraphEl.style.backgroundColor).toBe('');
  });
});
