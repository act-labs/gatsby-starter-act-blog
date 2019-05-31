import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


export default function Logo(){
        return (<StaticQuery
            query={graphql`
                query {
                    logo: file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        fixed(height: 60) {
                        ...GatsbyImageSharpFixed
                        }
                    }
                    }
                }
            `}
            render={data => <Img fixed={data.logo.childImageSharp.fixed} style={{float:"left"}}/>}
        />)
    }

