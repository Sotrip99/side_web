import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import banner from '@/assets/img/천재교육 디지털 러닝 GENIA.png';

const BannerBox = styled.div`
    width: 100%;
    height: 130px;
    background-color: pink;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const Section6 = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    });

    return (
        <BannerBox><Image src={banner} width={`auto`} alt='Image'/></BannerBox>
    )
}
export default Section6;