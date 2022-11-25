import React, { useEffect, useState } from 'react'

import Layout from '../components/layout';

export default function Index() {
    // const [headline, setHeadline] = useState({ isOpen: false, content: '' })

    // useEffect(() => {
    //     const d = new Date(); // for now
    //     if (d.getHours() >= 8 && d.getHours() <= 17) {
    //         setHeadline({ isOpen: true, content: 'Hari ini buka sampai jam 5 sore.' })
    //     } else {
    //         setHeadline({ isOpen: false, content: 'Hari ini kami tutup. Buka setiap hari kerja 8 pagi - 5 sore.' })
    //     }

    // }, [])

    return (
        <Layout>
            <section className='relative w-full min-h-screen'>

                <div className='w-4/5 mx-auto'>
                    <img src={require('../images/hero.png').default} alt='Intertech epoxy 3drender' />
                </div>

                <div className='w-full max-w-6xl mx-auto p-4'>
                    <h1>Intertech Computer</h1>
                    <p>Manado, Sulawesi Utara, Indonesia.</p>

                    {/* <div className='flex flex-row items-center gap-2'>
                        <span class={`${headline.isOpen ? 'bg-lime-400' : 'bg-red-400'} relative inline-flex rounded-full h-3 w-3`}></span>
                        <p>{headline.content}</p>
                    </div> */}

                    <div style={{ height: '50vh' }} className='mt-4 rounded-3xl overflow-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15953.84144283384!2d124.8452264!3d1.4949161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1f694f25ee87c39!2sIntertech%20Computer!5e0!3m2!1sen!2sau!4v1669374345339!5m2!1sen!2sau" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </section>
        </Layout>
    )
}
