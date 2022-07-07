import { EntityWebhook } from "./webPageWebhookModel.ts"


export const testWebhook: EntityWebhook = {
    meta: {
        eventType: "ENTITY_CREATED",
        uuid: "05d03e4e-3810-47f5-bf31-520f8627c243",
        timestamp: 1656607958488,
        accountId: "4180457165655310060",
        actor: "USER",
        appSpecificAccountId: "353290028ba9d1348b2fa719ae3aef960b2c315e"
    },
    entityId: "30231285",
    primaryProfile: {
        name: "Google adds LGBTQ+ owned attribute to business profiles",
        c_articleBody: "Content",
        c_articleURL: "https://searchengineland.com/google-adds-lgbtq-owned-attribute-to-business-profiles-385878",
        meta: {
          accountId: "4180457165655310060",
          uid: "6V6WJZ",
          id: "3795680",
          timestamp: "2022-06-30T16:52:38",
          folderId: "0",
          language: "en",
          countryCode: "US",
          entityType: "ce_article"
        }
    },
    languageProfiles: [],
    changedFields: {
        language: "en",
        fieldNames: [
            "c_articleContent"
        ]
    }
}