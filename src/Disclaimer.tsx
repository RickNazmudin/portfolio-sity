import { Box, Typography, Link } from "@mui/material";
import NavigationBar from "./NavigationBar";

const Disclaimer = () => {
  return (
    <Box className="impressum" p={3}>
      <NavigationBar />
      <Typography variant="h2" gutterBottom>
        Disclaimer
      </Typography>
      <Typography variant="body1" paragraph>
        Information according to § 5 TMG
      </Typography>
      <Typography variant="body1" paragraph>
        {import.meta.env.VITE_ADRESS_NAME}
        <br />
        {import.meta.env.VITE_ADRESS_STREET}
        <br />
        {import.meta.env.VITE_ADRESS_CITY}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Represented by:</strong> <br />
        Sity Aisyah <br />
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Contact:</strong> <br />
        Email:
        <Link
          sx={{
            textDecoration: "none",
            color: "inherit",
            marginLeft: "0.5rem",
          }}
          href="mailto:sitinuraisahj@gmail.com"
        >
          sitinuraisahj@gmail.com
        </Link>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Disclaimer:</strong> <br />
        <strong>Content Liability</strong> <br />
        The contents of our pages were created with the utmost care. However, we
        cannot guarantee the accuracy, completeness, or timeliness of the
        content. As a service provider, we are responsible for our own content
        on these pages according to general laws (§ 7 Para.1 TMG). However, we
        are not obligated to monitor transmitted or stored external information
        (§§ 8-10 TMG). Obligations to remove or block the use of information
        under general laws remain unaffected. However, liability in this regard
        is only possible from the time of knowledge of a specific legal
        violation. We will remove any content immediately upon becoming aware of
        such violations.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Liability for Links</strong> <br />
        Our offer contains links to external websites of third parties, on whose
        contents we have no influence. Therefore, we cannot assume any liability
        for these external contents. The respective provider or operator of the
        pages is always responsible for the content of the linked pages. Linked
        pages were checked for possible legal violations at the time of linking.
        Illegal content was not recognizable at the time of linking. A permanent
        control of the content of the linked pages is unreasonable without
        concrete evidence of a violation. Upon becoming aware of legal
        violations, we will remove such links immediately.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Copyright</strong> <br />
        The content and works on these pages created by the site operators are
        subject to German copyright law. The duplication, editing, distribution,
        and any kind of use outside the limits of copyright law require the
        written consent of the respective author or creator. Downloads and
        copies of this site are permitted only for private, non-commercial use.
        Insofar as the content on this site was not created by the operator, the
        copyrights of third parties are respected. Content of third parties is
        marked as such. Should you nevertheless become aware of a copyright
        infringement, please inform us accordingly. We will remove such content
        immediately upon becoming aware of legal violations.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Data Protection</strong> <br />
        The use of our website is generally possible without providing personal
        data. Insofar as personal data (such as name, address, or email
        addresses) is collected on our pages, this is always done on a voluntary
        basis, as far as possible. This data will not be disclosed to third
        parties without your explicit consent. We point out that data
        transmission over the Internet (e.g., when communicating by email) may
        have security gaps. Complete protection of data from access by third
        parties is not possible. The use of contact data published within the
        scope of the imprint obligation by third parties for sending unsolicited
        advertising and information materials is hereby expressly prohibited.
        The operators of the pages expressly reserve the right to take legal
        action in the event of unsolicited advertising information, such as spam
        emails.
      </Typography>
    </Box>
  );
};

export default Disclaimer;
