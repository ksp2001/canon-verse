import { useState } from 'react';
import GeneratedSong from './GeneratedSong';

function ArtistInput() {
    const [artist, setArtist] = useState("");
    const [name, setName] = useState("");
    const [qualities, setQualities] = useState("");
    const [apiResponse, setApiResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const prompt = `Give me a song as if it was written by ${artist}, about my friend ${name} who I describe as ${qualities}. Make sure it's as ${artist}-y as it gets, and give me a creative title, the first stanza, the chorus, and the bridge.`

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'text-davinci-002',
                prompt: prompt,
                max_tokens: 2004,
                temperature: 1
            })
        }
        fetch(process.env.REACT_APP_API_ENDPOINT, options)
            .then(response => response.json())
            .then(data => setApiResponse(data.choices[0].text))
            .then(() => { setLoading(false); setArtist(""); setName(""); setQualities("") })
            .catch(error => { setApiResponse("Apologies, your request could not be processed. Please try again later."); console.error(error) })
    };
    return (
        <div className="flex md:flex-row flex-col-reverse">
            <div className="min-w-1/2 font-sans text-center text-3xl h-screen flex">
                <div className='m-auto px-6 animated-div'>
                    Write me a song by <input type="text" className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md focus:outline-none p-1 text-center focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xl" placeholder="Artist's name" value={artist} onChange={(e) => setArtist(e.target.value)} /> <br />
                    for <input className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md focus:outline-none p-1 text-center focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xl" type="text" placeholder="Friend's name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                    who I'd describe as <input className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md focus:outline-none p-1 text-center focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xl" type="text" placeholder="happy go lucky, smart..." value={qualities} onChange={(e) => setQualities(e.target.value)} /><br />
                    <button className=" rounded-3xl border-sky-500 border hover:bg-gradient-to-r py-1 px-3 my-2 hover:from-green-400 hover:to-blue-500 hover:border-transparent hover:text-white focus:border-sky-500" onClick={handleSubmit}>Generate</button>
                </div>
            </div>
                {loading && <div className="flex text-center min-h-screen md:w-1/2 flex-none "><div className='m-auto justify-center text-center items-center'><svg width="250" height="250" viewBox="0 0 774 771" fill="none">
                    <path className="animated-shape" d="M232 663.5C233.667 661.5 236 655.2 232 646C227 634.5 221 610.5 220.5 588C220 565.5 222.5 533 225 528.5C227.5 524 219.5 504.5 208 505.5C208 518 171 523.5 175 528.5C178.2 532.5 160 532.167 150.5 531.5C143.167 536.667 126.9 548.4 120.5 554C114.1 559.6 106.5 541.333 103.5 531.5L90.5 505.5L83 513.5L87.5 530L95.5 550L108.5 575L118 598L128.5 622L172 680L175.5 682.5L189.5 685.5L199.5 688.5C204 687.167 213.5 683.6 215.5 680C218 675.5 239.5 656 241 656C242.5 656 252.5 653 253 653C253.5 653 266 654 267 656C268 658 270.5 658 275.5 663.5C279.5 667.9 275.833 672.667 273.5 674.5H264C260.333 674 253 672.7 253 671.5C253 670.3 249.667 671 248 671.5C246.5 672.333 243.8 674.4 245 676C246.5 678 244 685.5 241 685.5C238.6 685.5 245.667 685.5 249.5 685.5L264 694.5L282 706L290 713C291.333 714.5 294.1 718 294.5 720C295 722.5 295 729 286 731C278.8 732.6 274.667 726.667 273.5 723.5L257.5 713L246.5 706L236.5 708L246.5 711.5L263 724.5L282 734.5L290 737.5C292.333 743 294 753.7 282 752.5C267 751 252.5 731.5 243 733C239.667 730.833 232.5 726.5 230.5 726.5C228.5 726.5 219.667 726.5 215.5 726.5L241 740C250.333 744.667 269 754.2 269 755C269 756 275.5 771 263 769.5C256.2 769.5 234.5 755.833 224.5 749C218.667 748.333 206.5 747 204.5 747C202 747 205.412 755.011 171 751.5C146.5 749 137.5 731 131.5 731C130.667 727.167 129.5 719.2 131.5 718C133.5 716.8 101.333 674.5 85 653.5C69.8333 632.667 39.8 589.9 41 585.5C35 577 7 534.854 7 531.5C7 528.5 2.99999 521.5 1.50001 521.5C0.833345 518 0.903462 511.409 1.50001 509.5C3.99999 501.5 44 437.5 56 433.5C55.5 431.667 54.3 427.2 53.5 424C52.5 420 160 345 172 316C184 287 229 272.5 241 266C253 259.5 308.5 263.5 328 261C343.6 259 358.167 254.833 363.5 253C365.833 250.333 371.2 242.4 374 232C376.8 221.6 371.5 224.667 368.5 227.5C359 223.667 339.4 211.8 337 195C334.6 178.2 348 159.333 355 152C364.833 139.833 385.7 115.7 390.5 116.5C396.5 117.5 365.742 38.6502 454 8.50001C534.5 -19 564 33.5 567 40C580.167 37.5 611 35.6 629 48C651.5 63.5 666.5 84.5 663 100.5C659.5 116.5 663 125 646 152C632.4 173.6 617.667 180.667 612 181.5C610.667 210.667 610.1 269.2 618.5 270C618.5 292.5 582 316.5 593.5 333.5C590.3 351.1 595.5 355.167 598.5 355C603.5 360.833 613.5 373.4 613.5 377C613.5 380.6 616.5 387.167 618 390C620.167 401.333 624.2 425.4 623 431C621.5 438 626 474 626 477.5C626 481 625 531 621 534.5C617 538 629.5 528.5 633 528C636.5 527.5 651.5 520.5 653 517C654.5 513.5 653 505.5 653 504C653 502.8 653 498.5 653 496.5C655 494.167 659.2 490.2 660 493C660.8 495.8 662.667 495.167 663.5 494.5C662.667 492.667 661.5 488.5 663.5 486.5C666 484 671 470 676.5 461.5C680.9 454.7 686 440.667 688 434.5C689.167 427.167 691.4 411.7 691 408.5C690.5 404.5 692.5 397 691 397C689.5 397 704 394 705.5 397C706.7 399.4 708.667 403.667 709.5 405.5L711 420.5C711.333 416 712.1 406.7 712.5 405.5C713 404 708 401.5 709.5 397C710.7 393.4 714 392.833 715.5 393L726.5 397L731.5 405.5C731.5 417 731.5 439.9 731.5 439.5C731.5 439.1 733.167 416.667 734 405.5L730 399L734 397L742.5 399L751 410.5L749.5 439.5L753 410.5L745.5 399H757L764.5 410.5L763.5 419.5L766.5 410.5L764.5 405.5C765.5 404.5 768.1 403.1 770.5 405.5C772.9 407.9 773.5 412.5 773.5 414.5C772.5 421.167 770.5 434.8 770.5 436C770.5 437.5 766.5 442 766.5 447C766.5 452 764.5 464 764.5 465.5C764.5 467 719.5 504 709.5 524" stroke="black" />
                </svg></div></div>}
                {apiResponse !== '' && !loading && <div className="flex text-center min-h-screen md:w-1/2 flex-none"><div className="m-auto px-4"><GeneratedSong response={apiResponse} /></div></div>}
        </div>
    )
}

export default ArtistInput;