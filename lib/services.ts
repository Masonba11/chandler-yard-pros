export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
}

export const services: Service[] = [
  {
    name: "Pavers",
    slug: "pavers-chandler",
    shortDescription:
      "Professional paver installation for driveways, patios, and walkways in Chandler.",
  },
  {
    name: "Artificial Turf",
    slug: "artificial-turf-chandler",
    shortDescription:
      "High-quality artificial grass installation for low-maintenance, beautiful lawns.",
  },
  {
    name: "Irrigation System Installations",
    slug: "irrigation-chandler",
    shortDescription:
      "Efficient irrigation systems to keep your landscape healthy and green.",
  },
  {
    name: "Tree Trimming",
    slug: "tree-trimming-chandler",
    shortDescription:
      "Expert tree trimming to keep your trees healthy and beautiful.",
  },
  {
    name: "Clean Up",
    slug: "yard-clean-up-chandler",
    shortDescription: "Complete yard clean-up services for a fresh start.",
  },
  {
    name: "Weed Control",
    slug: "weed-control-chandler",
    shortDescription:
      "Effective weed control to maintain a weed-free landscape.",
  },
  {
    name: "Maintenance",
    slug: "landscape-maintenance-chandler",
    shortDescription:
      "Comprehensive landscape maintenance services for year-round beauty.",
  },
  {
    name: "Lawn Care",
    slug: "lawn-care-chandler",
    shortDescription:
      "Complete lawn care services including fertilization and treatment.",
  },
  {
    name: "Landscaping Design",
    slug: "landscape-design-chandler",
    shortDescription:
      "Custom landscape design to create your dream outdoor space.",
  },
  {
    name: "Hardscaping",
    slug: "hardscaping-chandler",
    shortDescription:
      "Expert hardscaping services including patios, retaining walls, and more.",
  },
  {
    name: "Landscape Lighting",
    slug: "landscape-lighting-chandler",
    shortDescription:
      "Beautiful landscape lighting to enhance your outdoor space at night.",
  },
  {
    name: "Landscape Rock",
    slug: "landscape-rock-chandler",
    shortDescription:
      "Professional landscape rock installation for drainage and aesthetics.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
