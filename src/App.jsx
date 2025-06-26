import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Cloud, 
  Brain, 
  Shield, 
  Network, 
  Code, 
  Server, 
  Globe, 
  Mail, 
  Phone, 
  Menu, 
  X,
  ChevronRight,
  Star,
  Users,
  Award,
  Zap,
  CheckCircle
} from 'lucide-react'
import sandiyasLogo from './assets/sandiyas-logo.jpeg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 'computer-systems',
      title: 'Computer Systems & Software Designing',
      icon: Code,
      description: 'Crafting bespoke systems and innovative software solutions tailored to your business needs.',
      features: ['Custom Software Development', 'System Integration', 'Application Modernization', 'UI/UX Design'],
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'network-services',
      title: 'Information Technology Network Services',
      icon: Network,
      description: 'Designing, implementing, and managing robust network infrastructures for seamless connectivity.',
      features: ['Network Design & Implementation', 'Network Security', 'Wireless Networking', 'Network Monitoring & Management'],
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 'infrastructure',
      title: 'Computer Infrastructure Establishment, Installation & Maintenance',
      icon: Server,
      description: 'Building, setting up, and maintaining robust computer infrastructures for optimal performance.',
      features: ['Hardware Procurement & Setup', 'Operating System & Software Installation', 'Regular Maintenance & Updates', 'Troubleshooting & Repair'],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'web-design',
      title: 'Network Websites Designing',
      icon: Globe,
      description: 'Creating intuitive, responsive, and high-performing websites for a strong online presence.',
      features: ['Custom Website Development', 'Ecommerce Solutions', 'Responsive Design & Mobile Optimization', 'Website Maintenance & Support'],
      color: 'from-red-400 to-orange-500'
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing Services',
      icon: Cloud,
      description: 'Leveraging scalable cloud solutions for enhanced flexibility, efficiency, and innovation.',
      features: ['Cloud Migration & Integration', 'Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)', 'Cloud Security & Compliance'],
      color: 'from-green-400 to-cyan-500'
    },
    {
      id: 'ai-services',
      title: 'Artificial Intelligence Services',
      icon: Brain,
      description: 'Harnessing the power of AI to automate processes, gain insights, and drive innovation.',
      features: ['AI Strategy & Consulting', 'Machine Learning Development', 'Natural Language Processing', 'Predictive Analytics'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      icon: Shield,
      description: 'Fortifying your digital defenses against evolving threats with proactive and comprehensive security solutions.',
      features: ['Threat Detection & Prevention', 'Vulnerability Management', 'Incident Response & Recovery', 'Security Audits & Compliance'],
      color: 'from-green-600 to-emerald-600'
    }
  ]

  const trustFactors = [
    { icon: Users, title: 'Expert Team & Certifications', description: 'Industry-certified professionals with years of hands-on experience' },
    { icon: Zap, title: 'Cutting-Edge Technology Stack', description: 'Latest tools and platforms without the capital investment' },
    { icon: Award, title: 'Flexible & Scalable Solutions', description: 'Services that grow and adapt with your organization' },
    { icon: Star, title: '24/7 Rapid Response & Support', description: 'Mean time to detect under 15 minutes, response within 1 hour' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const WatermelonMascot = () => (
    <div className="relative">
      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full relative overflow-hidden animate-bounce">
        <div className="absolute top-1 left-1 w-14 h-14 bg-gradient-to-br from-red-400 to-red-500 rounded-full">
          <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-4 left-3 w-8 h-2 bg-black rounded-full"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-green-500 rounded-t-full"></div>
        </div>
        <div className="absolute top-6 left-3 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute top-8 left-5 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute top-7 right-4 w-1 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-orange-500 p-0.5">
              <img src={sandiyasLogo} alt="SANDIYAS Logo" className="w-full h-full rounded-full object-cover mix-blend-multiply" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
              SANDIYAS
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors hover:text-green-400 ${
                  activeSection === item.toLowerCase() ? 'text-green-400' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-green-500/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-green-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-red-900/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-orange-500 p-1 animate-pulse">
              <img src={sandiyasLogo} alt="SANDIYAS Logo" className="w-full h-full rounded-full object-cover mix-blend-multiply" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-fade-in">
            SANDIYAS
          </h1>
          
          <h2 className="text-2xl md:text-4xl mb-4 text-orange-400 font-semibold">
            CLOUD COMPUTING SERVICES
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-green-300 animate-fade-in-delay">
            Innovating Your Digital Future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
            >
              Get Started <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Factors Integrated into Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trustFactors.map((factor, index) => {
              const IconComponent = factor.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-orange-500/20 flex items-center justify-center group-hover:from-green-500/40 group-hover:to-orange-500/40 transition-all duration-300">
                    <IconComponent size={32} className="text-green-400 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{factor.title}</h3>
                  <p className="text-sm text-gray-300">{factor.description}</p>
                </div>
              )
            })}
          </div>

          <div className="absolute top-20 right-20 hidden lg:block">
            <WatermelonMascot />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-red-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                SANDIYAS CLOUD COMPUTING SERVICES is your dedicated partner in navigating the complexities of the digital age. 
                We empower businesses with innovative IT solutions, cutting-edge AI, and robust cybersecurity. Our mission is to 
                transform challenges into opportunities, ensuring your digital infrastructure is not just secure, but also a catalyst for growth.
              </p>
              
              {/* Success Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">&lt;15min</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to elevate your business to new heights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card 
                  key={service.id}
                  className="bg-gray-900/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  onClick={() => setSelectedService(service)}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 2 && (
                        <Badge variant="outline" className="text-xs text-green-400 border-green-400">
                          +{service.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-green-500/30">
            <div className="flex justify-between items-start mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedService.color} flex items-center justify-center`}>
                <selectedService.icon size={32} className="text-white" />
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{selectedService.title}</h3>
            <p className="text-gray-300 mb-6">{selectedService.description}</p>
            
            <h4 className="text-lg font-semibold text-green-400 mb-4">Key Features:</h4>
            <ul className="space-y-2">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex gap-4">
              <Button 
                onClick={() => {
                  setSelectedService(null)
                  scrollToSection('contact')
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Get Quote
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setSelectedService(null)}
                className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-lg text-gray-300">
              Ready to transform your digital future? Get in touch with us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2">Name</label>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-gray-800 border-gray-600 text-white focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-gray-800 border-gray-600 text-white focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2">Phone</label>
                    <Input 
                      type="tel" 
                      placeholder="Your Phone Number" 
                      className="bg-gray-800 border-gray-600 text-white focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={4}
                      className="bg-gray-800 border-gray-600 text-white focus:border-orange-500"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white font-semibold py-3">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold">Email</p>
                      <p className="text-white">info@sandiyas.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-orange-400 font-semibold">Phone</p>
                      <p className="text-white">+1 (555) 123-TECH</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <WatermelonMascot />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-orange-500 p-0.5">
              <img src={sandiyasLogo} alt="SANDIYAS Logo" className="w-full h-full rounded-full object-cover mix-blend-multiply" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
              SANDIYAS CLOUD COMPUTING SERVICES
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 SANDIYAS Cloud Computing Services. All rights reserved.
          </p>
          <p className="text-green-400 mt-2">
            Innovating Your Digital Future
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

