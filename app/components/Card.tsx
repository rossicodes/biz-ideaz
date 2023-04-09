import { Company } from '../page';
import Link from 'next/link';
import {
    StarIcon,
} from '@heroicons/react/24/solid'


interface Props {
    company: Company;
}

function capitalize(str: String | null | undefined): String {
    if (str === null || str === undefined) { return ''; } else {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}

function nFormatter(num: any, digits: any) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

const accountType: { [key: string]: string } = {
    "accounts-with-accounts-type-full": "Full",
    "accounts-with-accounts-type-full-group": "Full Group",
    "accounts-with-accounts-type-initial": "Initial",
    "accounts-with-accounts-type-interim": "Interim",
    "accounts-with-accounts-type-group": "Group",
    "accounts-with-accounts-type-medium": "Medium",
    "accounts-with-accounts-type-medium-group": "Medium Group",
    "accounts-with-accounts-type-small": "Small",
    "accounts-with-accounts-type-small-group": "Small Group",
    "accounts-with-accounts-type-total-exemption-full": "Exemption Full",
    "accounts-with-accounts-type-total-exemption-small": "Exemption Small",
    "accounts-with-accounts-type-partial-exemption": "Partial Exemption",
};

export default function Card({ company, table }: any): JSX.Element {

    return (
        <Link href={`/business/${company.slug}`}>
            <div className='flex bg-gray-800 w-full rounded-lg shadow-lg p-6'>
                <div className="flex w-full justify-between flex-col">

                    <div>
                        <div className="flex flex-col">
                            <div className="flex">
                                <h3 className="text-base font-extrabold">{company.name} </h3>
                                {company.shortlist ? <StarIcon className="h-5 w-5 text-yellow-400 ml-2" /> : <></>}
                            </div>
                            <p className="truncate text-sm">{capitalize(company.address_1)}</p>
                            <p className="truncate text-sm">{capitalize(company.town)}</p>
                            <p className="truncate text-sm">{company.postcode}</p>
                            <div className='flex gap-2 mt-2 text-xs font-bold'>

                                {company.accounts_type_1 ?
                                    <div className={'my-2 rounded-md px-2 py-0.5 text-xs bg-red-100 text-red-600'}>
                                        <p>
                                            {"Accounts: " + accountType[company.accounts_type_1]}
                                        </p>
                                    </div>
                                    : <></>}
                                {company.reviewed ?
                                    <div className={'w-min my-2 rounded-md px-2 py-0.5 text-xs bg-green-100 text-green-600'}>
                                        <p>
                                            Reviewed
                                        </p>
                                    </div>
                                    : <></>}
                                {company.flag ?
                                    <div className={'w-min my-2 rounded-md px-2 py-0.5 text-xs bg-purple-100 text-purple-600'}>
                                        <p>
                                            Favourite
                                        </p>
                                    </div>
                                    : <></>}

                            </div>
                            <div>
                                {company?.principal_activity ?
                                    <div className={'w-64 my-2 rounded-md px-2 py-0.5 text-xs bg-indigo-100 text-indigo-600'}>
                                        <p className='truncate ...'>
                                            {company?.principal_activity}
                                        </p>
                                    </div>
                                    : <></>}
                            </div>
                        </div>
                    </div>

                </div >
                {company?.flag ? <>
                    <div className="w-64 p-4 bg-gray-700 rounded-md shadow-sm">
                        <div className="flex h-full flex-col justify-between text-sm">

                            <div className="flex flex-row justify-between p-1 rounded-lg ">
                                <p className="text-white">Turnover: </p>
                                <p className="font-semibold tracking-tight text-green-500">{company?.turnover ? nFormatter(company.turnover, 1) : "No data"}</p>
                            </div>

                            <div className="flex flex-row justify-between p-1 rounded-lg ">
                                <p className="text-white">Cost Of Sales: </p>
                                <p className="font-semibold tracking-tight text-green-500">{company?.cost_of_sales ? nFormatter(company.cost_of_sales, 1) : "No data"}</p>
                            </div>

                            <div className="flex flex-row justify-between p-1 rounded-lg" >
                                <p className="text-white">Gross Profit:: </p>
                                <p className="font-semibold tracking-tight text-green-500">{company?.profit ? nFormatter(company.profit, 1) : "No data"}</p>
                            </div>
                            <div className="flex flex-row justify-between p-1 rounded-lg ">
                                <p className="text-white">Profit Margin: </p>
                                <p className="font-semibold tracking-tight text-green-500">{company?.profit ? Math.round(company.profit / company.turnover * 100) + "%" : "No data available"}</p>
                            </div>
                        </div>
                    </div>
                </> : <></>}
            </div>
        </Link >
    )

}