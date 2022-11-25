import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

export default function Index() {

    return (
        <Layout>
            <section className='relative w-full mt-10'>

                <div className='w-4/5 max-w-6xl mx-auto mt-40'>
                    <img className='object-contain' src={require('../images/hero.png').default} alt='Intertech epoxy 3drender' />
                </div>

                <div className='w-full max-w-6xl mx-auto p-4'>
                    <h1>Intertech Computer</h1>
                    <p>Manado, Sulawesi Utara - Indonesia.</p>

                    <MapWrapper className='mt-4 rounded-3xl overflow-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15953.84144283384!2d124.8452264!3d1.4949161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1f694f25ee87c39!2sIntertech%20Computer!5e0!3m2!1sen!2sau!4v1669374345339!5m2!1sen!2sau" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </MapWrapper>
                </div>

            </section>
        </Layout>
    )
}

const MapWrapper = styled.div`
    height: 50vh;
    max-height: 40rem;

      @media (min-width: 768px) {
        max-height: 50rem;
  }
`