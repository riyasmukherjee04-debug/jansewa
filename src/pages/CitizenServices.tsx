import { useState, useMemo } from "react";
import { Search, ExternalLink, Clock, Phone, IndianRupee, FileText, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { serviceGuides, serviceCategories, type ServiceCategory, type ServiceGuide } from "@/data/citizenServices";

const ServiceGuideCard = ({ guide }: { guide: ServiceGuide }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-3">
            <span className="text-3xl mt-0.5">{guide.icon}</span>
            <div>
              <CardTitle className="text-lg leading-snug">{guide.title}</CardTitle>
              <CardDescription className="mt-1">{guide.summary}</CardDescription>
            </div>
          </div>
          {expanded ? (
            <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground mt-1" />
          ) : (
            <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground mt-1" />
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {guide.fees && (
            <Badge variant="outline" className="gap-1 text-xs">
              <IndianRupee className="h-3 w-3" /> {guide.fees}
            </Badge>
          )}
          {guide.processingTime && guide.processingTime !== "N/A" && (
            <Badge variant="outline" className="gap-1 text-xs">
              <Clock className="h-3 w-3" /> {guide.processingTime}
            </Badge>
          )}
          {guide.helpline && guide.helpline !== "Varies by state" && (
            <Badge variant="outline" className="gap-1 text-xs">
              <Phone className="h-3 w-3" /> {guide.helpline}
            </Badge>
          )}
        </div>
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0 space-y-5">
          {/* Steps */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-1">
              📌 Step-by-Step Process
            </h4>
            <ol className="space-y-3">
              {guide.steps.map((s) => (
                <li key={s.step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-medium text-sm text-foreground">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Documents */}
          {guide.documentsRequired.length > 0 && (
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1">
                <FileText className="h-4 w-4" /> Documents Required
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {guide.documentsRequired.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Official Link */}
          <a
            href={guide.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
          >
            Visit Official Website <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </CardContent>
      )}
    </Card>
  );
};

const CitizenServices = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return serviceGuides.filter((g) => {
      const matchCategory = activeCategory === "all" || g.category === activeCategory;
      const matchSearch =
        !q ||
        g.title.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q) ||
        g.steps.some((s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">🛎️ Citizen Services Guide</h1>
          <p className="text-muted-foreground mt-1">
            Step-by-step guides for government documents, banking, insurance, certificates & more.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search services... (e.g. Aadhaar, PAN, loan, marksheet)"
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {serviceCategories.map((cat) => (
            <Badge
              key={cat.value}
              variant={activeCategory === cat.value ? "default" : "outline"}
              className="cursor-pointer text-sm py-1.5 px-3"
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.icon} {cat.label}
            </Badge>
          ))}
        </div>

        {/* Guides */}
        <div className="grid gap-4">
          {filtered.length > 0 ? (
            filtered.map((g) => <ServiceGuideCard key={g.id} guide={g} />)
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No services found matching your search.</p>
              <p className="text-sm mt-1">Try different keywords or browse categories above.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CitizenServices;
