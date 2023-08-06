import React from "react";
import { createStyles, Container, Group, ActionIcon } from "@mantine/core";

import { BiLogoTwitter } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const links = [
  {
    link: "#",
    label: "Contact",
  },
  {
    link: "#",
    label: "Privacy",
  },
  {
    link: "#",
    label: "Blog",
  },
  {
    link: "#",
    label: "Store",
  },
  {
    link: "#",
    label: "Careers",
  },
];
const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: "120px",
    borderTop: `${"16px"} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Group className={classes.links}>
          {links.map((item, index) => (
            <li key={index} className="list-none">
              <a className="no-underline" href={item.link}>{item.label}</a>
            </li>
          ))}
        </Group>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <BiLogoTwitter stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BsYoutube stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <FaLinkedinIn stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
