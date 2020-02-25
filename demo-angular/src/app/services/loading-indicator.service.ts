import { Injectable } from '@angular/core';
import {
    LoadingIndicator,
    OptionsCommon,
    Mode
} from '@nstudio/nativescript-loading-indicator';

@Injectable()
export class LoadingIndicatorService {
    private loadingIndicator: LoadingIndicator;

    constructor() {
        this.loadingIndicator = new LoadingIndicator();
    }

    public show(message?: string, options?: any) {
        const defaultOptions: OptionsCommon = {
            message: message,
            dimBackground: true,
            color: '#000000',
            mode: Mode.Indeterminate,
            android: {
                cancelable: false
            },
            ios: {
                square: false
            }
        };
        this.loadingIndicator.show({
            ...defaultOptions,
            ...options,
        });
    }

    public hide() {
        this.loadingIndicator.hide();
    }
}
