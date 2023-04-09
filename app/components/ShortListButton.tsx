'use client'
import { useRouter } from "next/navigation";
import { StarIcon } from "@heroicons/react/24/outline";
import { toast } from 'react-toastify';


export default function ShortListButton({ id, table }: any): JSX.Element {

    const router = useRouter();

    let dbtable = table;
    let baseurl: string;

    async function addShortList(id: any) {
        try {
            const result = await fetch(`/api/addshortlist?&id=${id}`)
            const newRows = await result.json();
            toast('Added to shortlist 👍', { hideProgressBar: true, autoClose: 2000, type: 'success' })
            router.refresh();
        } catch (error) {
            console.log("error adding fav " + error);
        }
    }


    return (
        <div>
            <button onClick={e => addShortList(id)} id="favouriteBtn" className="border-white border-2 text-white font-bold py-2 px-4 rounded" >
                <StarIcon className='text-white group-hover:text-gray-300 h-6 w-6 flex-shrink-0' />
            </button >
        </div>)
}
