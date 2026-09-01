import { useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.target;
    const formData = new FormData(form);

    formData.append(
      "_subject",
      "New Consultation Enquiry - SAKHA Restaurant Consultancy"
    );

    formData.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sakharevolutions@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#211b17] py-24 text-[#f2ede4] sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">

        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">

          {/* LEFT SIDE */}

          <div>
            <p className="mini-label text-[#c6aa7d]">
              Start a Conversation
            </p>

            <h2 className="serif mt-8 text-[55px] leading-[.9] tracking-[-.035em] sm:text-[80px] lg:text-[96px]">
              Have a
              <br />
              restaurant
              <br />
              <span className="italic text-[#b99a68]">
                in mind?
              </span>
            </h2>

            <p className="mt-10 max-w-md text-sm font-light leading-7 text-white/45">
              Whether you are developing a new hospitality concept or looking
              to improve an existing operation, tell us a little about your
              project and start the conversation.
            </p>

            <div className="mt-14 border-t border-white/15 pt-7">

              <p className="mini-label text-white/30">
                Based In
              </p>

              <p className="serif mt-4 text-2xl">
                Dehradun, Uttarakhand
              </p>

              <p className="mt-2 text-sm font-light text-white/40">
                Consulting across India
              </p>

            </div>

            <div className="mt-8 border-t border-white/15 pt-7">

              <p className="mini-label text-white/30">
                Enquiries
              </p>

              <a
                href="mailto:sakharevolutions@gmail.com"
                className="mt-4 inline-block text-sm text-[#c6aa7d] transition hover:text-white"
              >
                sakharevolutions@gmail.com
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}

          <div>

            {!submitted ? (

              <form
                onSubmit={handleSubmit}
                className="border-t border-white/15"
              >

                {/* NAME */}

                <label className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[140px_1fr] sm:items-center">

                  <span className="text-[9px] uppercase tracking-[.2em] text-[#b99a68]">
                    Name
                  </span>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full bg-transparent text-lg text-white outline-none placeholder:text-white/20"
                  />

                </label>

                {/* EMAIL */}

                <label className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[140px_1fr] sm:items-center">

                  <span className="text-[9px] uppercase tracking-[.2em] text-[#b99a68]">
                    Email
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-transparent text-lg text-white outline-none placeholder:text-white/20"
                  />

                </label>

                {/* BUSINESS */}

                <label className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[140px_1fr] sm:items-center">

                  <span className="text-[9px] uppercase tracking-[.2em] text-[#b99a68]">
                    Business
                  </span>

                  <select
                    name="business"
                    defaultValue=""
                    required
                    className="w-full cursor-pointer bg-[#211b17] text-lg text-white outline-none"
                  >

                    <option value="" disabled>
                      Select project type
                    </option>

                    <option value="New Restaurant">
                      New Restaurant
                    </option>

                    <option value="Existing Restaurant">
                      Existing Restaurant
                    </option>

                    <option value="Cafe">
                      Café
                    </option>

                    <option value="Cloud Kitchen">
                      Cloud Kitchen
                    </option>

                    <option value="Hotel / Hospitality">
                      Hotel / Hospitality
                    </option>

                    <option value="Institutional Dining">
                      Institutional Dining
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </label>

                {/* MESSAGE */}

                <label className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[140px_1fr]">

                  <span className="text-[9px] uppercase tracking-[.2em] text-[#b99a68]">
                    Project
                  </span>

                  <textarea
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell us about your restaurant or hospitality project..."
                    className="w-full resize-none bg-transparent text-lg leading-8 text-white outline-none placeholder:text-white/20"
                  />

                </label>

                {/* ERROR */}

                {error && (
                  <p className="mt-6 text-sm text-red-300">
                    {error}
                  </p>
                )}

                {/* BUTTON AREA */}

                <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-xs text-[11px] font-light leading-5 text-white/30">
                    Share a few details and we will get back to you regarding
                    your project.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-fit items-center gap-5 bg-[#b99a68] px-7 py-4 text-[10px] uppercase tracking-[.18em] text-[#171411] transition hover:bg-[#d0b27e] disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {loading ? (
                      <>
                        Sending
                        <Loader2
                          size={15}
                          className="animate-spin"
                        />
                      </>
                    ) : (
                      <>
                        Request Consultation

                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </>
                    )}

                  </button>

                </div>

              </form>

            ) : (

              /* SUCCESS */

              <div className="flex min-h-[470px] flex-col justify-center border-y border-white/15">

                <div className="flex h-12 w-12 items-center justify-center border border-[#b99a68]">

                  <Check
                    size={20}
                    className="text-[#b99a68]"
                  />

                </div>

                <p className="mini-label mt-10 text-[#b99a68]">
                  Enquiry Received
                </p>

                <h3 className="serif mt-5 text-4xl leading-none sm:text-5xl">
                  Thank you for
                  <br />
                  getting in touch.
                </h3>

                <p className="mt-7 max-w-md text-sm font-light leading-7 text-white/45">
                  Your project enquiry has been submitted successfully. We will
                  review the details and get back to you.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-10 w-fit border-b border-[#b99a68] pb-2 text-[9px] uppercase tracking-[.2em] text-[#b99a68]"
                >
                  Send Another Enquiry
                </button>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;