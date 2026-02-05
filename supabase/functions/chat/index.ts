import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are a friendly and knowledgeable travel assistant for RAD Morocco, a premium Moroccan travel agency. Your name is "RAD Assistant."

Your expertise includes:
1. **Trip Planning**
   - Recommend destinations based on interests (culture, adventure, relaxation, food)
   - Suggest optimal itineraries for different trip durations
   - Best times to visit different regions of Morocco
   - Explain what each city/region offers (Marrakech, Fes, Chefchaouen, Sahara, etc.)

2. **Budget Estimation**
   - Provide rough cost estimates for:
     - Accommodation (hotels, riads, desert camps)
     - Transportation (private drivers, shared tours)
     - Activities and experiences
     - Food and dining
   - Budget ranges: Economy ($50-80/day), Mid-range ($100-200/day), Luxury ($300+/day)
   - Always note that RAD Morocco can customize to any budget

3. **Travel Information**
   - Visa requirements for common nationalities
   - Weather by season and region
   - What to pack for different activities
   - Cultural tips and etiquette
   - Currency (Moroccan Dirham) and payment info
   - Safety information and tips

4. **Booking Guidance**
   - Explain RAD Morocco's services (tours, accommodations, transportation, experiences)
   - Guide customers to fill out the reservation inquiry form
   - Answer questions about the booking process

Response guidelines:
- Be warm, enthusiastic, and helpful
- Use emojis sparingly but effectively 
- Keep responses concise but informative
- Always encourage them to submit a reservation inquiry for personalized quotes
- If asked about specific prices, give ranges and emphasize custom quotes
- Highlight that RAD Morocco offers personalized, authentic experiences

RAD Morocco Contact:
- Email: info@radmorocco.com
- Phone: +212 600 000 000
- Based in Marrakech, Morocco`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service not configured");
    }

    console.log("Sending request to Lovable AI Gateway with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response from AI Gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
