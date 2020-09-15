import { Component } from '@angular/core';
import { Utils } from '@nativescript/core';
import { LoadingIndicatorService } from '../services/loading-indicator.service';
import { TestNavService } from '../services/test-nav.service';

@Component({
  moduleId: module.id,
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
})
export class LandingPageComponent {
  public changeTestText =
    'Perform multiple calls to the show method with different options.';
  public duplicateTestText = 'Perform multiple calls to the show method.';
  public navigationTestText =
    'Perform a service based navigation to a new page.';

  constructor(
    private loadingIndicatorService: LoadingIndicatorService,
    private testNavService: TestNavService
  ) {}

  public async onPressChangeWithNewColourTest() {
    this.loadingIndicatorService.show();
    await new Promise((resolve) => Utils.setTimeout(resolve, 1000));
    this.loadingIndicatorService.show(undefined, { color: '#d400bc' });
    await new Promise((resolve) => Utils.setTimeout(resolve, 1000));
    this.loadingIndicatorService.hide();
  }

  public async onPressNavigateInstantTest() {
    this.loadingIndicatorService.show('This should go away on the next page');
    this.testNavService.tryNav();
  }

  public async onPressNavigateDelayedTest() {
    this.loadingIndicatorService.show('This should go away on the next page');
    await new Promise((resolve) => Utils.setTimeout(resolve, 1000));
    this.testNavService.tryNav();
  }

  public async onPressDuplicateWithNoTextTest() {
    this.duplicateShow();
  }

  public async onPressDuplicateWithSameTextTest() {
    this.duplicateShow('Same text', 'Same text');
  }

  public async onPressDuplicateWithNewTextTest() {
    this.duplicateShow(
      'This message should be replaced',
      'And only one spinner should show'
    );
  }

  private async duplicateShow(messageOne?: string, messageTwo?: string) {
    this.loadingIndicatorService.show(messageOne);
    await new Promise((resolve) => Utils.setTimeout(resolve, 1000));
    this.loadingIndicatorService.show(messageTwo);
    await new Promise((resolve) => Utils.setTimeout(resolve, 1000));
    this.loadingIndicatorService.hide();
  }
}
