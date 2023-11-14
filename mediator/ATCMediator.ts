import { Flight } from "./Flight";
import { IATCMediator } from "./IATCmediator.interface";
import { Runway } from "./Runway";

export class ATCMediator implements IATCMediator {
  public land: boolean;
  private runways: Runway[];
  private flights: Flight[];

  constructor() {
    this.runways = [];
    this.flights = [];
    this.land = true;
  }
  registerRunway(runway: Runway) {
    this.runways.push(runway);
  }
  registerFlight(flight: Flight) {
    this.flights.push(flight);
  }
  getLandingStatus() {
    return this.land;
  }
  setLandingStatus(status: boolean) {
    this.land = status;
  }
  changeLandingStatus() {
    this.land = !this.land;
  }
}
