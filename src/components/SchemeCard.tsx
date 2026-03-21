import { Scheme } from "@/data/schemes";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface SchemeCardProps {
  scheme: Scheme;
  score?: number;
  matchReasons?: string[];
}

const categoryColors: Record<string, string> = {
  employment: "bg-accent text-accent-foreground",
  education: "bg-secondary text-secondary-foreground",
  health: "bg-destructive/10 text-destructive",
  housing: "bg-primary/10 text-primary",
  agriculture: "bg-secondary/80 text-secondary-foreground",
  women: "bg-pink-100 text-pink-800",
  "social-security": "bg-muted text-muted-foreground",
  business: "bg-primary/10 text-primary",
  financial: "bg-accent/50 text-accent-foreground",
};

const SchemeCard = ({ scheme, score, matchReasons }: SchemeCardProps) => (
  <Link to={`/scheme/${scheme.id}`}>
    <Card className="h-full hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer border-border p-3">
      <CardContent className="p-0 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-lg shrink-0">{scheme.icon}</span>
            <h3 className="text-sm font-semibold leading-tight truncate">{scheme.name}</h3>
          </div>
          {score !== undefined && (
            <Badge variant="outline" className="shrink-0 border-primary text-primary text-[10px] px-1.5 py-0">
              {score}%
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge className={`${categoryColors[scheme.category] || "bg-muted text-muted-foreground"} text-[10px] px-1.5 py-0`} variant="secondary">
            {scheme.category}
          </Badge>
          <Badge variant="outline" className="text-[10px] px-1.5 py-0">{scheme.ministry}</Badge>
          {scheme.type === "state" && (
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-orange-300 text-orange-600">State</Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">{scheme.description}</p>
        {matchReasons && matchReasons.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {matchReasons.map((r) => (
              <span key={r} className="text-[10px] bg-secondary/20 text-secondary px-1.5 py-0 rounded-full">✓ {r}</span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  </Link>
);

export default SchemeCard;
