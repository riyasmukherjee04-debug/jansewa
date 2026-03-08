import { Scheme, UserProfile } from "@/data/schemes";

export interface MatchResult {
  scheme: Scheme;
  score: number;
  matchReasons: string[];
}

export function matchSchemes(profile: UserProfile, schemes: Scheme[]): MatchResult[] {
  return schemes
    .map((scheme) => {
      const { score, reasons } = calculateMatch(profile, scheme);
      return { scheme, score, matchReasons: reasons };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

function calculateMatch(profile: UserProfile, scheme: Scheme): { score: number; reasons: string[] } {
  const e = scheme.eligibility;
  const reasons: string[] = [];
  let score = 0;
  let disqualified = false;

  // Age check
  if (e.minAge && profile.age < e.minAge) disqualified = true;
  if (e.maxAge && profile.age > e.maxAge) disqualified = true;
  if (!disqualified && (e.minAge || e.maxAge)) {
    score += 20;
    reasons.push("Age eligible");
  }

  // Gender check
  if (e.gender && e.gender.length > 0 && !e.gender.includes("all")) {
    if (!e.gender.includes(profile.gender)) disqualified = true;
    else { score += 15; reasons.push("Gender eligible"); }
  }

  // Income check
  if (e.maxIncome) {
    if (profile.income > e.maxIncome) disqualified = true;
    else { score += 20; reasons.push("Income within limit"); }
  }

  // Occupation check
  if (e.occupations && e.occupations.length > 0) {
    if (!e.occupations.includes(profile.occupation)) disqualified = true;
    else { score += 25; reasons.push("Occupation matches"); }
  }

  // Category check
  if (e.categories && e.categories.length > 0) {
    if (!e.categories.includes(profile.category)) disqualified = true;
    else { score += 15; reasons.push("Category eligible"); }
  }

  // Education check
  if (e.education && e.education.length > 0) {
    if (!e.education.includes(profile.education)) disqualified = true;
    else { score += 10; reasons.push("Education level matches"); }
  }

  // State check
  if (e.states && e.states.length > 0) {
    if (!e.states.includes(profile.state)) disqualified = true;
    else { score += 10; reasons.push("State eligible"); }
  }

  if (disqualified) return { score: 0, reasons: [] };

  // If no specific criteria, it's a universal scheme
  const hasCriteria = e.minAge || e.maxAge || e.gender || e.maxIncome || e.occupations || e.categories || e.education || e.states;
  if (!hasCriteria) {
    return { score: 50, reasons: ["Universal scheme - open to all"] };
  }

  return { score, reasons };
}
