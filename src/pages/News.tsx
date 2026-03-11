import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { examData, govtJobs, cropPrices, govtSchemeNews, globalPolicyNews, internationalNews } from "@/data/newsData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const categoryLabels: Record<string, string> = {
  engineering: "Engineering",
  medical: "Medical",
  management: "Management",
  law: "Law",
  university: "University",
  professional: "Professional (CA/CS/CMA)",
  "govt-exam": "Govt Exams",
};

const categoryColors: Record<string, string> = {
  engineering: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  medical: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  management: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  law: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  university: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  professional: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  "govt-exam": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const TrendIcon = ({ trend }: { trend: "up" | "down" | "stable" }) => {
  if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-600" />;
  if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
};

type InfoSection = "crop-prices" | "exam-details" | "govt-jobs";

const News = () => {
  const [infoSection, setInfoSection] = useState<InfoSection>("exam-details");
  const examCategories = [...new Set(examData.map(e => e.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-2">Latest News & Updates</h1>
        <p className="text-muted-foreground mb-8">Crop prices, exams, govt jobs, schemes, global policies & international affairs — March 2026</p>

        <Tabs defaultValue="info-hub" className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-1">
            <TabsTrigger value="info-hub">📋 Info Hub</TabsTrigger>
            <TabsTrigger value="govt-schemes">💳 Govt Schemes</TabsTrigger>
            <TabsTrigger value="global-policy">🌐 Global News</TabsTrigger>
            <TabsTrigger value="international">⚠️ International</TabsTrigger>
          </TabsList>

          {/* Info Hub with dropdown selector */}
          <TabsContent value="info-hub">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">What are you looking for?</h2>
              <Select value={infoSection} onValueChange={(v) => setInfoSection(v as InfoSection)}>
                <SelectTrigger className="w-[260px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crop-prices">🌾 Crop Prices & MSP</SelectItem>
                  <SelectItem value="exam-details">🎓 Exam Dates & Details</SelectItem>
                  <SelectItem value="govt-jobs">🏢 Government Jobs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Crop Prices */}
            {infoSection === "crop-prices" && (
              <div>
                <h3 className="text-xl font-bold mb-1">Crop Prices & MSP (2025-26)</h3>
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
              </div>
            )}

            {/* Exam Details */}
            {infoSection === "exam-details" && (
              <div>
                <h3 className="text-xl font-bold mb-1">Exam Dates & Details 2026</h3>
                <p className="text-sm text-muted-foreground mb-6">CUET, JEE, NEET, CAT, XAT, NMAT, CA, IPU CET, UPSC, SSC & more</p>
                {examCategories.map(cat => (
                  <div key={cat} className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={categoryColors[cat] + " text-sm font-semibold px-3 py-1"}>
                        {categoryLabels[cat]}
                      </Badge>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2">
                      {examData.filter(e => e.category === cat).map(exam => (
                        <Card key={exam.name} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl mt-0.5">{exam.icon}</span>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-sm leading-tight">{exam.name}</h3>
                                <p className="text-xs text-muted-foreground">{exam.fullName}</p>
                                <div className="mt-2 space-y-1 text-xs">
                                  <div className="flex gap-2"><span className="text-muted-foreground font-medium min-w-[70px]">Exam Date:</span><span className="font-semibold text-primary">{exam.examDate}</span></div>
                                  <div className="flex gap-2"><span className="text-muted-foreground font-medium min-w-[70px]">Deadline:</span><span>{exam.registrationDeadline}</span></div>
                                  <div className="flex gap-2"><span className="text-muted-foreground font-medium min-w-[70px]">Eligibility:</span><span>{exam.eligibility}</span></div>
                                  <div className="flex gap-2"><span className="text-muted-foreground font-medium min-w-[70px]">Website:</span><span className="text-primary underline">{exam.website}</span></div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Govt Jobs */}
            {infoSection === "govt-jobs" && (
              <div>
                <h3 className="text-xl font-bold mb-1">🏢 Government Job Openings 2026</h3>
                <p className="text-sm text-muted-foreground mb-6">UPSC, SSC, Banking, Railways, Defence, ISRO, DRDO & more</p>
                <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2">
                  {govtJobs.map(job => (
                    <Card key={job.title} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl mt-0.5">{job.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-sm leading-tight">{job.title}</h3>
                            <p className="text-xs text-muted-foreground">{job.organization}</p>
                            <div className="mt-2 space-y-1 text-xs">
                              <div className="flex gap-2"><span className="text-muted-foreground font-medium min-w-[70px]">Vacancies:</span><span className="font-semibold text-primary">{job.vacancies}</span></div>
                              <div className="flex gap-2"><span className="text-muted-foreground font-medium min-w-[70px]">Last Date:</span><span>{job.lastDate}</span></div>
                              <div className="flex gap-2"><span className="text-muted-foreground font-medium min-w-[70px]">Eligibility:</span><span>{job.eligibility}</span></div>
                              <div className="flex gap-2"><span className="text-muted-foreground font-medium min-w-[70px]">Sector:</span><Badge variant="outline" className="text-xs py-0">{job.sector}</Badge></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
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

          {/* Global News */}
          <TabsContent value="global-policy">
            <h2 className="text-2xl font-bold mb-2">Global News & Politics</h2>
            <p className="text-sm text-muted-foreground mb-6">Economy, trade, politics, regulations & world affairs — latest first</p>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {[...globalPolicyNews].reverse().map((n) => (
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
            <p className="text-sm text-muted-foreground mb-6">Iran-Israel, Russia-Ukraine, Gaza, Asia, Africa, space, energy & geopolitics</p>
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
};

export default News;
