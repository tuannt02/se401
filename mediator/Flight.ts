import { IATCMediator } from "./IATCmediator.interface";
import { Mediator } from "./mediator.interface";

export class Flight implements Mediator {
  private flightNumber: string;
  private atcMediator: IATCMediator;

  constructor(flightNumber: string, atcMediator: IATCMediator) {
    this.flightNumber = flightNumber;
    this.atcMediator = atcMediator;
  }

  public land(): void {
    if (this.atcMediator.getLandingStatus()) {
      console.log(`Flight ${this.flightNumber} is landing...`);
      this.atcMediator.setLandingStatus(true);
    } else {
      console.log(`Flight ${this.flightNumber} is waiting for landing...`);
    }
  }

  public getReady(): void {
    console.log(`Flight ${this.flightNumber} is ready for landing.`);
  }
}
