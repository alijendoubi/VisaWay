import { cn } from "@/components/ui/cn";

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) => {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}> 
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      {description && <p className="text-base text-ink/70 md:text-lg">{description}</p>}
    </div>
  );
};
