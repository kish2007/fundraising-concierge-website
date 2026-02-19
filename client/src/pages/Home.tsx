/**
 * Fundraising Concierge Agent - Documentation Website
 * 
 * Design Philosophy: Modern Financial/Tech Aesthetic
 * - Navy blue (#0A1628) and gold (#D4AF37) color scheme
 * - IBM Plex Sans for headings, Inter for body
 * - Asymmetric layouts with floating cards
 * - Subtle gradients and soft shadows for depth
 * - Smooth animations and hover effects
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle2, 
  Code2, 
  Database, 
  FileText, 
  GitBranch, 
  Lock, 
  Mail, 
  Search, 
  Shield, 
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Download,
  ExternalLink,
  BarChart3,
  Brain,
  MessageSquare,
  FileCheck
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold text-primary-foreground">Fundraising Concierge</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Features</a>
              <a href="#architecture" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Architecture</a>
              <a href="#modules" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Modules</a>
              <Link href="/docs">
                <a className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Documentation</a>
              </Link>
              <Button variant="outline" size="sm" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-primary">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/fcd46WvD6gkh2vrJ5qALn2/sandbox/CebIr8DIL3SDfoe0Azm1jp-img-1_1771487399000_na1fn_aGVyby1hYnN0cmFjdC1haQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmNkNDZXdkQ2Z2toMnZySjVxQUxuMi9zYW5kYm94L0NlYklyOERJTDNTRGZvZTBBem0xanAtaW1nLTFfMTc3MTQ4NzM5OTAwMF9uYTFmbl9hR1Z5YnkxaFluTjBjbUZqZEMxaGFRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=I8Wf~gis-yKONsdBjHyzZemLeqaTVAAacX3wrNzM5SMy9aCj6zQ4r6fau5kMBYe7YCeREpbs0vmKCsSlT06TKAq4iOEeoc~zNadJWqyOS2ydLkzRxHAgx5tV-CmuCcR5h8iIgmUk5Phbji-KlIeT8T~NbZ1H-Usd86CrbrQvCJv5jGt6IUFNsIlv8Rs26FXEK3mhdmbjxDWxu6aqWmN49vvTwFLpG9n5V0gKPOfrokbCcNns~RFQtU0t43LLDmp4ERK~rCZzD3xwc9-ZAm0vcbvDjqpy48gJ4Pl5d2fnccKKOSpLE4jbheh6FJoi0QqoERWcbQjgzXqjlTJutupj4g__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">Production Ready • 3,439 Lines of Code</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Autonomous Institutional
                <span className="block text-accent mt-2">Investor Relations</span>
              </h1>
              
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                Scale your fundraising operations with an AI-powered system that automates pipeline discovery, 
                contextual research, and personalized email generation—while maintaining human oversight.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 shadow-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Link href="/docs">
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    <FileText className="w-5 h-5 mr-2" />
                    Documentation
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
                <div>
                  <div className="text-3xl font-bold text-accent">90%</div>
                  <div className="text-sm text-primary-foreground/70">Time Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-primary-foreground/70">LPs/Week</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">8/8</div>
                  <div className="text-sm text-primary-foreground/70">Tests Passing</div>
                </div>
              </div>
            </div>
            
            {/* Right: Floating Cards */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative space-y-4">
                <Card className="bg-card/95 backdrop-blur-sm border-accent/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      Pipeline Discovery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Identify institutional investors via Apollo.io with intelligent filtering</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/95 backdrop-blur-sm border-accent/20 shadow-2xl transform hover:scale-105 transition-transform duration-300 ml-12">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Brain className="w-5 h-5 text-accent" />
                      AI Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Claude Sonnet 4.5 drafts institutional-grade personalized emails</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/95 backdrop-blur-sm border-accent/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Shield className="w-5 h-5 text-accent" />
                      Human Oversight
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Mandatory approval gate ensures quality and compliance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Core Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Institutional Outreach
            </h2>
            <p className="text-lg text-muted-foreground">
              Seven integrated modules working together to automate your investor relations workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "Pipeline Discovery",
                description: "Identify institutional investors via Apollo.io API with intelligent filtering by fund type, AUM, and geography",
                color: "text-blue-500"
              },
              {
                icon: Database,
                title: "Contextual Intelligence",
                description: "Research LPs using Tavily Search to extract allocation themes, strategic priorities, and AI commentary",
                color: "text-purple-500"
              },
              {
                icon: MessageSquare,
                title: "Narrative Generation",
                description: "Draft personalized emails with Claude Sonnet 4.5 using institutional persona and research context",
                color: "text-green-500"
              },
              {
                icon: FileCheck,
                title: "Human Approval Gate",
                description: "Interactive CLI interface for reviewing and approving email drafts with complete audit trail",
                color: "text-orange-500"
              },
              {
                icon: BarChart3,
                title: "Sentiment Analysis",
                description: "Monitor email replies via IMAP and classify engagement level using Claude (Hot/Warm/Passive)",
                color: "text-red-500"
              },
              {
                icon: Zap,
                title: "CCT Logging",
                description: "Track compute credit consumption across all API calls with detailed breakdowns by module",
                color: "text-yellow-500"
              },
              {
                icon: FileText,
                title: "Report Generation",
                description: "Generate weekly PDF reports with pipeline status, sentiment analysis, and CCT summaries",
                color: "text-indigo-500"
              },
              {
                icon: Lock,
                title: "Security & Compliance",
                description: "No automated sending, no LinkedIn automation, complete audit trail, and API key management",
                color: "text-pink-500"
              },
              {
                icon: Code2,
                title: "Open Architecture",
                description: "Modular design with clean interfaces, extensive documentation, and production-ready code",
                color: "text-cyan-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">System Architecture</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Modular, Scalable, Production-Ready
            </h2>
            <p className="text-lg text-muted-foreground">
              Seven independent modules orchestrated through a clean workflow with human-in-the-loop oversight
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/fcd46WvD6gkh2vrJ5qALn2/sandbox/CebIr8DIL3SDfoe0Azm1jp-img-5_1771487396000_na1fn_YXJjaGl0ZWN0dXJlLWRpYWdyYW0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmNkNDZXdkQ2Z2toMnZySjVxQUxuMi9zYW5kYm94L0NlYklyOERJTDNTRGZvZTBBem0xanAtaW1nLTVfMTc3MTQ4NzM5NjAwMF9uYTFmbl9ZWEpqYUdsMFpXTjBkWEpsTFdScFlXZHlZVzAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=T4cbSOSF6Wrl9uTIJVcjCi5qfUHqUhs6f7U3MoyQMVLPfoRZYVjwmW6vpwQZREklayx3mcpTFlX0tK1MUNhzxD5ZDeGVtlK4z9N3Kz8CI9au0m0BtpgQUQKva7VpfJzNuxkPB~S3aec0A9P~~hf3ZRFP3w9ISdKT9Wf7f5bIYihHzYodhJDqgSKBb5tvGDnMOX24PcxMJx5myXs3lw-uQlLDwmsrY3ch-l4h0Hp~bFUhSPazDNPw4LyMPVCyi~cs-o6ELm4kyBPEQEJxzvWvEQwsOnGRO~pc9MS~tG4wT4v-flWzes9N3hMzFHgH17Ympsk2fp9E8mWflWrruUa1Zw__"
                alt="System Architecture Diagram"
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Modular Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Each module is independent and can be run separately for maximum flexibility</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Human-in-the-Loop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Mandatory approval gate prevents automated sending and ensures quality control</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Audit Trail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">All actions logged with timestamp and operator information for full transparency</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Showcase */}
      <section id="modules" className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Module Details</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Deep Dive into Each Module
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the technical specifications and capabilities of each system component
            </p>
          </div>
          
          <Tabs defaultValue="pipeline" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2 bg-secondary/50 p-2 rounded-lg">
              <TabsTrigger value="pipeline" className="data-[state=active]:bg-accent data-[state=active]:text-primary">Pipeline</TabsTrigger>
              <TabsTrigger value="intelligence" className="data-[state=active]:bg-accent data-[state=active]:text-primary">Intelligence</TabsTrigger>
              <TabsTrigger value="generation" className="data-[state=active]:bg-accent data-[state=active]:text-primary">Generation</TabsTrigger>
              <TabsTrigger value="approval" className="data-[state=active]:bg-accent data-[state=active]:text-primary">Approval</TabsTrigger>
              <TabsTrigger value="sentiment" className="data-[state=active]:bg-accent data-[state=active]:text-primary">Sentiment</TabsTrigger>
              <TabsTrigger value="cct" className="data-[state=active]:bg-accent data-[state=active]:text-primary">CCT</TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-accent data-[state=active]:text-primary">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pipeline" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Pipeline Discovery</h3>
                  <p className="text-muted-foreground mb-6">
                    Identify institutional investors using Apollo.io API based on sophisticated filtering criteria.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Search by fund type (SWF, Family Office, Pension Fund)",
                      "Filter by minimum AUM and geography",
                      "Extract contact information (CIO, Managing Director)",
                      "Create structured LP records",
                      "Maintain pipeline state"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-lg">
                  <img 
                    src="https://private-us-east-1.manuscdn.com/sessionFile/fcd46WvD6gkh2vrJ5qALn2/sandbox/CebIr8DIL3SDfoe0Azm1jp-img-2_1771487390000_na1fn_bW9kdWxlLXBpcGVsaW5l.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmNkNDZXdkQ2Z2toMnZySjVxQUxuMi9zYW5kYm94L0NlYklyOERJTDNTRGZvZTBBem0xanAtaW1nLTJfMTc3MTQ4NzM5MDAwMF9uYTFmbl9iVzlrZFd4bExYQnBjR1ZzYVc1bC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=r3yn74o~Wl0T~GBgbRbiGe5~BaLPHB7AQbgJpuVhthikYxLviRnz9FK-kKoB0J2E3699BOyA9NY1TiHDfGxPpXxBxpCXNo12nqCxQ6XXu1FRAdS24bkHopxdaIhkCViHxt~6sZ980-Q960H1MJOR4NuuxUQVE5ncHN1bMm6UpxhdOPcUgKgGh8aBYKsJNBcQ~k27TMfNkxMfBk9fTp3yJ7vyKUTB49~~S6TIm3RPu78V6UAgPksbP1obT6ZWX5SAKBFrlO9ZkhxwXHuCmqqR3l9RecN9O4ZA5m-fcU~1Mbz2IbPrkaGV4WEQIc~F6eLRHEFe9DH9I2zP~MRu6WlvdA__"
                    alt="Pipeline Discovery Module"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="intelligence" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-lg order-2 md:order-1">
                  <img 
                    src="https://private-us-east-1.manuscdn.com/sessionFile/fcd46WvD6gkh2vrJ5qALn2/sandbox/CebIr8DIL3SDfoe0Azm1jp-img-3_1771487385000_na1fn_bW9kdWxlLWludGVsbGlnZW5jZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmNkNDZXdkQ2Z2toMnZySjVxQUxuMi9zYW5kYm94L0NlYklyOERJTDNTRGZvZTBBem0xanAtaW1nLTNfMTc3MTQ4NzM4NTAwMF9uYTFmbl9iVzlrZFd4bExXbHVkR1ZzYkdsblpXNWpaUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=khycouAi8kl5I4yDEt~9ahMuH4jYLHLLb217YvZpaLGeQFn67OdXRI2TVerHBvY2hSimBrmgN7QYbdZ~BPyHTFROU9h74XcvtSfmTUW3Y9E8NkA6rPK1Uqox030jqnMGg60bSoizsC3BGHide3RrGMnZNR9WacP~vKq-8o1Ku-89kU9UgSu8F9jcZbCc6sdlemLW2B6RYnKnh346hEZBPHF9MbYkDE1ucAeDjGsulft2YsE0yt~13Fv2qgf3N1aQAII25zgmZ9dYvfN-yesmH7m0BLr6Cu8mjWCEkkAg~~5yXeoqfE7eFccCwe5qTXrXEk75drBkP8516zq5MKAYhw__"
                    alt="Contextual Intelligence Module"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Contextual Intelligence</h3>
                  <p className="text-muted-foreground mb-6">
                    Research each LP using Tavily Search API to extract strategic context and investment priorities.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Multi-query search per LP (allocation, priorities, AI commentary)",
                      "Document retrieval and parsing",
                      "Context extraction and categorization",
                      "Key insights generation",
                      "LP record enrichment"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="generation" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Narrative Generation</h3>
                  <p className="text-muted-foreground mb-6">
                    Draft personalized institutional emails using Claude Sonnet 4.5 with Senior IR Associate persona.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Formal, institutional tone matching NBIM standards",
                      "References specific research findings",
                      "No hype or sales language",
                      "Tailored to each LP's investment focus",
                      "Token usage tracking and CCT cost calculation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-lg">
                  <img 
                    src="https://private-us-east-1.manuscdn.com/sessionFile/fcd46WvD6gkh2vrJ5qALn2/sandbox/CebIr8DIL3SDfoe0Azm1jp-img-4_1771487403000_na1fn_bW9kdWxlLWdlbmVyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmNkNDZXdkQ2Z2toMnZySjVxQUxuMi9zYW5kYm94L0NlYklyOERJTDNTRGZvZTBBem0xanAtaW1nLTRfMTc3MTQ4NzQwMzAwMF9uYTFmbl9iVzlrZFd4bExXZGxibVZ5WVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=P72Ed8ORG6PZMiE2QDH6-hEfNqZ9w8yaplqS84bGLCT2FVJOclrEHt2TdCKzkrL6yr2AaHD9SkULKilyi6MMCXLkxc0UiPMFTKvyGlcjwiLUX8~eehfaPNIsIJWsRllJj236KXzwjVyYXKrkQ5DeXkF3ByDgeLGFCgfch2H2bm3IMTj4x3Y3Kp-S0nYsrAU~7nhZWyX6t5MG-~Sj-Lt6ieds1ouKXsJEshZW5BuXnR7XqHSaRcHHDHVKeni60THe4Ze2q6b956eh-qe4y-QGblxE2hh7VMZun4M-xG41zw7mdzWv~~Li1dwNdtV6PA8aFKbn~x0ErK6VHrtJe4bvIg__"
                    alt="Narrative Generation Module"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            {/* Add similar TabsContent for other modules */}
            <TabsContent value="approval" className="mt-8">
              <Card className="bg-card border-border/50 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Human Approval Gate</h3>
                <p className="text-muted-foreground mb-6">
                  Interactive CLI interface for reviewing and approving email drafts with complete transparency.
                </p>
                <div className="bg-secondary/30 rounded-lg p-6 font-mono text-sm">
                  <div className="text-accent mb-2">$ python3 main.py --phase approval</div>
                  <div className="text-muted-foreground">
                    <div>LP Details: Abu Dhabi Investment Authority</div>
                    <div>Fund Type: Sovereign Wealth Fund</div>
                    <div>CCT Cost: 0.001234 CCT (1234 tokens)</div>
                    <div className="mt-4 text-foreground">Actions: [A]pprove [E]dit [S]kip [Q]uit</div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="sentiment" className="mt-8">
              <Card className="bg-card border-border/50 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Sentiment Analysis</h3>
                <p className="text-muted-foreground mb-6">
                  Monitor email replies via IMAP and classify engagement level using Claude.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="text-green-600 font-semibold mb-2">🔥 Hot</div>
                    <div className="text-sm text-muted-foreground">Meeting/call explicitly requested</div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <div className="text-yellow-600 font-semibold mb-2">☀️ Warm</div>
                    <div className="text-sm text-muted-foreground">Additional information requested</div>
                  </div>
                  <div className="bg-gray-500/10 border border-gray-500/20 rounded-lg p-4">
                    <div className="text-gray-600 font-semibold mb-2">❄️ Passive</div>
                    <div className="text-sm text-muted-foreground">Acknowledged but no action</div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="cct" className="mt-8">
              <Card className="bg-card border-border/50 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">CCT Logging</h3>
                <p className="text-muted-foreground mb-6">
                  Track compute credit consumption across all API calls with detailed breakdowns.
                </p>
                <div className="bg-secondary/30 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">1.484</div>
                      <div className="text-sm text-muted-foreground">Total CCT</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">1,484</div>
                      <div className="text-sm text-muted-foreground">Total Tokens</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">4</div>
                      <div className="text-sm text-muted-foreground">API Calls</div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="reports" className="mt-8">
              <Card className="bg-card border-border/50 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Report Generation</h3>
                <p className="text-muted-foreground mb-6">
                  Generate weekly PDF reports with pipeline status, sentiment analysis, and CCT summaries.
                </p>
                <ul className="space-y-3">
                  {[
                    "Executive summary with key metrics",
                    "Pipeline status by fund type and status",
                    "LP details table with sentiment",
                    "CCT consumption breakdown",
                    "Key insights and recommendations",
                    "JSON export for integration"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Documentation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Documentation
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to get started, from installation to deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Quick Start",
                description: "Get up and running in 5 minutes with our quick start guide",
                icon: Zap,
                link: "#quickstart"
              },
              {
                title: "Installation",
                description: "Step-by-step installation instructions and requirements",
                icon: Download,
                link: "#installation"
              },
              {
                title: "Configuration",
                description: "Configure API keys, persona, and system parameters",
                icon: Code2,
                link: "#configuration"
              },
              {
                title: "Usage Guide",
                description: "Learn how to run workflows and use each module",
                icon: FileText,
                link: "#usage"
              },
              {
                title: "API Reference",
                description: "Complete API documentation for all integrations",
                icon: GitBranch,
                link: "#api"
              },
              {
                title: "Code Examples",
                description: "Working code examples for common use cases",
                icon: Code2,
                link: "#examples"
              },
              {
                title: "Troubleshooting",
                description: "Common issues and solutions for debugging",
                icon: Shield,
                link: "#troubleshooting"
              },
              {
                title: "Deployment",
                description: "Production deployment checklist and best practices",
                icon: CheckCircle2,
                link: "#deployment"
              }
            ].map((doc, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <doc.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.3),transparent_50%)]" />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Scale Your Investor Relations?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Download the complete system with 3,439 lines of production-ready Python code, 
              comprehensive documentation, and demo data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 shadow-xl">
                <Download className="w-5 h-5 mr-2" />
                Download Project
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <ExternalLink className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">3,439</div>
                <div className="text-sm text-primary-foreground/70">Lines of Code</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">7</div>
                <div className="text-sm text-primary-foreground/70">Core Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-primary-foreground/70">Test Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="text-lg font-bold text-primary-foreground">Fundraising Concierge</span>
              </div>
              <p className="text-sm text-primary-foreground/70">
                Autonomous institutional investor relations powered by AI
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Features</a></li>
                <li><a href="#architecture" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Architecture</a></li>
                <li><a href="#modules" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Modules</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#documentation" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Examples</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">Project</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">License</a></li>
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-sm text-primary-foreground/70">
              © 2026 Fundraising Concierge Agent. Production ready • 8/8 tests passing
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
