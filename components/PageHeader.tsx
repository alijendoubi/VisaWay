import { SectionTitle } from "@/components/ui/SectionTitle";

export const PageHeader = ({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) => {
  return (
    <section className="section-padding pb-12 pt-16">
      <SectionTitle eyebrow={eyebrow} title={title} description={description} />
    </section>
  );
};
