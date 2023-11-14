import { IATCMediator } from "./IATCmediator.interface";
import { Mediator } from "./mediator.interface";

export class Runway implements Mediator {
  private runwayNumber: string;
  private atcMediator: IATCMediator;

  constructor(runwayNumber: string, atcMediator: IATCMediator) {
    this.runwayNumber = runwayNumber;
    this.atcMediator = atcMediator;
    this.atcMediator.setLandingStatus(true);
  }

  public land(): void {
    console.log(`Landing permission granted for runway ${this.runwayNumber}.`);
    this.atcMediator.setLandingStatus(true);
  }
}
