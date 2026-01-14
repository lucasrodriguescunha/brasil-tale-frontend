import { vips } from '@/data/vips'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

export const VipPage = () => {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">
        VIPs do Servidor
      </h1>

      <div className="flex flex-col gap-5">
        {vips.map((vip, id) => (
          <div
            key={id}
            className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
          >
            <AspectRatio
              ratio={71 / 26}
              className="border-border shadow-shadow rounded-base border-2"
            >
              <img
                src={vip.previewImage}
                alt={vip.name}
                className="rounded-base w-full"
              />
            </AspectRatio>

            <div className="text-main-foreground font-base mt-5">
              <h2 className="font-heading text-xl sm:text-2xl">
                {vip.name}
              </h2>

              <p className="mt-2">{vip.description}</p>

              <p className="mt-3 font-semibold">
                {vip.price} • {vip.duration}
              </p>

              <ul className="mt-4 list-disc pl-5 text-sm sm:text-base">
                {vip.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              <a
                href={vip.buyLink}
                target="_blank"
                className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY mt-6 block border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
              >
                Comprar VIP
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
