const GeneratedSong = ({ response }) => {
    console.log(response, typeof response)
    const { title, song } = JSON.parse(response);
    return (
        <div className=" text-center">
            <pre className="font-sans text-center text-white pt-6" style={{lineHeight: '1.5rem'}}>
                <h1 className="text-2xl font-bold">{title}</h1>
                <div>{song}</div>
            </pre>
        </div>
    )
}

export default GeneratedSong;