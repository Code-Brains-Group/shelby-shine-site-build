import { test as base, expect } from "@playwright/test";

// Re-export the base fixtures from @playwright/test
// You can extend 'test' and 'expect' here if you need custom fixtures
export const test = base;
export { expect };
