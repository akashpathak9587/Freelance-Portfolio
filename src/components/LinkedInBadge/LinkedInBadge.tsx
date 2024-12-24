import { useEffect } from "react";

const LinkedInBadge = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="akash9587"
        data-version="v1">
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/akash9587?trk=profile-badge">
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
