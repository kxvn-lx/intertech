/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <main>{children}</main>

      <footer className='mt-40 w-full max-w-6xl mx-auto p-4 mb-64'>
        <div className='grid grid-cols-2 gap-20 gap-y-40'>
          <div>
            <h3>☎️ Hubungi kami</h3>
            <a href='tel:+62431863560'>+62431863560</a>
          </div>

          <div>
            <h3>📍 Alamat</h3>
            <a href='https://goo.gl/maps/7bxeQfqNaiMas4847' target="_blank" rel="noopener noreferrer">JL Aipda Jl. S. Tubun No.24b, Istiqlal, Kec. Wenang, Kota Manado, Sulawesi Utara 95121, Indonesia</a>
          </div>

          <div className='col-span-2'>
            <h3>⏰ Jam Buka</h3>
            <ul>
              <li>
                <div className='flex gap-4'>
                  <p>Senin</p>
                  <p>8 Pagi - 5 Sore.</p>
                </div>
              </li>
              <li>
                <div className='flex gap-4'>
                  <p>Selasa</p>
                  <p>8 Pagi - 5 Sore.</p>
                </div>
              </li>
              <li>
                <div className='flex gap-4'>
                  <p>Rabu</p>
                  <p>8 Pagi - 5 Sore.</p>
                </div>
              </li>
              <li>
                <div className='flex gap-4'>
                  <p>Kamis</p>
                  <p>8 Pagi - 5 Sore.</p>
                </div>
              </li>
              <li>
                <div className='flex gap-4'>
                  <p>Jumat</p>
                  <p>8 Pagi - 5 Sore.</p>
                </div>
              </li>
              <li>
                <div className='flex gap-4'>
                  <p>Sabtu</p>
                  <p>8 Pagi - 5 Sore.</p>
                </div>
              </li>
              <li>
                <div className='flex gap-4'>
                  <p>Minggu</p>
                  <p>Tutup.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
