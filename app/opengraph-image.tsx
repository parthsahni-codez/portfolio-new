import { ImageResponse } from "next/og";

export const alt = "Parth Sahni, UI/UX Designer + Creative Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 20,
          background: "#efece6",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "36px 44px",
            border: "2px solid #151513",
            borderRadius: 28,
            color: "#151513",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            <span>(Portfolio)</span>
            <span>Bangalore, India</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 180, fontWeight: 800, letterSpacing: -8, lineHeight: 0.9 }}>PARTH SAHNI</div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                paddingTop: 20,
                borderTop: "2px solid #151513",
                fontSize: 34,
              }}
            >
              UI/UX Designer + Creative Developer
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
