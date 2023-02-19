import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import React from 'react'
// import fetch from 'node-fetch'

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 1rem auto;
  margin-top: 50px;
  margin-bottom: 25px;

  width: fit-content;
  padding: 25px;
  color: #fff;
  background: linear-gradient(-45deg, #37829f, #ae71ae, #2f57cf, #cf63c4);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  // border: 2px solid #2d2d2d;
  border-radius: 5rem;
  box-shadow: 0 0 5px 5px #32323240;
  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`

const FormSectionRes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  align-items: flex-start;

  margin: 1rem auto;
  margin-top: 50px;
  margin-bottom: 25px;

  width: fit-content;
  padding: 25px;
  color: #fff;
  background: linear-gradient(-45deg, #37829f, #ae71ae, #2f57cf, #cf63c4);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  // border: 2px solid #2d2d2d;
  border-radius: 5rem;
  box-shadow: 0 0 5px 5px #32323240;
  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`

const PageContainer = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  align-text: center;
`

const Title = styled.h1`
  flex: 1;
  align-self: center;
  text-align: center;
  // margin: 1rem auto;
  margin-top: 7.5rem;
  font-size: 4rem;
  color: #000;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  align-self: center;
`

const GenTitle = styled.h1`
  flex: 1;
  align-self: center;
  text-align: center;
  // margin: 1rem auto;
  // margin-top: 7.5rem;
  font-size: 4rem;
  color: #000;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  align-self: center;
`

const Description = styled.p`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
  font-family: Roboto;
`

const Footer = styled.div`
  flex: 1;
  font-size: 2.5rem;
  bottom: 0;
`

const Section = styled.div`
  justify-content: center;
  align-items: center;
  align-text: center;
  height: auto;
  width: 100%;
  position: relative;
  // overflow: hidden;
  // background-color: #121113;
  @media screen and (max-width: 950px) {
    height: 100vh;
  }
  @media screen and (max-width: 540px) {
    height: 120vh;
  }
  @media screen and (max-width: 450px) {
    height: auto;
  }
`
const Box = styled.div`
  justify-content: center;
  align-items: center;
  align-text: center;
  height: auto;
  width: 100%;
  position: relative;
  // overflow: hidden;
  background-color: #121113;
  @media screen and (max-width: 950px) {
    height: 100vh;
  }
  @media screen and (max-width: 540px) {
    height: 120vh;
  }
  @media screen and (max-width: 450px) {
    height: auto;
  }
`

const GeneratedText = styled.p`
  flex: 1;
  align-self: flex-start;
  text-align: left;
  // margin: 1rem auto;
  // margin-top: 7.5rem;
  font-size: 1rem;
  color: #fff;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 250px;
  overflow-y: scroll;
  margin-left: 30px;
`

// <div>
//   <PageContainer>
//     <Title>Treehacks 2023</Title>
//     <Description>
//       Generate a basic personalized website in seconds with the power of AI.
//     </Description>
//      </PageContainer>

function App() {
  const [prompt, setPrompt] = React.useState('')
  const [response, setResponse] = React.useState('')
  const [generated, setGenerated] = React.useState('')
  // 0 = not started, 1 = loading, 2 = done
  const [loadingState, setLoadingState] = React.useState(0)

  function copy() {
    navigator.clipboard.writeText(generated)
  }

  function Generated() {
    switch (loadingState) {
      case 0:
        return
      case 1:
        return (
          <Title>
            <p classname="form-header">Loading</p>
          </Title>
        )
      case 2:
        return (
          <div>
            <GenTitle>Response</GenTitle>
            <div classname=" center">
              <button onClick={copy} className="btn">
                Copy
              </button>
            </div>
            <hr />
            <GeneratedText classname="form-header">
              <pre>
                <code>{generated}</code>
              </pre>
            </GeneratedText>
            <hr />
          </div>
        )
      default:
        console.error('invalid loading state detected')
        return
    }
  }

  async function generateHTML(e) {
    e.preventDefault()
    if (prompt == '') {
      alert('You need to insert a prompt!')
      return
    }
    console.log('asdfasdf')
    setLoadingState(1)
    const response = await fetch(
      'https://acoustic-lapwing-256.convex.site/promptModel',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      },
    )
    const responseJSON = await response.json()
    const generatedHtml = responseJSON.html
    setGenerated(generatedHtml)
    setLoadingState(2)
  }

  function handleChange(e) {
    e.preventDefault()
    setPrompt(e.target.value)
  }
  return (
    <Section>
      <Title>TreeHacks 2023</Title>
      <form>
        <FormSection>
          <p className="form-header">The Leviathan</p>
          <input
            className="form-input h-10"
            type="text"
            placeholder="Generate a website in seconds. Input a prompt and a website will be
          generated."
            // name="name"
            required
            onChange={handleChange}
          />
          <button
            onClick={(e) => {
              generateHTML(e)
            }}
            className="btn"
          >
            Generate
          </button>
        </FormSection>
      </form>

      <FormSectionRes>
        <Generated />
      </FormSectionRes>
    </Section>
  )
}

export default App
