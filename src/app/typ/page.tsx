import { LinkItem } from "@/components/congratulations/link-item";
import ProgressBar from "@/components/progress-bar";
import type { Metadata } from "next";
import Image from "next/image";

const steps = [{ id: 1 }, { id: 2 }, { id: 3 }];

export const metadata: Metadata = {
	title: "Último Passo - Dona do Plantão",
	description:
		"Finalize o processo para garantir seu desconto exclusivo e receba avisos importantes da abertura do Lote de Ano Novo. Acesse o grupo exclusivo do WhatsApp e fique pronta para aproveitar os bônus.",
	category: "Confirmação de Inscrição",
	keywords: [
		"Dona do Plantão",
		"Confirmação de Inscrição",
		"Desconto Exclusivo",
		"Lote de Ano Novo",
		"Grupo WhatsApp",
		"Matrícula",
		"Avisos Importantes",
		"Bônus Especiais",
	],
};

export default function Page() {
	return (
		<>
			<div className="min-h-screen bg-typ flex flex-col items-center justify-center border-b-4 border-[#c4ecf4] px-4 pb-8">
				<header className="bg-zinc-800 fixed top-0 left-0 w-full z-[9999] flex justify-center items-center py-2 shadow-lg">
					<div className="relative w-[240px] h-[32px]">
						<Image
							src="/images/logo.webp"
							alt="Logo Dona"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</header>

				<main className="w-full max-w-2xl flex flex-col items-center justify-center mt-16">
					<div className="text-center text-white font-bold flex flex-col gap-6 items-center">
						<h2 className="text-3xl leading-snug">
							ÚLTIMO PASSO para você garantir o seu desconto 👇
						</h2>

						<ProgressBar steps={steps} currentStep={3} showPercentage={true} />

						<section className="text-lg text-left space-y-4 bg-zinc-700 p-6 rounded-lg shadow-lg">
							<p>
								<strong>IMPORTANTE:</strong> No dia{" "}
								<span className="text-primary">3 de Fevereiro</span>, você
								poderá se matricular ainda com o valor de 2024 no{" "}
								<strong>Lote de Ano Novo</strong>, antes do reajuste para 2025.
								Além disso, bônus especiais serão oferecidos às primeiras
								matriculadas.
							</p>
							<p>
								Para garantir o desconto e receber os avisos, é necessário
								entrar no grupo exclusivo do WhatsApp. Não se esqueça de salvar
								nosso contato para priorizar o envio do link.
							</p>
							<p className="text-yellow-400 font-semibold">
								Sem este passo, não poderemos garantir sua inscrição!
							</p>
						</section>

						<div className="flex sm:flex-row flex-col justify-center items-center gap-6">
							<LinkItem
								icon="/images/whatsapp.png"
								alt="Logo WhatsApp"
								href="https://devzapp.com.br/api-engennier/campanha/api/redirect/66db3b85dc4be6000187554b"
								label="Confirmar Inscrição"
							/>
						</div>
					</div>
				</main>
			</div>

			<footer className="px-4 text-center -mt-2 bg-zinc-800 py-4 flex justify-center text-white">
				<p>
					Dona do Plantão. Todos os direitos reservados. Políticas de
					Privacidade.
				</p>
			</footer>
		</>
	);
}
