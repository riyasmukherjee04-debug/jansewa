import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 container py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">About JanSewa</h1>
      <Card>
        <CardContent className="p-8 space-y-4 font-body text-muted-foreground">
          <p>
            <strong className="text-foreground">JanSewa</strong> is a citizen-first platform that helps every Indian discover government schemes they're eligible for — based on their age, income, occupation, gender, category, and state.
          </p>
          <p>
            India has hundreds of government welfare and development schemes, but many citizens remain unaware of what they can avail. JanSewa bridges this information gap with a simple profile-based matching engine.
          </p>
          <h2 className="text-xl font-bold text-foreground pt-4">What We Offer</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Profile-based scheme matching across 30+ central government schemes</li>
            <li>Step-by-step application guides with document checklists</li>
            <li>Union Budget highlights and economic indicators</li>
            <li>Direct links to official government portals</li>
          </ul>
          <h2 className="text-xl font-bold text-foreground pt-4">Disclaimer</h2>
          <p className="text-sm">
            JanSewa is an informational platform and is not affiliated with the Government of India. All scheme details are compiled from publicly available sources. Please verify information on official government websites before taking any action.
          </p>
        </CardContent>
      </Card>
    </main>
    <Footer />
  </div>
);

export default About;
