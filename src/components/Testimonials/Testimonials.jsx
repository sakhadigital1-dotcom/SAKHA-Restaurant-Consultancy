import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2, Star } from "lucide-react";

function Testimonials() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [status, setStatus] = useState("idle");

  const reviews = [
    {
      quote:
        "A successful restaurant is not built only on great food. It is built on strong systems.",
      name: "SAKHA Restaurant Consultancy",
      role: "Hospitality Perspective",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!rating) {
      alert("Please select a rating.");
      return;
    }

    setStatus("loading");

    try {
      const formData = new FormData(event.target);

      formData.append("Rating", `${rating} / 5`);
      formData.append(
        "_subject",
        `New SAKHA Client Review - ${rating} Star Rating`
      );
      formData.append("_template", "table");

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

      if (!response.ok) {
        throw new Error("Review submission failed");
      }

      event.target.reset();
      setRating(0);
      setHoveredRating(0);
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="testimonials"
      className="bg-[#d9c8ac] py-24 text-[#211b17] sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">

        {/* INTRO */}

        <div className="grid gap-12 border-b border-[#211b17]/15 pb-16 lg:grid-cols-[.55fr_1.45fr]">

          <div>
            <p className="mini-label text-[#7c6342]">
              Client Experiences
            </p>

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#675b4c]">
              Real feedback matters. Client experiences help us understand what
              worked, what created value and where the consultancy made a
              meaningful difference.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="serif max-w-5xl text-[52px] font-medium leading-[.95] tracking-[-.035em] sm:text-[72px] lg:text-[90px]">
              Built on trust,
              <br />
              strengthened by
              <span className="italic text-[#8f6e42]">
                {" "}experience.
              </span>
            </h2>
          </motion.div>

        </div>

        {/* FEATURED REVIEW */}

        <div className="grid gap-12 border-b border-[#211b17]/15 py-20 lg:grid-cols-[.55fr_1.45fr]">

          <div>
            <p className="mini-label text-[#7c6342]">
              Perspective
            </p>
          </div>

          <div>
            {reviews.map((review, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      strokeWidth={1.4}
                      className="text-[#8f6e42]"
                    />
                  ))}
                </div>

                <blockquote className="serif mt-10 max-w-5xl text-[40px] leading-[1.03] sm:text-[56px] lg:text-[68px]">
                  “A successful restaurant is not built only on great food.
                  <span className="italic">
                    {" "}It is built on strong systems.
                  </span>
                  ”
                </blockquote>

                <div className="mt-10 flex items-center gap-5">
                  <div className="h-px w-14 bg-[#211b17]/40" />

                  <div>
                    <p className="text-[10px] uppercase tracking-[.22em]">
                      {review.name}
                    </p>

                    <p className="mt-2 text-[11px] text-[#756858]">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

        {/* REVIEW FORM */}

        <div className="grid gap-14 pt-20 lg:grid-cols-[.55fr_1.45fr]">

          <div>
            <p className="mini-label text-[#7c6342]">
              Share Your Experience
            </p>

            <h3 className="serif mt-7 max-w-sm text-4xl leading-[1] sm:text-5xl">
              Worked with
              <br />
              <span className="italic text-[#8f6e42]">
                SAKHA?
              </span>
            </h3>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#675b4c]">
              Share your experience with us. Submitted reviews are received
              privately and can be published after approval.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-[#211b17]/20"
          >

            {/* STAR RATING */}

            <div className="border-b border-[#211b17]/15 py-8">

              <p className="text-[10px] uppercase tracking-[.2em] text-[#675b4c]">
                Your Rating
              </p>

              <div className="mt-5 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const active =
                    star <= (hoveredRating || rating);

                  return (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                      className="transition-transform duration-200 hover:scale-110"
                      aria-label={`${star} star rating`}
                    >
                      <Star
                        size={30}
                        strokeWidth={1.3}
                        className={
                          active
                            ? "fill-[#8f6e42] text-[#8f6e42]"
                            : "text-[#8f6e42]/40"
                        }
                      />
                    </button>
                  );
                })}

                {rating > 0 && (
                  <span className="ml-4 text-xs uppercase tracking-[.15em] text-[#675b4c]">
                    {rating} / 5
                  </span>
                )}
              </div>

            </div>

            {/* NAME */}

            <div className="grid gap-3 border-b border-[#211b17]/15 py-7 sm:grid-cols-[180px_1fr] sm:items-center">
              <label
                htmlFor="review-name"
                className="text-[10px] uppercase tracking-[.18em] text-[#675b4c]"
              >
                Your Name
              </label>

              <input
                id="review-name"
                name="Name"
                type="text"
                required
                placeholder="Full name"
                className="bg-transparent text-sm outline-none placeholder:text-[#746b60]/50"
              />
            </div>

            {/* BUSINESS */}

            <div className="grid gap-3 border-b border-[#211b17]/15 py-7 sm:grid-cols-[180px_1fr] sm:items-center">
              <label
                htmlFor="review-business"
                className="text-[10px] uppercase tracking-[.18em] text-[#675b4c]"
              >
                Business
              </label>

              <input
                id="review-business"
                name="Business"
                type="text"
                placeholder="Restaurant / Hotel / Brand"
                className="bg-transparent text-sm outline-none placeholder:text-[#746b60]/50"
              />
            </div>

            {/* EMAIL */}

            <div className="grid gap-3 border-b border-[#211b17]/15 py-7 sm:grid-cols-[180px_1fr] sm:items-center">
              <label
                htmlFor="review-email"
                className="text-[10px] uppercase tracking-[.18em] text-[#675b4c]"
              >
                Email
              </label>

              <input
                id="review-email"
                name="Email"
                type="email"
                required
                placeholder="name@example.com"
                className="bg-transparent text-sm outline-none placeholder:text-[#746b60]/50"
              />
            </div>

            {/* REVIEW */}

            <div className="grid gap-4 border-b border-[#211b17]/15 py-7 sm:grid-cols-[180px_1fr]">
              <label
                htmlFor="review-message"
                className="text-[10px] uppercase tracking-[.18em] text-[#675b4c]"
              >
                Your Review
              </label>

              <textarea
                id="review-message"
                name="Review"
                required
                rows="5"
                placeholder="Tell us about your experience..."
                className="resize-none bg-transparent text-sm leading-7 outline-none placeholder:text-[#746b60]/50"
              />
            </div>

            {/* SUBMIT */}

            <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-md text-[11px] leading-5 text-[#746858]">
                Reviews are not automatically published. They are reviewed
                before appearing publicly on the website.
              </p>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-fit items-center gap-4 bg-[#211b17] px-7 py-4 text-[10px] uppercase tracking-[.18em] text-white disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    Sending
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />
                  </>
                ) : status === "success" ? (
                  <>
                    Review Sent
                    <Check size={15} />
                  </>
                ) : (
                  <>
                    Submit Review
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

            </div>

            {status === "success" && (
              <p className="mt-5 text-xs text-[#675b4c]">
                Thank you. Your review has been received successfully.
              </p>
            )}

            {status === "error" && (
              <p className="mt-5 text-xs text-red-800">
                Review could not be submitted. Please try again.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;