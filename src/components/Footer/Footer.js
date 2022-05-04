import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import {Contact} from '../contact/Contact'
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {AiOutlineMail} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterWrapper style={{marginTop : "-1%"}}>
      <SectionDivider />
      <br />
      <SectionTitle id='contact'>Contact Me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call </LinkTitle>
          <LinkItem href="tel:+91-8420166534">+91-8420166534</LinkItem>
        </LinkColumn>
        <LinkColumn style={{marginLeft: "-60px"}}>
          <LinkTitle >Email</LinkTitle>
          <LinkItem href="mailto:soumamoulik@gmail.com">
          soumamoulik@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="mailto:soumamoulik@gmail.com">
          Kolkata, West Bengal
          </LinkItem>
        </LinkColumn>
      </LinkList>
     
      
      <Contact />
      <SocialIconsContainer>
        <SocialContainer>
        {/* <SocialIcons href="mailto:soumamoulik@gmail.com" target="_blank">
            <AiOutlineMail size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://github.com/Moulik98" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/soumya-moulik/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://twitter.com/MoulikSoumya"
            target="_blank"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
