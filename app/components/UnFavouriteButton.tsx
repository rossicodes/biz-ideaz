'use client'
import { useRouter } from "next/navigation";
import { BookmarkSlashIcon } from "@heroicons/react/20/solid";

export default function UnFavouriteButton({ id, table }: any): JSX.Element {

    const router = useRouter();
    let dbtable = table;
    let baseurl: string;

    async function removeFlag() {

        try {
            const result = await fetch(`/api/unflag/?&id=${id}`)
            const newRows = await result.json();

            router.refresh();
        } catch (error) {
            console.log("error adding fav " + error);
        }
    }


    return (

        <button onClick={e => removeFlag()} className="border-white border-2 text-white font-bold py-2 px-4 rounded" >
            <BookmarkSlashIcon className='text-white group-hover:text-gray-300 h-6 w-6 flex-shrink-0' />
        </button >)
}