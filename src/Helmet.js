import React from "react";
import { Helmet } from "react-helmet";

/**
 * React Helmet to programmatically add HTML Header for 'dynamic' social media preview
 */
export function HelmetComponent(props) {
  const { profile } = props;

  const title = profile
    ? `${profile.name}, ${profile.title}` // (Trained at ${profile.institution})`
    : "Connections";

  const img = profile
    ? `https://s3.amazonaws.com/connections.careers/images/${profile.name.replace(
        " ",
        "+"
      )}.jpg`
    : "https://s3.amazonaws.com/connections.careers/images/home-800px.png";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:text:title" content={title} />

      <meta
        name="description"
        content="Connections: Career Paths in Biomedical Informatics"
      />
      <meta
        name="twitter:description"
        content="Connections: Career Paths in Biomedical Informatics"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={img} />
      <meta name="twitter:image" content={img} />
      <link rel="apple-touch-icon" href={img} />
    </Helmet>
  );
}
