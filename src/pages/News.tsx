import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { examData, govtJobs, govtSchemeNews, globalPolicyNews, internationalNews } from "@/data/newsData";

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

const News = () => {
  const examCategories = [...new Set(examData.map(e => e.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-2">Latest News & Updates</h1>
        <p className="text-muted-foreground mb-8">Exams, govt jobs, schemes, global policies & international affairs — March 2026</p>

        <Tabs defaultValue="students-exams" className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-1">
            <TabsTrigger value="students-exams">🎓 Exams & Jobs</TabsTrigger>
            <TabsTrigger value="govt-schemes">💳 Govt Schemes</TabsTrigger>
            <TabsTrigger value="global-policy">🌐 Global Policies</TabsTrigger>
            <TabsTrigger value="international">⚠️ International</TabsTrigger>
          </TabsList>

          {/* Students - Exams & Govt Jobs */}
          <TabsContent value="students-exams">
            <h2 className="text-2xl font-bold mb-2">Exam Dates & Government Jobs 2026</h2>
            <p className="text-sm text-muted-foreground mb-6">CUET, JEE, NEET, CAT, XAT, NMAT, CA, IPU CET, UPSC, SSC, Banking & more</p>

            {/* Exam Dates by Category */}
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

            {/* Govt Jobs */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-2">🏢 Government Job Openings 2026</h2>
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

          {/* Global Policies */}
          <TabsContent value="global-policy">
            <h2 className="text-2xl font-bold mb-2">Global Policies & Economy</h2>
            <p className="text-sm text-muted-foreground mb-6">Fed rates, trade deals, BRICS, AI regulation, energy & more</p>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {globalPolicyNews.map((n) => (
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
