/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

export default function Modal({ open, setOpen, index }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={
                "relative inline-block overflow-hidden text-left " +
                "align-bottom transition-all transform sm:my-8 sm:align-middle sm:max-w-xl w-full h-64 sm:h-48 "
              }
            >
              <img src="/blue-bg.png" className="object-fill w-full h-full" />
              <div className="absolute inset-0 mt-6 mb-6 ml-10 mr-10 overflow-y-auto overflow-x-clip">
                {index == 0 ? (
                  <div>
                    <p>
                      The UK and US decided to stop fossil fuel imports from
                      Russia therefore the EU is the largest region bankrolling
                      the ongoing war.
                    </p>
                    Find sources below:
                    <a
                      href="https://fortune.com/2022/03/09/europe-wean-1-billion-russia-energy-habit/"
                      className="block overflow-hidden leading-loose text-white underline truncate"
                      target="_blank"
                      rel="noreferrer"
                    >
                      How Europe is trying to wean itself off its $1 billion a
                      day Russia energy habit
                    </a>
                    <a
                      href="https://www.voanews.com/a/despite-sanctions-europe-continues-to-bankroll-russia-for-gas-oil/6465223.html"
                      className="block overflow-hidden leading-loose text-white underline truncate "
                      target="_blank"
                      rel="noreferrer"
                    >
                      Despite Sanctions, Europe Continues to Bankroll Russia for
                      Gas, Oil
                    </a>
                  </div>
                ) : undefined}
                {index == 1 ? <div>TWO</div> : undefined}
                {index == 2 ? <div>THREE</div> : undefined}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
