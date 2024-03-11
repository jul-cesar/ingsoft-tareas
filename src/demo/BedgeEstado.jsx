import { Badge } from "@/components/ui/badge";

export function BadgeEstado({ children, variant }) {
  return <Badge variant={variant}>{children}</Badge>;
}
