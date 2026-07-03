const FRAME_SRC = "/imgContactsPage/frame.jpg";

/** Decorative contacts hero frame — fixed to viewport, content scrolls over it. */
export const ContactsDecorBg = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed top-0 left-1/2 -z-10 m-auto w-full max-w-[1388px] -translate-x-1/2 bg-center bg-no-repeat obj1ect-cover px-5 aspect-square lg:aspect-video"
    style={{ backgroundImage: `url('${FRAME_SRC}')` }}
  />
);
