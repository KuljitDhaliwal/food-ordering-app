import React from 'react'
import { BsQrCodeScan } from "react-icons/bs";
import { HowItWorks, DirectVisitSteps, ChangeTableSteps } from '../StaticData/WorkSteps'
import { CiGlobe } from "react-icons/ci";
import { VscArrowSwap } from "react-icons/vsc";
import Table1 from '../assets/images/table1.png'
import Table2 from '../assets/images/table2.png'
function Guide() {
    return (
        <div className='max-w-7xl m-auto py-10 md:mt-10 mt-5 relative z-10 px-2'>
            <div>
                <div className='bg-yellow-400 px-3 py-2 items-center flex gap-2 w-fit m-auto rounded-2xl'>
                    <BsQrCodeScan />
                    <p>HOW IT WORKS</p>
                </div>
                <p className='md:text-2xl text-amber-700 text-center font-semibold mt-4'>How RiseView QR Ordering Works</p>
                <p className='text-sm text-gray-400 text-center'>Simple. Fast. Contactless</p>

                <div className='rounded-2xl mt-10 shadow bg-white p-5'>
                    <div className='flex gap-2 items-start'>
                        <div className="rounded-full p-2 bg-amber-700 grid place-items-center">
                            <CiGlobe className='text-white text-2xl' />
                        </div>
                        <div>
                            <p className='text-xl font-bold'>Way 1: Scan QR code</p>
                            <p className='text-gray-400 text-sm'>
                                It automatically detect your table number from QR code.
                            </p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch mt-10'>
                        {HowItWorks.map((item, key) => {
                            const Icon = item.icon
                            return <div key={key} className='bg-yellow-50 rounded-2xl p-3 shadow'>
                                <p className='bg-yellow-700 text-white m-auto -mt-8 w-8 h-8 grid place-items-center rounded-full'>{item.id}</p>
                                <Icon className='text-3xl text-center block mx-auto my-2 font-extralight' />
                                <p className='text-center'>{item.title}</p>
                                <p className='text-sm text-gray-400 text-center'>{item.description}</p>
                            </div>
                        })}
                    </div>

                    <div className='mt-4'>
                        <p className='text-2xl text-amber-700'>Please scan the QR code from table</p>
                        <div className="flex md:gap-10 gap-3 mt-4">
                            <div className='bg-amber-50 p-4 rounded-2xl shadow'>
                                <p className='font-bold'>Represents Table 1</p>
                                <img src={Table1} alt="table" className='h-30 m-auto'/>
                            </div>
                            <div className='bg-amber-50 p-4 rounded-2xl shadow'>
                                <p className='font-bold'>Represents Table 2</p>
                                <img src={Table2} alt="table" className='h-30 m-auto'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl mt-10 shadow bg-amber-100 p-5'>
                    <div className='flex gap-2 items-start'>
                        <div className="rounded-full p-2 bg-amber-700 grid place-items-center">
                            <CiGlobe className='text-white text-2xl' />
                        </div>
                        <div>
                            <p className='text-xl font-bold'>Way 2: Open website Directly</p>
                            <p className='text-gray-400 text-sm'>
                                If you open our webiste directly without website scanning QR code on table.
                            </p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch mt-10'>
                        {DirectVisitSteps.map((item, key) => {
                            const Icon = item.icon
                            return <div key={key} className='bg-yellow-50 rounded-2xl p-3 shadow'>
                                <p className='bg-yellow-700 text-white m-auto -mt-8 w-8 h-8 grid place-items-center rounded-full'>{item.id}</p>
                                <Icon className='text-3xl text-center block mx-auto my-2 font-extralight' />
                                <p className='text-center'>{item.title}</p>
                                <p className='text-sm text-gray-400 text-center'>{item.description}</p>
                            </div>
                        })}
                    </div>
                </div>



                <div className='rounded-2xl bg-blue-50 p-5 shadow mt-10'>
                    <div className='flex gap-2 items-start'>
                        <div className="rounded-full p-2 bg-amber-700 grid place-items-center">
                            <VscArrowSwap className='text-white text-2xl' />
                        </div>
                        <div>
                            <p className='text-xl font-bold'>Enter table manually if change table after scanning QR code</p>
                            <p className='text-gray-400 text-sm'>
                                Change table? No problem.
                            </p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-10 items-stretch mt-10'>
                        {ChangeTableSteps.map((item, key) => {
                            return <div key={key} className='bg-yellow-50 rounded-2xl p-4 shadow'>
                                <p className='bg-yellow-700 text-white m-auto -mt-8 w-8 h-8 grid place-items-center rounded-full'>{item.id}</p>
                                <p className='text-center mt-4'>{item.title}</p>
                                <p className='text-sm text-gray-400 text-center'>{item.description}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide