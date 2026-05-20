import {
  AlertTriangle,
  Clock,
  GraduationCap,
  Handshake,
  Headphones,
  HelpCircle,
  Search,
  Server,
  Settings,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  AlertTriangle,
  Settings,
  Handshake,
  Server,
  Clock,
  Headphones,
  Search,
  GraduationCap,
};

export function getCmsIcon(iconKey: string): LucideIcon {
  return ICON_MAP[iconKey] ?? HelpCircle;
}
