import { ATCMediator } from "./ATCMediator";
import { Flight } from "./Flight";
import { Runway } from "./Runway";

const atcMediator = new ATCMediator();
const vietjack01 = new Flight("vietjack01", atcMediator);
const runway = new Runway("runway", atcMediator);
atcMediator.registerFlight(vietjack01);
atcMediator.registerRunway(runway);
vietjack01.getReady();
runway.land();
vietjack01.land();
