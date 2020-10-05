import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

const query = graphql`
  {
    person: file(relativePath: { eq: "astronaut-mdx-about.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Title title="about us" />
      <Image fixed={data.person.childImageSharp.fixed} className="img" />
      <p>IsemはZoomとSlackを活用したオンライン学習塾です。</p>
      <p>
        数学は京大理学部出身のsouが担当し、あなたの志望校合格に向け、スケジュール管理なども丁寧にサポートします。
      </p>
      <p>
        英語は”活きた英語力”を身につけてもらうため、Slackのチャットを使い、実際に、海外の方やネイティブスピーカーとコミュニケーションをとることもできます！
      </p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
