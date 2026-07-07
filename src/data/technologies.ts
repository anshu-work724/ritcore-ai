export interface TechnologyCategory {
  title: string;
  items: string[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Mobile & Frontend",
    items: ["Flutter", "React Native", "Kotlin", "Firebase"],
  },
  {
    title: "Web & Backend",
    items: ["React", "Angular", "Laravel", "Python", "Node.js"],
  },
  {
    title: "Databases & Cloud",
    items: ["MySQL", "MongoDB", "AWS", "Microsoft Azure"],
  },
  {
    title: "AI & Machine Learning",
    items: ["TensorFlow"],
  },
];
