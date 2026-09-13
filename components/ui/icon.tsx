import {
  Smartphone,
  BrainCircuit,
  MapPin,
  Megaphone,
  Layers,
  Compass,
  LineChart,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const registry = {
  smartphone: Smartphone,
  brain: BrainCircuit,
  "map-pin": MapPin,
  megaphone: Megaphone,
  layers: Layers,
  compass: Compass,
  "line-chart": LineChart,
  cpu: Cpu,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof registry;

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = registry[name];
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
