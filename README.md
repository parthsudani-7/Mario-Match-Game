# 🎮 Super Mario Match: Retro Memory Challenge

[![Frontend](https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20VanillaJS-red?style=for-the-badge&logo=javascript)](file:///C:/Users/Parth%20Sudani/.gemini/antigravity/scratch/mario-matching-game/index.html)
[![Backend](https://img.shields.io/badge/Backend-Supabase%20%7C%20Deno-green?style=for-the-badge&logo=supabase)](file:///C:/Users/Parth%20Sudani/.gemini/antigravity/scratch/mario-matching-game/script.js)
[![Aesthetic](https://img.shields.io/badge/Design-Retro%20NES-blue?style=for-the-badge)](file:///C:/Users/Parth%20Sudani/.gemini/antigravity/scratch/mario-matching-game/style.css)

Super Mario Match is a premium, web-based memory card matching game built to emulate the iconic look and feel of the Nintendo Entertainment System (NES) retro cabinet. Players choose a retro-styled username, test their memory matching iconic items (like Stars, Mushrooms, Fire Flowers, and Shells), score combos, and secure their place on a global real-time scoreboard.

---

## 🕹️ System Architecture & Security Workflow

To secure database credentials, the application bypasses client-side direct database connections. Instead, all score read/write requests route through a Deno-based backend proxy.

```
┌─────────────────────────────────┐
│        Player's Browser         │
│  (parthsudani-7.github.io)      │
└───────────────┬─────────────────┘
                │
                │ HTTP POST / GET (Includes HTTP Origin Header)
                ▼
┌─────────────────────────────────┐
│   Supabase Edge Function Proxy  │
│    (Validates Origin Header)    │
└───────────────┬─────────────────┘
                │
                │ Origin matches Allowed Domain?
                ├─► YES ──► Queries PostgreSQL Database
                └─► NO  ──► Returns 403 Forbidden Response
                                        │
                                        ▼
                         ┌─────────────────────────────┐
                         │ Supabase PostgreSQL DB      │
                         │ (Leaderboard Secure Table)  │
                         └─────────────────────────────┘
```

---

## ⚡ Key Technical Features

### 1. Retro Sound Engine (Web Audio API Synth)
Instead of loading external heavy `.mp3` or `.wav` sound files, the game utilizes a built-in synth engine powered by the browser's native **Web Audio API**. This ensures zero audio latency and instant gameplay feedback.
* **Card Flip**: Triangle oscillator frequency sweeping exponentially from `600Hz` down to `150Hz` in `0.06s`.
* **Match Found**: Square oscillator play chord sequence starting at `987.77Hz` (B5) and jumping to `1318.51Hz` (E6) over `0.35s`.
* **Mismatch Shake**: Multi-note square wave frequency drop playing `329.63Hz` (E4), `293.66Hz` (D4), and `261.63Hz` (C4).
* **Stage Clear**: High pitch arpeggio sweep ending on a triumph square wave note sustain.

### 2. High-Resolution Mobile Portrait Layout (e.g. 1220x2712)
Typical mobile viewports scale to CSS width values under `500px`. However, high-density mobile screens or simulator settings (like Motorola Edge 50 Pro at `1220 x 2712`) report wide viewports. The layout adapts seamlessly:
* **Orientation Detection**: Using `@media (orientation: portrait)` queries to stack the game elements vertically even when the pixel width exceeds standard mobile breakpoints.
* **Fluid Width Scaling**: Discards fixed pixel maximums in portrait mode. The game board, control panels, stats board, and leaderboard stretch to `100%` of the viewport width.
* **Square Aspect Cards**: Card grids preserve an `aspect-ratio: 1 / 1` structure so they scale dynamically in both height and width without stretching.

### 3. Scoring & Combo System
The game rewards speed, accuracy, and consecutive correct matches:
* **Base Points**: `100` points per successful match.
* **Multiplier**: Starts at `1.0x`. Increases by `+0.2x` for every consecutive match (e.g. `1.2x`, `1.4x`).
* **Mismatch Penalty**: Resets the multiplier back to `1.0x` and deducts `15` points.

---

## 📊 Difficulty Levels Configuration

| Difficulty | Grid Columns | Total Cards | Distinct Items | Max Board Width |
| :--- | :--- | :--- | :--- | :--- |
| **EASY** | 4 Columns | 12 Cards | 6 Items | 100% (Fluid in Portrait) |
| **MEDIUM** | 4 Columns | 16 Cards | 8 Items | 100% (Fluid in Portrait) |
| **HARD** | 6 Columns | 24 Cards | 12 Items | 100% (Fluid in Portrait) |

---

## 🚀 How to Run Locally

1. Clone this repository to your machine:
   ```bash
   git clone https://github.com/parthsudani-7/Mario-Match-Game.git
   ```
2. Navigate into the directory:
   ```bash
   cd Mario-Match-Game
   ```
3. Open `index.html` directly in a browser or launch it with a local server package like `live-server`.

---

## 🛠️ Backend Supabase Setup

### 1. Database Table Schema
In your Supabase Dashboard, open the **SQL Editor** and execute the query below to create the scoreboard database:
```sql
create table leaderboard (
  id bigint generated always as identity primary key,
  username text not null,
  score integer not null,
  difficulty text not null,
  moves integer not null,
  time_spent integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 2. Edge Function Proxy Code
Deploy the Deno serverless Edge Function inside your Supabase project under `supabase/functions/leaderboard/index.ts`:
```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const origin = req.headers.get("origin") || "";
  const allowedOrigins = [
    "https://parthsudani-7.github.io",
    "http://localhost:5500",
    "http://127.0.0.1:5500"
  ];

  if (!allowedOrigins.some(o => origin.startsWith(o)) && req.method === 'POST') {
    return new Response(
      JSON.stringify({ error: "Unauthorized request origin." }), 
      { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? "";
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? "";
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  if (req.method === 'POST') {
    try {
      const { username, score, difficulty, moves, time_spent } = await req.json()
      const { data, error } = await supabase
        .from('leaderboard')
        .insert([{ username, score, difficulty, moves, time_spent }])
        .select()

      if (error) throw error
      return new Response(JSON.stringify(data[0]), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      })
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }
  }

  if (req.method === 'GET') {
    try {
      const url = new URL(req.url)
      const diff = url.searchParams.get("diff") || "easy"
      const { data, error } = await supabase
        .from('leaderboard')
        .select('*')
        .eq('difficulty', diff)
        .order('score', { ascending: false })
        .order('time_spent', { ascending: true })
        .limit(10)

      if (error) throw error
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      })
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }
  }
})
```

### 3. Deploy Commands
Ensure you have the Supabase CLI installed, then link your project reference and deploy the Edge Function:
```bash
supabase login
supabase link --project-ref xjgfoaglqmfcgvnlypmh
supabase functions deploy leaderboard --no-verify-jwt
```
 once deployed, you can query your leaderboard scores securely over HTTPS!
