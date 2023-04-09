'use client'
import { useRouter } from "next/navigation";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

export default function UnReviewedButton({ id, table }: any): JSX.Element {

    let dbtable = table;
    let baseurl;

    const router = useRouter();

    async function unreview() {

        try {
            const result = await fetch(`/api/unreview?&id=${id}`)
            const newRows = await result.json();

            router.refresh();
        } catch (error) {
            console.log("error adding fav " + error);
        }
    }


    return (

        <button onClick={e => unreview()} className="border-white border-2 text-white font-bold py-2 px-4 rounded" >
            <EyeSlashIcon className='text-white group-hover:text-gray-300 h-6 w-6 flex-shrink-0' />
        </button >)
}