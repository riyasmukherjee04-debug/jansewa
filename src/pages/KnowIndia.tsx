import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { knowIndiaData } from "@/data/knowIndia";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const KnowIndia = () => {
  const [search, setSearch] = useState("");

  const filterFacts = (facts: { label: string; value: string; icon: string }[]) => {
    if (!search.trim()) return facts;
    const q = search.toLowerCase();
    return facts.filter(
      (f) => f.label.toLowerCase().includes(q) || f.value.toLowerCase().includes(q)
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            🇮🇳 Know Your India
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every detail about our incredible nation — Government, Defense, Education, Geography, Economy, Demographics, Culture & Sports.
          </p>
        </div>

        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search any fact..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="government" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-6">
            {knowIndiaData.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="mr-1">{cat.icon}</span>
                <span className="hidden sm:inline">{cat.title}</span>
                <span className="sm:hidden">{cat.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {knowIndiaData.map((cat) => {
            const filtered = filterFacts(cat.facts);
            return (
              <TabsContent key={cat.id} value={cat.id}>
                <Card className="mb-6 border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="text-2xl">{cat.icon}</span>
                      {cat.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                    <Badge variant="secondary" className="w-fit mt-1">
                      {filtered.length} facts
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    {filtered.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">
                        No facts match your search.
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {filtered.map((fact, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/70 transition-colors border border-border/50"
                          >
                            <span className="text-xl flex-shrink-0 mt-0.5">{fact.icon}</span>
                            <div className="min-w-0">
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                {fact.label}
                              </p>
                              <p className="text-sm font-semibold text-foreground leading-snug mt-0.5">
                                {fact.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default KnowIndia;
