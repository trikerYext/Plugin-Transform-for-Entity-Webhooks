/* Import the data model */
import { EntityWebhook } from "./webPageWebhookModel.ts"

/* Add the URL provided by Slack */
/* Add the Yext Account ID */
const SLACK_URL = "";
const ACCOUNT_ID = "";

/* Handle the webhook notification */
export function handleWebhook(data: any) {
    const type = data.meta.eventType;
    /* Case of: Created Entity */
    if (type === "ENTITY_CREATED") {
        var entityId = String(data.entityId);
        var name = data.primaryProfile.name;
        var url  = data.primaryProfile.c_articleURL;
        var content = data.primaryProfile.c_articleBody;
        return createMessageHandler(entityId, name, url, content);
    }
    /* Case of: Updated Entity 
    if (type === "ENTITY_UPDATED") {
        var entityId = String(data.entityId);
        var name = data.primaryProfile.name;
        var url  = data.primaryProfile.c_pageURL;
        var content = data.primaryProfile.c_pageContent;
        return updateMessageHandler(entityId, name, url, content);
    }
    */
    return null;
}

/* Construct new or updated entity message */
export function createMessageHandler(entityId: string, name: string, url: string, content: string) {
    /* Don't send messages for articles without content (EG. Author Pages, other random links)*/
    if (content != '') {
        var message = "New Article Detected\n" + "Name: " + name + "\nEntity ID: " + entityId + "\nURL: " + url
        return postRequest(message);
    }
    return null;
}

/* Format API request and send new message to the Slack endpoint */
export function postRequest(message: string){
    var payload = {text:message};
    console.log(payload)
    const request = new Request(SLACK_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });
    return fetch(request);
}
