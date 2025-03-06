import {
  Rocket,
  Star,
  Zap,
  ChevronRight,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col w-screen bg-[#0a0b2e] text-white min-h-screen">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 sticky top-0 z-50 glass">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold hover-scale">PixelTrue</div>
          <nav className="hidden md:flex space-x-8">
            {["Home", "Features", "Portfolio", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition hover-scale"
                >
                  {item}
                </a>
              )
            )}
          </nav>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded hover:opacity-90 transition gradient-anim">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get a head start on{" "}
              <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                design that
              </span>{" "}
              matters
            </h1>
            <p className="text-gray-300 text-lg">
              Create stunning websites and applications with our cosmic design
              system
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition px-8 py-3 rounded text-lg gradient-anim hover-scale">
                Get Started Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 floating">
            <img
              src="https://cdn.prod.website-files.com/5dd3495558fd7f3d1fcb52bc/600ac50d07dd9c5f63c3b7d2_2.svg"
              alt="Space illustration"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Brand logos */}
        <div className="flex justify-center space-x-8 mt-16">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-gray-700 rounded-full hover-scale transition-all"
              ></div>
            ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Why people love our product</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide the best experience for designers and developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Rocket className="w-10 h-10 text-purple-400" />,
              title: "Fast Implementation",
              description:
                "Get your projects up and running quickly with our easy-to-use components",
            },
            {
              icon: <Star className="w-10 h-10 text-purple-400" />,
              title: "Premium Quality",
              description:
                "All our designs are crafted with attention to detail and modern aesthetics",
            },
            {
              icon: <Zap className="w-10 h-10 text-purple-400" />,
              title: "Regular Updates",
              description:
                "We constantly improve our products based on user feedback and trends",
            },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className="bg-[#141654] p-6 rounded-xl text-center hover-scale transition-all glass"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="flex justify-center mb-4 floating">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-4">How our product works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Simple steps to get started with our platform
          </p>
        </div>

        {[
          {
            num: "01",
            img: "https://cdn.prod.website-files.com/5dd3495558fd7f3d1fcb52bc/60520913668a04140cdbd2e7_5f8824c807ae067bd51de921_Wade%201%20(1).png",
            title: "Design with confidence",
            desc: "Our intuitive design system helps you create beautiful interfaces without the hassle. With our pre-built components, you can focus on what matters most - your product.",
            reverse: false,
          },
          {
            num: "02",
            img: "https://cdn.prod.website-files.com/5dd3495558fd7f3d1fcb52bc/6052091433a0fd19fedabc17_5f8d845b34c9a03634cb6016_bigchange%203%201%20(1).png",
            title: "Collaborate seamlessly",
            desc: "Work together with your team in real-time. Share designs, get feedback, and iterate quickly to deliver the best possible experience.",
            reverse: true,
          },
          {
            num: "03",
            img: "https://cdn.prod.website-files.com/5dd3495558fd7f3d1fcb52bc/60520914b7e7250d461eca07_5f882487f7aee3ea81b72143_complete%20and%20download%201%20(1).png",
            title: "Launch with confidence",
            desc: "Deploy your designs with ease. Our platform ensures your projects look great on all devices and perform optimally for all users.",
            reverse: false,
          },
        ].map((feature, i) => (
          <div
            key={feature.title}
            className={`flex flex-col ${
              feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center mb-24 fade-in-up`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 hover-scale transition-all">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center font-bold">
                  {feature.num}
                </div>
                <img
                  src={feature.img}
                  alt="Feature illustration"
                  width={450}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className={`md:w-1/2 ${feature.reverse ? "md:pr-12" : "md:pl-12"}`}>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.desc}</p>
              <a href="#" className="text-purple-400 flex items-center group">
                Learn more{" "}
                <ChevronRight className="ml-2 group-hover:ml-3 transition-all" />
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Our latest work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of our recent projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg group hover-scale transition-all glass"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={`https://cdn.prod.website-files.com/5dd3495558fd7f3d1fcb52bc/605de07f8a59ac514b400366_603de8bdafcf8080e829f357_Artboard-%2525E2%252580%252593-18-(1)%20(1).png`}
                    alt={`Portfolio item ${i + 1}`}
                    width={400}
                    height={250}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 fade-in-up">
                      <h3 className="text-xl font-bold">
                        Project Title {i + 1}
                      </h3>
                      <p className="text-gray-200">UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition px-6 py-3 rounded inline-flex items-center gradient-anim hover-scale">
            View All Projects <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-4">What our clients say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from the people who have used our platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#141654] p-8 rounded-xl relative glass hover-scale transition-all">
          <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500 floating"></div>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500 floating" style={{ animationDelay: "0.5s" }}></div>

          <div className="flex flex-col md:flex-row items-center fade-in-up">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto hover-scale transition-all">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Testimonial avatar"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <p className="text-lg italic mb-4">
                "Working with PixelTrue has been an amazing experience. Their
                design system helped us launch our product in half the time we
                expected. The quality and attention to detail is unmatched."
              </p>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-400">Product Manager, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Our pricing</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Star className="w-10 h-10 text-purple-400" />,
              title: "Basic",
              price: "$29",
              features: [
                "5 Projects",
                "Basic Support",
                "10GB Storage",
                "Email Notifications",
              ],
            },
            {
              icon: <Rocket className="w-10 h-10 text-purple-400" />,
              title: "Pro",
              price: "$79",
              features: [
                "15 Projects",
                "Priority Support",
                "50GB Storage",
                "Advanced Analytics",
                "Team Collaboration",
              ],
            },
            {
              icon: <Zap className="w-10 h-10 text-purple-400" />,
              title: "Enterprise",
              price: "$149",
              features: [
                "Unlimited Projects",
                "24/7 Support",
                "500GB Storage",
                "Custom Reporting",
                "API Access",
                "White Labeling",
              ],
            },
          ].map((plan, i) => (
            <div
              key={plan.title}
              className={`bg-[#141654] p-8 rounded-xl hover-scale transition-all glass ${
                i === 1 ? "border-2 border-purple-500" : ""
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="flex justify-center mb-4 floating">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-center mb-2">{plan.title}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center fade-in-up">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full px-4 py-2 rounded ${
                  i === 1
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 gradient-anim"
                    : "bg-[#0a0b2e] border border-purple-500"
                } hover:opacity-90 transition hover-scale`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8 md:p-12 gradient-anim hover-scale transition-all">
          <div className="flex flex-col md:flex-row items-center justify-between fade-in-up">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-gray-200">
                Join thousands of designers and developers who are already using
                our platform
              </p>
            </div>
            <div>
              <button className="bg-white text-purple-900 hover:bg-gray-100 transition px-6 py-3 rounded hover-scale">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080929] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="fade-in-up">
              <h3 className="text-xl font-bold mb-4">PixelTrue</h3>
              <p className="text-gray-400 mb-4">
                Creating beautiful design experiences for modern businesses.
              </p>
              <div className="flex space-x-4">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full bg-[#141654] flex items-center justify-center hover-scale transition-all"
                    >
                      <span className="sr-only">Social link {i + 1}</span>
                    </a>
                  ))}
              </div>
            </div>

            {["Company", "Resources", "Legal"].map((category, i) => (
              <div key={category} style={{ animationDelay: `${i * 0.2}s` }} className="fade-in-up">
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {Array(4)
                    .fill(null)
                    .map((_, j) => (
                      <li key={j}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition hover-scale block"
                        >
                          {category} Link {j + 1}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center fade-in-up">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} PixelTrue. All rights reserved. k
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookies Policy"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-white transition hover-scale"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;