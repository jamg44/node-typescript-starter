import { env } from "@/common/utils/envConfig"
import logger from "@/common/utils/logger.js"

logger.info({ env: env.NODE_ENV, log_level: env.LOG_LEVEL }, "Service starting...")

const onCloseSignal = () => {
	logger.info("sigint received, shutting down")
	// connection.close(() => {
	// 	logger.info("conn closed");
	// 	process.exit();
	// });
	setTimeout(() => process.exit(1), 10000).unref() // Force shutdown after 10s
}

process.on("SIGINT", onCloseSignal)
process.on("SIGTERM", onCloseSignal)
