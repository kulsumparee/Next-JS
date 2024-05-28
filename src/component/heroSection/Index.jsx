import React from 'react'
import CardDrtails from "@/component/heroSection/products/Index"
import * as styled from './Styled'
import Image from 'next/image'
import FormContent from '@/component/heroSection/form/Index'
import MapContent from './map/Index'


const HeroComponent = () => {
    return (
        <styled.MainContent  className='' >
            {CardDrtails && CardDrtails.map(products => (
                <styled.CardContent key={products.id} className=''>
                    <div className='  flex ml-16  '>
                        <div className="  sm:mb-8  sm:ml-40 sm:mt-6 md:ml-0 md:mt-0 md:mb-0  sm:justify-center sm:items-center  ">
                            <h1 className=' lg:text-5xl sm:text-3xl  font-bold'>{products.Title}</h1>
                            <h1 className=' lg:text-5xl sm:text-3xl    font-bold'>{products.title1}</h1>
                            <p className=''>{products.Discription}</p>
                            <p>{products.Text}</p>
                            <p>{products.Text2}</p>
                            <p>{products.Text3}</p>
                            <p>{products.Text4}</p>
                            <p>{products.Text5}</p>
                            <p>{products.Text6}</p>

                        {
                            products.button &&
                            <button>{products.button}</button>

                            }

                            <div className=''>
                                {products.img1 &&
                                    <Image src={products.img2} />
                                }
                            </div>
                            
                            <div className=' flex gap-6 items-start'>
                               
                                <div >
                                    {products.phone &&
                                        <p>{products.phone}</p>}
                                    {products.number &&
                                        <p>{products.number}</p>}
                                </div>

                            </div>
                            <div className=' flex gap-6 items-start'>
                                {products.img1 &&
                                    <Image src={products.img1} />
                                }
                                <div>
                                    {products.whatsapp &&
                                        <p>{products.whatsapp}</p>}
                                    {products.Wnumber &&
                                        <p>{products.Wnumber}</p>}
                                </div>
                            </div>
                      </div>
                        
                        
                    </div>

                    {products.src && <styled.ImageContent>
                        <Image src={products.src} width={300} height={200} />
                    </styled.ImageContent>}


                </styled.CardContent>

            ))

            }

            <FormContent />
            <div>

                <MapContent />
                <MapContent />
                <MapContent />
            </div>


        </styled.MainContent>
        
    )
}

export default HeroComponent
