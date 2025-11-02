import { pino } from "pino"
import { env } from "@/common/utils/envConfig"

// If you want to customize the logger on your application, you can do:
// const log = logger.child({ name: 'service-name' });

const logger = pino({
	level: env.LOG_LEVEL || "info",
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
			translateTime: "SYS:standard", // Use a standard system format: "yyyy-mm-dd HH:MM:ss.l o", UTC alternative: "yyyy-mm-dd HH:MM:ss.l Z"
		},
	},
})

export default logger
