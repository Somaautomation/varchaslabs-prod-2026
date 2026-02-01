type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pt-[120px] pb-16 bg-slate-900 text-white">
      <div className="container-wrapper">

        <div className="text-left md:text-center animate-fade-slide">

          {/* Accent ABOVE title */}
          <div className="h-1 w-12 bg-gradient-to-r from-accent to-primary md:mx-auto mb-4 rounded-full" />

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
            {title}
          </h1>

          {/* Gradient underline */}
          <div className="h-[2px] w-24 bg-gradient-to-r from-primary via-accent to-primary md:mx-auto mb-6 rounded-full" />

          {/* Description (optional) */}
          {description && (
            <p className="text-lg text-slate-300 max-w-2xl md:mx-auto">
              {description}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
