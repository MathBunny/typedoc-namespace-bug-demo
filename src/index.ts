import * as demoInterfaceApi from './interface';
import * as demoClassApi from './class';

export function helloWorld(): void {
  console.log('Hello World!');
}

/**
 * Sample namespace exported that leverages aliasing. 
 */
export namespace admin.subnamespace{
  export import DemoInterface = demoInterfaceApi.DemoInterface; // DOES NOT WORK!
  export interface DemoClass extends demoClassApi.DemoClass {}
}
