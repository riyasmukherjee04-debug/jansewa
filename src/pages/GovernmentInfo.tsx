import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BudgetHighlights from "@/components/BudgetHighlights";
import { ministryLinks, nationalLeaders, stateCMs, indiaRankings, internationalFacts } from "@/data/budgetInfo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GovernmentInfo = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 container py-8">
      <h1 className="text-3xl font-bold mb-8">Government Information & India Dashboard</h1>

      <Tabs defaultValue="leaders" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="leaders">Leaders</TabsTrigger>
          <TabsTrigger value="cms">State CMs</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="rankings">Global Rankings</TabsTrigger>
          <TabsTrigger value="facts">India Facts</TabsTrigger>
          <TabsTrigger value="ministries">Ministries</TabsTrigger>
        </TabsList>

        {/* National Leaders */}
        <TabsContent value="leaders">
          <h2 className="text-2xl font-bold mb-6">National Leaders & Key Officials</h2>
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
        </TabsContent>

        {/* State CMs */}
        <TabsContent value="cms">
          <h2 className="text-2xl font-bold mb-6">Chief Ministers of Indian States</h2>
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
        </TabsContent>

        {/* Budget */}
        <TabsContent value="budget">
          <BudgetHighlights />
        </TabsContent>

        {/* Rankings */}
        <TabsContent value="rankings">
          <h2 className="text-2xl font-bold mb-6">India's Global Rankings</h2>
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
        </TabsContent>

        {/* International Facts */}
        <TabsContent value="facts">
          <h2 className="text-2xl font-bold mb-6">India at a Glance — Key Numbers</h2>
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
        </TabsContent>

        {/* Ministries */}
        <TabsContent value="ministries">
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
        </TabsContent>
      </Tabs>
    </main>
    <Footer />
  </div>
);

export default GovernmentInfo;
