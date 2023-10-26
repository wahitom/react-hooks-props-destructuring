function SocialMedia({ links }) {
  return (
    <div>
      <p>
        <a href={links.github}>Socials Github: {links.github}</a>
      </p>
      <p>
        <a href={links.linkedin}>socialslinkedin: {links.linkedin}</a>
      </p>
    </div>
  );
}

export default SocialMedia;
