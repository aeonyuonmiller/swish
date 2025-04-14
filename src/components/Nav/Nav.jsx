/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import styled from '@emotion/styled';
import Link from "next/link";
import Logo2 from "../Logo2";

const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 
  backdrop-filter: blur(16px);
  background-color: rgba(18, 18, 18, 0.2); 
  */
  z-index: 999;
`;

const NavContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const LogoButton = styled(Link)`
  display: flex;
  width: 140px;
  align-items: center;
  text-decoration: none;
  background: none;
  &:hover {
    background: none;
  }
  & svg {
    fill: #ffe;
  }
  &:hover svg{
    fill: #00000080;
    transition: all ease .4s;
  }
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #fff;
  background: #00000004;
  text-decoration: none;
  transition: all 0.4s ease;

  &:hover {
    color: #fff;
    background: #00000080;
    transition: all 0.4s ease;
}
`;

export default function Nav() {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current + 10) {
                setHidden(true);
            } else if (currentScrollY < lastScrollY.current - 10) {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <StyledNav
            animate={{
                y: hidden ? "-100%" : 0,
                opacity: hidden ? 0 : 1,
                scale: hidden ? 0.95 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <NavContainer variants={variants} initial="hidden" animate="visible">
                <LogoButton href="/">
                    <Logo2 color="#fff" />
                </LogoButton>
                <NavLink href="/services">Work</NavLink>
                <NavLink href="/about">Blog</NavLink>
            </NavContainer>
        </StyledNav>
    );
}
