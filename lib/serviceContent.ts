export interface ServiceContent {
  name: string;
  slug: string;
  description: string;
  paragraphs: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "pavers-chandler": {
    name: "Pavers",
    slug: "pavers-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in paver installation in Chandler, Arizona.",
    paragraphs: [
      "Professional paver installation can transform your outdoor space, creating beautiful and durable surfaces for driveways, patios, walkways, and pool decks. Our matched contractors use high-quality materials and expert craftsmanship to ensure your pavers stand the test of time in Chandler's climate.",
      "Whether you're looking for traditional brick pavers, concrete pavers, or natural stone, we'll connect you with experienced professionals who understand the unique considerations for paver installation in Arizona. Proper base preparation, drainage, and joint sand are crucial for long-lasting results.",
    ],
    benefits: [
      "Durable and long-lasting surface",
      "Low maintenance compared to other materials",
      "Wide variety of styles and colors available",
      "Increases property value",
      "Excellent drainage capabilities",
      "Easy to repair individual sections if needed",
    ],
    faqs: [
      {
        question: "How much does paver installation cost in Chandler?",
        answer:
          "Paver installation costs vary based on material type, project size, and complexity. Our matched contractors will provide detailed quotes after assessing your specific project needs.",
      },
      {
        question: "How long does a paver installation take?",
        answer:
          "Most paver projects are completed within 3-7 days, depending on the size and complexity. Weather conditions may affect timelines.",
      },
      {
        question: "What types of pavers are best for Chandler's climate?",
        answer:
          "Concrete pavers and natural stone work well in Chandler's hot, dry climate. Our contractors can recommend the best materials for your specific project.",
      },
    ],
  },
  "artificial-turf-chandler": {
    name: "Artificial Turf",
    slug: "artificial-turf-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in artificial turf installation in Chandler, Arizona.",
    paragraphs: [
      "Artificial turf provides a beautiful, low-maintenance solution for lawns in Chandler, where water conservation is essential. Our matched contractors install high-quality synthetic grass that looks and feels natural while dramatically reducing water usage and maintenance requirements.",
      "Modern artificial turf is UV-resistant, durable, and designed to withstand Arizona's intense sun. It stays green year-round without mowing, fertilizing, or watering, making it an ideal choice for busy homeowners and eco-conscious residents.",
    ],
    benefits: [
      "Zero water usage after installation",
      "No mowing, fertilizing, or weeding required",
      "Stays green year-round",
      "Pet-friendly options available",
      "Increases property value",
      "Safe for children and pets",
    ],
    faqs: [
      {
        question: "Is artificial turf expensive?",
        answer:
          "While the initial investment is higher than natural grass, artificial turf pays for itself over time through water savings and eliminated maintenance costs. Many homeowners see ROI within 5-7 years.",
      },
      {
        question: "How long does artificial turf last?",
        answer:
          "High-quality artificial turf typically lasts 15-20 years with proper care. It's designed to withstand heavy foot traffic and extreme weather conditions.",
      },
      {
        question: "Does artificial turf get hot in the sun?",
        answer:
          "Modern artificial turf products include cooling technologies. Many contractors also offer installation techniques that help keep the surface temperature comfortable.",
      },
    ],
  },
  "irrigation-chandler": {
    name: "Irrigation System Installations",
    slug: "irrigation-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in irrigation system installation in Chandler, Arizona.",
    paragraphs: [
      "Efficient irrigation is essential for maintaining a healthy landscape in Chandler's arid climate. Our matched contractors design and install smart irrigation systems that deliver water exactly where and when your plants need it, minimizing waste and maximizing efficiency.",
      "From drip irrigation for trees and shrubs to sprinkler systems for lawns, our contractors create customized solutions based on your landscape's unique needs. Modern systems include smart controllers that adjust watering based on weather conditions, ensuring optimal plant health while conserving water.",
    ],
    benefits: [
      "Reduces water usage and costs",
      "Ensures consistent, proper watering",
      "Saves time on manual watering",
      "Promotes healthier plant growth",
      "Smart controllers adjust automatically",
      "Increases property value",
    ],
    faqs: [
      {
        question: "How much water can an efficient irrigation system save?",
        answer:
          "Well-designed irrigation systems can reduce water usage by 30-50% compared to manual watering or outdated systems. Smart controllers provide additional savings.",
      },
      {
        question: "What types of irrigation systems are available?",
        answer:
          "Our contractors install drip systems, sprinkler systems, and hybrid solutions. The best option depends on your landscape type, water pressure, and specific needs.",
      },
      {
        question: "Do I need a permit for irrigation installation?",
        answer:
          "Permit requirements vary. Our matched contractors are familiar with local Chandler regulations and will handle all necessary permits and inspections.",
      },
    ],
  },
  "lawn-mowing-chandler": {
    name: "Lawn Mowing",
    slug: "lawn-mowing-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in lawn mowing services in Chandler, Arizona.",
    paragraphs: [
      "Regular lawn mowing is essential for maintaining a healthy, attractive yard. Our matched contractors provide consistent, professional mowing services that keep your grass at the optimal height for growth and appearance throughout the seasons.",
      "Professional lawn care contractors understand the best mowing practices for different grass types common in Chandler, including Bermuda, St. Augustine, and Zoysia. Proper mowing frequency and technique promote healthy root systems and reduce thatch buildup.",
    ],
    benefits: [
      "Maintains consistent, professional appearance",
      "Promotes healthy grass growth",
      "Saves time and effort",
      "Proper height prevents weed growth",
      "Regular schedule ensures reliability",
      "Professional equipment ensures quality cuts",
    ],
    faqs: [
      {
        question: "How often should my lawn be mowed in Chandler?",
        answer:
          "During growing season, most lawns need mowing every 7-14 days. Our contractors adjust frequency based on grass type, season, and growth rate.",
      },
      {
        question: "What is the best height to mow my grass?",
        answer:
          "Optimal mowing height varies by grass type. Most Arizona grasses benefit from being kept at 2-3 inches. Your contractor will recommend the best height for your specific lawn.",
      },
      {
        question: "Do you provide one-time or recurring mowing services?",
        answer:
          "Our matched contractors offer both one-time services and regular maintenance schedules. Many homeowners prefer recurring services for consistency and convenience.",
      },
    ],
  },
  "tree-trimming-chandler": {
    name: "Tree Trimming",
    slug: "tree-trimming-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in tree trimming services in Chandler, Arizona.",
    paragraphs: [
      "Proper tree trimming keeps your trees healthy, safe, and beautiful while protecting your property. Our matched contractors have the expertise and equipment to trim trees safely and effectively, promoting healthy growth and removing potential hazards.",
      "Professional tree trimming involves understanding tree biology, proper pruning techniques, and timing. Our contractors know when and how to trim different tree species common in Chandler to maximize their health and appearance.",
    ],
    benefits: [
      "Promotes healthy tree growth",
      "Removes dead or dangerous branches",
      "Improves tree appearance and structure",
      "Prevents property damage from falling limbs",
      "Enhances sunlight penetration",
      "Extends tree lifespan",
    ],
    faqs: [
      {
        question: "When is the best time to trim trees in Chandler?",
        answer:
          "The best trimming time depends on the tree species. Many deciduous trees are best trimmed in winter, while others benefit from spring or summer trimming. Our contractors will advise based on your specific trees.",
      },
      {
        question: "How much does tree trimming cost?",
        answer:
          "Tree trimming costs vary based on tree size, number of trees, accessibility, and work complexity. Our matched contractors provide detailed estimates after assessing your trees.",
      },
      {
        question: "Do you trim palm trees?",
        answer:
          "Yes, many of our matched contractors specialize in palm tree trimming, which requires specific techniques and timing to maintain palm health.",
      },
    ],
  },
  "yard-clean-up-chandler": {
    name: "Yard Clean Up",
    slug: "yard-clean-up-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in yard clean-up services in Chandler, Arizona.",
    paragraphs: [
      "Yard clean-up services help restore your outdoor space to a pristine condition, removing debris, dead plants, weeds, and accumulated clutter. Our matched contractors provide thorough clean-up services that give your yard a fresh start.",
      "Whether you need a one-time deep clean after a storm, seasonal cleanup, or regular maintenance, our contractors have the tools and expertise to efficiently clear and prepare your landscape for new growth or improvements.",
    ],
    benefits: [
      "Removes unsightly debris and clutter",
      "Prevents pest and disease issues",
      "Prepares yard for new plantings",
      "Improves overall curb appeal",
      "Reduces fire hazards",
      "Provides fresh start for landscaping",
    ],
    faqs: [
      {
        question: "What does yard clean-up include?",
        answer:
          "Clean-up services typically include removal of dead plants, leaves, branches, weeds, debris, and general yard waste. Specific services vary by contractor and project scope.",
      },
      {
        question: "How much does yard clean-up cost?",
        answer:
          "Costs depend on yard size, amount of debris, and cleanup complexity. Our matched contractors provide estimates based on your specific needs.",
      },
      {
        question: "Do you dispose of yard waste?",
        answer:
          "Yes, our matched contractors handle all waste disposal, ensuring proper removal and recycling of yard materials according to local regulations.",
      },
    ],
  },
  "weed-control-chandler": {
    name: "Weed Control",
    slug: "weed-control-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in weed control services in Chandler, Arizona.",
    paragraphs: [
      "Effective weed control keeps your landscape looking its best while protecting your desired plants. Our matched contractors use proven methods to eliminate existing weeds and prevent future growth through pre-emergent and post-emergent treatments.",
      "Professional weed control involves identifying weed types, understanding their growth cycles, and applying the right treatments at the optimal times. Our contractors develop customized programs that target your specific weed problems while protecting your landscape.",
    ],
    benefits: [
      "Eliminates unsightly weeds",
      "Prevents weed competition with desired plants",
      "Reduces manual weeding time",
      "Long-lasting results with proper treatment",
      "Customized approach for your landscape",
      "Improves overall yard appearance",
    ],
    faqs: [
      {
        question: "How long does weed control treatment last?",
        answer:
          "Treatment duration varies by method and weed type. Pre-emergent treatments can last 3-6 months, while post-emergent treatments may require follow-up applications for complete control.",
      },
      {
        question: "Is weed control safe for pets and children?",
        answer:
          "Our matched contractors use products approved for residential use. They follow all safety protocols and can discuss pet-safe options if needed.",
      },
      {
        question: "When is the best time for weed control?",
        answer:
          "The best timing depends on weed types and treatment methods. Many weeds are best treated in spring before they establish, while others require ongoing treatment throughout the growing season.",
      },
    ],
  },
  "shrub-trimming-chandler": {
    name: "Shrub Trimming",
    slug: "shrub-trimming-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in shrub trimming services in Chandler, Arizona.",
    paragraphs: [
      "Professional shrub trimming maintains the shape, size, and health of your landscape shrubs while enhancing your property's curb appeal. Our matched contractors understand proper trimming techniques that promote healthy growth and prevent damage.",
      "Regular trimming keeps shrubs looking neat and prevents overgrowth that can block walkways, windows, or architectural features. Our contractors know the best trimming times and techniques for different shrub species common in Chandler landscapes.",
    ],
    benefits: [
      "Maintains neat, professional appearance",
      "Promotes healthy shrub growth",
      "Prevents overgrowth and blocking",
      "Enhances curb appeal",
      "Removes dead or diseased branches",
      "Shapes shrubs for desired look",
    ],
    faqs: [
      {
        question: "How often should shrubs be trimmed?",
        answer:
          "Most shrubs benefit from trimming 2-3 times per year, though frequency depends on growth rate, species, and desired appearance. Our contractors will recommend a schedule based on your specific shrubs.",
      },
      {
        question: "Can trimming harm my shrubs?",
        answer:
          "When done correctly by professionals, trimming benefits shrubs. Improper techniques or timing can cause damage, which is why professional service is recommended.",
      },
      {
        question: "What types of shrubs do you trim?",
        answer:
          "Our matched contractors trim all common landscape shrubs, including boxwoods, oleanders, lantana, bougainvillea, and many others found in Chandler landscapes.",
      },
    ],
  },
  "landscape-maintenance-chandler": {
    name: "Landscape Maintenance",
    slug: "landscape-maintenance-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in landscape maintenance services in Chandler, Arizona.",
    paragraphs: [
      "Comprehensive landscape maintenance keeps your yard looking its best year-round with minimal effort on your part. Our matched contractors provide ongoing care including mowing, trimming, fertilizing, pest control, and seasonal tasks.",
      "Regular maintenance prevents small issues from becoming major problems, saves money on costly repairs, and ensures your landscape investment continues to enhance your property value and enjoyment.",
    ],
    benefits: [
      "Year-round beautiful landscape",
      "Prevents costly problems",
      "Saves time and effort",
      "Maintains property value",
      "Consistent professional care",
      "Customized maintenance plan",
    ],
    faqs: [
      {
        question: "What does landscape maintenance include?",
        answer:
          "Maintenance programs typically include mowing, trimming, fertilizing, pest control, irrigation checks, seasonal cleanup, and general yard care. Specific services are customized to your needs.",
      },
      {
        question: "How much does landscape maintenance cost?",
        answer:
          "Costs vary based on property size, services included, and visit frequency. Our matched contractors provide customized quotes based on your specific maintenance needs.",
      },
      {
        question: "Can I customize my maintenance plan?",
        answer:
          "Yes, our matched contractors create customized maintenance plans tailored to your landscape, budget, and preferences. Services can be adjusted as needed.",
      },
    ],
  },
  "lawn-care-chandler": {
    name: "Lawn Care",
    slug: "lawn-care-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in lawn care services in Chandler, Arizona.",
    paragraphs: [
      "Complete lawn care services go beyond mowing to include fertilization, aeration, overseeding, pest control, and disease management. Our matched contractors develop comprehensive programs that keep your lawn healthy, green, and beautiful throughout the seasons.",
      "Professional lawn care addresses all aspects of turf health, from soil nutrition to weed and pest control. Our contractors understand the specific needs of Arizona lawns and provide treatments tailored to local conditions.",
    ],
    benefits: [
      "Healthier, greener lawn",
      "Reduced weeds and pests",
      "Improved soil health",
      "Better water efficiency",
      "Year-round care program",
      "Professional expertise",
    ],
    faqs: [
      {
        question: "What is included in a lawn care program?",
        answer:
          "Lawn care programs typically include fertilization, weed control, pest control, aeration, overseeding, and seasonal treatments. Programs are customized based on your lawn's specific needs.",
      },
      {
        question: "How often are lawn care treatments applied?",
        answer:
          "Treatment frequency varies by service and season. Most programs include monthly applications during growing season, with adjustments for winter dormancy and specific lawn needs.",
      },
      {
        question: "Will lawn care treatments harm my pets?",
        answer:
          "Our matched contractors use products that are safe for pets when applied correctly. They follow all label instructions and can discuss pet-safe options if you have concerns.",
      },
    ],
  },
  "landscape-design-chandler": {
    name: "Landscape Design",
    slug: "landscape-design-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in landscape design services in Chandler, Arizona.",
    paragraphs: [
      "Professional landscape design transforms outdoor spaces into beautiful, functional extensions of your home. Our matched designers create custom plans that reflect your style, accommodate your lifestyle, and thrive in Chandler's unique climate.",
      "From initial concept to detailed plans, our designers consider factors like water efficiency, maintenance requirements, seasonal interest, and your budget to create landscapes that enhance your property value and enjoyment.",
    ],
    benefits: [
      "Custom design for your space",
      "Water-efficient plant selections",
      "Increased property value",
      "Professional design expertise",
      "Cohesive, cohesive landscape plan",
      "Consideration of maintenance needs",
    ],
    faqs: [
      {
        question: "What is included in a landscape design?",
        answer:
          "Design services typically include site analysis, concept development, detailed plans, plant selections, hardscape recommendations, irrigation planning, and installation guidance.",
      },
      {
        question: "How much does landscape design cost?",
        answer:
          "Design costs vary based on project scope, property size, and design complexity. Our matched designers provide estimates based on your specific project needs.",
      },
      {
        question: "Do you provide water-efficient designs?",
        answer:
          "Yes, our matched designers specialize in water-efficient landscapes, incorporating drought-tolerant plants, efficient irrigation, and xeriscaping principles suitable for Arizona's climate.",
      },
    ],
  },
  "hardscaping-chandler": {
    name: "Hardscaping",
    slug: "hardscaping-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in hardscaping services in Chandler, Arizona.",
    paragraphs: [
      "Hardscaping adds structure, functionality, and beauty to outdoor spaces through non-living elements like patios, retaining walls, fire features, and outdoor kitchens. Our matched contractors create durable, attractive hardscape features that enhance your landscape.",
      "Professional hardscaping requires expertise in materials, drainage, and construction techniques to ensure longevity in Arizona's climate. Our contractors use quality materials and proven methods to create features that stand the test of time.",
    ],
    benefits: [
      "Adds functional outdoor living spaces",
      "Increases property value",
      "Low maintenance compared to plants",
      "Extends usable outdoor space",
      "Improves drainage and erosion control",
      "Year-round beauty and functionality",
    ],
    faqs: [
      {
        question: "What hardscaping materials work best in Chandler?",
        answer:
          "Materials like concrete, natural stone, pavers, and certain types of wood are well-suited for Chandler's climate. Our contractors can recommend the best materials for your specific project and budget.",
      },
      {
        question: "Do I need a permit for hardscaping?",
        answer:
          "Permit requirements depend on the project type and local regulations. Our matched contractors are familiar with Chandler's permit requirements and handle all necessary permits.",
      },
      {
        question: "How long do hardscape projects take?",
        answer:
          "Project timelines vary significantly based on scope and complexity. Simple patios may take a few days, while complex projects with multiple features can take several weeks.",
      },
    ],
  },
  "landscape-lighting-chandler": {
    name: "Landscape Lighting",
    slug: "landscape-lighting-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in landscape lighting installation in Chandler, Arizona.",
    paragraphs: [
      "Professional landscape lighting extends the enjoyment of your outdoor space into the evening while enhancing safety and security. Our matched contractors design and install lighting systems that highlight your landscape's best features and create inviting ambiance.",
      "Modern LED lighting systems are energy-efficient, long-lasting, and can be controlled via smart systems. Our contractors create custom lighting designs that balance functionality, aesthetics, and efficiency.",
    ],
    benefits: [
      "Extends outdoor living into evening",
      "Enhances safety and security",
      "Highlights landscape features",
      "Energy-efficient LED options",
      "Increases property value",
      "Smart control capabilities",
    ],
    faqs: [
      {
        question: "What types of landscape lighting are available?",
        answer:
          "Common options include path lighting, accent lighting, uplighting, downlighting, and security lighting. Our contractors design systems incorporating multiple types based on your needs.",
      },
      {
        question: "How much does landscape lighting cost?",
        answer:
          "Costs vary based on the number of fixtures, lighting types, wiring complexity, and control systems. Our matched contractors provide detailed estimates after assessing your property.",
      },
      {
        question: "Are LED lights worth the investment?",
        answer:
          "Yes, LED landscape lighting uses significantly less energy than traditional lighting, lasts much longer, and requires minimal maintenance, making them cost-effective over time.",
      },
    ],
  },
  "landscape-rock-chandler": {
    name: "Landscape Rock",
    slug: "landscape-rock-chandler",
    description:
      "Chandler Yard Pros connects homeowners with contractors who specialize in landscape rock installation in Chandler, Arizona.",
    paragraphs: [
      "Landscape rock provides attractive, low-maintenance ground cover that reduces water usage, prevents weed growth, and creates visual interest. Our matched contractors install various rock types and sizes to create beautiful, functional landscapes.",
      "From decorative boulders to river rock and decomposed granite, landscape rock serves both aesthetic and practical purposes. Proper installation includes weed barriers and appropriate rock selection for drainage and appearance.",
    ],
    benefits: [
      "Eliminates water usage for ground cover",
      "Prevents weed growth",
      "Low maintenance",
      "Improves drainage",
      "Variety of colors and sizes",
      "Durable and long-lasting",
    ],
    faqs: [
      {
        question: "What types of landscape rock are available?",
        answer:
          "Common options include river rock, decomposed granite, Mexican beach pebbles, boulders, and various colored decorative rocks. Our contractors help select the best type for your needs.",
      },
      {
        question: "How much rock do I need?",
        answer:
          "Rock quantity depends on coverage area and desired depth. Our matched contractors calculate precise amounts needed and can provide delivery and installation services.",
      },
      {
        question: "Do you install weed barriers under rock?",
        answer:
          "Yes, professional installation includes proper weed barrier fabric to prevent weed growth and maintain the rock's appearance over time.",
      },
    ],
  },
};
