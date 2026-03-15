import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { knowIndiaData } from "@/data/knowIndia";
import { nationalLeaders, stateCMs, indiaRankings, internationalFacts, ministryLinks } from "@/data/budgetInfo";
import BudgetHighlights from "@/components/BudgetHighlights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink } from "lucide-react";

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
            Every detail about our incredible nation — Government, Defense, Education, Geography, Economy, Demographics, Culture, Sports & more.
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
            <TabsTrigger value="leaders" className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <span className="mr-1">👔</span>
              <span className="hidden sm:inline">Leaders</span>
              <span className="sm:hidden">Leaders</span>
            </TabsTrigger>
            <TabsTrigger value="cms" className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <span className="mr-1">🏢</span>
              <span className="hidden sm:inline">State CMs</span>
              <span className="sm:hidden">CMs</span>
            </TabsTrigger>
            <TabsTrigger value="budget" className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <span className="mr-1">💰</span>
              <span className="hidden sm:inline">Budget</span>
              <span className="sm:hidden">Budget</span>
            </TabsTrigger>
            <TabsTrigger value="rankings" className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <span className="mr-1">🏆</span>
              <span className="hidden sm:inline">Global Rankings</span>
              <span className="sm:hidden">Rankings</span>
            </TabsTrigger>
            <TabsTrigger value="facts" className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <span className="mr-1">📊</span>
              <span className="hidden sm:inline">India Facts</span>
              <span className="sm:hidden">Facts</span>
            </TabsTrigger>
            <TabsTrigger value="ministries" className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <span className="mr-1">🏛️</span>
              <span className="hidden sm:inline">Ministries</span>
              <span className="sm:hidden">Min.</span>
            </TabsTrigger>
          </TabsList>

          {/* Know India category tabs */}
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

          {/* National Leaders */}
          <TabsContent value="leaders">
            <Card className="mb-6 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">👔</span> National Leaders & Key Officials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {nationalLeaders.map((l) => (
                    <Card key={l.title} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <span className="text-2xl">{l.icon}</span>
                        <p className="text-xs text-muted-foreground mt-2">{l.title}</p>
                        <p className="font-bold text-base mt-0.5">{l.name}</p>
                        <p className="text-xs text-muted-foreground">Since {l.since}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* State CMs */}
          <TabsContent value="cms">
            <Card className="mb-6 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">🏢</span> Chief Ministers of Indian States
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {stateCMs.map((s) => (
                    <Card key={s.state}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm">{s.state}</p>
                          <p className="text-xs text-muted-foreground">{s.cm}</p>
                        </div>
                        <Badge variant="outline" className="text-xs shrink-0">{s.party}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Budget */}
          <TabsContent value="budget">
            <Card className="mb-6 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">💰</span> Union Budget & Economy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BudgetHighlights />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rankings */}
          <TabsContent value="rankings">
            <Card className="mb-6 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">🏆</span> India's Global Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {indiaRankings.map((r) => (
                    <Card key={r.category} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{r.icon}</span>
                          <div>
                            <p className="font-semibold text-sm">{r.category}</p>
                            <p className="text-2xl font-bold text-primary">{r.rank}</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">out of {r.total} • {r.source}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* India Facts */}
          <TabsContent value="facts">
            <Card className="mb-6 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">📊</span> India at a Glance — Key Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {internationalFacts.map((f) => (
                    <Card key={f.title} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <span className="text-2xl">{f.icon}</span>
                        <p className="font-semibold text-sm mt-2">{f.title}</p>
                        <p className="text-xl font-bold text-primary mt-1">{f.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{f.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ministries */}
          <TabsContent value="ministries">
            <Card className="mb-6 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">🏛️</span> Key Ministries & Portals
                </CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default KnowIndia;
