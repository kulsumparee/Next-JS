import React from 'react';
import * as Style from '@/component/footer/StyleS';
import Image from 'next/image';
import icon1 from "@/Assests/icons/icon1.svg"
import icon2 from "@/Assests/icons/icon2.svg"
import icon3 from "@/Assests/icons/icon3.svg"
import icon4 from "@/Assests/icons/icon4.svg"
import Icons1 from "@/Assests/icon/Group1.svg"
import Icons2 from "@/Assests/icon/Group2.svg"
import Icons3 from "@/Assests/icon/Group3.svg"
import Icons4 from "@/Assests/icon/Group4.svg"

import { FaSearchLocation, FaPhone, FaWhatsapp, FaMailBulk, FaFacebook } from 'react-icons/fa';


export const Index = () => {
    return (
        <Style.FooterContainer>
            <Style.FooterContent className=' ml-24'>
                <Style.FirstSection className='  sm:items-center'>
                    <div>
                        <Style.Title>CLINIC NAME</Style.Title>
                        <Style.Text>Lorem ipsum dolor sit amet consectetur.
                            Ultrices ac luctus sapien ornare velit tellus id vehicula.
                            Quisque sit a augue imperdiet mattis non viverra semper.
                            Rutrum sit sagittis diam vulputate feugiat volutpat magnis.
                        </Style.Text>
                    </div>
                </Style.FirstSection>
                <Style.FirstSection >
                    <Style.Title>Find Us</Style.Title>
                    <div>
                        <div className='flex  gap-5 al mb-5'>
                            <div>
                                <Image src={icon1}/>
                            </div>
                            <div>
                                <p>Location:</p>
                                <p className='  w-72'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-start mb-5'>
                            <div>
                                <Image src={icon2} />
                           </div>
                            <div>
                                <p>Phone:</p>
                                <p>(432) 123446098</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <div>
                                <Image src={icon3} />
                            </div>
                            <div>
                                <p>Whatsapp:</p>
                                <p>+923 123446098</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <Image src={icon4} />
                            <div>
                                <p>Email:</p>
                                <p>clinicemail44@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Style.FirstSection>
                <Style.FirstSection>
                    <Style.Title>Explore</Style.Title>
                    <div className=''>
                        <ul>
                            <li>Our Team</li>
                            <li>Services</li>
                        </ul>
                    </div>
                </Style.FirstSection>

                
            </Style.FooterContent>
            <div className=' flex justify-end gap-6 cursor-pointer pr-10 sm:justify-center'>
                <Image src={Icons4} />
                <Image src={Icons2} />
                <Image src={Icons3} />
                <Image src={Icons1} />
            </div>
              
        </Style.FooterContainer>

       
    );
}