import { describe, expect, it } from "vitest"
import { sum } from "../index"

describe("index", () => {
	describe("sum function", () => {
		it("should add two positive numbers", async () => {
			const result = await sum(2, 3)
			expect(result).toBe(5)
		})

	})
})
