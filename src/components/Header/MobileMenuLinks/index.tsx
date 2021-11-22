import MenuLink from "../MenuLink";

interface Props {
  links: {
    to: string;
    text: string;
  }[];
  closeDrawer: () => void;
}

const MobileMenuLinks = ({ links, closeDrawer }: Props) => {
  return (
    <>
      <MenuLink to="about" text="About me" closeDrawer={closeDrawer} />
      <MenuLink to="skills" text="Skills" closeDrawer={closeDrawer} />
      <MenuLink
        to="qualifications"
        text="Qualifications"
        closeDrawer={closeDrawer}
      />
      <MenuLink to="services" text="Services" closeDrawer={closeDrawer} />
      <MenuLink to="contact" text="Contact" closeDrawer={closeDrawer} />
    </>
  );
};

export default MobileMenuLinks;
