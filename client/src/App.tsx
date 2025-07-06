import { useState } from "react";
import FileUpload from "./components/file-upload";
import Navbar from "./components/navbar";
import { SidebarLeft } from "./components/sidebar-left";
import { SidebarRight } from "./components/sidebar-right";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file) return alert("Please select a PDF.");

    const formData = new FormData();
    formData.append("pdf", file);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/summarize", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setSummary(data.summary || "No summary returned.");
    } catch (err) {
      console.error(err);
      alert("Failed to summarize.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <SidebarLeft />

        <SidebarInset>
          <Navbar />
          <div className="container mx-auto px-4 max-w-screen-md">
            <div className="flex flex-col gap-2 mt-4">
              <FileUpload onFileSelect={(file: File) => setFile(file)} />
              <div className="flex justify-end mt-2">
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Summarizing..." : "Summarize PDF"}
                </Button>
              </div>
            </div>
            <div className="leading-7 [&:not(:first-child)]:mt-6">
              {summary}
            </div>
          </div>
        </SidebarInset>
        <SidebarRight />
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
