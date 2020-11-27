export class Sign {
  id?: string;
  sys: number;
  day: number;
  pulse: number;
  user?: string;
  date?: string;

  // opcional user
  constructor(signResponse: any) {
    this.sys = signResponse.sys;
    this.day = signResponse.day;
    this.pulse = signResponse.pulse;
    this.user = signResponse.user;
    this.date = signResponse.date;

  }


}
