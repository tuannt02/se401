import { Flight } from "./Flight";
import { Runway } from "./Runway";

export interface IATCMediator {
  registerRunway(runway: Runway): void;
  registerFlight(flight: Flight): void;
  getLandingStatus(): boolean;
  setLandingStatus(status: boolean): void;
  changeLandingStatus(): void;
}
