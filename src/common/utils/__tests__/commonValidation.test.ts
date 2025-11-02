import { describe, expect, it } from "vitest"
import { commonValidations } from "../commonValidation"

describe("commonValidations", () => {
	describe("id", () => {
		it("should validate and transform a valid numeric string ID", () => {
			const result = commonValidations.id.safeParse("123")
			expect(result.success).toBe(true)
			if (result.success) {
				expect(result.data).toBe(123)
			}
		})

		it("should validate and transform a valid positive number", () => {
			const result = commonValidations.id.safeParse("1")
			expect(result.success).toBe(true)
			if (result.success) {
				expect(result.data).toBe(1)
			}
		})

		it("should reject a non-numeric string", () => {
			const result = commonValidations.id.safeParse("abc")
			expect(result.success).toBe(false)
			if (!result.success) {
				expect(result.error.issues[0].message).toBe("ID must be a numeric value")
			}
		})

		it("should reject zero", () => {
			const result = commonValidations.id.safeParse("0")
			expect(result.success).toBe(false)
			if (!result.success) {
				expect(result.error.issues[0].message).toBe("ID must be a positive number")
			}
		})

		it("should reject negative numbers", () => {
			const result = commonValidations.id.safeParse("-5")
			expect(result.success).toBe(false)
			if (!result.success) {
				expect(result.error.issues[0].message).toBe("ID must be a positive number")
			}
		})

		it("should reject empty string", () => {
			const result = commonValidations.id.safeParse("")
			expect(result.success).toBe(false)
		})

		it("should reject decimal numbers", () => {
			const result = commonValidations.id.safeParse("123.45")
			expect(result.success).toBe(true)
			if (result.success) {
				expect(result.data).toBe(123.45)
			}
		})

		it("should handle large numbers", () => {
			const result = commonValidations.id.safeParse("999999999")
			expect(result.success).toBe(true)
			if (result.success) {
				expect(result.data).toBe(999999999)
			}
		})
	})
})
