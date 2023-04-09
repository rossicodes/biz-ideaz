'use client';
import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { PencilIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";


export default function CompanyInput({ id, table }: any): JSX.Element {
    const [editing, setEditing] = useState(false)

    const router = useRouter();
    const dbtable = table;

    async function addDetail(e: any) {

        let baseurl;

        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.target));

        console.log(values);
        try {
            const result = await fetch(`/api/editcompany/?&id=${id}&business=${values.business}&website=${values.website}&turnover=${values.turnover}&costofsales=${values.costofsales}&profit=${values.profit}`)
            const newResult = await result.json();
            console.log(newResult);
            setEditing(false);
            router.refresh();
        } catch (error) {
            console.log("error adding fav " + error);
        }
    }

    if (editing) {

        return (


            <div className="">
                <button onClick={() => setEditing(false)} className="border-white border-2 text-white font-bold py-2 px-4 rounded">

                    <PencilIcon className='text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6 flex-shrink-0' />

                </button >

                <div className='w-1/3 bg-gray-700 p-6 mt-6 rounded-md absolute'>
                    <form onSubmit={addDetail}>

                        <div className="w-full relative rounded-md rounded-b-none px-3 pb-1.5">

                            <label htmlFor="name" className="block text-xs font-xs">
                                Business Model
                            </label>
                            <input
                                type="text"
                                name="business"
                                id="business"
                                className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 block bg-gray-900 w-full border-0 rounded-md p-1 mt-1 placeholder: sm:text-sm sm:leading-6"
                                placeholder="Online retail of collectable coins"
                            />
                        </div>
                        <div className="relative rounded-md rounded-t-none px-3 pt-2.5 pb-1.5">
                            <label htmlFor="job-title" className="block text-xs font-xs ">
                                Website
                            </label>
                            <input
                                type="text"
                                name="website"
                                id="website"
                                className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 block bg-gray-900 w-full border-0 rounded-md p-1 mt-1 placeholder: sm:text-sm sm:leading-6"
                                placeholder="www.thebusiness.com"
                            />
                        </div>
                        <div className="relative rounded-md rounded-t-none px-3 pt-2.5 pb-1.5">
                            <label htmlFor="job-title" className="block text-xs font-xs ">
                                Turnover
                            </label>
                            <input
                                type="text"
                                name="turnover"
                                id="turnover"
                                className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 block bg-gray-900 w-full border-0 rounded-md p-1 mt-1 placeholder: sm:text-sm sm:leading-6"
                                placeholder="12,000,000"
                            />
                        </div>
                        <div className="relative rounded-md rounded-t-none px-3 pt-2.5 pb-1.5">
                            <label htmlFor="job-title" className="block text-xs font-xs">
                                Cost Of Sales
                            </label>
                            <input
                                type="text"
                                name="costofsales"
                                id="costofsales"
                                className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 block bg-gray-900 w-full border-0 rounded-md p-1 mt-1 placeholder: sm:text-sm sm:leading-6"
                                placeholder="2,000,000"
                            />
                        </div>
                        <div className="relative rounded-md rounded-t-none px-3 pt-2.5 pb-1.5">
                            <label htmlFor="job-title" className="block text-xs font-xs">
                                Profit
                            </label>
                            <input
                                type="text"
                                name="profit"
                                id="profit"
                                className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 block bg-gray-900 w-full border-0 rounded-md p-1 mt-1 placeholder: sm:text-sm sm:leading-6"
                                placeholder="1,000,000"
                            />
                        </div>
                        <button type="submit" className='border-white border-2 text-white font-bold py-2 px-4 rounded'>
                            Submit
                        </button>
                    </form >
                </div>

            </div >
        )
    } else {
        return (
            <div className="">
                <button onClick={() => setEditing(true)} className="border-white border-2 text-white font-bold py-2 px-4 rounded">
                    <PencilIcon className='text-white group-hover:text-gray-300 h-6 w-6 flex-shrink-0' />
                </button >
            </div>

        )
    }
}