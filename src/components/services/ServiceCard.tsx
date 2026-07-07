import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { ServiceItem } from "../../data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="group glass h-full border-white/8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      <CardHeader>
        <div
          className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${service.accent}18`,
            border: `1px solid ${service.accent}30`,
          }}
        >
          <Icon size={20} style={{ color: service.accent }} />
        </div>
        <CardTitle className="text-lg text-white">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-7 text-white/55">{service.description}</p>
        <ul className="space-y-2">
          {service.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm text-white/70"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: service.accent }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
