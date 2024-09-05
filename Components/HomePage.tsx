import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import ParallaxCarousel from './ParallaxCarousel';
import { FiArrowRight, FiArrowUpRight, FiPlus } from 'react-icons/fi';
import { NextSeo } from 'next-seo';
import { CardProps, functionProps, ButtonProps } from '@/Libs/props';
import Image from 'next/image';


export const FlowgridButton: React.FC<ButtonProps> = ({ content }) => {
    return <>
        <button className='btn sm:btn-lg btn-md btn-wide bg-blue-600 text-white font-black rounded-sm text-2xl hover:bg-blue-600 hover:text-neutral-200 style-before-a border-0'>{content}</button>
    </>
}


const dummyTxt: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rem dolorem explicabo totam atque enim minus quaerat est ut, cumque iure'
const Card: React.FC<CardProps> = ({ title, image, content, id }) => {
    const Button: React.FC<functionProps> = ({onEvoke}) => {
        return <>
            <button className='flex justify-center items-center h-7 w-[8rem] py-1 gap-1 text-neutral-950 cursor-pointer' onClick={onEvoke}><span className="">Explore here </span><FiArrowUpRight className='size-5'/></button>
        </>
    }

    return (
        <div className={`h-[20rem] w-[20rem] bg-white shadow-lg text-sm snap-start z-50 border border-black class-id-${id} font-sans`}>
            <div className='h-[10.5rem] w-[100%] flex justify-center items-center border object-cover overflow-hidden'>
                <Image src={image} alt={title} height={500} width={500} className='w-[100%] hover:scale-[1.2] ease-linear duration-300' />
            </div>
                <h3 className='card-title my-1'>{title}</h3>
                <p className='font-medium'>{content}</p>
            <div className='w-full flex justify-end'>
                <Button onEvoke={() => alert(`hello world ${id}`)}/>
            </div>
        </div>
    );
};

const PopupBox: React.FC = () => {
    return <>
    </>
}

const evokePopup = (id: number, cardId: number) => {
    if(id){
        return alert(`${id}`)
    }
}

const CardArray: CardProps[] = [
{
title: 'Web Design',
image: 'https://cdn-images.imagevenue.com/ba/ce/02/ME190N0P_o.jpg',
content: `${dummyTxt}`,
id: 1
},
{
title: 'Search Engine Optimization',
image: 'https://cdn-images.imagevenue.com/e4/1b/5e/ME190N03_o.jpg',
content: `${dummyTxt}`,
id: 2
},
{
title: 'Brand Design',
image: 'https://cdn-images.imagevenue.com/08/97/32/ME190N5L_o.jpg',
content: `${dummyTxt}`,
id: 3
},
]

const HomeLandingSection: React.FC = () => {
    const RandomPlacedIcons: React.FC = () => {
        return <>
            <FiPlus className='size-9 absolute right-[35.58%] top-[13.2%] text-[#00fa21ca] lg:block hidden'/>
            <FiPlus className='size-9 absolute right-[67.2%] top-[20.95%] text-blue-400 lg:block hidden'/>
            <FiPlus className='size-9 absolute right-[7.97%] top-[44.1%] text-blue-400 lg:block hidden'/>
            <FiPlus className='size-9 absolute right-[7.97%] top-[75.1%] text-[#00fa21ca] lg:block hidden'/>
            <FiPlus className='size-9 absolute right-[67.21%] top-[82.8%] text-blue-400 lg:block hidden'/>
        </>
    }

    return (
        <div className="bg-grid-lg-not-animated h-screen w-full flex justify-center items-center font-sans">
            <div className='flex flex-col w-full justify-center items-center md:px-6 px-4'>
                <div className="xl:text-[5rem] lg:text-5xl sm:text-6xl text-4xl text-mediaQ my-4 flex flex-col items-center justify-center gap-3 w-full">
                    <h1 className='font-black uppercase text-neutral-950'>
                        Solution Driven
                        <span className='bg-blue-600 px-1 text-white rounded-sm inline-before'>Creators.</span>
                    </h1>
                    <div className='sm:my-14 my-6'>
                        <div className='xl:text-[2.5rem] lg:text-[2.5rem] text-xl uppercase font-semibold text-blue-600'>
                            <h2>Add the digital touch with flowgrid</h2>
                        </div>
                        <div className='w-[10rem] h-3 bg-blue-600 mt-3'></div>
                    </div>
                    <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-20 gap-12'>
                        <FlowgridButton content='Our services'/>
                        <FlowgridButton content='Contact us'/>
                    </div>
                </div>
            </div>
            {/* <RandomPlacedIcons /> */}
        </div>
    );
};

const HomeMiddleSection: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 0.9,
    });

    const yImage = useTransform(smoothScrollYProgress, [0, 0.8, 1], [-300, 0, 0]);
    const text1Animation = useTransform(smoothScrollYProgress, [1, 0], ['150%', '0%']);
    const text2Animation = useTransform(smoothScrollYProgress, [0, 1], ['0%', '95%']);
    const text3Animation = useTransform(smoothScrollYProgress, [0, 1], ['0%', '10%']);
    const TypingAnimation = useTransform(smoothScrollYProgress, [0, 0.2], ['0%', '120%']);

    return (
        <section className="h-screen w-full flex flex-col justify-between items-center bg-bg overflow-hidden">
            <div className='h-screen w-[100%] flex justify-center items-center md:px-6 overflow-hidden'>
                <div className='flex flex-col md:gap-24 sm:gap-16 font-sans text-neutral-950 font-black xl:text-[5rem] lg:text-5xl sm:text-4xl text-[2rem] text-mediaQwrap gap-8 uppercase'>
                    
                    <motion.div className='flex flex-col sm:gap-12 gap-4'>
                        <motion.span style={{ display: 'inline-block', borderColor: 'black', width: TypingAnimation, overflow: 'hidden', textWrap: 'nowrap', lineHeight: '5rem' }}>WHO ARE WE <span className="rotate-[15deg] inline-block">?</span></motion.span>
                    </motion.div>

                    <motion.div className='flex flex-col sm:gap-12 gap-4 z-30'>
                        <motion.span style={{ display: 'inline-block', borderColor: 'black', width: TypingAnimation, overflow: 'hidden', textWrap: 'nowrap', lineHeight: '5rem', zIndex: '30' }}>A DIGITAL VISION AGENCY</motion.span>
                    </motion.div>
                    
                    <motion.div className='flex flex-col sm:gap-12 gap-4 electrolize-regular-extrabold'>
                        <motion.span style={{ display: 'inline-block', borderColor: 'black', width: TypingAnimation, overflow: 'hidden', textWrap: 'nowrap', lineHeight: '5rem', zIndex: '30' }}>BUILDING YOUR UNIQUE VISION</motion.span>
                        <div className='md:block md:h-[40rem] sm:w-[40rem] hidden absolute right-0 z-10'>
                            <Image src='https://cdn-images.imagevenue.com/58/b0/a6/ME190U2A_o.png' alt='random image' height={2000} width={2000} className='object-cover absolute -top-[60%] w-[100%] h-[100%] z-10' />
                        </div>
                        <button className="btn btn-wide lg:btn-lg sm:btn-md bg-blue-600 hover:bg-blue-700 text-neutral-200 rounded-sm sm:text-2xl text-lg border-0 z-50">Find out more</button>
                    </motion.div>

                    
                </div>
            </div>
        </section>
    );
};

export const HomePage: React.FC = () => {
    return (
        <>
            <NextSeo title='Home - Flowgrid Digital' />
            <HomeLandingSection />
            <HomeMiddleSection />
            <ParallaxCarousel />
        </>
    );
};
