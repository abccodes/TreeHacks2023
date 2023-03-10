import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff6e5;
`

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ff99cc;
`

const Description = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #f6c1c1;
`

const Button = styled.button`
  background-color: #ff99cc;
  color: #fff;
  font-size: 2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f6c1c1;
  }
`

function LandingPage() {
  return (
    <PageContainer>
      <Title>Welcome to Our Website</Title>
      <Description>
        We're a friendly and bubbly team of developers creating cool stuff for
        you.
      </Description>
      <Button>Get Started</Button>
    </PageContainer>
  )
}

export default LandingPage
