import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'dummy_key',
});

// Advanced local logic for when API key is missing
const getLocalResponse = (messages: any[]) => {
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    if (lastMessage.includes("kyoto") || lastMessage.includes("japan")) {
        return "Kyoto is a timeless masterpiece. We recommend a private viewing of the Kinkaku-ji at dawn, followed by a curated walk through the Arashiyama bamboo groves. Would you like to see our 2026 Kyoto Signature itinerary?";
    }
    if (lastMessage.includes("santorini") || lastMessage.includes("greece")) {
        return "Santorini offers the ultimate Mediterranean escape. Our boutique villas in Oia provide unmatched caldera views. I suggest visiting during the shoulder season (September) for the most serene experience.";
    }
    if (lastMessage.includes("patagonia")) {
        return "Patagonia is the frontier of luxury adventure. Our 'Glacier Descent' tour includes private helicopter transfers to the most remote fjords. It’s truly a journey for those who seek the sublime.";
    }
    if (lastMessage.includes("price") || lastMessage.includes("cost") || lastMessage.includes("expensive")) {
        return "Aethelgard Collections are bespoke, high-end experiences. Our signature expeditions start from $5,000 per guest, including all-inclusive concierge service and exclusive access to sites.";
    }
    if (lastMessage.includes("visa") || lastMessage.includes("passport")) {
        return "As part of our White Glove service, we handle all visa logistics and documentation for our guests. Which destination are you currently considering?";
    }
    if (lastMessage.includes("safety") || lastMessage.includes("secure")) {
        return "Your security and comfort are paramount. Every Aethelgard Journey includes 24/7 private security detail options and local medical concierge support as standard.";
    }
    if (lastMessage.includes("hello") || lastMessage.includes("hi")) {
        return "Greetings. I am your Aethelgard Collections concierge. I am here to assist with any travel inquiries you may have. Where does your heart wish to travel?";
    }

    return "That is a fascinating inquiry. Our Travel Architects are specialists in exactly that kind of custom request. Should I schedule a private consultation for you, or would you like to explore our latest Global Collection first?";
};

export async function POST(req: Request) {
    let messages: any[] = [];
    try {
        const body = await req.json();
        messages = body.messages || [];

        // If no API key or it's the placeholder, use local logic to "fix" the error experience
        if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here' || process.env.OPENAI_API_KEY === 'dummy_key') {
            const localResponse = getLocalResponse(messages);
            // Simulate a slight delay for realism
            await new Promise(resolve => setTimeout(resolve, 1500));
            return NextResponse.json({ text: localResponse });
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a highly intelligent, premium luxury travel concierge for "Aethelgard Collections". Your tone is elegant, helpful, and sophisticated. You have extensive knowledge of world travel, luxury destinations, logistics, and planning. You should answer any travel-related questions with expertise and style, while subtly encouraging the user to explore Aethelgard Collections curated collections.',
                },
                ...messages,
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        const botMessage = response.choices[0].message.content;
        return NextResponse.json({ text: botMessage });

    } catch (error: any) {
        // Even if OpenAI fails (invalid key etc), fall back to local logic so the user never sees an "error"
        console.error('OpenAI API Error, falling back to local logic:', error);

        if (messages.length > 0) {
            return NextResponse.json({ text: getLocalResponse(messages) });
        }
        return NextResponse.json({ text: "I apologize, our archives are being updated for your optimal experience. Please ask about Kyoto, Santorini, or our pricing in the meantime." });
    }
}
