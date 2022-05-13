import { Link, ListerLink } from "../../models/link";

const offsetLinks: Link[] = [
  {
    title: "Dashboard",
    link: "/offsetters",
    active: true,
  },
  {
    title: "Carbon Emissions",
    link: "/offsetters/carbon_emission",
    active: false,
  },
  {
    title: "Marketplace",
    link: "marketplace",
    active: false,
  },
  {
    title: "Account",
    link: "account",
    active: false,
  },
];

const listerLinks: ListerLink[] = [
  {
    title: "Ejiro & Sons",
    link: "/listers",
    type: "link",
    active: true,
    icon: "AlignCenterOutlined",
  },
  {
    title: "Pre-Assessment",
    link: "/listers/pre-assessment",
    type: "link",
    active: true,
    icon: "PercentageOutlined",
  },
  {
    title: "Project",
    link: "project",
    type: "dropdown",
    active: false,
    children: [
      {
        title: "Eko Farma",
        link: "jnfo4553",
        type: "link",
        active: false,
      },
      {
        title: "I meet Farma",
        link: "jnfo4553",
        type: "link",
        active: false,
      },
      {
        title: "Wellness Plus",
        link: "jnfo4553",
        type: "link",
        active: false,
      },
      {
        title: "Add Project",
        link: "jnfo4553",
        type: "popup",
        active: false,
      },
    ],
  },
  {
    title: "Archived",
    link: "/listers/archived",
    type: "link",
    active: true,
    icon: "SaveOutlined",
  },
];

export { offsetLinks, listerLinks };
