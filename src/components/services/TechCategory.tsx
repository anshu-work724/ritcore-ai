interface TechCategoryProps {
  category: {
    title: string;
    items: string[];
  };
}

export default function TechCategory({ category }: TechCategoryProps) {
  return (
    <div className="glass rounded-2xl border border-white/8 p-7">
      <h3 className="mb-5 text-xl font-semibold text-white">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors duration-200 hover:border-cyan-400/30 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
