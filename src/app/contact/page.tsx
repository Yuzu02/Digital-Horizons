import ContactForm from "@/components/contact/ContactForm";
import DHLogo from "@/components/layout/Logo/DHLogo";
export default function ContactPage() {
  return (
    <section className="mt-8 size-full lg:mt-28">
      <div className="mx-auto flex max-w-lg flex-col gap-2 rounded-md shadow-xl dark:bg-gray-950/50 lg:max-w-screen-lg lg:flex-row">
        <div
          className="w-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/assets/Contact/Bg-FromContact.png)",
          }}
        >
          <div className="relative flex size-full min-h-44 flex-col items-center justify-center gap-6 bg-scrollArea/10 dark:bg-scrollArea-dark/40 lg:justify-normal">
            <div className="flex h-1/3 justify-center font-extrabold text-lightMode">
              <DHLogo />
            </div>
            <div className="text-center text-lightMode">
              <h1 className="mb-4 text-4xl font-bold">Contactanos</h1>
              <p className="text-lg">Estamos aquí para ayudarte</p>
            </div>
          </div>
        </div>
        <div className="flex size-full flex-col gap-4 px-8 py-8">
          <h2 className="text-center text-2xl font-semibold">
            Envianos un mensaje
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
