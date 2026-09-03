import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import manifest from "../../manifest.json";

export const metadata: Metadata = {
  title: "Web Page Loading Test",
  description: "",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
        <div style={{ position: "fixed", top: "8px", right: "12px", fontSize: "12px", color: "#888", zIndex: 9999, userSelect: "none" }}>
          v{manifest.version}
        </div>
      </body>
    </html>
  )
}


