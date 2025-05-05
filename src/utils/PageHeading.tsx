const PageHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="font-heading tracking-wide text-lg md:text-2xl 2xl:text-3xl pb-4 text-text-muted">
      {title}
    </h2>
  );
};

export default PageHeading;
