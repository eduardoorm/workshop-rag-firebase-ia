import { searchDestinations } from "@dataconnect/generated";
import { z } from "genkit";
import { dc } from "../lib/firebase";
import { ai } from "./ai";

export const destinationRetriever = ai.defineSimpleRetriever({
    name: 'destinationRetriever',
    configSchema: z.object({ limit: z.number().default(5) }),
    content: 'knownFor'
},
    async (query, {limit}) => {
        const result = await searchDestinations(dc, {
            query: query.text,
            limit,
        });
        return result.data.destinations_embedding_similarity;
    }
);