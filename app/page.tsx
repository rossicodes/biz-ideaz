import { PrismaClient } from '@prisma/client'
import Card from './components/Card';
import Pagination from './components/Pagination';

export const revalidate = 1;

interface SearchParams {
  accounts?: string;
  skip?: number;
}

export interface Company {
  id: number | null | undefined;
  name: string | null | undefined;
  number: string | null | undefined;
  address_1: string | null | undefined;
  address_2: string | null | undefined;
  town: string | null | undefined;
  county: string | null | undefined;
  postcode: string | null | undefined;
  incorporation_date: string | null | undefined;
  accounts_last_date: string | null | undefined;
  flag: boolean | null | undefined;
  accounts_link_1: string | null | undefined;
  accounts_link_2: string | null | undefined;
  principal_activity: string | null | undefined;
  turnover: string | null | undefined;
  cost_of_sales: string | null | undefined;
  gross_profit: string | null | undefined;
  admin_expenses: string | null | undefined;
  profit: string | null | undefined;
  reviewed: boolean | null | undefined;
  slug: string | null | undefined;
  accounts_type_1: string | null | undefined;
  accounts_type_2: string | null | undefined;
  website_1: string | null | undefined;
  shortlist: boolean | null | undefined;
}

const skip = 0;
const take = 10;

const prisma = new PrismaClient()

async function fetchData(searchParams: SearchParams) {

  const param = searchParams.skip ? parseInt(searchParams.skip.toString()) : 0;
  const skip = param ? param : 0;
  console.log("skip: " + param)
  const companies = await prisma.ecomm.findMany({
    where: {
      accounts_link_1: {
        not: null
      },
      accounts_type_1: {
        equals: "accounts-with-accounts-type-full"
      }
    },
    select: {
      id: true,
      name: true,
      number: true,
      address_1: true,
      address_2: true,
      town: true,
      county: true,
      postcode: true,
      incorporation_date: true,
      accounts_last_date: true,
      flag: true,
      accounts_link_1: true,
      accounts_link_2: true,
      principal_activity: true,
      turnover: true,
      cost_of_sales: true,
      gross_profit: true,
      admin_expenses: true,
      profit: true,
      reviewed: true,
      slug: true,
      accounts_type_1: true,
      accounts_type_2: true,
      website_1: true,
      shortlist: true,
    },
    take: 10,
    skip: skip,
    orderBy: {
      name: 'asc',
    },
  });
  return companies
}

const table = 'ecomm'

export default async function Home({ searchParams }: { searchParams: SearchParams }) {

  const companies = await fetchData(searchParams)
  const count = companies.length
  //console.log(count)

  return (
    <div className="h-full flex font-bold mb-auto" >

      <div className="flex flex-col font-bold w-full">
        {count > 0 ? <>
          <div className="w-full">
            <ul role="list" className="grid grid-cols-1 gap-4">

              {companies.map((company) => (
                <li className="w-full" key={company.number}>
                  <Card company={company} table={table} />
                </li>
              ))}
            </ul>
          </div>
        </> : <><div className='flex flex-col justify-center items-center h-screen'>No more results</div></>}
        <div className="w-full pt-6">
          <Pagination count={count} table={table} />
        </div>
      </div >
    </div >
  )
}