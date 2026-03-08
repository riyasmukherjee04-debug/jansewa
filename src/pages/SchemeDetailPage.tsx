import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { schemes } from "@/data/schemes";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const SchemeDetailPage = () => {
  const { id } = useParams();
  const scheme = schemes.find((s) => s.id === id);

  if (!scheme) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <p className="text-4xl mb-4">😕</p>
          <h1 className="text-2xl font-bold">Scheme Not Found</h1>
          <Link to="/schemes" className="text-primary hover:underline mt-4 inline-block">← Back to Schemes</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const e = scheme.eligibility;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8 max-w-4xl">
        <Link to="/schemes" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Schemes
        </Link>

        <div className="flex items-start gap-4 mb-6">
          <span className="text-5xl">{scheme.icon}</span>
          <div>
            <h1 className="text-3xl font-bold">{scheme.name}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{scheme.category}</Badge>
              <Badge variant="outline">{scheme.ministry}</Badge>
              <Badge variant="outline">{scheme.type === "central" ? "Central Govt" : "State Govt"}</Badge>
              <Badge variant="outline">Since {scheme.launchYear}</Badge>
            </div>
          </div>
        </div>

        <p className="text-lg text-muted-foreground font-body mb-8">{scheme.description}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Benefits */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-bold text-lg mb-3 flex items-center gap-2">🎁 Benefits</h2>
              <p className="text-sm font-body text-muted-foreground">{scheme.benefits}</p>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-bold text-lg mb-3 flex items-center gap-2">✅ Eligibility</h2>
              <ul className="text-sm space-y-1 font-body text-muted-foreground">
                {e.minAge && <li>• Minimum Age: {e.minAge} years</li>}
                {e.maxAge && <li>• Maximum Age: {e.maxAge} years</li>}
                {e.gender && <li>• Gender: {e.gender.join(", ")}</li>}
                {e.maxIncome && <li>• Max Annual Income: ₹{e.maxIncome.toLocaleString("en-IN")}</li>}
                {e.occupations && <li>• Occupation: {e.occupations.join(", ")}</li>}
                {e.categories && <li>• Category: {e.categories.map(c => c.toUpperCase()).join(", ")}</li>}
                {e.education && <li>• Education: {e.education.join(", ")}</li>}
                {!e.minAge && !e.maxAge && !e.gender && !e.maxIncome && !e.occupations && !e.categories && !e.education && (
                  <li>• Open to all citizens</li>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* How to Apply */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">📝 How to Apply — Step by Step</h2>
            <ol className="space-y-3">
              {scheme.howToApply.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-body text-muted-foreground pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2">📄 Documents Required</h2>
            <div className="flex flex-wrap gap-2">
              {scheme.documentsRequired.map((doc) => (
                <Badge key={doc} variant="outline">{doc}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Official Link */}
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground">
            <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer">
              Visit Official Website <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchemeDetailPage;
