import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="250" y="76" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="0" rx="100" ry="100" width="200" height="200" />
    <rect x="-6" y="221" rx="10" ry="10" width="280" height="28" />
    <rect x="-2" y="279" rx="20" ry="20" width="280" height="88" />
    <rect x="8" y="389" rx="9" ry="9" width="77" height="27" />
    <rect x="122" y="381" rx="29" ry="29" width="152" height="45" />
  </ContentLoader>
);
