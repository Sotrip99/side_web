'use client'
import React, { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from 'styled-components';
import Banner from "@/components/Main/Banner";
import Curriculum from '@/components/Main/Curriculum';
import Section1 from '@/components/Main/Section1';
import Section2 from '@/components/Main/Section2';
import Section3 from '@/components/Main/Section3';
import Section4 from '@/components/Main/Section4';
import Section5 from '@/components/Main/Section5';
import Section6 from '@/components/Main/Section6';
const MainContainer = styled.main`
  section {
    padding: 0.5rem 0;
    min-height: 15rem;
  }
`;

//메인화면
const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const memoizedMain = useMemo(() => (
    <MainContainer>
      <Banner />
      <Section1 />
      <Curriculum />
      <Section2/>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </MainContainer>
  ), []);

  return memoizedMain;
};

export default Main;
