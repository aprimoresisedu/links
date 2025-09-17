import Image from "next/image"

export default function Page() {

  const linktreeList = [
    {
      alt: 'Formação Dona com conhecimento prático de +20 anos',
      imagePath: 'formacao',
      href: 'https://formacao.donadoplantao.com.br/v4?utm_campaign=apl&utm_medium=insta&utm_source=org&utm_content=links-importante'
    },
    {
      alt: 'Aplicação para a nossa Pós em Urgência e Emergência com Ênfase em Inovação',
      imagePath: 'apl',
      href: 'https://aplicacao.donadoplantao.com.br/v1?utm_campaign=apl&utm_medium=insta&utm_source=org&utm_content=links-importantes'
    },
    // {
    //   alt: 'Seminário: Tomada de Decisão na Intercorrência',
    //   imagePath: 'seminario',
    //   href: 'https://seminario.donadoplantao.com.br/v2-org?utm_campaign=apl&utm_medium=insta&utm_source=org&utm_content=links-importantes'
    // },
    {
      alt: 'Guia: Intercorrência Segura valor promocional de R$10',
      imagePath: 'guia',
      href: 'https://guia.donadoplantao.com.br/?utm_campaign=gis&utm_medium=insta&utm_source=org&utm_content=links-importantes'
    },
    {
      alt: 'Canal no Youtube',
      imagePath: 'yt',
      href: 'https://www.youtube.com/@donadoplantao'
    },
    {
      alt: 'Trabalhe Conosco',
      imagePath: 'trabalhe',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSfd1jM_x6QSA6WGn2tmeWhcigsbN0mfYmBuRelyddR-RNWt_Q/viewform?usp=dialog'
    },
  ]

  return (
    <main className="min-h-screen w-full bg-image bg-zinc-950">
      <section className="w-full px-4 pb-24 pt-56 sm:pt-96 flex justify-center">
        <div className="w-full max-w-xl">
          <ul className="flex flex-col gap-2">
            {linktreeList.map((item, index: number) => (
              <li className="relative ">
                <Image
                  src={`/images/${item.imagePath}.png`}
                  alt={item.alt}
                  layout="responsive"
                  height={135}
                  width={397}
                  objectFit="contain"
                  className="rounded-2xl"
                />
                <a href={item.href} className="absolute top-0 left-0 w-full h-full" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
