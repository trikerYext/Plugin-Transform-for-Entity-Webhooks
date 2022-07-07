export interface EntityWebhook {
    meta: {
        eventType: string;
        uuid: string;
        timestamp: number;
        accountId: string;
        actor: string;
        appSpecificAccountId: string;
    };
    entityId?: string;
    primaryProfile: {
        name: string;
        c_articleBody: string;
        c_articleURL: string;
        meta: {
            accountId: string;
            uid: string;
            id: string;
            timestamp: string;
            folderId: string;
            language: string;
            countryCode: string;
            entityType: string;
        };
    };
}