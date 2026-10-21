import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/data/site";

export const runtime = "nodejs";

const clip = (value: string | null, max: number) =>
  (value ?? "").trim().slice(0, max);

async function loadLogo() {
  try {
    const file = await readFile(path.join(process.cwd(), "public", "logo200x200.png"));
    return `data:image/png;base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

/**
 * Share-card image (1200x630) used for Open Graph / Twitter previews.
 * /og?title=...&desc=...&label=...
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = clip(searchParams.get("title"), 80) || `${site.full_name} — ${site.role}`;
  const desc = clip(searchParams.get("desc"), 160);
  const label = clip(searchParams.get("label"), 40) || "Portfolio";
  const logo = await loadLogo();
  const host = site.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #111827 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} width={72} height={72} alt="" style={{ borderRadius: 16 }} />
          ) : null}
          <div style={{ display: "flex", fontSize: 30, color: "#3b82f6", letterSpacing: 4, textTransform: "uppercase" }}>
            {label}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: title.length > 40 ? 60 : 78, fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </div>
          {desc ? (
            <div style={{ display: "flex", marginTop: 28, fontSize: 32, lineHeight: 1.4, color: "rgba(255,255,255,0.65)" }}>
              {desc}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "rgba(255,255,255,0.5)" }}>
          <div style={{ display: "flex" }}>{site.full_name}</div>
          <div style={{ display: "flex" }}>{host}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400" },
    },
  );
}
