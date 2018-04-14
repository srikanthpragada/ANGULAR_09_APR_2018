import { Injectable } from '@angular/core';

@Injectable()
export class ConvertService {

    inrToUsd(inr : number) {
        return  inr / 69
    }

    inrToEur(inr : number) {
        return  inr / 78
    }
}