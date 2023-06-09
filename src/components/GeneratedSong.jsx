const GeneratedSong = ({ response }) => {
    return (
        <div className=" text-center">
            <pre className="font-sans text-center" style={{lineHeight: '1.5rem'}}>
                {response}
            </pre>
        </div>
    )
}

export default GeneratedSong;