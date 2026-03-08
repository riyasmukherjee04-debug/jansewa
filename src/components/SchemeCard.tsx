import { Scheme } from "@/data/schemes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{scheme.icon}</span>
            <CardTitle className="text-base leading-tight">{scheme.name}</CardTitle>
          </div>
          {score !== undefined && (
            <Badge variant="outline" className="shrink-0 border-primary text-primary font-bold">
              {score}%
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          <Badge className={categoryColors[scheme.category] || "bg-muted text-muted-foreground"} variant="secondary">
            {scheme.category}
          </Badge>
          <Badge variant="outline" className="text-xs">{scheme.ministry}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 font-body">{scheme.description}</p>
        {matchReasons && matchReasons.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {matchReasons.map((r) => (
              <span key={r} className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">✓ {r}</span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  </Link>
);

export default SchemeCard;
