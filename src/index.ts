import { env } from "@/common/utils/envConfig"
import logger from "@/common/utils/logger"

process.on("SIGINT", onCloseSignal)
process.on("SIGTERM", onCloseSignal)
process.on("exit", code => logger.info(`Exiting with code: ${code}`))

async function main() {
	logger.info({ env: env.NODE_ENV, log_level: env.LOG_LEVEL }, "Service starting...")

	// Your application logic here

}

main().catch(err => { console.error("Fatal error", err); process.exit(1) })

/**
 * Functions
 * **********************************
 */

function onCloseSignal() {
	logger.info("sigint received, shutting down")
	// connection.close(() => {
	// 	logger.info("conn closed");
	// 	process.exit();
	// });
	setTimeout(() => process.exit(1), 10000).unref() // Force shutdown after 10s
	process.exit()
}
