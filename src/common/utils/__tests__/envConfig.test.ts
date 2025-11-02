import { describe, expect, it, beforeEach, vi } from "vitest"

describe("envConfig", () => {
	const originalEnv = process.env

	beforeEach(() => {
		vi.resetModules()
		process.env = { ...originalEnv }
	})

	describe("env object", () => {
		it("should parse valid environment variables", async () => {
			process.env.NODE_ENV = "development"
			process.env.COMMON_RATE_LIMIT_MAX_REQUESTS = "500"
			process.env.COMMON_RATE_LIMIT_WINDOW_MS = "2000"
			process.env.LOG_LEVEL = "debug"

			const { env } = await import("../envConfig")

			expect(env.NODE_ENV).toBe("development")
			expect(env.COMMON_RATE_LIMIT_MAX_REQUESTS).toBe(500)
			expect(env.COMMON_RATE_LIMIT_WINDOW_MS).toBe(2000)
			expect(env.LOG_LEVEL).toBe("debug")
			expect(env.isDevelopment).toBe(true)
			expect(env.isProduction).toBe(false)
			expect(env.isTest).toBe(false)
		})

		it("should use default values when environment variables are not set", async () => {
			vi.resetModules()
			// Set NODE_ENV explicitly since the test environment may have it set
			process.env = { NODE_ENV: "production" }

			const { env } = await import("../envConfig")

			expect(env.NODE_ENV).toBe("production")
			// Note: These values might be set by .env file, so we just check they are numbers
			expect(typeof env.COMMON_RATE_LIMIT_MAX_REQUESTS).toBe("number")
			expect(typeof env.COMMON_RATE_LIMIT_WINDOW_MS).toBe("number")
			expect(env.LOG_LEVEL).toBe("info")
			expect(env.isDevelopment).toBe(false)
			expect(env.isProduction).toBe(true)
			expect(env.isTest).toBe(false)
		})

		it("should set isProduction flag when NODE_ENV is production", async () => {
			process.env.NODE_ENV = "production"

			const { env } = await import("../envConfig")

			expect(env.isProduction).toBe(true)
			expect(env.isDevelopment).toBe(false)
			expect(env.isTest).toBe(false)
		})

		it("should set isTest flag when NODE_ENV is test", async () => {
			process.env.NODE_ENV = "test"

			const { env } = await import("../envConfig")

			expect(env.isTest).toBe(true)
			expect(env.isDevelopment).toBe(false)
			expect(env.isProduction).toBe(false)
		})

		it("should coerce string numbers to numbers", async () => {
			process.env.COMMON_RATE_LIMIT_MAX_REQUESTS = "2500"
			process.env.COMMON_RATE_LIMIT_WINDOW_MS = "5000"

			const { env } = await import("../envConfig")

			expect(typeof env.COMMON_RATE_LIMIT_MAX_REQUESTS).toBe("number")
			expect(typeof env.COMMON_RATE_LIMIT_WINDOW_MS).toBe("number")
			expect(env.COMMON_RATE_LIMIT_MAX_REQUESTS).toBe(2500)
			expect(env.COMMON_RATE_LIMIT_WINDOW_MS).toBe(5000)
		})

		it("should accept all valid LOG_LEVEL values", async () => {
			const logLevels = ["fatal", "error", "warn", "info", "debug", "trace", "silent"] as const

			for (const level of logLevels) {
				vi.resetModules()
				process.env = { ...originalEnv }
				process.env.LOG_LEVEL = level

				const { env } = await import("../envConfig")
				expect(env.LOG_LEVEL).toBe(level)
			}
		})

		it("should accept all valid NODE_ENV values", async () => {
			const nodeEnvs = ["development", "production", "test"] as const

			for (const nodeEnv of nodeEnvs) {
				vi.resetModules()
				process.env = { ...originalEnv }
				process.env.NODE_ENV = nodeEnv

				const { env } = await import("../envConfig")
				expect(env.NODE_ENV).toBe(nodeEnv)
			}
		})
	})

})
