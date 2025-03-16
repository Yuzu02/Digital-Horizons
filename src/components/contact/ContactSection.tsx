import DHLogo from "@/components/layout/Logo/DHLogo";
import ContactForm from "@/components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-lg flex-col gap-2 rounded-md shadow-xl lg:flex lg:max-w-(--breakpoint-lg) lg:flex-row dark:bg-gray-950/50">
        <div
          className="w-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/assets/Contact/Bg-FromContact.png)",
          }}
        >
          <div className="bg-scrollArea/10 dark:bg-scrollArea-dark/40 relative flex size-full min-h-44 flex-col items-center justify-center gap-6 lg:justify-normal">
            <div className="text-lightMode flex h-1/3 justify-center font-extrabold">
              <DHLogo />
            </div>
            <div className="text-lightMode text-center">
              <h1 className="mb-4 text-4xl font-bold">Contactanos</h1>
              <p className="text-lg">Estamos aquí para ayudarte</p>
            </div>
          </div>
        </div>
        <div className="flex size-full flex-col gap-4 px-8 py-8">
          <h2 className="text-center text-2xl font-semibold">
            Envíanos un mensaje
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
