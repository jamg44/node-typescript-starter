import { describe, expect, it, beforeEach, vi } from "vitest"
import type { Logger } from "pino"

describe("logger", () => {
	const originalEnv = process.env

	beforeEach(() => {
		vi.resetModules()
		process.env = { ...originalEnv }
	})

	it("should create a logger instance", async () => {
		const { default: logger } = await import("../logger")

		expect(logger).toBeDefined()
		expect(typeof logger.info).toBe("function")
		expect(typeof logger.error).toBe("function")
		expect(typeof logger.warn).toBe("function")
		expect(typeof logger.debug).toBe("function")
		expect(typeof logger.trace).toBe("function")
		expect(typeof logger.fatal).toBe("function")
	})

	it("should respect LOG_LEVEL from environment", async () => {
		process.env.LOG_LEVEL = "debug"
		vi.resetModules()

		const { default: logger } = await import("../logger")

		expect(logger.level).toBe("debug")
	})

})
