import React from "react";

interface SectionProps extends React.PropsWithChildren {
  sectionId: string;
}

export const Section = ({ children, sectionId }: SectionProps) => {
  return (
    <section className="w-full" id={sectionId}>
      {children}
    </section>
  )
}