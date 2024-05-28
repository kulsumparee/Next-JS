
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSearchLocation, FaLocationArrow, FaPhone, FaWhatsapp, FaVoicemail } from 'react-icons/fa';
import * as style from './Styled';

const Footer = () => {
    return (
        <style.FooterContainer>
            <style.FooterContent>
                <style.Section>
                    <style.Title>CLINIC NAME</style.Title>
                    <style.Text>Lorem ipsum dolor sit amet consectetur. Ultrices ac luctus sapien ornare velit tellus id vehicula. Quisque sit a augue imperdiet mattis non viverra semper. Rutrum sit sagittis diam vulputate feugiat volutpat magnis.</style.Text>
                </style.Section>
                <style.Section>
                    <style.Title>Find Us</style.Title>
                    <style.LinkList>
                        <style.ListItem>
                            <span ><FaSearchLocation/> </span> Location: 4517 Washington Ave. Manchester, Kentucky 39495
                        </style.ListItem>
                        <style.ListItem>
                            <span ><FaPhone/></span> Phone: (432) 123446098
                        </style.ListItem>
                        <style.ListItem>
                            <span ><FaWhatsapp/></span> Whatsapp: +923 123446098
                        </style.ListItem>
                        <style.ListItem>
                            <span> <FaVoicemail/></span> Email: clinicemail44@gmail.com
                        </style.ListItem>
                    </style.LinkList>
                </style.Section>
                <style.Section>
                    <style.Title>Explore</style.Title>
                    <style.LinkList>
                        <style.ListItem>Our Team</style.ListItem>
                        <style.ListItem>Services</style.ListItem>
                    </style.LinkList>
                    <style.SocialIcons>
                        <style.SocialIcon href="#" aria-label="Facebook"><FaFacebook /></style.SocialIcon>
                        <style.SocialIcon href="#" aria-label="Twitter"><FaTwitter /></style.SocialIcon>
                        <style.SocialIcon href="#" aria-label="Instagram"><FaInstagram /></style.SocialIcon>
                        <style.SocialIcon href="#" aria-label="LinkedIn"><FaLinkedin /></style.SocialIcon>
                    </style.SocialIcons>
                </style.Section>
            </style.FooterContent>
        </style.FooterContainer>
    );
};

export default Footer;
