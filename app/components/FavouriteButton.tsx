'use client'
import { useRouter } from "next/navigation";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { toast } from 'react-toastify';


export default function FavouriteButton({ id, table }: any): JSX.Element {

    const router = useRouter();
    let dbtable = table;
    let baseurl: string;

    async function addFlag(id: any) {


        try {
            const result = await fetch(`/api/updateflag/?&id=${id}`)
            const newRows = await result.json();
            toast('Added to bookmarks 👍', { hideProgressBar: true, autoClose: 2000, type: 'success' })
            router.refresh();
        } catch (error) {
            console.log("error adding fav " + error);
        }
    }


    return (
        <div>
            <button onClick={e => addFlag(id)} id="favouriteBtn" className="border-white border-2 text-white font-bold py-2 px-4 rounded" >
                <BookmarkIcon className='text-white group-hover:text-gray-300 h-6 w-6 flex-shrink-0' />
            </button >
        </div>)
}

