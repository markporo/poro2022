import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <div>
            <Head>
                <meta name='viewport'
                    content='width=device=width, initial-scale=1' />
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <meta charSet='utf-8' />
                <link rel='icon' href='/favicon.ico' />
                <title>{title}</title>
            </Head>
        </div>
    )
}

Meta.defaultProps = {
    title: 'PORO Music',
    keywords: 'PORO music, Poro, poro, indie pop band, cleveland, mark porostosky, artist, dance with me, moonlight, embrace, remixes',
    description: 'A website for connecting and representing all things regarding the band PORO'
}

export default Meta;