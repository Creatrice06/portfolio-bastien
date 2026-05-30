import { Card } from "./Card";

export function SkillCard({ title, description }) {
  return (
    <Card>
      <div className="mb-4 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
      <h3 className="text-lg font-bold text-ivory">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </Card>
  );
}
