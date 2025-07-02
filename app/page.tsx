import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Home,
  Phone,
  Download,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Shield,
  Heart,
  Stethoscope,
  FileText,
  ArrowRight,
  Calendar,
  Thermometer,
  Mail,
  MapPin,
  AlertTriangle,
  Activity,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AnnualFluShots() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/dr-morepen-logo.png"
              alt="Dr. Morepen Home Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#what-are-flu-shots" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Flu Shots
            </Link>
            <Link href="#why-yearly" className="text-gray-600 hover:text-blue-600 transition-colors">
              Why Yearly
            </Link>
            <Link href="#who-should-get" className="text-gray-600 hover:text-blue-600 transition-colors">
              Who Needs It
            </Link>
            <Link href="#effectiveness" className="text-gray-600 hover:text-blue-600 transition-colors">
              Effectiveness
            </Link>
            <Link href="#myths" className="text-gray-600 hover:text-blue-600 transition-colors">
              Myths
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hidden sm:flex bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Schedule Shot</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100 text-lg px-4 py-2">
                🛡️ Annual Protection at Home
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Annual Flu Shots:
                <span className="block text-blue-600 mt-2">Protect Yourself and Your Loved Ones</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get your annual flu vaccination in the comfort of your home. Professional, convenient, and safe
                protection against seasonal influenza for the whole family.
              </p>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  CDC Approved Vaccines
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Licensed Healthcare Providers
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Same Day Service
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Flu Shot
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 bg-transparent"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Location Near You
                </Button>
              </div>

              {/* Statistics for trust */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100,000+</div>
                  <div className="text-sm text-gray-600">Flu Shots Given</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Healthcare Professional Administering Flu Shot"
                  alt="Healthcare professional administering flu vaccination at home"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />

                {/* Trust badge overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Annual Protection</p>
                      <p className="text-sm text-gray-600">Updated Formula</p>
                    </div>
                  </div>
                </div>

                {/* Additional trust element */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ✓ 2024-25 Season
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Flu Shots Section */}
      <section id="what-are-flu-shots" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <Stethoscope className="w-10 h-10 text-blue-600 mr-4" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Are Flu Shots?</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Flu shots are vaccines that protect against influenza viruses. They contain either inactivated
                  (killed) flu viruses or a single gene from a flu virus to trigger your immune system to produce
                  antibodies that protect against infection.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Inactivated Flu Vaccine (IIV)</h4>
                      <p className="text-gray-600">
                        Contains killed flu viruses, safe for most people 6 months and older
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Attenuated Vaccine (LAIV)</h4>
                      <p className="text-gray-600">Nasal spray vaccine with weakened live viruses for ages 2-49</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Recombinant Vaccine</h4>
                      <p className="text-gray-600">Egg-free option made using recombinant technology</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Flu Vaccine Vial and Syringe"
                  alt="Flu vaccine preparation and administration"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-blue-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How the Flu Vaccine Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Immune Response</h4>
                  <p className="text-gray-600 text-sm">
                    Vaccine triggers your immune system to produce antibodies against flu viruses
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Protection Builds</h4>
                  <p className="text-gray-600 text-sm">
                    Takes about 2 weeks after vaccination for antibodies to develop and provide protection
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Seasonal Protection</h4>
                  <p className="text-gray-600 text-sm">
                    Provides protection throughout the flu season, typically lasting 6-8 months
                  </p>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Learn More About Flu Vaccines</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">How the Flu Vaccine Works</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Types of Flu Vaccines Available</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Flu Vaccine Ingredients Explained</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get Vaccinated Every Year Section */}
      <section id="why-yearly" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Get Vaccinated Every Year?</h2>
              <p className="text-xl text-gray-600">
                Annual vaccination is essential for optimal protection against seasonal flu
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Virus Mutation Diagram"
                  alt="Illustration showing flu virus mutations and strain changes"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Virus Mutation & Strain Changes</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Flu Viruses Constantly Change</h4>
                      <p className="text-gray-600">
                        Influenza viruses are constantly mutating, creating new strains that can evade immunity from
                        previous infections or vaccinations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Formula Updates</h4>
                      <p className="text-gray-600">
                        Each year's vaccine is updated to protect against the strains most likely to circulate during
                        the upcoming flu season.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Immunity Decreases Over Time</h4>
                      <p className="text-gray-600">
                        Your immune protection from vaccination decreases over time, making annual boosters necessary
                        for optimal protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Community Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    High vaccination rates protect vulnerable community members who cannot be vaccinated.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Reduced Severity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Even if you get flu after vaccination, symptoms are typically milder and shorter in duration.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Prevent Complications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vaccination reduces risk of serious flu complications like pneumonia and hospitalization.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Internal Links */}
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Understanding Annual Vaccination</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Why the Flu Shot Changes Every Year</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">How Scientists Choose Flu Strains</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Get a Flu Shot Section */}
      <section id="who-should-get" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Who Should Get a Flu Shot?</h2>
              <p className="text-xl text-gray-600">
                CDC recommends annual flu vaccination for everyone 6 months and older
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Priority Groups */}
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center text-2xl">
                    <AlertTriangle className="w-8 h-8 mr-3" />
                    High Priority Groups
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Adults 65 Years and Older</h4>
                    <p className="text-gray-600 text-sm">
                      Higher risk of serious flu complications due to age-related immune system changes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pregnant Women</h4>
                    <p className="text-gray-600 text-sm">
                      Vaccination protects both mother and baby during and after pregnancy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Children 6 Months - 5 Years</h4>
                    <p className="text-gray-600 text-sm">
                      Young children are at higher risk for flu complications and hospitalization.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Healthcare Workers</h4>
                    <p className="text-gray-600 text-sm">
                      Protect themselves and their patients from flu transmission in healthcare settings.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Chronic Conditions</h4>
                    <p className="text-gray-600 text-sm">
                      People with asthma, diabetes, heart disease, or other chronic conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* General Public */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center text-2xl">
                    <Users className="w-8 h-8 mr-3" />
                    General Public Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Everyone 6 Months and Older</h4>
                    <p className="text-gray-600 text-sm">
                      CDC recommends annual flu vaccination for everyone, with rare exceptions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Healthy Adults</h4>
                    <p className="text-gray-600 text-sm">
                      Even healthy adults benefit from vaccination to prevent illness and protect others.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">School-Age Children</h4>
                    <p className="text-gray-600 text-sm">
                      Vaccination helps prevent school absences and reduces community transmission.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Caregivers</h4>
                    <p className="text-gray-600 text-sm">
                      Those caring for high-risk individuals should be vaccinated to protect their loved ones.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Workers</h4>
                    <p className="text-gray-600 text-sm">
                      Teachers, first responders, and other essential workers benefit from protection.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* When to Get Vaccinated */}
            <div className="mt-16 bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">When to Get Vaccinated</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">September</h4>
                  <p className="text-gray-600 text-sm">Ideal time to get vaccinated before flu season begins</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">October</h4>
                  <p className="text-gray-600 text-sm">Still excellent timing for optimal protection</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">November+</h4>
                  <p className="text-gray-600 text-sm">Still beneficial even during flu season</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Protection</h4>
                  <p className="text-gray-600 text-sm">Takes 2 weeks to build immunity after vaccination</p>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Vaccination Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Flu Vaccine Recommendations by Age Group</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Flu Season Calendar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effectiveness & Safety Section */}
      <section id="effectiveness" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Effectiveness & Safety</h2>
              <p className="text-xl text-gray-600">Understanding how well flu vaccines work and their safety profile</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Effectiveness */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 flex items-center text-2xl">
                    <Activity className="w-8 h-8 mr-3" />
                    Vaccine Effectiveness
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Overall Effectiveness</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        When well-matched to circulating viruses, flu vaccines reduce risk of illness by 40-60%.
                      </p>
                      <div className="bg-green-100 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-green-800">Effectiveness Range</span>
                          <span className="text-sm font-medium text-green-800">40-60%</span>
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "50%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hospitalization Prevention</h4>
                      <p className="text-gray-600 text-sm">
                        Reduces risk of flu-related hospitalization by 40-70% when vaccine is well-matched.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Severity Reduction</h4>
                      <p className="text-gray-600 text-sm">
                        Even when you get flu after vaccination, symptoms are typically milder and shorter.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Safety */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800 flex items-center text-2xl">
                    <Shield className="w-8 h-8 mr-3" />
                    Safety Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Common Side Effects</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Soreness at injection site</li>
                        <li>• Low-grade fever</li>
                        <li>• Mild aches</li>
                        <li>• Headache</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Serious Reactions</h4>
                      <p className="text-gray-600 text-sm">
                        Severe allergic reactions are rare, occurring in less than 1 in a million doses.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Safety Monitoring</h4>
                      <p className="text-gray-600 text-sm">
                        Flu vaccines have been safely used for decades with extensive safety monitoring systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Safety for Different Groups */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Safety for Different Demographics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Pregnant Women</h4>
                  <p className="text-gray-600 text-sm">
                    Safe during any trimester. Protects both mother and baby for several months after birth.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Older Adults</h4>
                  <p className="text-gray-600 text-sm">
                    High-dose vaccines available for adults 65+ for enhanced immune response.
                  </p>
                </div>
                <div className="text-center">
                  <Stethoscope className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Chronic Conditions</h4>
                  <p className="text-gray-600 text-sm">
                    Safe and especially important for people with diabetes, heart disease, and asthma.
                  </p>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Safety Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Common Side Effects of the Flu Shot</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Is the Flu Shot Safe During Pregnancy?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myths & Misconceptions Section */}
      <section id="myths" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Myths & Misconceptions</h2>
              <p className="text-xl text-gray-600">Separating fact from fiction about flu vaccines</p>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <XCircle className="w-8 h-8 text-red-600 mr-3" />
                        <h3 className="text-xl font-bold text-red-600">MYTH</h3>
                      </div>
                      <p className="text-lg text-gray-900 mb-4">"The flu shot can give you the flu"</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl font-bold text-green-600">FACT</h3>
                      </div>
                      <p className="text-gray-600">
                        Flu vaccines contain either inactivated (killed) viruses or a single gene from a flu virus. They
                        cannot cause flu illness. Some people may experience mild side effects that are not the flu.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <XCircle className="w-8 h-8 text-red-600 mr-3" />
                        <h3 className="text-xl font-bold text-red-600">MYTH</h3>
                      </div>
                      <p className="text-lg text-gray-900 mb-4">"The flu vaccine doesn't work anyway"</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl font-bold text-green-600">FACT</h3>
                      </div>
                      <p className="text-gray-600">
                        When well-matched to circulating viruses, flu vaccines reduce the risk of getting flu by 40-60%.
                        Even when not perfectly matched, vaccination can reduce severity and duration of illness.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <XCircle className="w-8 h-8 text-red-600 mr-3" />
                        <h3 className="text-xl font-bold text-red-600">MYTH</h3>
                      </div>
                      <p className="text-lg text-gray-900 mb-4">"I'm healthy, so I don't need a flu shot"</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl font-bold text-green-600">FACT</h3>
                      </div>
                      <p className="text-gray-600">
                        Even healthy people can get seriously ill from flu and spread it to others. Vaccination protects
                        you and helps protect vulnerable community members through herd immunity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <XCircle className="w-8 h-8 text-red-600 mr-3" />
                        <h3 className="text-xl font-bold text-red-600">MYTH</h3>
                      </div>
                      <p className="text-lg text-gray-900 mb-4">"I got the flu shot last year, so I'm protected"</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl font-bold text-green-600">FACT</h3>
                      </div>
                      <p className="text-gray-600">
                        Annual vaccination is needed because flu viruses constantly change, and your immune protection
                        decreases over time. Each year's vaccine is updated for the strains expected to circulate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Internal Links */}
            <div className="mt-12 bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Get the Facts</h3>
              <div className="grid md:grid-cols-1 gap-4 max-w-md mx-auto">
                <Link
                  href="#"
                  className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Top Flu Shot Myths Debunked</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Flu Shot FAQs</h2>
              <p className="text-xl text-gray-600">Get answers to the most common questions about flu vaccination</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  How much does a flu shot cost and is it covered by insurance?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Most insurance plans, including Medicare and Medicaid, cover flu shots at no cost to you. Without
                  insurance, flu shots typically cost $20-40. Many pharmacies and clinics offer low-cost options, and
                  some employers provide free flu shots for employees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Can I get a flu shot if I'm allergic to eggs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  People with egg allergies can receive flu vaccines. If you have a mild egg allergy, you can get any
                  flu vaccine. If you have a severe egg allergy, you should receive the vaccine in a medical setting
                  under supervision of a healthcare provider. Egg-free vaccines are also available.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  When is the best time to get a flu shot?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  The best time is by the end of October, before flu season begins. However, getting vaccinated later
                  can still be beneficial since flu season can last into May. It takes about 2 weeks after vaccination
                  for antibodies to develop and provide protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Can I get a flu shot if I'm feeling sick?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  If you have a mild illness like a cold, you can usually get vaccinated. However, if you have a
                  moderate to severe illness with fever, you should wait until you recover. Consult with your healthcare
                  provider if you're unsure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  How long does flu vaccine protection last?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Flu vaccine protection typically lasts about 6-8 months, which covers most of the flu season. However,
                  protection can decline over time, which is another reason why annual vaccination is recommended.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg shadow-md border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Can I get other vaccines at the same time as my flu shot?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Yes, flu vaccines can be given at the same time as other vaccines, including COVID-19 vaccines. They
                  should be given in different arms when possible. There's no evidence that getting multiple vaccines at
                  once reduces their effectiveness.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-lg shadow-md border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  What should I do if I have an allergic reaction after my flu shot?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Severe allergic reactions are rare but require immediate medical attention. Signs include difficulty
                  breathing, swelling of face or throat, rapid pulse, and dizziness. Call 911 immediately. Mild
                  reactions like soreness at the injection site are normal and usually resolve within a few days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Internal Links */}
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">More Information</h3>
              <div className="grid md:grid-cols-1 gap-4 max-w-md mx-auto">
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Flu Shot Frequently Asked Questions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Get a Flu Shot Section */}
      <section id="where-to-get" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Where to Get a Flu Shot</h2>
              <p className="text-xl text-gray-600">Convenient locations and options for your flu vaccination</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">At Home Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Professional healthcare providers come to your home for convenient vaccination.
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Book Home Visit
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Stethoscope className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Healthcare Clinics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Doctor's offices, urgent care centers, and community health centers.
                  </p>
                  <Button size="sm" variant="outline" className="border-green-600 text-green-600 bg-transparent">
                    Find Clinics
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Pharmacies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Most pharmacies offer flu shots with convenient hours and walk-in availability.
                  </p>
                  <Button size="sm" variant="outline" className="border-orange-600 text-orange-600 bg-transparent">
                    Pharmacy Locator
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Workplace Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Many employers offer on-site flu vaccination clinics for employees.
                  </p>
                  <Button size="sm" variant="outline" className="border-purple-600 text-purple-600 bg-transparent">
                    Corporate Services
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find a Flu Shot Location Near You</h3>
              <p className="text-gray-600 mb-6">
                Use our convenient locator tool to find flu vaccination services in your area
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <MapPin className="w-5 h-5 mr-2" />
                  Flu Shot Locator
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>

            {/* Internal Links */}
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Location Resources</h3>
              <div className="grid md:grid-cols-1 gap-4 max-w-md mx-auto">
                <Link
                  href="#"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-medium">Flu Shot Locations Near You</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Downloads Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Resources & Downloads</h2>
              <p className="text-xl text-gray-600">Educational materials and official guidelines</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-center">CDC Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">Official CDC recommendations for seasonal influenza vaccination</p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-center">Patient Information</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">Comprehensive flu vaccine information sheet for patients</p>
                  <Button variant="outline" className="border-green-600 text-green-600 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <FileText className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-center">Flu Season Calendar</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">Seasonal flu activity timeline and vaccination schedule</p>
                  <Button variant="outline" className="border-orange-600 text-orange-600 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">External Resources</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Centers for Disease Control (CDC)</h4>
                  <p className="text-gray-600 text-sm mb-3">Official flu vaccination recommendations and guidelines</p>
                  <Link
                    href="https://www.cdc.gov/flu/"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit CDC Flu Information →
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">World Health Organization (WHO)</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Global influenza surveillance and vaccine recommendations
                  </p>
                  <Link
                    href="https://www.who.int/influenza/"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit WHO Influenza Page →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="book-now" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Your Annual Flu Shot?</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Protect yourself and your loved ones this flu season. Schedule your convenient home vaccination or find a
              location near you today.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-16 text-lg font-semibold">
                <Calendar className="w-6 h-6 mr-3" />
                Book Home Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 h-16 text-lg font-semibold bg-transparent"
              >
                <MapPin className="w-6 h-6 mr-3" />
                Find Location Near You
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white h-16 text-lg font-semibold">
                <Phone className="w-6 h-6 mr-3" />
                Call for Information
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-200 mr-3" />
                <div className="text-left">
                  <p className="font-semibold">24/7 Helpline</p>
                  <p className="text-blue-200">1-800-DRMOREPEN</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-200 mr-3" />
                <div className="text-left">
                  <p className="font-semibold">Same Day Service</p>
                  <p className="text-blue-200">Available</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-200 mr-3" />
                <div className="text-left">
                  <p className="font-semibold">Licensed Professionals</p>
                  <p className="text-blue-200">CDC Approved Vaccines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/dr-morepen-logo.png"
                alt="Dr. Morepen Home Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm mb-4">
                Providing professional flu vaccination services in the comfort of your home since 2020.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Annual Flu Shots
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Home Vaccination
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Corporate Flu Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Senior Flu Vaccination
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Family Flu Protection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Flu Season Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Vaccine Safety Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Insurance Coverage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Location Finder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Appointment Booking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  1-800-DRMOREPEN
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  flushots@drmorepenhome.com
                </p>
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  24/7 Support Available
                </p>
                <p className="flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Serving Nationwide
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024 Dr. Morepen Home. All rights reserved. | Privacy Policy | Terms of Service | Vaccine Safety
              Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
