import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BudgetHighlights from "@/components/BudgetHighlights";
import { ministryLinks } from "@/data/budgetInfo";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const GovernmentInfo = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 container py-8">
      <h1 className="text-3xl font-bold mb-8">Government Information & Budget</h1>

      <BudgetHighlights />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Key Ministries & Portals</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ministryLinks.map((m) => (
            <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-shadow hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-sm">{m.name}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{m.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default GovernmentInfo;
