import { useState, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileForm from "@/components/ProfileForm";
import SchemeCard from "@/components/SchemeCard";
import { schemes, UserProfile, SchemeCategory } from "@/data/schemes";
import { matchSchemes, MatchResult } from "@/lib/matchSchemes";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sparkles } from "lucide-react";

const categories: { value: SchemeCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "employment", label: "Employment" },
  { value: "education", label: "Education" },
  { value: "health", label: "Health" },
  { value: "housing", label: "Housing" },
  { value: "agriculture", label: "Agriculture" },
  { value: "women", label: "Women & Child" },
  { value: "social-security", label: "Social Security" },
  { value: "business", label: "Business" },
  { value: "financial", label: "Financial" },
];

const Schemes = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<SchemeCategory | "all">("all");
  const [showForm, setShowForm] = useState(false);

  const profileFromParams = useMemo((): UserProfile | null => {
    const age = searchParams.get("age");
    const gender = searchParams.get("gender");
    const state = searchParams.get("state");
    const income = searchParams.get("income");
    const occupation = searchParams.get("occupation");
    const category = searchParams.get("category");
    const education = searchParams.get("education");
    if (age && gender && state && income && occupation && category && education) {
      return {
        age: parseInt(age), gender: gender as any, state, income: parseInt(income),
        occupation: occupation as any, category: category as any, education: education as any
      };
    }
    return null;
  }, [searchParams]);

  const [profile, setProfile] = useState<UserProfile | null>(profileFromParams);

  const results = useMemo((): MatchResult[] | null => {
    if (!profile) return null;
    return matchSchemes(profile, schemes);
  }, [profile]);

  const displayedSchemes = useMemo(() => {
    let list = results
      ? results.map((r) => ({ ...r.scheme, _score: r.score, _reasons: r.matchReasons }))
      : schemes.map((s) => ({ ...s, _score: undefined as number | undefined, _reasons: undefined as string[] | undefined }));

    if (activeCategory !== "all") {
      list = list.filter((s) => s.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.ministry.toLowerCase().includes(q));
    }
    return list;
  }, [results, activeCategory, search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h1 className="text-3xl font-bold">
            {profile ? `${displayedSchemes.length} Schemes Found` : "All Government Schemes"}
          </h1>
          <div className="flex items-center gap-3">
            {profile && (
              <Button
                onClick={() => navigate(`/scheme-assistant?${searchParams.toString()}`)}
                className="gap-2"
              >
                <Sparkles className="h-4 w-4" /> Ask AI Assistant
              </Button>
            )}
            <button onClick={() => setShowForm(!showForm)} className="text-sm text-primary hover:underline font-medium">
              {profile ? "Update Profile" : "Filter by Profile"}
            </button>
          </div>
        </div>

        {(showForm || !profile) && (
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <ProfileForm onSubmit={(p) => { setProfile(p); setShowForm(false); }} initialProfile={profile || undefined} />
            </CardContent>
          </Card>
        )}

        {/* Search + Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search schemes by name, ministry..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Badge
                key={c.value}
                variant={activeCategory === c.value ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory(c.value)}
              >
                {c.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedSchemes.map((s) => (
            <SchemeCard key={s.id} scheme={s} score={s._score} matchReasons={s._reasons} />
          ))}
        </div>
        {displayedSchemes.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg">No schemes found matching your criteria.</p>
            <p className="text-sm">Try adjusting your filters or profile details.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Schemes;
