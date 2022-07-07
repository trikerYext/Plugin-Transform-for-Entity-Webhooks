
/* For local testing */
import { testWebhook } from "./testData.ts";
import { handleWebhook } from "./mod.ts";

handleWebhook(testWebhook);

/*Deno.test("Test Webhook", async () => {
  const output = await handleWebhook(testMeta);
});
*/