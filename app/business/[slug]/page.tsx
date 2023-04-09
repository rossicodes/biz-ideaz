import { PrismaClient } from '@prisma/client'
import { PaperClipIcon, EyeIcon } from '@heroicons/react/20/solid'
import FavouriteButton from '../../components/FavouriteButton'
import UnFavouriteButton from '../../components/UnFavouriteButton'
import CompanyInput from '@/app/components/CompanyInput'
import UnReviewedButton from '@/app/components/UnReviewedButton'
import ReviewedButton from '@/app/components/ReviewedButton'
import ShortListButton from '@/app/components/ShortListButton'
import UnShortListButton from '../../components/UnShortListButton'


const prisma = new PrismaClient()

const fetchData = async (slug: string) => {
    const data = await prisma.ecomm.findUnique({
        where: {
            slug: slug
        }
    })
    return data
}

const table = "ecomm"

export default async function BusinessDetails({ params }: { params: { slug: string } }) {
    const company = await fetchData(params.slug)



    return (
        <div className="h-screen w-full flex flex-col">
            <div className="flex bg-gray-800 p-3 mb-10 flex-row w-full justify-between rounded-md">
                <div className="">
                    {company?.shortlist ? <UnShortListButton id={company?.id} table={table} /> : <ShortListButton id={company?.id} table={table} />}
                </div>
                <div className="">
                    <CompanyInput id={company?.id} table={table} />
                </div>
                <div className="">
                    {company?.flag ? <UnFavouriteButton id={company?.id} table={table} /> : <FavouriteButton id={company?.id} table={table} />}
                </div>
                <div className="">
                    {company?.reviewed ? <UnReviewedButton id={company?.id} table={table} /> : <ReviewedButton id={company?.id} table={table} />}
                </div>
            </div>
            <div className="flex w-full flex-col">
                <div className="grid place-items-stretch">
                    <div className="overflow-hidden bg-gray-800 text-white shadow sm:rounded-lg">
                        <div className="flex flex-row justify-between">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-base font-semibold leading-6 ">{company?.name}</h3>
                                <p className="mt-1 max-w-2xl text-sm">{company?.sic_code_1}</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium ">Address</dt>
                                    <dd className="mt-1 text-sm ">{company?.address_1}</dd>
                                    <dd className="mt-1 text-sm ">{company?.address_2}</dd>
                                    <dd className="mt-1 text-sm ">{company?.county}</dd>
                                    <dd className="mt-1 text-sm ">{company?.country}</dd>
                                    <dd className="mt-1 text-sm ">{company?.postcode}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium ">Accounts Category</dt>
                                    <dd className="mt-1 text-sm ">{company?.accounts_category}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium ">Incorporation Date</dt>
                                    <dd className="mt-1 text-sm ">{company?.incorporation_date}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium">Next Accounts Due</dt>
                                    <dd className="mt-1 text-sm">{company?.accounts_due_date}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium">Website</dt>
                                    <dd className="mt-1 text-sm">{company?.website_1 ? company.website_1 : "No data available"}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium">Turnover</dt>
                                    <dd className="mt-1 text-sm">{company?.turnover ? company.turnover : "No data available"}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium">Cost Of Sales</dt>
                                    <dd className="mt-1 text-sm">{company?.cost_of_sales ? company.cost_of_sales : "No data available"}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium">Profit</dt>
                                    <dd className="mt-1 text-sm">{company?.profit ? company.profit : "No data available"}</dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium ">About</dt>
                                    <dd className="mt-1 text-sm ">
                                        {company?.principal_activity ? company?.principal_activity : 'No data available'}
                                    </dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium ">Accounts</dt>
                                    <dd className="mt-1 text-sm ">
                                        <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 " aria-hidden="true" />
                                                    <span className="ml-2 w-0 flex-1 truncate">{company?.accounts_type_1}</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a target="_blank" href={`${company?.accounts_link_1}`} rel="noopener noreferrer" className="font-medium  hover:text-gray-200">
                                                        👀
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 " aria-hidden="true" />
                                                    <span className="ml-2 w-0 flex-1 truncate">{company?.accounts_type_2}</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a target="_blank" href={`${company?.accounts_link_2}`} rel="noopener noreferrer" className="font-medium  hover:text-gray-200">
                                                        👀
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
