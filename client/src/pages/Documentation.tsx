/**
 * Documentation Page - Comprehensive guide for the Fundraising Concierge Agent
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Code2, 
  Settings, 
  Play, 
  Database,
  Shield,
  CheckCircle2,
  AlertCircle,
  Download,
  FileText,
  Sparkles
} from "lucide-react";
import { Link } from "wouter";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="text-xl font-bold text-primary-foreground">Fundraising Concierge</span>
              </a>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/">
                <a className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a>
              </Link>
              <Button variant="outline" size="sm" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-primary">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Documentation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Complete Documentation
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Everything you need to install, configure, and deploy the Fundraising Concierge Agent
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="quickstart" className="space-y-8">
            <TabsList className="bg-secondary/50 p-2 rounded-lg flex-wrap h-auto">
              <TabsTrigger value="quickstart" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
                <Play className="w-4 h-4 mr-2" />
                Quick Start
              </TabsTrigger>
              <TabsTrigger value="installation" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
                <Download className="w-4 h-4 mr-2" />
                Installation
              </TabsTrigger>
              <TabsTrigger value="configuration" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
                <Settings className="w-4 h-4 mr-2" />
                Configuration
              </TabsTrigger>
              <TabsTrigger value="usage" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
                <Terminal className="w-4 h-4 mr-2" />
                Usage
              </TabsTrigger>
              <TabsTrigger value="api" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
                <Code2 className="w-4 h-4 mr-2" />
                API Reference
              </TabsTrigger>
              <TabsTrigger value="deployment" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Deployment
              </TabsTrigger>
            </TabsList>

            {/* Quick Start */}
            <TabsContent value="quickstart" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-accent" />
                    Quick Start Guide
                  </CardTitle>
                  <CardDescription>Get up and running in 5 minutes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">1. Download the Project</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Download from GitHub or extract archive</div>
                      <div>cd fundraising-concierge</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">2. Install Dependencies</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Install Python dependencies</div>
                      <div>pip3 install -r requirements.txt</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">3. Configure API Keys</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Copy environment template</div>
                      <div>cp .env.example .env</div>
                      <div className="mt-2 text-accent"># Edit .env with your API keys</div>
                      <div>nano .env</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">4. Run Demo</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Generate demo data</div>
                      <div>python3 example_demo.py</div>
                      <div className="mt-2 text-accent"># Run approval interface</div>
                      <div>python3 main.py --phase approval</div>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">You're all set!</div>
                        <div className="text-sm text-muted-foreground">
                          The system is now ready to use. Check the Usage tab for detailed workflow instructions.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Installation */}
            <TabsContent value="installation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-accent" />
                    Installation
                  </CardTitle>
                  <CardDescription>System requirements and installation steps</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">System Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Python 3.11+ (3.11.0rc1 tested)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>pip3 package manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Internet connection for API calls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>4GB RAM minimum</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Required API Keys</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-semibold mb-2">Apollo.io API</div>
                        <div className="text-sm text-muted-foreground">For pipeline discovery</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-semibold mb-2">Tavily Search API</div>
                        <div className="text-sm text-muted-foreground">For contextual intelligence</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-semibold mb-2">Anthropic API</div>
                        <div className="text-sm text-muted-foreground">For Claude Sonnet 4.5</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-semibold mb-2">IMAP Email</div>
                        <div className="text-sm text-muted-foreground">For sentiment analysis</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Python Dependencies</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div>requests==2.31.0</div>
                      <div>anthropic==0.18.1</div>
                      <div>pyyaml==6.0.1</div>
                      <div>python-dotenv==1.0.1</div>
                      <div>weasyprint==60.2</div>
                      <div>jinja2==3.1.3</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Configuration */}
            <TabsContent value="configuration" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-accent" />
                    Configuration
                  </CardTitle>
                  <CardDescription>Configure API keys, persona, and system parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Environment Variables (.env)</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># API Keys</div>
                      <div>APOLLO_API_KEY=your_apollo_key_here</div>
                      <div>TAVILY_API_KEY=your_tavily_key_here</div>
                      <div>ANTHROPIC_API_KEY=your_anthropic_key_here</div>
                      <div className="mt-3 text-accent"># Email Configuration</div>
                      <div>IMAP_SERVER=imap.gmail.com</div>
                      <div>IMAP_PORT=993</div>
                      <div>IMAP_EMAIL=your_email@example.com</div>
                      <div>IMAP_PASSWORD=your_app_password</div>
                      <div className="mt-3 text-accent"># CCT Simulation</div>
                      <div>CCT_RATE=0.001  # 1 token = 0.001 CCT</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">System Configuration (config.yaml)</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Pipeline Discovery Settings</div>
                      <div>pipeline:</div>
                      <div className="ml-4">min_aum: 10000000000  # $10B</div>
                      <div className="ml-4">fund_types: [SWF, Family Office, Pension]</div>
                      <div className="ml-4">regions: [GCC, MENA, Global]</div>
                      <div className="mt-3 text-accent"># Narrative Generation</div>
                      <div>narrative:</div>
                      <div className="ml-4">model: claude-sonnet-4.5</div>
                      <div className="ml-4">max_tokens: 1000</div>
                      <div className="ml-4">temperature: 0.7</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Institutional Persona (persona.txt)</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 text-sm">
                      <p className="text-muted-foreground">
                        You are a Senior IR Associate at a GCC-based AI infrastructure fund. Your writing style 
                        matches NBIM's formal institutional tone. You reference specific research findings without 
                        hype or sales language. You are knowledgeable about AI infrastructure, sovereign wealth 
                        funds, and institutional investment processes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Usage */}
            <TabsContent value="usage" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-accent" />
                    Usage Guide
                  </CardTitle>
                  <CardDescription>Learn how to run workflows and use each module</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Complete Workflow</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Run all phases sequentially</div>
                      <div>python3 main.py --phase all</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Individual Phases</h3>
                    <div className="space-y-3">
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-mono text-sm mb-2">python3 main.py --phase discovery</div>
                        <div className="text-sm text-muted-foreground">Discover institutional investors via Apollo.io</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-mono text-sm mb-2">python3 main.py --phase intelligence</div>
                        <div className="text-sm text-muted-foreground">Research LPs using Tavily Search</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-mono text-sm mb-2">python3 main.py --phase generation</div>
                        <div className="text-sm text-muted-foreground">Generate personalized email drafts</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-mono text-sm mb-2">python3 main.py --phase approval</div>
                        <div className="text-sm text-muted-foreground">Review and approve email drafts (CLI)</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-mono text-sm mb-2">python3 main.py --phase sentiment</div>
                        <div className="text-sm text-muted-foreground">Analyze email replies via IMAP</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-mono text-sm mb-2">python3 main.py --phase reporting</div>
                        <div className="text-sm text-muted-foreground">Generate weekly PDF report</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Important</div>
                        <div className="text-sm text-muted-foreground">
                          The approval phase is mandatory and prevents automated email sending. All drafts must be 
                          manually reviewed and approved before sending.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* API Reference */}
            <TabsContent value="api" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-accent" />
                    API Reference
                  </CardTitle>
                  <CardDescription>Complete API documentation for all integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Apollo.io API</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Endpoint</div>
                      <div>POST https://api.apollo.io/v1/mixed_people/search</div>
                      <div className="mt-3 text-accent"># Headers</div>
                      <div>{`{ "x-api-key": "YOUR_API_KEY" }`}</div>
                      <div className="mt-3 text-accent"># Request Body</div>
                      <div>{`{`}</div>
                      <div className="ml-4">"person_titles": ["CIO", "Managing Director"],</div>
                      <div className="ml-4">"organization_num_employees_ranges": ["1000+"],</div>
                      <div className="ml-4">"page": 1,</div>
                      <div className="ml-4">"per_page": 10</div>
                      <div>{`}`}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tavily Search API</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Endpoint</div>
                      <div>POST https://api.tavily.com/search</div>
                      <div className="mt-3 text-accent"># Request Body</div>
                      <div>{`{`}</div>
                      <div className="ml-4">"api_key": "YOUR_API_KEY",</div>
                      <div className="ml-4">"query": "ADIA allocation strategy AI",</div>
                      <div className="ml-4">"search_depth": "advanced",</div>
                      <div className="ml-4">"max_results": 5</div>
                      <div>{`}`}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Anthropic Claude API</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Endpoint</div>
                      <div>POST https://api.anthropic.com/v1/messages</div>
                      <div className="mt-3 text-accent"># Headers</div>
                      <div>{`{`}</div>
                      <div className="ml-4">"x-api-key": "YOUR_API_KEY",</div>
                      <div className="ml-4">"anthropic-version": "2023-06-01"</div>
                      <div>{`}`}</div>
                      <div className="mt-3 text-accent"># Request Body</div>
                      <div>{`{`}</div>
                      <div className="ml-4">"model": "claude-sonnet-4.5",</div>
                      <div className="ml-4">"max_tokens": 1000,</div>
                      <div className="ml-4">"messages": [...]</div>
                      <div>{`}`}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Deployment */}
            <TabsContent value="deployment" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Deployment Checklist
                  </CardTitle>
                  <CardDescription>Production deployment guide and best practices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pre-Deployment Checklist</h3>
                    <ul className="space-y-2">
                      {[
                        "All API keys configured in .env",
                        "Persona customized for your fund",
                        "IMAP email credentials tested",
                        "Demo workflow completed successfully",
                        "CCT logging verified",
                        "Report generation tested",
                        "Approval gate workflow tested",
                        "All 8 integration tests passing"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Security Best Practices</h3>
                    <div className="space-y-3">
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-accent" />
                          API Key Management
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Store API keys in environment variables, never commit to version control
                        </div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-accent" />
                          Human Approval Gate
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Always review drafts before sending, maintain audit trail
                        </div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <div className="font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-accent" />
                          Data Privacy
                        </div>
                        <div className="text-sm text-muted-foreground">
                          LP data stored locally, no cloud storage, GDPR compliant
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Monitoring & Maintenance</h3>
                    <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-accent mb-2"># Check CCT consumption</div>
                      <div>cat data/cct_log.json | jq '.total_cct'</div>
                      <div className="mt-3 text-accent"># View pipeline status</div>
                      <div>cat data/pipeline.json | jq '.[] | .status'</div>
                      <div className="mt-3 text-accent"># Generate weekly report</div>
                      <div>python3 main.py --phase reporting</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
