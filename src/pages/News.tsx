import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cropPrices, govtSchemeNews, globalPolicyNews, internationalNews } from "@/data/newsData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const TrendIcon = ({ trend }: { trend: "up" | "down" | "stable" }) => {
  if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-600" />;
  if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
};

const News = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 container py-8">
      <h1 className="text-3xl font-bold mb-2">Latest News & Updates</h1>
      <p className="text-muted-foreground mb-8">Stay updated with crop prices, government schemes, global policies & international affairs — March 2026</p>

      <Tabs defaultValue="crop-prices" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="crop-prices">🌾 Crop Prices & MSP</TabsTrigger>
          <TabsTrigger value="govt-schemes">💳 Govt Schemes News</TabsTrigger>
          <TabsTrigger value="global-policy">🌐 Global Policies</TabsTrigger>
          <TabsTrigger value="international">⚠️ International</TabsTrigger>
        </TabsList>

        {/* Crop Prices */}
        <TabsContent value="crop-prices">
          <h2 className="text-2xl font-bold mb-2">Crop Prices & MSP (2025-26)</h2>
          <p className="text-sm text-muted-foreground mb-6">Latest Minimum Support Prices and market rates for major crops across India</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cropPrices.map((c) => (
              <Card key={c.crop} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{c.icon}</span>
                      <h3 className="font-bold text-base">{c.crop}</h3>
                    </div>
                    <TrendIcon trend={c.trend} />
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">MSP</span>
                      <span className="font-semibold text-primary">{c.msp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Market Price</span>
                      <span className="font-semibold">{c.marketPrice}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-3 text-xs">
                    {c.trend === "up" ? "↑ Rising" : c.trend === "down" ? "↓ Falling" : "→ Stable"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Govt Scheme News */}
        <TabsContent value="govt-schemes">
          <h2 className="text-2xl font-bold mb-2">Government Schemes & Policy Updates</h2>
          <p className="text-sm text-muted-foreground mb-6">Latest announcements — Pink Card, PM Internship, UPS, Solar, Tax & more</p>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {govtSchemeNews.map((n) => (
              <Card key={n.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl mt-1">{n.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-base leading-tight">{n.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{n.summary}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="secondary" className="text-xs">{n.date}</Badge>
                        <span className="text-xs text-muted-foreground">{n.source}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Global Policies */}
        <TabsContent value="global-policy">
          <h2 className="text-2xl font-bold mb-2">Global Policies & Economy</h2>
          <p className="text-sm text-muted-foreground mb-6">Fed rates, trade deals, BRICS expansion, AI regulation & more</p>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {globalPolicyNews.map((n) => (
              <Card key={n.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl mt-1">{n.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-base leading-tight">{n.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{n.summary}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="secondary" className="text-xs">{n.date}</Badge>
                        <span className="text-xs text-muted-foreground">{n.source}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* International News */}
        <TabsContent value="international">
          <h2 className="text-2xl font-bold mb-2">International News & Conflicts</h2>
          <p className="text-sm text-muted-foreground mb-6">Iran-Israel, Russia-Ukraine, global economy & geopolitics</p>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {internationalNews.map((n) => (
              <Card key={n.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl mt-1">{n.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-base leading-tight">{n.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{n.summary}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="secondary" className="text-xs">{n.date}</Badge>
                        <span className="text-xs text-muted-foreground">{n.source}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
    <Footer />
  </div>
);

export default News;
