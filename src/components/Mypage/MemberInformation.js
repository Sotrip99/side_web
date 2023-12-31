'use client';
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useRecoilValue } from "recoil";
import { EmailIDState } from "@/components/Login/Login";


const MemberInformationContainer = styled.main`
 padding: 1rem 10rem;
`;

const Form = styled.form`
  width: 50%;
  transition: margin-left 0.2s ease;

  @media screen and (max-width: 1024px) {
    padding: 0 50px;
  }

  p {
    color: var(--warning-color);
  }
`;

const Title = styled.span`
  position: relative;
  font-size: 27px;
  font-weight: 600;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: var(--theme-color);
  }
`;

const InputField = styled.div`
  color: var(--theme-color);
  position: relative;
  margin-top: 65px;

  &#type {
    div {
      font-size: 20px;
      margin-bottom: 24px;
      margin-top: -5px;
      margin-left: 5px;

      &#join{
        padding-top: 0px
      }
    }

    &input{
      &user{
        width: auto;
      }
    }
  }

  input {
    font-size: 15px;
    color: var(--theme-color);
    width: 100%;
    border: none;
    border-bottom: solid var(--theme-color) 1px;
    padding-bottom: 10px;
    padding-left: 10px;
    position: relative;
    background: none;
    z-index: 5;
    
    &#user{
      width: 20px;
    }

    &::placeholder {
      float: right;
      color: gray;
    }

    &:focus {
      outline: none;
    }

    &#type {
      &input{
        width: auto;
      }
    }
  }

  span {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0%;

    background-color: #666;
    width: 0;
    height: 2px;
    border-radius: 2px;
    transition: 0.5s;
  }

  label {
    position: absolute;
    color: var(--theme-color);
    left: 10px;
    font-size: 20px;
    bottom: 8px;
    transition: all .2s;
  }

  input {
    &:focus ~ label, &:valid ~ label {
      font-size: 16px;
      bottom: 40px;
      color: #666;
      font-weight: bold;
    }

    &:focus ~ span, &:valid ~ span {
      width: 100%;
    }
  }
  div{
    padding-bottom: -50px;
  }

  & #check_icon {
    display: inline-block;
    color: green;
  }
`;

const SubmitContainer = styled.div`
  margin: 30px 0 10px 0;

  input {
    background-color: var(--theme-color);
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
      background-color: var(--anti-theme-color);
    }
  }
`;

const Text = styled.span`
  color: var(--accent-link-color);
  font-size: 14px;

  a.text {
    color: var(--theme-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ApplyButton = styled.button`
  position: relative;
  background-color: rgba(78,84,97);
  border-radius: 10px;
  padding: 5px 10px;
  float: right;
  margin-top: -45px;
  z-index: 5;
  color: white;
  width: auto;

  &:hover {
    background-color: var(--theme-color);
  }

  svg {
    display: inline-block !important;
    color: green;
  }
`;

const UserBox = styled.div`
  padding-left: 370px;
  
  &#right{
    padding-left: 20px;
  }
`;

const Box = styled.div`
  display: flex;
`;



const MemberInformation = () => {

    const router = useRouter();

    const handleGoToMypage = () => {
        router.back(-1);
    };

  const [members, setMembers] = useState([]);
  const emailID = useRecoilValue(EmailIDState);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/mypage/${emailID}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': status
          },
        });
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };
    fetchMembers();
  }, []);

    

    return (
        <MemberInformationContainer>
            <Title className="title">회원 상세정보</Title>

            
            <InputField>
                <p>이름</p>
                <p><input type="text" value={members.name} /></p>
            </InputField>

            
            <InputField>
                <p>이메일</p>
                <p><input type="text" value={members.email} /></p>
            </InputField>

            
            <InputField>
                <p>생년월일</p><span />
                <p><input type="text" value={members.birth} /></p>
            </InputField>

           
            <InputField>
                <p>휴대전화 번호</p>
                <p><input type="text" value={members.phone} /></p>
            </InputField>

            <InputField id='type'>
                    <p>가입유형</p>
                    <p><input type="text" value={members.authority} /></p>             
            </InputField>

            <InputField id='type'>
                    <p>사원번호</p>
                    <p><input type="text" value={members.employeeNumber} /></p>             
            </InputField>
            <SubmitContainer><input type="button" onClick={handleGoToMypage} value="마이페이지로 돌아가기" /></SubmitContainer>
        </MemberInformationContainer>

    );
}

export default MemberInformation;