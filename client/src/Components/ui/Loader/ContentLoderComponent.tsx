import ContentLoader from "react-content-loader";

export const ContentLoaderComponent = ({ ...props }): JSX.Element => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={200}
      viewBox="0 0 300 200"
      className="w-full mb-3"
      backgroundColor="#f3f3f3"
      foregroundColor="rgb(22 78 99 / 0.0)"
      {...props}>
      <rect x="-1" y="144" rx="3" ry="3" width="280" height="6" />
      <circle cx="19" cy="20" r="20" />
      <rect x="54" y="11" rx="3" ry="3" width="200" height="6" />
      <rect x="124" y="91" rx="0" ry="0" width="0" height="1" />
      <rect x="-1" y="49" rx="0" ry="0" width="278" height="85" />
      <rect x="0" y="159" rx="3" ry="3" width="280" height="6" />
      <rect x="0" y="176" rx="3" ry="3" width="280" height="6" />
      <rect x="54" y="28" rx="3" ry="3" width="200" height="6" />
    </ContentLoader>
  );
};
