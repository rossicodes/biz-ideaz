'use client'
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

export default function Pagination({ count, table }: { count: number, table: string }) {

    const [skip, setSkip] = useState(0);
    const [itemsCount, setItemsCount] = useState(count);


    const searchParams = useSearchParams();

    const router = useRouter();


    const handlePrevClick = async () => {
        if (skip === 0) {
            return;
        }

        let href = `/?&skip=${skip - 10}`
        setSkip((skip) => skip - 10)
        router.push(href)
        console.log(href)
    };

    const handleNextClick = async () => {
        if (itemsCount === 0) {
            return;
        }
        console.log(table)
        let href = `/?&skip=${skip + 10}`
        setSkip((skip) => skip + 10)
        router.push(href)
        console.log(href)
    }

    return (
        <nav className="flex items-center justify-between border-t border-white sm:px-0">
            <div className="-mt-px w-0 flex-1 justify-start inline-flex items-center pt-4 pl-1">
                <button onClick={handlePrevClick} className="flex flex-row bg-gray-700 rounded-md py-1 px-2 text-sm font-medium hover:text-white">
                    <ArrowLongLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                    <p>Previous</p>


                </button>
            </div>
            <div className="hidden md:-mt-px md:flex">
                <a
                    href="#"
                    className={`inline-flex items-center border-t-1 px-4 pt-4 text-sm font-medium`}
                    aria-current="page"
                >
                    1
                </a>
                {/* Current: "border-gray-500 text-gray-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                <a
                    href="#"
                    className={`inline-flex items-center border-t-1 px-4 pt-4 text-sm font-medium`}

                >
                    2
                </a>
                <a
                    href="#"
                    className={`inline-flex items-center border-t-1 px-4 pt-4 text-sm font-medium`}

                >
                    3
                </a>
                <span className="inline-flex items-center border-t-1 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                    ...
                </span>
                <a
                    href="#"
                    className={`inline-flex items-center border-t-1 px-4 pt-4 text-sm font-medium`}
                    aria-current="page"
                >
                    8
                </a>
                <a
                    href="#"
                    className={`inline-flex items-center border-t-1 px-4 pt-4 text-sm font-medium`}

                >
                    9
                </a>
                <a
                    href="#"
                    className={`inline-flex items-center border-t-1 px-4 pt-4 text-sm font-medium`}

                >
                    10
                </a>
            </div>
            <div className="-mt-px w-0 flex-1 justify-end inline-flex items-center pt-4 pl-1 ">
                <button onClick={handleNextClick} className="flex flex-row bg-gray-700 rounded-md py-1 px-2 text-sm font-medium hover:text-white">
                    <p>Next</p>
                    <ArrowLongRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />

                </button>
            </div>
        </nav >
    )
}