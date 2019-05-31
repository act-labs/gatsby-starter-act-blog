import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        if (typeof keywords == "string"){
          keywords = keywords.split(",").map(v => v.trim());
        }
        description = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.project}`}
            meta={[
              {
                name: 'description',
                content: description,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: description,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: description,
              },
            ]
              .concat(
                keywords
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        project
        description
        author
      }
    }
  }
`
