import { z } from "genkit";
import { destinationRetriever } from "./destinationRetriever";
import { ai } from "./ai";

const TripSchema = z.object({
    ref: z.string(),
    title: z.string(),
    description: z.string(),
    destination: z.unknown().optional(),
    imageUrl: z.string().optional(),
});

export const dreamVacation = ai.defineFlow(
    {
        name: "dreamVacation",
        inputSchema: z.object({
        description: z.string().optional(),
        imageUrls: z.array(z.string()).optional().default([]),
        }),
        outputSchema: z.array(TripSchema),
    },
    async (input)=>{
         const inspirationPrompt = ai.prompt('inspiration');
         const suggestTripPrompt = ai.prompt('suggestTrip');
      
        //1. procesamos la inspiracion
        const {text: inspirationResultText} = await inspirationPrompt({
            description: input.description,
            imageUrls: input.imageUrls,
        });

        //2. vector search
        const contextPossibleDestinations = await ai.retrieve({
            retriever: destinationRetriever,
            query:inspirationResultText,
            options: {limit:10},
        }) 
        
        //3. generar trip ideas

        const suggestTripResult = await suggestTripPrompt({
                    input: {description: inspirationResultText, imageUrls: input.imageUrls},
                    context: contextPossibleDestinations,
                });
        
        const {trips} = suggestTripResult.output;

        return trips;
    }
)

/*
function zipContext(trips?: Trip[], possibleDestinations?: { text: string; metadata?: Record<string, unknown> }[]) {
    return (trips || []).map((trip) => {
        const match = possibleDestinations?.find((dest) => {
            const destName = (dest.metadata?.name as string)?.toLowerCase() ?? '';
            const destText = dest.text.toLowerCase();
            const tripRef = trip.ref.toLowerCase();
            return destName.includes(tripRef) || tripRef.includes(destName) ||
                destText.includes(tripRef) || tripRef.includes(destText.slice(0, 30));
        });
        return {
            ...trip,
            destination: match?.metadata,
        };
    });
}
    */