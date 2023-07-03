import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const GeneratedSong = () => {
    const [liked, setLiked] = useState(true);
    const location = useLocation();
    const response = location.state?.response;

    let parsedResponse;
    if (typeof response.response === 'string') {
        try {
            parsedResponse = JSON.parse(response.response.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''));
        } catch (error) {
            console.error('Error parsing response:', error);
            // Handle the error or set a default value for parsedResponse
            parsedResponse = { title: '', lyrics: '' };
        }
    } else {
        parsedResponse = { title: '', lyrics: '' };
    }

    const { title, lyrics } = parsedResponse;

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="bg-black w-full h-full">
            <div className="p-2 flex flex-col space-x-2 w-full h-full flex-none m-auto">
                <div className="flex flex-row space-x-2 h-5/6">
                    <div className="flex-none md:block w-1/3 space-y-2 hidden">
                        <div className=" bg-neutral-900 p-4 font-bold text-white rounded-md text-lg">
                            <Link to="/">
                                <div className="flex flex-rows space-x-3 hover:opacity-100 opacity-80">
                                    <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
                                        <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" fill="white"></path>
                                    </svg>
                                    <p>Home</p>
                                </div>
                            </Link>
                        </div>
                        <div className=" bg-neutral-900 p-4 font-bold text-white rounded-md">
                            <div className="flex flex-rows space-x-3 text-lg hover:opacity-100 opacity-80">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
                                    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" fill="white"></path>
                                </svg>
                                <p>Your Library</p>
                            </div>
                            <div className="inline-flex mt-4 space-x-2">{response.qualities.map(quality => <div className="hover:bg-neutral-700 bg-neutral-800 px-3 py-1 font-semibold rounded-full">{quality}</div>)}</div>
                            <div className='mt-4 flex space-x-2 hover:opacity-100 opacity-80'><p>Recently added</p> <svg className='flex my-auto' role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon"><path d="m14 6-6 6-6-6h12z" fill="white"></path></svg></div>
                            <div className="flex flex-row align-middle m-auto content-center space-x-4 mt-4 hover:bg-neutral-600 p-2 rounded-md">
                                <div className="rounded-md w-16 h-16 bg-gradient-to-br to-purple-800 from-pink-700 flex">
                                    <svg role="img" className="flex m-auto items-center align-middle" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon">
                                        <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-center my-auto flex-col space-y-0">
                                    <h1 className="text-md text-white font-semibold">hey {response.name.toLowerCase()}, a song for you</h1>
                                    <p className=" text-neutral-400 text-sm font-semibold">Playlist {'·'} CanonVerse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-screen font-sans text-white pt-6 bg-slate-500 font-bold rounded-md overflow-y-scroll bg-scroll md:px-28 px-4 py-8 no-scrollbar">
                        <div className="font-bold text-3xl font-sans whitespace-pre-line">{lyrics !== '' ? lyrics.replace(/\\n/g, '\n') : 'Sorry, an error occured. Please try again!'}</div>
                    </div>
                </div>
                <div className="flex flex-row h-1/6">
                    <div className="md:w-1/3 flex flex-row align-middle m-auto content-center space-x-4">
                        <div className="rounded-md w-24 h-24 bg-gradient-to-br from-purple-800 to-pink-700 flex">
                            <svg role="img" className="flex m-auto items-center align-middle" height="32" width="32" aria-hidden="true" viewBox="0 0 32 32" data-encore-id="icon">
                                <g transform="scale(2)">
                                    <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z" fill="white"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="flex justify-center my-auto flex-col space-y-0">
                            <h1 className="text-md font-bold text-white">{title !== '' ? title : 'Oops, try again!'}</h1>
                            <p className=" text-neutral-400 text-xs">{response.artist}</p>
                        </div>
                        <button onClick={handleLike}>
                            {liked ? <svg role="img" className="flex m-auto items-center align-middle" height="16" width="17" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon">
                                <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z" fill="transparent" stroke="white"></path>
                            </svg> : <svg role="img" className="flex m-auto items-center align-middle" height="16" width="17" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon">
                                <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z" fill="rgb(22 163 74)"></path>
                            </svg>}
                        </button>
                        <div className="pt-1 hover:opacity-100 opacity-80 md:hidden flex m-auto">
                            <Link to="/">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
                                    <g transform="scale(0.75)">
                                        <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" fill="white"></path>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-2/3 md:flex hidden flex-col space-y-0 my-auto">
                        <div className='flex flex-row space-x-5 mx-auto'>
                            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className=" fill-green-600 flex m-auto opacity-90 hover:opacity-100"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>
                            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="flex m-auto opacity-90 hover:opacity-100"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" fill="white"></path></svg>
                            <div className="bg-white p-2 font-semibold rounded-full flex m-auto opacity-90 hover:opacity-100"><svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></div>
                            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="flex m-auto opacity-90 hover:opacity-100"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" fill="white"></path></svg>
                            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="fill-green-600 flex m-auto opacity-90 hover:opacity-100"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
                        </div>
                        <div className="flex mx-auto p-0 align-top pt-4 space-x-2">
                            <div className='text-xs text-neutral-600 flex m-auto'>2:04</div>
                            <div style={{ width: '32rem' }} className="h-1 bg-neutral-700 rounded-full p-0 flex m-auto">
                                <div style={{ width: '18rem' }} className="hover:bg-green-600 bg-white rounded-full h-full" />
                            </div>
                            <div className='text-xs text-neutral-600 flex m-auto'>3:14</div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default GeneratedSong;