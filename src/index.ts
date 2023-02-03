let debug: number, logs1: boolean|undefined|null;
import { getTime } from '@thundernetworkrad/time';
import { log } from '@thundernetworkrad/logs';

export class createCout {
    /**
     * @constructor
     * @param debugLevel from what debug level you want to log?
     * @param logs do you want files log?
     */
    constructor (debugLevel: number, logs?: boolean) {
        if (!debugLevel) debugLevel = 0;
        if (!logs) logs = false;
        debug = debugLevel;
        logs1 = logs;
    }

    /**
     * 
     * @param string what to log?
     * @param debugLevel from what debug level this will logged?
     * @returns 
     */
    cout (string: string, debugLevel?: number) {
        if (!debugLevel) debugLevel = 0;
        var time = getTime();

        if (debug >= debugLevel) {
            console.log(`[${time.year}.${time.month}.${time.day}-${time.hours}:${time.minutes}:${time.seconds}] | ${String(string)}`);
            if (logs1) {
                log(`[${time.year}.${time.month}.${time.day}-${time.hours}:${time.minutes}:${time.seconds}] | ${String(string)}`);
            }
        }
        return;
    };
}