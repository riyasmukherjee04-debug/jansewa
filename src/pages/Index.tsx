import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileForm from "@/components/ProfileForm";
import SchemeCard from "@/components/SchemeCard";
import BudgetHighlights from "@/components/BudgetHighlights";
import { schemes, UserProfile } from "@/data/schemes";
import { matchSchemes, MatchResult } from "@/lib/matchSchemes";
import { Card, CardContent } from "@/components/ui/card";

const featuredSchemes = schemes.slice(0, 6);

const stats = [
  { label: "Government Schemes", value: `${schemes.length}+`, icon: "📋" },
  { label: "Categories Covered", value: "9", icon: "📂" },
  { label: "Ministries", value: "15+", icon: "🏛️" },
  { label: "Step-by-step Guides", value: `${schemes.length}+`, icon: "📝" },
];

const Index = () => {
  const navigate = useNavigate();

  const handleProfileSubmit = (profile: UserProfile) => {
    const params = new URLSearchParams({
      age: profile.age.toString(),
      gender: profile.gender,
      state: profile.state,
      income: profile.income.toString(),
      occupation: profile.occupation,
      category: profile.category,
      education: profile.education,
    });
    navigate(`/schemes?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Discover Government Schemes
                <span className="text-primary"> Made for You</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground font-body">
                Enter your details and instantly find all Indian government schemes you're eligible for — with step-by-step guides on how to apply.
              </p>
            </div>

            <Card className="max-w-3xl mx-auto shadow-xl border-primary/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-lg font-bold mb-4">🔍 Find Your Eligible Schemes</h2>
                <ProfileForm onSubmit={handleProfileSubmit} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 border-b">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="text-3xl">{s.icon}</span>
                <p className="text-2xl font-bold mt-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured schemes */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Popular Schemes</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredSchemes.map((s) => (
                <SchemeCard key={s.id} scheme={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Budget highlights */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <BudgetHighlights />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
