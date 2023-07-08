import { getTime } from '@thundernetworkrad/time';
import { log } from '@thundernetworkrad/logs';
import chalk from "chalk";

export default class cout {
    private debugLevel: number
    private file: boolean
    private emoji: boolean

    /**
     * 
     * @param debugLevel The debug level of the logging
     * @param file Do you want put the logs in a file?
     * @param emoji Do you want put the logs in an emoji?
     */
    constructor(debugLevel?: number, file?: boolean, emoji?: boolean) {
        this.debugLevel = debugLevel || 0;
        this.file = file || false;
        this.emoji = emoji || false;
    }

    private l(string: string, type: string) {
        let time = `${getTime().hours}:${getTime().minutes}:${getTime().seconds}`;
        type = type.toUpperCase();

        if (getTime().hours < 10) time += " ";
        if (getTime().minutes < 10) time += " ";
        if (getTime().seconds < 10) time += " ";

        let timec = chalk.blue(time), stringc: string = " ", typec: string, emoji: string, emojic: string;

        switch (type) {
            case "DEBUG":
                stringc = chalk.grey(string);
                typec = chalk.grey(type);
                emoji = "📝";
                emojic = "📝 ";
                break;
            case "LOG":
                stringc = chalk.white(string);
                type = "  " + type;
                typec = chalk.white(type);
                emoji = "🪵";
                emojic = "🪵  ";
                break;
            case "INFO":
                stringc = chalk.cyan(string);
                type = " " + type;
                typec = chalk.cyan(type);
                emoji = "ℹ️ ";
                emojic = "ℹ️  ";
                break;
            case "WARN":
                stringc = chalk.yellow(string);
                type = " " + type;
                typec = chalk.yellow(type);
                emoji = "⚠️";
                emojic = "⚠️  ";
                break;
            case "ERROR":
                stringc = chalk.red(string);
                typec = chalk.red(type);
                emoji = "❌";
                emojic = "❌ ";
                break;
        }
        if (this.file) {
            string.split("\n").forEach((line) => {
                log(`${this.emoji ? emoji : ""}[${time} ${type}] | ${line}`);
            })
        }

        stringc.split("\n").forEach((line) => {
            console.log(`${this.emoji ? emojic : ""}[${timec} ${typec}] | ${line}`);
        })
    }

    debug(string: any, level?: number) {
        if (this.debugLevel >= (level || 0)) {
            this.l(String(string), "DEBUG")
        }
    }

    log(string: any) {
        this.l(String(string), "LOG");
    }

    info(string: any) {
        this.l(String(string), "INFO");
    }

    warn(string: any) {
        this.l(String(string), "WARN");
    }

    error(string: any) {
        this.l(String(string), "ERROR");
    }
}