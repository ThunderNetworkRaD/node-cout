import { getTime } from "@thundernetworkrad/time";
import { log } from "@thundernetworkrad/logs";
import chalk from "chalk";

export default class cout {
	private debugLevel: number
	private save: boolean
	private emoji: boolean
	private types: string[]

	/**
	 * 
	 * @param debugLevel The maximum debug level preferred
	 * @param options.save Whetever logs are saved in a file or not
	 * @param options.emoji If logs are followed by an emoji
	 * @param options.types Types of logs that are allowed to appear
	 * 
	 */
	constructor(debugLevel: number, options?: { save?: boolean, emoji?: boolean, types?: string[] }) {
		const { save, emoji, types } = options || {};
		this.debugLevel = debugLevel || 0;
		this.save = save || false;
		this.emoji = emoji || false;
		this.types = types || [];
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
				emojic = "🪵 ";
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
		if (this.save) {
			string.split("\n").forEach((line) => {
				log(`${this.emoji ? emoji : ""}[${time} ${type}] | ${line}`);
			})
		}

		stringc.split("\n").forEach((line) => {
			console.log(`${this.emoji ? emojic : ""}[${timec} ${typec}] | ${line}`);
		})
	}

	private checkTypes(types: string | string[]) {
		if (!Array.isArray(types)) types = [types];
		return types.some((type) => this.types.includes(type));

	}

	debug(string: any, level: number, types?: string | string[]) {
		if ((level || 0) <= this.debugLevel) {
			if (types && !this.checkTypes(types)) return;
			this.l(String(string), "DEBUG");
		}
	}

	log(string: any, types?: string | string[]) {
		if (types && !this.checkTypes(types)) return;
		this.l(String(string), "LOG");
	}

	info(string: any, types?: string | string[]) {
		if (types && !this.checkTypes(types)) return;
		this.l(String(string), "INFO");
	}

	warn(string: any, types?: string | string[]) {
		if (types && !this.checkTypes(types)) return;
		this.l(String(string), "WARN");
	}

	error(string: any, types?: string | string[]) {
		if (types && !this.checkTypes(types)) return;
		this.l(String(string), "ERROR");
	}
}
