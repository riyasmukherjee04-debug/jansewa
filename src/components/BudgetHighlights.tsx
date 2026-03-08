import { budgetHighlights, economicIndicators } from "@/data/budgetInfo";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const BudgetHighlights = () => (
  <section>
    <h2 className="text-2xl font-bold mb-6">Union Budget 2025-26 Highlights</h2>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {budgetHighlights.map((item) => (
        <Card key={item.title} className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <span className="text-2xl">{item.icon}</span>
            <h3 className="font-semibold mt-2 text-sm">{item.title}</h3>
            <p className="text-xl font-bold text-primary mt-1">{item.amount}</p>
            <span className="text-xs text-secondary font-semibold">{item.change} YoY</span>
            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <h2 className="text-2xl font-bold mt-12 mb-6">Key Economic Indicators</h2>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {economicIndicators.map((ind) => (
        <Card key={ind.name}>
          <CardContent className="p-5 flex items-start gap-3">
            <div className="mt-1">
              {ind.trend === "up" && <TrendingUp className="h-5 w-5 text-secondary" />}
              {ind.trend === "down" && <TrendingDown className="h-5 w-5 text-primary" />}
              {ind.trend === "stable" && <Minus className="h-5 w-5 text-muted-foreground" />}
            </div>
            <div>
              <h3 className="font-semibold text-sm">{ind.name}</h3>
              <p className="text-lg font-bold">{ind.value}</p>
              <p className="text-xs text-muted-foreground">{ind.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default BudgetHighlights;
